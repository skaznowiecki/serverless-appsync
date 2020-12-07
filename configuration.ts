const configuration = {
  service: "${self:service.name}",
  stage: "${self:provider.stage}",
  project: "blog",
  tags: {
    service: "${self:service.name}",
    stage: "${self:provider.stage}",
    project: "blog",
  },
  region: "${opt:region, 'us-east-1'}",
  common: {
    serviceDomain: "${self:provider.stage}.${self:custom.project}",
    servicePrefix: "${self:service.name}.${self:provider.stage}",
    servicePrefixHyphenated:
      "${self:custom.project}-${self:provider.stage}-${self:service.name}",
    deployBucket:
      "${self:service.name}.${self:provider.stage}.deploys.${self:custom.project}",
  },
  secrets:
    "${ssm:/aws/reference/secretsmanager/${self:custom.project}-${self:provider.stage}-${self:service.name}~true}",
  busName: "${self:custom.project}-${self:provider.stage}:events",
};

export default configuration;
