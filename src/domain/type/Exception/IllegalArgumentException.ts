import {Exception} from './Exception';

export class IllegalArgumentException implements Exception {
  public readonly name = 'IllegalArgumentException';
  private readonly _message: string;

  public constructor(message: string) {
    this._message = message;
  }

  get message(): string {
    return this._message;
  }
}
