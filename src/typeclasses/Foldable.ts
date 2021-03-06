import { monoidAdditive } from '../Additive/instances';
import { makeMonoidAlternate } from '../Alternate/instances';
import { monoidConj } from '../Conj/instances';
import { monoidDisj } from '../Disj/instances';
import { makeMonoidDual } from '../Dual/instances';
import { monoidEndo } from '../Endo/instances';
import {
  Anon,
  Generic1,
  Generic1Type,
  Generic2,
  Generic2Type,
  GenericOType,
  Identified1,
  Identified2,
  IdentifiedO,
  Type1,
  Type2,
} from '../Generic';
import { compose } from '../helpers/compose';
import { constant } from '../helpers/constant';
import { flip } from '../helpers/flip';
import { identity } from '../helpers/identity';
import { Just, Maybe, Nothing } from '../Maybe/definitions';
import { monoidMultiplicative } from '../Multiplicative/instances';
import { Ordering } from '../Ordering/definitions';
import { Monoid_0, Monoid_1 } from './Monoid';
import { Plus_1, Plus_2 } from './Plus';
import { Semigroup_0, Semigroup_1 } from './Semigroup';

export interface Foldable_1<f extends Generic1> extends Identified1<f> {
  foldl: Helpers1<f>['foldl'];
  foldr: Helpers1<f>['foldr'];
  foldMap: Helpers1<f>['foldMap'];
}

export interface Foldable_2<f extends Generic2> extends Identified2<f> {
  foldl: Helpers2<f>['foldl'];
  foldr: Helpers2<f>['foldr'];
  foldMap: Helpers2<f>['foldMap'];
}

export interface Foldable_O extends IdentifiedO {
  foldl: HelpersO['foldl'];
  foldr: HelpersO['foldr'];
  foldMap: HelpersO['foldMap'];
}

export interface FoldLOnly_1<f extends Generic1>
  extends Pick<Foldable_1<f>, Generic1Type | 'foldl'> {}

export interface FoldLOnly_2<f extends Generic2>
  extends Pick<Foldable_2<f>, Generic2Type | 'foldl'> {}

export interface FoldLOnly_O extends Pick<Foldable_O, GenericOType | 'foldl'> {}

export interface FoldROnly_1<f extends Generic1>
  extends Pick<Foldable_1<f>, Generic1Type | 'foldr'> {}

export interface FoldROnly_2<f extends Generic2>
  extends Pick<Foldable_2<f>, Generic2Type | 'foldr'> {}

export interface FoldROnly_O extends Pick<Foldable_O, GenericOType | 'foldr'> {}

export interface FoldMapOnly_1<f extends Generic1>
  extends Pick<Foldable_1<f>, Generic1Type | 'foldMap'> {}

export interface FoldMapOnly_2<f extends Generic2>
  extends Pick<Foldable_2<f>, Generic2Type | 'foldMap'> {}

export interface FoldMapOnly_O extends Pick<Foldable_O, GenericOType | 'foldMap'> {}

