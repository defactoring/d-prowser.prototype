import {Name} from './index';

describe('domain/type Name test', () => {
  test('Name must NOT be empty', () => {
    expect(Name.from('').isErr()).toBeTruthy()
  });

  test('Name string is the same with string', () => {
    expect(`Name is '${Name.from('John').unwrap()}'.`).toBe(`Name is 'John'.`);
  });
})
