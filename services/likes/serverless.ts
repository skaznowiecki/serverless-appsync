import type { Serverless } from "serverless/aws";
import { functions } from "./src/functions/index";
import configuration from "../../configuration";
import { resources } from "./src/resources";

const serverlessConfiguration: Serverless = {
  service: {
    name: "likes",
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
    "serverless-iam-roles-per-function",
    "serverless-pseudo-parameters",
    "serverless-deployment-bucket",
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
      STAGE: configuration.stage,
      PROJECT: configuration.project,
    },
    tags: configuration.tags,
    stackTags: configuration.tags,
  },
  functions: functions,
  resources: resources,
};

module.exports = serverlessConfiguration;