interface Helpers1<f extends Generic1> {
  foldl: <a, b>(f: (_: b) => (_: a) => b) => (b: b) => (fa: Type1<f, a>) => b;
  foldr: <a, b>(f: (_: a) => (_: b) => b) => (b: b) => (fa: Type1<f, a>) => b;
  foldMap: Helper1Monoid<f>['foldMap'];
  allAny: <a>(p: (_: a) => boolean) => (fa: Type1<f, a>) => boolean;
  andOr: (fa: Type1<f, boolean>) => boolean;
  length: <a>(fa: Type1<f, a>) => number;
  sumProduct: (fa: Type1<f, number>) => number;
  maxMin: <a>(compare: (_: a) => (_: a) => Ordering) => (fa: Type1<f, a>) => Maybe<a>;
}
interface Helpers2<f extends Generic2> {
  foldl: <b, c>(f: (_: c) => (_: b) => c) => (c: c) => <a>(fab: Type2<f, a, b>) => c;
  foldr: <b, c>(f: (_: b) => (_: c) => c) => (c: c) => <a>(fab: Type2<f, a, b>) => c;
  foldMap: Helper2Monoid<f>['foldMap'];
  allAny: <b>(p: (_: b) => boolean) => <a>(fab: Type2<f, a, b>) => boolean;
  andOr: <a>(fab: Type2<f, a, boolean>) => boolean;
  length: <a, b>(fab: Type2<f, a, b>) => number;
  sumProduct: <a>(fab: Type2<f, a, number>) => number;
  maxMin: <b>(compare: (_: b) => (_: b) => Ordering) => <a>(fab: Type2<f, a, b>) => Maybe<b>;
}
interface HelpersO {
  foldl: <a, b>(f: (_: b) => (_: a) => b) => (b: b) => <T extends Record<keyof T, a>>(fa: T) => b;
  foldr: <a, b>(f: (_: a) => (_: b) => b) => (b: b) => <T extends Record<keyof T, a>>(fa: T) => b;
  foldMap: HelperOMonoid['foldMap'];
  allAny: <a>(p: (_: a) => boolean) => <T extends Record<keyof T, a>>(fa: T) => boolean;
  andOr: <T extends Record<keyof T, boolean>>(fa: T) => boolean;
  length: <T>(fa: T) => number;
  sumProduct: <T extends Record<keyof T, number>>(fa: T) => number;
  maxMin: <a>(
    compare: (_: a) => (_: a) => Ordering
  ) => <T extends Record<keyof T, a>>(fa: T) => Maybe<a>;
}
type Helper = {
  [k in keyof Helpers1<never>]: {
    <f extends Generic1>(foldable: Foldable_1<f>): Helpers1<f>[k];
    <f extends Generic2>(foldable: Foldable_2<f>): Helpers2<f>[k];
  };
};
type PartialHelper<keys extends keyof Foldable_1<never> & keyof Foldable_2<never>> = {
  [k in keyof Helpers1<never>]: {
    <f extends Generic1>(_: Pick<Foldable_1<f>, Generic1Type | keys>): Helpers1<f>[k];
    <f extends Generic2>(_: Pick<Foldable_2<f>, Generic2Type | keys>): Helpers2<f>[k];
    (_: Pick<Foldable_O, GenericOType | keys>): HelpersO[k];
  };
};
interface Helpers1Monoid0<f extends Generic1, m> {
  foldMap: <a>(f: (_: a) => m) => (fa: Type1<f, a>) => m;
  fold: (fm: Type1<f, m>) => m;
  intercalate: (sep: m) => (fm: Type1<f, m>) => m;
}
interface Helpers1Monoid1<f extends Generic1, m extends Generic1> {
  foldMap: <a, b>(f: (_: a) => Type1<m, b>) => (fa: Type1<f, a>) => Type1<m, b>;
  fold: <a>(fma: Type1<f, Type1<m, a>>) => Type1<m, a>;
  intercalate: <a>(sep: Type1<m, a>) => (fm: Type1<f, Type1<m, a>>) => Type1<m, a>;
}
interface Helpers2Monoid0<f extends Generic2, m> {
  foldMap: <b>(f: (_: b) => m) => <a>(fab: Type2<f, a, b>) => m;
  fold: <a>(fam: Type2<f, a, m>) => m;
  intercalate: (sep: m) => <a>(fm: Type2<f, a, m>) => m;
}
interface Helpers2Monoid1<f extends Generic2, m extends Generic1> {
  foldMap: <b, c>(f: (_: b) => Type1<m, c>) => <a>(fab: Type2<f, a, b>) => Type1<m, c>;
  fold: <a, b>(famb: Type2<f, a, Type1<m, b>>) => Type1<m, b>;
  intercalate: <b>(sep: Type1<m, b>) => <a>(fm: Type2<f, a, Type1<m, b>>) => Type1<m, b>;
}
interface HelpersOMonoid0<m> {
  foldMap: <a>(f: (_: a) => m) => <T extends Record<keyof T, a>>(fa: T) => m;
  fold: <T extends Record<keyof T, m>>(fm: T) => m;
  intercalate: (sep: m) => <T extends Record<keyof T, m>>(fm: T) => m;
}
interface HelpersOMonoid1<m extends Generic1> {
  foldMap: <a, b>(f: (_: a) => Type1<m, b>) => <T extends Record<keyof T, a>>(fa: T) => Type1<m, b>;
  fold: <T extends Record<keyof T, Type1<m, unknown>>>(
    fma: T
  ) => Type1<m, T extends Record<keyof T, Type1<m, infer a>> ? a : never>;
  intercalate: <a>(
    sep: Type1<m, a>
  ) => <T extends Record<keyof T, Type1<m, a>>>(fm: T) => Type1<m, a>;
}
type Helper1Monoid<f extends Generic1> = {
  [k in keyof Helpers1Monoid0<never, never>]: {
    <m extends Generic1>(monoid: Monoid_1<m>): Helpers1Monoid1<f, m>[k];
    <m>(monoid: Monoid_0<m>): Helpers1Monoid0<f, m>[k];
  };
};
type Helper2Monoid<f extends Generic2> = {
  [k in keyof Helpers2Monoid0<never, never>]: {
    <m extends Generic1>(monoid: Monoid_1<m>): Helpers2Monoid1<f, m>[k];
    <m>(monoid: Monoid_0<m>): Helpers2Monoid0<f, m>[k];
  };
};
type HelperOMonoid = {
  [k in keyof HelpersOMonoid0<never>]: {
    <m extends Generic1>(monoid: Monoid_1<m>): HelpersOMonoid1<m>[k];
    <m>(monoid: Monoid_0<m>): HelpersOMonoid0<m>[k];
  };
};
type HelperMonoid = {
  [k in keyof Helper1Monoid<never>]: {
    <f extends Generic1>({ foldMap }: FoldMapOnly_1<f>): Helper1Monoid<f>[k];
    <f extends Generic2>({ foldMap }: FoldMapOnly_2<f>): Helper2Monoid<f>[k];
    ({ foldMap }: FoldMapOnly_O): HelperOMonoid[k];
  };
};
type HelperMonoidL = {
  [k in keyof Helper1Monoid<never>]: {
    <f extends Generic1>({ foldl }: FoldLOnly_1<f>): Helper1Monoid<f>[k];
    <f extends Generic2>({ foldl }: FoldLOnly_2<f>): Helper2Monoid<f>[k];
    ({ foldl }: FoldLOnly_O): HelperOMonoid[k];
  };
};
interface Helpers1Semigroup0<f extends Generic1, m> {
  surroundMap: (sep: m) => <a>(f: (_: a) => m) => (fa: Type1<f, a>) => m;
  surround: (sep: m) => (fm: Type1<f, m>) => m;
}
interface Helpers1Semigroup1<f extends Generic1, m extends Generic1> {
  surroundMap: <b>(
    sep: Type1<m, b>
  ) => <a>(f: (_: a) => Type1<m, b>) => (fa: Type1<f, a>) => Type1<m, b>;
  surround: <a>(sep: Type1<m, a>) => (fma: Type1<f, Type1<m, a>>) => Type1<m, a>;
}
interface Helpers2Semigroup0<f extends Generic2, m> {
  surroundMap: (sep: m) => <b>(f: (_: b) => m) => <a>(fab: Type2<f, a, b>) => m;
  surround: (sep: m) => <a>(fam: Type2<f, a, m>) => m;
}
interface Helpers2Semigroup1<f extends Generic2, m extends Generic1> {
  surroundMap: <c>(
    sep: Type1<m, c>
  ) => <b>(f: (_: b) => Type1<m, c>) => <a>(fab: Type2<f, a, b>) => Type1<m, c>;
  surround: <b>(sep: Type1<m, b>) => <a>(famb: Type2<f, a, Type1<m, b>>) => Type1<m, b>;
}
interface HelpersOSemigroup0<m> {
  surroundMap: (sep: m) => <a>(f: (_: a) => m) => <T extends Record<keyof T, a>>(fa: T) => m;
  surround: (sep: m) => <T extends Record<keyof T, m>>(fm: T) => m;
}
interface HelpersOSemigroup1<m extends Generic1> {
  surroundMap: <b>(
    sep: Type1<m, b>
  ) => <a>(f: (_: a) => Type1<m, b>) => <T extends Record<keyof T, a>>(fa: T) => Type1<m, b>;
  surround: <a>(
    sep: Type1<m, a>
  ) => <T extends Record<keyof T, Type1<m, a>>>(fma: T) => Type1<m, a>;
}
type Helper1Semigroup<f extends Generic1> = {
  [k in keyof Helpers1Semigroup0<never, never>]: {
    <m extends Generic1>(semigroup: Semigroup_1<m>): Helpers1Semigroup1<f, m>[k];
    <m>(semigroup: Semigroup_0<m>): Helpers1Semigroup0<f, m>[k];
  };
};
type Helper2Semigroup<f extends Generic2> = {
  [k in keyof Helpers2Semigroup0<never, never>]: {
    <m extends Generic1>(semigroup: Semigroup_1<m>): Helpers2Semigroup1<f, m>[k];
    <m>(semigroup: Semigroup_0<m>): Helpers2Semigroup0<f, m>[k];
  };
};
type HelperOSemigroup = {
  [k in keyof HelpersOSemigroup0<never>]: {
    <m extends Generic1>(semigroup: Semigroup_1<m>): HelpersOSemigroup1<m>[k];
    <m>(semigroup: Semigroup_0<m>): HelpersOSemigroup0<m>[k];
  };
};
type HelperSemigroup = {
  [k in keyof Helper1Semigroup<never>]: {
    <f extends Generic1>({ foldMap }: FoldMapOnly_1<f>): Helper1Semigroup<f>[k];
    <f extends Generic2>({ foldMap }: FoldMapOnly_2<f>): Helper2Semigroup<f>[k];
    ({ foldMap }: FoldMapOnly_O): HelperOSemigroup[k];
  };
};
interface Helpers1Plus1<f extends Generic1, g extends Generic1> {
  oneOf: <a>(fga: Type1<f, Type1<g, a>>) => Type1<g, a>;
  oneOfMap: <a, b>(f: (_: a) => Type1<g, b>) => (fa: Type1<f, a>) => Type1<g, b>;
}
interface Helpers1Plus2<f extends Generic1, g extends Generic2> {
  oneOf: <a, b>(fgab: Type1<f, Type2<g, a, b>>) => Type2<g, a, b>;
  oneOfMap: <a, b, c>(f: (_: a) => Type2<g, b, c>) => (fa: Type1<f, a>) => Type2<g, b, c>;
}
interface Helpers2Plus1<f extends Generic2, g extends Generic1> {
  oneOf: <a, b>(fagb: Type2<f, a, Type1<g, b>>) => Type1<g, b>;
  oneOfMap: <b, c>(f: (_: b) => Type1<g, c>) => <a>(fab: Type2<f, a, b>) => Type1<g, c>;
}
interface Helpers2Plus2<f extends Generic2, g extends Generic2> {
  oneOf: <a, b, c>(fagbc: Type2<f, a, Type2<g, b, c>>) => Type2<g, b, c>;
  oneOfMap: <b, c, d>(f: (_: b) => Type2<g, c, d>) => <a>(fab: Type2<f, a, b>) => Type2<g, c, d>;
}
interface HelpersOPlus1<f extends Generic1> {
  oneOf: <T extends Record<keyof T, Type1<f, unknown>>>(
    fga: T
  ) => Type1<f, T extends Record<keyof T, Type1<f, infer a>> ? a : never>;
  oneOfMap: <a, b>(
    f: (_: a) => Type1<f, b>
  ) => <T extends Record<keyof T, a>>(fa: T) => Type1<f, b>;
}
interface HelpersOPlus2<f extends Generic2> {
  oneOf: <T extends Record<keyof T, Type2<f, unknown, unknown>>>(
    fga: T
  ) => T extends Record<keyof T, Type2<f, infer a, infer b>>
    ? Type2<f, a, b>
    : Type2<f, never, never>;
  oneOfMap: <a, b, c>(
    f: (_: b) => Type2<f, a, c>
  ) => <T extends Record<keyof T, b>>(fa: T) => Type2<f, a, c>;
}
type Helper1Plus<f extends Generic1> = {
  [k in keyof Helpers1Plus1<never, never>]: {
    <g extends Generic1>(plus: Plus_1<g>): Helpers1Plus1<f, g>[k];
    <g extends Generic2>(plus: Plus_2<g>): Helpers1Plus2<f, g>[k];
  };
};
type Helper2Plus<f extends Generic2> = {
  [k in keyof Helpers2Plus1<never, never>]: {
    <g extends Generic1>(plus: Plus_1<g>): Helpers2Plus1<f, g>[k];
    <g extends Generic2>(plus: Plus_2<g>): Helpers2Plus2<f, g>[k];
  };
};
type HelperOPlus = {
  [k in keyof HelpersOPlus1<never>]: {
    <f extends Generic1>(plus: Plus_1<f>): HelpersOPlus1<f>[k];
    <f extends Generic2>(plus: Plus_2<f>): HelpersOPlus2<f>[k];
  };
};
type HelperPlus = {
  [k in keyof Helper1Plus<never>]: {
    <f extends Generic1>({ foldMap }: FoldMapOnly_1<f>): Helper1Plus<f>[k];
    <f extends Generic2>({ foldMap }: FoldMapOnly_2<f>): Helper2Plus<f>[k];
    ({ foldMap }: FoldMapOnly_O): HelperOPlus[k];
  };
};

