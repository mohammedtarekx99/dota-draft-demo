import fastify from 'fastify'
import path from 'path'
import fastifyStatic from '@fastify/static'
import cors from '@fastify/cors';
import routes from './src/routes';
import { startSocketServer } from './src/socket';


const server = fastify()

server.register(cors, {
  origin: true,
});

server.register(routes);

const start = async () => {
  await startSocketServer()

  try {
    const config = {
      port: 3000,
      ip: '0.0.0.0',
    }

    await server.register(fastifyStatic, {
      root: path.join(process.cwd(), 'public'),
      prefix: '/public/',
    })

    console.log('Starting server on port', config.port)
    await server.listen({ port: config.port, host: config.ip })

  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()
