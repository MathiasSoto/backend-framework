import {
  __async
} from "./chunk-NWOUITKB.js";

// core/auth/utils.ts
import bcrypt from "bcrypt";
var hashPassword = (password) => __async(void 0, null, function* () {
  return yield bcrypt.hash(password, 10);
});
var comparePassword = (password, hash) => __async(void 0, null, function* () {
  return yield bcrypt.compare(password, hash);
});
var setAuthenticationCookies = (res, data, secure = true) => {
  res.cookie("access_token", data.access_token, {
    httpOnly: true,
    secure,
    sameSite: "strict",
    maxAge: Number(process.env.ACCESS_TOKEN_EXP)
  });
  res.cookie("refresh_token", data.refresh_token, {
    httpOnly: true,
    secure,
    sameSite: "strict",
    maxAge: Number(process.env.REFRESH_TOKEN_EXP)
  });
};

export {
  hashPassword,
  comparePassword,
  setAuthenticationCookies
};
