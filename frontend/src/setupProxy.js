const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = function (app) {
    app.use(
      ["/api/properties","/api/csteams","/api/buyerinfo","/api/inspection-services","/api/agents"],
      createProxyMiddleware({
        target: "https://finalserverci.azurewebsites.net",
        changeOrigin: true,
      })
    );
  };