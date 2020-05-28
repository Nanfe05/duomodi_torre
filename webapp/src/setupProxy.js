const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://torre.co/',
      changeOrigin: true,
    })
  );
  app.use(
    '/opportunities',
    createProxyMiddleware({
      target: 'https://search.torre.co/',
      changeOrigin: true,
    })
  );
};