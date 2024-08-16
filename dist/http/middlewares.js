import "../chunk-NWOUITKB.js";

// core/http/middlewares.ts
var errorMiddleware = (err, req, res, next) => {
  res.status(err.status || 500).json({
    error: {
      message: err.message || "Internal Server Error"
    }
  });
};
export {
  errorMiddleware
};
