import { FastifyReply, FastifyRequest } from 'fastify';
import { downloadHeroAnimations } from './services/animatedAssets';
import { downloadHeroImages } from './services/heroImages';


export async function downloadAllAssetsController(request: FastifyRequest, reply: FastifyReply) {
    try {
        await Promise.all([
            downloadHeroAnimations(),
            downloadHeroImages(),
        ]);
        console.log('All assets downloaded successfully');
        return reply.send({
            success: true,
            message: 'All assets downloaded successfully',
        });
    } catch (error) {
        console.error('Error downloading all assets:', error);
        return reply.status(500).send({ error: 'Failed to download assets' });
    }
}
