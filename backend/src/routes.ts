import { FastifyInstance, FastifyPluginAsync } from 'fastify';
import downloadRoutes from './asssets/routes';
import dotaGSIUri from './dota/routesGSI';

const routes: FastifyPluginAsync = async (fastify: FastifyInstance) => {
    fastify.register(downloadRoutes, { prefix: '/api/download' });
    fastify.register(dotaGSIUri);
};


export default routes;