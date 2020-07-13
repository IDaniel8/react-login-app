export class ErrorHandler {
  error: string;
  constructor({ message }: Error) {
    this.error = message;
  }
}
