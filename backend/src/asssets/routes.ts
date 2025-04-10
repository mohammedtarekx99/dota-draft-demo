
import { FastifyInstance, FastifyPluginAsync } from 'fastify';
import { downloadAllAssetsController, downloadAnimationsController, downloadImagesController } from './controllers';

const downloadRoutes: FastifyPluginAsync = async (fastify: FastifyInstance) => {
    fastify.post('/animations', downloadAnimationsController);
    fastify.post('/images', downloadImagesController);
    fastify.post('/all', downloadAllAssetsController);
};

export default downloadRoutes;