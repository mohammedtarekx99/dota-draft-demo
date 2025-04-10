import { FastifyReply, FastifyRequest } from 'fastify';
import { downloadHeroAnimations } from './services/animatedAssets';
import { downloadHeroImages } from './services/heroImages';

export async function downloadAnimationsController(request: FastifyRequest, reply: FastifyReply) {
    try {
        await downloadHeroAnimations();
        return reply.send({
            success: true,
            message: 'Hero animations downloaded successfully',
            path: '/public/animated_heroes/'
        });
    } catch (error) {
        console.error('Error downloading animations:', error);
        return reply.status(500).send({ error: 'Failed to download animations' });
    }
}

export async function downloadImagesController(request: FastifyRequest, reply: FastifyReply) {
    try {
        await downloadHeroImages();
        return reply.send({
            success: true,
            message: 'Hero images downloaded successfully',
        });
    } catch (error) {
        console.error('Error downloading images:', error);
        return reply.status(500).send({ error: 'Failed to download images' });
    }
}

export async function downloadAllAssetsController(request: FastifyRequest, reply: FastifyReply) {
    try {
        await Promise.all([
            downloadHeroAnimations(),
            downloadHeroImages(),
        ]);
        return reply.send({
            success: true,
            message: 'All hero assets downloaded successfully',
        });
    } catch (error) {
        console.error('Error downloading all assets:', error);
        return reply.status(500).send({ error: 'Failed to download assets' });
    }
}
