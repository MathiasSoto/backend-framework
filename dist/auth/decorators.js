import {
  Middleware
} from "../chunk-CLXXFKBH.js";
import {
  AuthenticationService
} from "../chunk-WF7Z3OTU.js";
import "../chunk-TPCLH44J.js";
import "../chunk-WDEH7WHI.js";
import "../chunk-BQSXIYPK.js";
import "../chunk-KV2SVF35.js";
import "../chunk-I6IGFUFM.js";
import {
  AccessDeniedError,
  AccessTokenError
} from "../chunk-WXVOJ4UM.js";
import "../chunk-NWOUITKB.js";

// core/auth/decorators.ts
function AuthGuard() {
  return Middleware((req, res, next) => {
    const token = (req == null ? void 0 : req.header("Authorization")) || req.cookies.access_token;
    if (!token) throw AccessTokenError;
    const user = AuthenticationService.validateToken(token);
    if (!user) throw AccessDeniedError;
    next();
  });
}
export {
  AuthGuard
};
