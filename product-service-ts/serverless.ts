import type { Serverless } from "serverless/aws";

const serverlessConfiguration: Serverless = {
  service: {
    name: "product-service-ts",
    // app and org for use with dashboard.serverless.com
    // app: your-app-name,
    // org: your-org-name,
  },
  frameworkVersion: "2",
  custom: {
    webpack: {
      webpackConfig: "./webpack.config.js",
      includeModules: true,
    },
  },
  // Add the serverless-webpack plugin
  plugins: ["serverless-webpack"],
  provider: {
    name: "aws",
    runtime: "nodejs12.x",
    region: "eu-west-1",
    stage: "dev",
    apiGateway: {
      minimumCompressionSize: 1024,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
    },
  },
  functions: {
    getUser: {
      handler: "handler.getUser",
      events: [
        {
          http: {
            method: "get",
            path: "user",
            cors: true,
          },
        },
      ],
    },
    getProduct: {
      handler: "handler.getProduct",
      events: [
        {
          http: {
            method: "get",
            path: "product",
            cors: true,
          },
        },
      ],
    },
  },
};

module.exports = serverlessConfiguration;
