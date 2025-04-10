import fastify, { FastifyInstance } from "fastify";
import fastifyIO from "fastify-socket.io";
import { Server, Socket } from "socket.io";


declare module 'fastify' {
    interface FastifyInstance {
        io: Server;
    }
}

export const server: FastifyInstance = fastify();

server.register(fastifyIO, {
    cors: {
        origin: "*",
    }
});


server.ready().then(() => {
    server.io.on("connection", (socket: Socket) => {
        console.log('Client connected:', socket.id);

        socket.on("disconnect", () => {
            console.log('Client disconnected:', socket.id);
        });

        socket.on("clientEvent", (data: any) => {
            console.log('Received:', data);
        });
    });
});

export const startSocketServer = async () => {
    try {
        await server.listen({ port: 4000, host: '0.0.0.0' });
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};

