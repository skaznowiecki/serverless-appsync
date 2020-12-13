export namespace AppSync {
  interface EventRequest<T> {
    headers: ResolverHeaders;
    arguments: T;
    username: string;
    identity: ResolverIdentity;
    source: any;
  }

  export interface ResolverHeaders {
    "x-forwarded-for": string;
    "accept-encoding": string;
    "cloudfront-viewer-country": string;
    "cloudfront-is-tablet-viewer": string;
    "postman-token": string;
    via: string;
    "cloudfront-forwarded-proto": string;
    "content-type": string;
    "x-api-key": string;
    "x-amzn-trace-id": string;
    "x-amz-cf-id": string;
    "content-length": string;
    "x-forwarded-proto": string;
    host: string;
    "user-agent": string;
    "cloudfront-is-desktop-viewer": string;
    "cloudfront-is-mobile-viewer": string;
    accept: string;
    "x-forwarded-port": string;
    "cloudfront-is-smarttv-viewer": string;
  }

  export interface ResolverIdentity {
    accountId: string;
    cognitoIdentityPoolId: string;
    cognitoIdentityId: string;
    sourceIp: [string];
    username: string;
    userArn: string;
    cognitoIdentityAuthType: string;
    cognitoIdentityAuthProvider: string;
  }

  type ResolverHandler<E, R = any> = (event: EventRequest<E>) => Promise<R>;

  export const handler = <E>(handler: ResolverHandler<E>) => {
    return async function fn(
      event: EventRequest<E>,
      context: Object,
      callback: Function
    ) {
      try {
        const result = await handler(event);
        callback(null, result);
      } catch (error) {
        const result = {
          errorMessage: error.message,
          errorType: error.errorType,
        };
        callback(null, result);
      }
    };
  };
}
