## What's the project's idea ?

Create a builder plate application using AWS's technologies like DynamoDB, EventBridge, AppSync, Cognito and Serverless Framework as deployment tool.

To achieve this, I created an simple blog using event driven design architecture and serverless technologies

## About the technologies

I chose to implement a _monorepo_ for the whole services, this approach provide me more coding speed, however when the application start to grow I would move out to different repositories.

General technologies

- TypeScript (Lambda programming language)
- Serverless Framework (Deployment tool) https://www.serverless.com/

AWS Technologies

- AppSync (graphQL)
- Lambda functions (nodejs)
- DynamoDB
- EventBridge
- SQS (queue)

External services

- Algolia - Search engine

## Structure

```<text>
├── /services/                      # Each of service has his own structure
│   ├── /api/                       # AppSync GraphQL
|   │   ├── /data-sources/          # Data sources
|   │   ├── /mapping-templates/     # Mapping templates
|   │   ├── /resources/             # AWS resources
|   │   ├── /schema/                # GraphQl schema
|   │   ├── serverless.ts           # Serverless configuration
│   ├── /comments/                  # AppSync GraphQL
|   │   ├── /src/                   # Data sources
|   |   │   ├── /functions/         # Lambda functions
|   |   |   │   ├── /events/        # Functions to handle events
|   |   |   │   ├── /streams/       # Functions to handle stream events
|   |   │   ├── /resources/         # AWS resources
|   |   │   ├── /platform/          # Functions to use AWS resources
|   │   ├── serverless.ts           # Serverless configuration
|   │   ├── webpack.config.js       # Webpack configuration
|   │   ├── package.json            # Dependences
|   │   ├── tsconfig.json           # TS configuration
│   ├── /posts/                     # AppSync GraphQL
|   │   ├── /src/                   # Data sources
|   |   │   ├── /functions/         # Lambda functions
|   |   |   │   ├── /resolvers/     # Functions to handle AppSync | ApiGateway resolvers
|   |   |   │   ├── /events/        # Functions to handle events
|   |   |   │   ├── /streams/       # Functions to handle stream events
|   |   │   ├── /resources/         # AWS resources
|   |   │   ├── /lib/               # Helper functions or function to connect to external services
|   |   │   ├── /platform/          # Functions to use AWS resources
|   │   ├── serverless.ts           # Serverless configuration
|   │   ├── webpack.config.js       # Webpack configuration
|   │   ├── package.json            # Dependences
|   │   ├── tsconfig.json           # TS configuration
└── configuration.ts                # General configuration

```

Any suggestion or improvement, let's create a PR
