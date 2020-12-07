import { Serverless } from "serverless/aws";
import { resources } from "./resources/index";
import { dataSources } from "./data-sources/index";
import { pipelineFunctions } from "./pipeline-functions/index";
import { mappingTamplates } from "./mapping-templates/index";
import configuration from "../../configuration";

const serverlessConfiguration: Serverless = {
  service: {
    name: "api",
  },
  frameworkVersion: "2.4.0",
  custom: {
    webpack: {
      webpackConfig: "./webpack.config.js",
      includeModules: true,
    },
    project: configuration.project,
    common: configuration.common,
    appSync: {
      name: "app",
      authenticationType: "API_KEY",
      schema: [
        "schema/enums.graphql",
        "schema/interfaces.graphql",
        "schema/types.graphql",
        "schema/inputs.graphql",
        "schema/queries.graphql",
        "schema/mutations.graphql",
        "schema/suscriptions.graphql",
        "schema/schema.graphql",
      ],
      defaultMappingTemplates: {
        request: "common/lambda/request.vtl",
        response: "common/lambda/response.vtl",
      },
      mappingTemplates: mappingTamplates,
      dataSources: dataSources,

      functionConfigurations: pipelineFunctions,
      additionalAuthenticationProviders: [
        {
          authenticationType: "AMAZON_COGNITO_USER_POOLS",
          userPoolConfig: {
            awsRegion: "${opt:region, 'us-east-1'}",
            userPoolId:
              "${file(../auth/.build/stack-${self:provider.stage}.yml):AuthUserPoolId}",
          },
        },
      ],
    },
    output: {
      file: ".build/stack-${self:provider.stage}.yml",
    },
  },
  plugins: [
    "serverless-appsync-plugin",
    "serverless-deployment-bucket",
    "serverless-pseudo-parameters",
    "serverless-stack-output",
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