export const foldlDefault: PartialHelper<'foldMap'>['foldl'] = <f extends Generic1>({
  foldMap,
}: Anon<Foldable_1<f>, 'foldMap'>) => <a, b>(f: (_: b) => (_: a) => b) => (b: b) => (
  fa: Type1<f, a>
): b => foldMap(makeMonoidDual(monoidEndo))(flip(f))(fa)(b);

export const foldrDefault: PartialHelper<'foldMap'>['foldr'] = <f extends Generic1>({
  foldMap,
}: Anon<Foldable_1<f>, 'foldMap'>) => <a, b>(f: (_: a) => (_: b) => b) => (b: b) => (
  fa: Type1<f, a>
): b => foldMap(monoidEndo)(f)(fa)(b);

export const foldMapDefaultL: PartialHelper<'foldl'>['foldMap'] = <f extends Generic1>({
  foldl,
}: Anon<Foldable_1<f>, 'foldl'>) => <b>({ append, mempty }: Anon<Monoid_0<b>>) => <a>(
  f: (_: a) => b
) => foldl<a, b>(acc => x => append(acc)(f(x)))(mempty());

export const foldMapDefaultR: PartialHelper<'foldr'>['foldMap'] = <f extends Generic1>({
  foldr,
}: Pick<Foldable_1<f>, 'foldr'>) => <b>({ append, mempty }: Anon<Monoid_0<b>>) => <a>(
  f: (_: a) => b
) => foldr<a, b>(compose(append)(f))(mempty());

