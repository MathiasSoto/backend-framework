import express from 'express'
import rateLimit from 'express-rate-limit'
import cors from 'cors'

export function Middleware(middleware: express.RequestHandler): MethodDecorator {
  return function (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    const middlewares: express.RequestHandler[] =
      Reflect.getMetadata('middlewares', target, propertyKey) || []
    middlewares.push(middleware)
    Reflect.defineMetadata('middlewares', middlewares, target, propertyKey)
  }
}

function methodDecoratorFactory(method: string) {
  return function (path: string): MethodDecorator {
    return function (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
      Reflect.defineMetadata('route', path, target, propertyKey)
      Reflect.defineMetadata('method', method, target, propertyKey)
    }
  }
}

export function Post(path: string): MethodDecorator {
  return methodDecoratorFactory('post')(path)
}

export function Get(path: string): MethodDecorator {
  return methodDecoratorFactory('get')(path)
}

export function Put(path: string): MethodDecorator {
  return methodDecoratorFactory('put')(path)
}

export function Delete(path: string): MethodDecorator {
  return methodDecoratorFactory('delete')(path)
}

export function RateLimit(limit = 10) {
  return Middleware(
    rateLimit({
      windowMs: 1 * 60 * 1000,
      max: limit,
      message: `You have exceeded the ${limit} requests in 1 minute limit!`,
      standardHeaders: true,
      legacyHeaders: false,
      keyGenerator: function (req: any) {
        return req.headers['x-forwarded-for'] || req.connection.remoteAddress
      }
    })
  )
}

export function Cors(options: cors.CorsOptions) {
  return Middleware(cors(options))
}
