export class ResolverError extends Error {
  constructor(public message: string, public errorType: string) {
    super(message);
    const actualProto = new.target.prototype;
    Object.setPrototypeOf(this, actualProto);
  }
}

export default ResolverError;
