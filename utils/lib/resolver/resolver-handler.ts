import ResolverHeaders from "./resolver-headers";
import ResolverIdentity from "./resolver-identity";

interface EventRequest<T> {
  headers: ResolverHeaders;
  arguments: T;
  username: string;
  identity: ResolverIdentity;
  source: any;
}

type ResolverHandler<E, R = any> = (event: EventRequest<E>) => Promise<R>;

export const resolverHandler = <E>(handler: ResolverHandler<E>) => {
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
