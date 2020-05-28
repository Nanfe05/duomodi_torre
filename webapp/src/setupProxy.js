const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  
  app.use(
    '/duomodi',
    createProxyMiddleware({
      target: 'http://localhost:6000/',
      changeOrigin: true,
    })
  );
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