import { Serverless } from "serverless/aws";
import { resources } from "./resources/index";
import configuration from "../../configuration";

const serverlessConfiguration: Serverless = {
  service: {
    name: "settings",
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
    "serverless-deployment-bucket",
    "serverless-pseudo-parameters",
    "serverless-stack-output",
    "serverless-iam-roles-per-function",
  ],
  provider: {
    name: "aws",
    runtime: "nodejs12.x",
    memorySize: 256,
    versionFunctions: false,
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
};

module.exports = serverlessConfiguration;
