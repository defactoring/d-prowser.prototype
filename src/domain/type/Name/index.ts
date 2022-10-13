import {Result} from '../Result';
import {Exception, IllegalArgumentException} from '../Exception';

export class Name {
  private readonly _value: string;
  private constructor(value: string) {
    this._value = value
  }

  public static from(value: string): Result<Name, Exception> {
    if (value) return Result.Ok(new Name(value));
    return Result.Err(new IllegalArgumentException('Name must not be empty.'));
  }

  public toString(): string {
    return this._value;
  }
}
