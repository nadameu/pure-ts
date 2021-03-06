import * as jsc from 'jsverify';
import { eqNumber, eqString } from '../../src';
import { Anon, Generic1, Generic2, Generic2as1, Type1, Type2 } from '../../src/Generic';
import { Alt_1, Alt_2, Eq } from '../../src/typeclasses';
import { associative, leftDistributive } from './helpers';

const laws = <f extends Generic1, a>(
  alt0: Anon<Alt_1<f>>,
  a: jsc.Arbitrary<Type1<f, a>>,
  f: jsc.Arbitrary<(_: a) => a>,
  eq: (x: Type1<f, a>) => (y: Type1<f, a>) => boolean
) => {
  const { alt, map } = alt0 as Alt_1<f>;
  return {
    associativity: (): void =>
      void jsc.assertForall(a, a, a, (x, y, z) => associative(eq)(alt)(x)(y)(z)),
    distributivity: (): void =>
      void jsc.assertForall(f, a, a, (f, x, y) =>
        leftDistributive(eq)<(_: a) => a>(map)(alt)(f)(x)(y)
      ),
  };
};

export const makeAlt1Laws = <f extends Generic1>(alt: Alt_1<f>) => (
  makeEq: <a>(_: Eq<a>) => Eq<Type1<f, a>>
) => (makeArb: <a>(arb: jsc.Arbitrary<a>) => jsc.Arbitrary<Type1<f, a>>) =>
  laws(alt, makeArb(jsc.number), jsc.fn(jsc.number), makeEq(eqNumber).eq);

export const makeAlt2Laws = <f extends Generic2>(alt: Alt_2<f>) => (
  makeEq: <a, b>(eqA: Eq<a>, eqB: Eq<b>) => Eq<Type2<f, a, b>>
) => (
  makeArb: <a, b>(arbA: jsc.Arbitrary<a>, arbB: jsc.Arbitrary<b>) => jsc.Arbitrary<Type2<f, a, b>>
) =>
  laws<Generic2as1<f>, number>(
    alt,
    makeArb(jsc.string, jsc.number),
    jsc.fn(jsc.number),
    makeEq(eqString, eqNumber).eq
  );
