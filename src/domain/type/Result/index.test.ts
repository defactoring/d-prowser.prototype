import {Result} from './index';
import {Exception, IllegalArgumentException} from '../Exception';

describe('domain/type Result', () => {
  const toBeOk = <T, E extends Exception>(got: Result<T, E>, expected: T) => {
    expect(got.isOk()).toBeTruthy();
    expect(got.isErr()).toBeFalsy();
    expect(() => got.unwrap()).not.toThrowError();
    expect(got.unwrap()).toStrictEqual(expected);
    return {pass: true, message: () => ''}
  };

  const toBeErr = <T, E extends Exception>(got: Result<T, E>, expected: E) => {
    expect(got.isOk()).toBeFalsy();
    expect(got.isErr()).toBeTruthy();
    expect(() => got.unwrap()).toThrowError(expected);
  };

  describe('unwrap', () => {
    test('Ok', () => {
      const value = 'Result Ok test';
      const result = Result.Ok(value);
      toBeOk(result, value);
    });

    test('Err', () => {
      const err = new IllegalArgumentException('Result Err test');
      const result = Result.Err(err);
      toBeErr(result, err);
    })
  });

  describe('map', () => {
    test('Ok', () => {
      const value = 0;
      const fn = (num: number): string => `number: ${num}`;
      const result = Result.Ok(value);
      toBeOk(result.map(fn), 'number: 0');
    });

    test('Err', () => {
      const err = new IllegalArgumentException('Result Err test');
      const fn = (num: number): string => `number: ${num}`;
      const result = Result.Err<number, IllegalArgumentException>(err);
      toBeErr(result.map(fn), err);
    })
  });

  describe('mapErr', () => {
    test('Ok', () => {
      const value = 0;
      const fn = (err: IllegalArgumentException): IllegalArgumentException => new IllegalArgumentException(`err: ${err}`);
      const result = Result.Ok<number, IllegalArgumentException>(value);
      toBeOk(result.mapErr(fn), value);
    })

    test('Err', () => {
      const err = new IllegalArgumentException('Result Err test');
      const fn = (err: IllegalArgumentException): IllegalArgumentException => new IllegalArgumentException(`err: ${err}`);
      const result = Result.Err<number, IllegalArgumentException>(err);
      toBeErr(result.mapErr(fn), new IllegalArgumentException(`err: ${err}`));
    })
  })
})
