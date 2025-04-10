import { FastifyInstance, FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify';
import { emitDraftData } from './services';

const dotaGSIUri: FastifyPluginAsync = async (fastify: FastifyInstance) => {
    fastify.post('/', async (request: FastifyRequest, reply: FastifyReply) => {
        console.log(request.body);
        try {
            emitDraftData(request.body);
        } catch (error) {
            console.error(error);
        }
        return reply.status(200).send({ message: 'GSI data emitted' });
    });
};

export default dotaGSIUri;