export const fold: HelperMonoid['fold'] = <f extends Generic1>({
  foldMap,
}: Anon<Foldable_1<f>, 'foldMap'>) => <a>(monoid: Anon<Monoid_0<a>>) =>
  foldMap(monoid as Monoid_0<a>)<a>(identity);

export const oneOfMap: HelperPlus['oneOfMap'] = <f extends Generic1>({
  foldMap,
}: Anon<Foldable_1<f>, 'foldMap'>) => <g extends Generic1>(
  plus: Anon<Plus_1<g>>
): (<a, b>(f: (_: a) => Type1<g, b>) => (fa: Type1<f, a>) => Type1<g, b>) =>
  foldMap(makeMonoidAlternate(plus as Plus_1<g>));

export const oneOf: HelperPlus['oneOf'] = <f extends Generic1>(
  foldable: Anon<Foldable_1<f>, 'foldMap'>
) => <g extends Generic1>(
  plus: Anon<Plus_1<g>>
): (<a>(fga: Type1<f, Type1<g, a>>) => Type1<g, a>) =>
  oneOfMap(foldable as Foldable_1<f>)(plus as Plus_1<g>)(identity);

export const intercalate: HelperMonoidL['intercalate'] = <f extends Generic1>({
  foldl,
}: Anon<Foldable_1<f>, 'foldl'>) => <a>({
  append,
  mempty,
}: Anon<Monoid_0<a>, 'append' | 'mempty'>) => (sep: a) => (xs: Type1<f, a>): a => {
  type Result = { init: true; acc: a } | { init: false; acc: a };
  const go = (result: Result) => (x: a): Result =>
    result.init
      ? { init: false, acc: x }
      : { init: false, acc: append(append(result.acc)(sep))(x) };
  return foldl(go)({ init: true, acc: mempty() })(xs).acc;
};

