import * as jsc from 'jsverify';
import { eqNumber } from '../../src';
import { Anon, Generic1, Type1 } from '../../src/Generic';
import { Alternative_1, Eq } from '../../src/typeclasses';
import { rightDistributive } from './helpers';

const laws = <f extends Generic1, a>(
  alternative: Anon<Alternative_1<f>>,
  f: jsc.Arbitrary<Type1<f, (_: a) => a>>,
  a: jsc.Arbitrary<Type1<f, a>>,
  eq: (_: Type1<f, a>) => (_: Type1<f, a>) => boolean
) => {
  const { alt, apply, empty } = alternative as Alternative_1<f>;
  return {
    distributivity: (): void =>
      void jsc.assertForall(f, f, a, (f, g, x) => rightDistributive(eq)(apply)(alt)(f)(g)(x)),
    annihilation: (): void => void jsc.assertForall(a, a => eq(apply(empty())(a))(empty())),
  };
};

export const makeAlternativeLaws = <f extends Generic1>(alternative: Alternative_1<f>) => (
  makeEq: <a>(_: Eq<a>) => Eq<Type1<f, a>>
) => (makeArb: <a>(arb: jsc.Arbitrary<a>) => jsc.Arbitrary<Type1<f, a>>) =>
  laws<f, number>(
    alternative,
    makeArb(jsc.fn(jsc.number)),
    makeArb(jsc.number),
    makeEq(eqNumber).eq
  );
