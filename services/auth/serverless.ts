import type { Serverless } from "serverless/aws";
import configuration from "../../configuration";
import { resources } from "./src/resources";
import { functions } from "./src/functions";

const serverlessConfiguration: Serverless = {
  service: {
    name: "auth",
  },
  frameworkVersion: "2.4.0",
  custom: {
    project: configuration.project,
    common: configuration.common,
    webpack: {
      webpackConfig: "./webpack.config.js",
      includeModules: true,
    },
    output: {
      file: ".build/stack-${self:provider.stage}.yml",
    },
  },
  plugins: [
    "serverless-webpack",
    "serverless-stack-output",
    "serverless-deployment-bucket",
  ],
  provider: {
    name: "aws",
    runtime: "nodejs12.x",
    versionFunctions: false,
    memorySize: 256,
    deploymentBucket: {
      name: "${self:custom.common.deployBucket}",
      blockPublicAccess: true,
      serverSideEncryption: "AES256",
    },
    apiGateway: {
      minimumCompressionSize: 1024,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
    },
    tags: configuration.tags,
    stackTags: configuration.tags,
  },
  resources: resources,
  functions: functions,
};

module.exports = serverlessConfiguration;
