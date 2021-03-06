import * as jsc from 'jsverify';
import { eqNumber, eqString } from '../../src';
import { Anon, Generic1, Generic2, Generic2as1, Type1, Type2 } from '../../src/Generic';
import { Bind_1, Bind_2, Eq } from '../../src/typeclasses';

const laws = <f extends Generic1, a>(
  bind0: Anon<Bind_1<f>>,
  fa: jsc.Arbitrary<Type1<f, a>>,
  f: jsc.Arbitrary<(_: a) => Type1<f, a>>,
  eq: Eq<Type1<f, a>>['eq']
) => {
  const { bind } = bind0 as Bind_1<f>;
  return {
    associativity: (): void =>
      void jsc.assertForall(fa, f, f, (x, f, g) =>
        eq(bind(g)(bind(f)(x)))(
          bind<a, a>(k => bind(g)(f(k)))(x)
        )
      ),
  };
};

export const makeBind1Laws = <f extends Generic1>(bind: Bind_1<f>) => (
  makeEq: <a>(_: Eq<a>) => Eq<Type1<f, a>>
) => (makeArb: <a>(arb: jsc.Arbitrary<a>) => jsc.Arbitrary<Type1<f, a>>) =>
  laws<f, number>(bind, makeArb(jsc.number), jsc.fn(makeArb(jsc.number)), makeEq(eqNumber).eq);

export const makeBind2Laws = <f extends Generic2>(bind: Bind_2<f>) => (
  makeEq: <a, b>(eqA: Eq<a>, eqB: Eq<b>) => Eq<Type2<f, a, b>>
) => (
  makeArb: <a, b>(arbA: jsc.Arbitrary<a>, arbB: jsc.Arbitrary<b>) => jsc.Arbitrary<Type2<f, a, b>>
) =>
  laws<Generic2as1<f>, number>(
    bind,
    makeArb(jsc.string, jsc.number),
    jsc.fn(makeArb(jsc.string, jsc.number)),
    makeEq(eqString, eqNumber).eq
  );
