import express from 'express'
import joi from 'joi'

import { Middleware } from './decorators'

export function RequestValidate(rules: joi.PartialSchemaMap): MethodDecorator {
  const schema = joi.object(rules)

  return Middleware((req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (bodyValidate(req, schema)) next()
  })
}

export function QueryRequestValidate(rules: joi.PartialSchemaMap): MethodDecorator {
  const schema = joi.object(rules)

  return Middleware((req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (queryValidate(req, schema)) next()
  })
}

export function CookiesValidate(rules: joi.PartialSchemaMap): MethodDecorator {
  const schema = joi.object(rules)

  return Middleware((req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (cookiesValidate(req, schema)) next()
  })
}

export function SignedCookiesValidate(rules: joi.PartialSchemaMap): MethodDecorator {
  const schema = joi.object(rules)

  return Middleware((req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (signedCookiesValidate(req, schema)) next()
  })
}

function bodyValidate(req: express.Request, schema: joi.ObjectSchema) {
  const { error, value } = schema.validate(req.body)
  if (error) throw new Error('Validation Error') // TODO mejorar error
  return true
}

function queryValidate(req: express.Request, schema: joi.ObjectSchema) {
  const { error, value } = schema.validate(req.query)
  if (error) throw new Error('Validation Error') // TODO mejorar error
  return true
}

function cookiesValidate(req: express.Request, schema: joi.ObjectSchema) {
  const { error, value } = schema.validate(req.cookies)
  if (error) throw new Error('Validation Error') // TODO mejorar error
  return true
}

function signedCookiesValidate(req: express.Request, schema: joi.ObjectSchema) {
  const { error, value } = schema.validate(req.signedCookies)
  if (error) throw new Error('Validation Error') // TODO mejorar error
  return true
}
