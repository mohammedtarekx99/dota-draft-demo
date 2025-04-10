import https from 'https';
import fs from 'fs';
import path from 'path';

interface HeroImage {
    name: string;
    url: string;
}

const BASE_URL = 'https://raw.githubusercontent.com/lexogrine/dota2-assets/main/heroes/';
const GITHUB_API_URL = 'https://api.github.com/repos/lexogrine/dota2-assets/contents/heroes';

async function fetchHeroImages(): Promise<HeroImage[]> {
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
                    const heroImages: HeroImage[] = files
                        .filter((file: any) => file.name.endsWith('.webp'))
                        .map((file: any) => ({
                            name: file.name,
                            url: `${BASE_URL}${file.name}`
                        }));
                    resolve(heroImages);
                } catch (error) {
                    reject(error);
                }
            });
        }).on('error', reject);
    });
}

function createDownloadDir(): string {
    const publicDir = path.join(process.cwd(), 'public');
    const heroImagesDir = path.join(publicDir, 'hero_images');

    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir);
    }
    if (!fs.existsSync(heroImagesDir)) {
        fs.mkdirSync(heroImagesDir);
    }

    return heroImagesDir;
}

function downloadFile(image: HeroImage, heroImagesDir: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const filePath = path.join(heroImagesDir, image.name);
        const file = fs.createWriteStream(filePath);

        https.get(image.url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download ${image.name}: ${response.statusCode}`));
                return;
            }

            response.pipe(file);

            file.on('finish', () => {
                file.close();
                console.log(`Downloaded: ${image.name}`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(filePath, () => { });
            reject(err);
        });

        file.on('error', (err) => {
            fs.unlink(filePath, () => { });
            reject(err);
        });
    });
}

export async function downloadHeroImages() {
    try {
        const heroImagesDir = createDownloadDir();
        const heroImages = await fetchHeroImages();
        console.log(`Found ${heroImages.length} hero images to download`);

        await Promise.all(heroImages.map(image => downloadFile(image, heroImagesDir)));
        console.log('All hero images downloaded successfully!');
    } catch (error) {
        console.error('Error downloading hero images:', error);
        throw error;
    }
}