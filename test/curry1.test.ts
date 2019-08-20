import * as jsc from 'jsverify';
import { curry } from '../src/curry';

const arity1 = jsc.fn(jsc.number);
const numberOrUndefined = jsc.sum([jsc.number, jsc.constant(undefined)]);

test('0 arguments should throw', () => {
  jsc.assertForall(arity1, f => {
    //@ts-ignore
    expect(() => curry(1, f)()).toThrow();
    return true;
  });
});

test('1 argument', () => {
  jsc.assertForall(arity1, numberOrUndefined, (f, a) => curry(1, f)(a) === f(a));
});

test('2 arguments should throw', () => {
  jsc.assertForall(arity1, numberOrUndefined, numberOrUndefined, (f, a, b) => {
    //@ts-ignore
    expect(() => curry(1, f)(a, b)).toThrow();
    return true;
  });
});