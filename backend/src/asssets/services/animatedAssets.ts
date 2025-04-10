import https from 'https';
import fs from 'fs';
import path from 'path';

interface HeroAsset {
    name: string;
    url: string;
}

const BASE_URL = 'https://raw.githubusercontent.com/lexogrine/dota2-assets/main/heroes/animated/';
const GITHUB_API_URL = 'https://api.github.com/repos/lexogrine/dota2-assets/contents/heroes/animated';


async function fetchHeroAssets(): Promise<HeroAsset[]> {
    return new Promise((resolve, reject) => {
        const options = {
            headers: {
                'User-Agent': 'Node.js',
                'Accept': 'application/vnd.github.v3+json'
            }
        };

        https.get(GITHUB_API_URL, options, (response) => {
            let data = '';

            response.on('data', (chunk) => {
                data += chunk;
            });

            response.on('end', () => {
                try {
                    const files = JSON.parse(data);
                    const heroAssets: HeroAsset[] = files
                        .filter((file: any) => file.name.endsWith('.webm'))
                        .map((file: any) => ({
                            name: file.name,
                            url: `${BASE_URL}${file.name}`
                        }));
                    resolve(heroAssets);
                } catch (error) {
                    reject(error);
                }
            });
        }).on('error', reject);
    });
}


export async function downloadHeroAnimations() {
    try {
        const animatedHeroesDir = createDownloadDir();
        const heroAssets = await fetchHeroAssets();

        const downloadResults = await Promise.all(
            heroAssets.map(asset => downloadFileComplete(asset, animatedHeroesDir))
        );

        const failures = downloadResults.filter(result => result.error);
        if (failures.length > 0) {
            console.warn(`${failures.length} files failed to download completely`);
        }

        console.log(`Successfully downloaded ${downloadResults.length - failures.length} hero animations`);

    } catch (error) {
        console.error('Error downloading hero animations:', error);
        throw error;
    }
};

function createDownloadDir(): string {
    const publicDir = path.join(process.cwd(), 'public');
    const animatedHeroesDir = path.join(publicDir, 'animated_heroes');

    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
    }
    if (!fs.existsSync(animatedHeroesDir)) {
        fs.mkdirSync(animatedHeroesDir, { recursive: true });
    }

    return animatedHeroesDir;
}

function downloadFileComplete(asset: HeroAsset, animatedHeroesDir: string): Promise<{ asset: HeroAsset, error?: Error }> {
    return new Promise((resolve) => {
        const filePath = path.join(animatedHeroesDir, asset.name);

        if (!fs.existsSync(animatedHeroesDir)) {
            try {
                fs.mkdirSync(animatedHeroesDir, { recursive: true });
            } catch (err) {
                return resolve({
                    asset,
                    error: new Error(`Failed to create directory for ${asset.name}: ${err}`)
                });
            }
        }

        const file = fs.createWriteStream(filePath);

        const request = https.get(asset.url, (response) => {
            if (response.statusCode !== 200) {
                file.close();
                fs.unlink(filePath, () => { });
                resolve({
                    asset,
                    error: new Error(`Failed to download ${asset.name}: HTTP status ${response.statusCode}`)
                });
                return;
            }

            const contentLength = response.headers['content-length']
                ? parseInt(response.headers['content-length'], 10)
                : null;

            let downloadedBytes = 0;

            response.on('data', (chunk) => {
                downloadedBytes += chunk.length;
            });

            response.pipe(file);

            file.on('finish', () => {
                file.close(() => {
                    if (contentLength) {
                        try {
                            const stats = fs.statSync(filePath);
                            if (stats.size !== contentLength) {
                                fs.unlink(filePath, () => { });
                                resolve({
                                    asset,
                                    error: new Error(`Incomplete download for ${asset.name}: expected ${contentLength} bytes but got ${stats.size}`)
                                });
                                return;
                            }
                        } catch (err) {
                            resolve({
                                asset,
                                error: new Error(`Failed to verify file size for ${asset.name}: ${err}`)
                            });
                            return;
                        }
                    }

                    console.log(`Downloaded: ${asset.name} (complete)`);
                    resolve({ asset });
                });
            });
        });

        request.on('error', (err) => {
            file.close();
            fs.unlink(filePath, () => { });
            resolve({
                asset,
                error: new Error(`Failed to download ${asset.name}: ${err.message}`)
            });
        });

        file.on('error', (err) => {
            file.close();
            fs.unlink(filePath, () => { });
            resolve({
                asset,
                error: new Error(`Failed to write ${asset.name}: ${err.message}`)
            });
        });

        request.setTimeout(30000, () => {
            request.abort();
            file.close();
            fs.unlink(filePath, () => { });
            resolve({
                asset,
                error: new Error(`Download timeout for ${asset.name}`)
            });
        });
    });
}