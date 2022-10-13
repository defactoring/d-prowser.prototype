import {Result} from '../Result';
import {Exception} from '../Exception';

export class Url {
  private readonly _value: string;

  private constructor(value: string) {
    this._value = value;
  }

  public static from(value: string): Result<Url, Exception> {
    // TODO: some validation
    return Result.Ok(new Url(value));
  }
}
