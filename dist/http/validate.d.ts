import joi from 'joi';

declare function RequestValidate(rules: joi.PartialSchemaMap): MethodDecorator;
declare function QueryRequestValidate(rules: joi.PartialSchemaMap): MethodDecorator;
declare function CookiesValidate(rules: joi.PartialSchemaMap): MethodDecorator;
declare function SignedCookiesValidate(rules: joi.PartialSchemaMap): MethodDecorator;

export { CookiesValidate, QueryRequestValidate, RequestValidate, SignedCookiesValidate };
