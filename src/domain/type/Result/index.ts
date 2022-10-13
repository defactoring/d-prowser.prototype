import {Exception} from '../Exception';

export class Result<T, E extends Exception> {
  private readonly _value?: T;
  private readonly _err?: E;

  private constructor(value: T | undefined, err: E | undefined) {
    this._value = value;
    this._err = err;
  }

  public static Ok<T, E extends Exception>(value: T): Result<T, E> {
    return new Result<T, E>(value, undefined);
  }

  public static Err<T, E extends Exception>(err: E): Result<T, E> {
    return new Result<T, E>(undefined, err);
  }

  public unwrap(): T {
    if (this._value !== undefined) return this._value;
    throw this._err;
  }

  public isOk(): boolean {
    return this._value !== undefined;
  }

  public isErr(): boolean {
    return this._err !== undefined;
  }

  public map<U>(fn: (value: T) => U): Result<U, E> {
    if (this._value !== undefined) return new Result<U, E>(fn(this._value), undefined);
    return new Result<U, E>(undefined, this._err);
  }

  public mapErr<F extends Exception>(fn: (err: E) => F): Result<T, F> {
    if (this._err !== undefined) return new Result<T, F>(undefined, fn(this._err));
    return new Result<T, F>(this._value, undefined);
  }

  public then<U>(fn: { Ok: (value: T) => U, Err: () => U }): U {
    if (this._value !== undefined) return fn.Ok(this._value);
    return fn.Err();
  }

  public or(value: T): T {
    if (this._value !== undefined) return this._value;
    return value;
  }

  public orElse(fn: () => T): T {
    if (this._value !== undefined) return this._value;
    return fn();
  }
}