export const surroundMap: HelperSemigroup['surroundMap'] = <f extends Generic1>({
  foldMap,
}: Anon<Foldable_1<f>, 'foldMap'>) => <m>({ append }: Anon<Semigroup_0<m>, 'append'>) => (d: m) => <
  a
>(
  t: (_: a) => m
) => (f: Type1<f, a>): m => {
  const joined = (a: a) => (m: m) => append(append(d)(t(a)))(m);
  return foldMap(monoidEndo)(joined)(f)(d);
};

export const surround: HelperSemigroup['surround'] = <f extends Generic1>(
  foldable: Anon<Foldable_1<f>, 'foldMap'>
) => <m>(semigroup: Anon<Semigroup_0<m>>) => (d: m): ((f: Type1<f, m>) => m) =>
  surroundMap(foldable as Foldable_1<f>)(semigroup as Semigroup_0<m>)(d)(identity);

export const all: PartialHelper<'foldMap'>['allAny'] = <f extends Generic1>({
  foldMap,
}: Anon<Foldable_1<f>, 'foldMap'>): (<a>(p: (_: a) => boolean) => (fa: Type1<f, a>) => boolean) =>
  /*#__PURE__*/ foldMap(monoidConj);

export const and: PartialHelper<'foldMap'>['andOr'] = <f extends Generic1>(
  foldable: Anon<Foldable_1<f>, 'foldMap'>
): ((fa: Type1<f, boolean>) => boolean) =>
  /*#__PURE__*/ all(foldable as Foldable_1<f>)<boolean>(identity);

