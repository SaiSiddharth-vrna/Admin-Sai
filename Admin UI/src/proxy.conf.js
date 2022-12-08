const PROXY_CONFIG = [
  {
    context: [
      "/content-service",
      "/auth-service", 
      "/vrnaflow",
      "/aws-service",
    ],
    //target: "http://ec2-3-129-58-233.us-east-2.compute.amazonaws.com:8089",
    target:"http://3.129.58.233:8089",
    secure: false,
    logLevel: "debug",
    changeOrigin: true,
  },
  {
    context: [
      "/vrna-prod-image-content"
    ],
    target: "https://s3.ap-south-1.amazonaws.com",
    secure: false,
    logLevel: "debug",
    changeOrigin: true,
  },
  {
    context: [
      "/backdrops",
      "/posters",
    ],
    target: "http://ec2-3-129-58-233.us-east-2.compute.amazonaws.com:8089",
    secure: false, //8089 port
    logLevel: "debug",
    changeOrigin: true,
    pathRewrite: {
      "^/backdrops": "/images/backdrops/",
      "^/posters": "/images/posters/",
    },
  },
];

module.exports = PROXY_CONFIG;
