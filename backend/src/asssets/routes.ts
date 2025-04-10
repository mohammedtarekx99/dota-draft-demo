
import { FastifyInstance, FastifyPluginAsync } from 'fastify';
import { downloadAllAssetsController, } from './controllers';

const downloadRoutes: FastifyPluginAsync = async (fastify: FastifyInstance) => {
    fastify.post('/assets', downloadAllAssetsController);
};

export default downloadRoutes;