export const any: PartialHelper<'foldMap'>['allAny'] = <f extends Generic1>({
  foldMap,
}: Anon<Foldable_1<f>, 'foldMap'>): (<a>(p: (_: a) => boolean) => (fa: Type1<f, a>) => boolean) =>
  /*#__PURE__*/ foldMap(monoidDisj);

export const or: PartialHelper<'foldMap'>['andOr'] = <f extends Generic1>(
  foldable: Anon<Foldable_1<f>, 'foldMap'>
): ((fa: Type1<f, boolean>) => boolean) =>
  /*#__PURE__*/ any(foldable as Foldable_1<f>)<boolean>(identity);

export const length: PartialHelper<'foldMap'>['length'] = <f extends Generic1>({
  foldMap,
}: Anon<Foldable_1<f>, 'foldMap'>) => /*#__PURE__*/ foldMap(monoidAdditive)(constant(1)) as any;

export const sum: PartialHelper<'foldMap'>['sumProduct'] = <f extends Generic1>({
  foldMap,
}: Anon<Foldable_1<f>, 'foldMap'>) => /*#__PURE__*/ foldMap(monoidAdditive)<number>(identity);

export const product: PartialHelper<'foldMap'>['sumProduct'] = <f extends Generic1>({
  foldMap,
}: Anon<Foldable_1<f>, 'foldMap'>) => /*#__PURE__*/ foldMap(monoidMultiplicative)<number>(identity);

export const maximumBy: PartialHelper<'foldl'>['maxMin'] = <f extends Generic1>({
  foldl,
}: Anon<Foldable_1<f>, 'foldl'>) => <a>(
  compare: (_: a) => (_: a) => Ordering
): ((fa: Type1<f, a>) => Maybe<a>) =>
  foldl<a, Maybe<a>>(acc => x =>
    acc.isNothing ? Just(x) : compare(acc.value)(x) === Ordering.LT ? Just(x) : acc
  )(Nothing);

export const minimumBy: PartialHelper<'foldl'>['maxMin'] = <f extends Generic1>({
  foldl,
}: Anon<Foldable_1<f>, 'foldl'>) => <a>(
  compare: (_: a) => (_: a) => Ordering
): ((fa: Type1<f, a>) => Maybe<a>) =>
  foldl<a, Maybe<a>>(acc => x =>
    acc.isNothing ? Just(x) : compare(acc.value)(x) === Ordering.GT ? Just(x) : acc
  )(Nothing);
