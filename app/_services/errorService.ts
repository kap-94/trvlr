export class ServiceError extends Error {
  constructor(
    public readonly message: string,
    public readonly code: string,
    public readonly status: number,
    public readonly details?: unknown
  ) {
    super(message);
    this.name = "ServiceError";
    Object.setPrototypeOf(this, ServiceError.prototype);
  }
}

export class ValidationError extends ServiceError {
  constructor(message: string, details?: unknown) {
    super(message, "VALIDATION_ERROR", 400, details);
    this.name = "ValidationError";
    Object.setPrototypeOf(this, ValidationError.prototype);
  }
}

export class NotFoundError extends ServiceError {
  constructor(resource: string, identifier: string | number) {
    super(`${resource} not found: ${identifier}`, "NOT_FOUND", 404, {
      resource,
      identifier,
    });
    this.name = "NotFoundError";
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}
