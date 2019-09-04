import { Alt1 } from '../typeclasses/Alt';
import { Alternative1 } from '../typeclasses/Alternative';
import { Applicative1 } from '../typeclasses/Applicative';
import { Apply1 } from '../typeclasses/Apply';
import { Bind1 } from '../typeclasses/Bind';
import { Eq } from '../typeclasses/Eq';
import { Foldable1 } from '../typeclasses/Foldable';
import { Foldable1_1 } from '../typeclasses/Foldable1';
import { Functor1 } from '../typeclasses/Functor';
import { Monad1 } from '../typeclasses/Monad';
import { Monoid1 } from '../typeclasses/Monoid';
import { Plus1 } from '../typeclasses/Plus';
import { Semigroup1 } from '../typeclasses/Semigroup';
import { Traversable1 } from '../typeclasses/Traversable';
import { List, ListTag, NEList } from './definitions';
import {
  alt,
  append,
  apply,
  bind,
  empty,
  fold1,
  foldl,
  foldMap,
  foldMap1,
  foldr,
  map,
  mempty,
  pure,
  sequence,
  traverse,
  uncons,
} from './functions/original';
import { TList, TNEList } from './internal';

/* LIST */
export const makeEqList = <a>(eq: Eq<a>) =>
  ({
    eq: xs => ys => {
      let ix = uncons(xs);
      let iy = uncons(xs);
      while (ix.tag === ListTag.Cons && iy.tag === ListTag.Cons) {
        if (!eq.eq(ix.head)(iy.head)) return false;
        ix = uncons(ix.tail);
        iy = uncons(iy.tail);
      }
      return (ix.tag === ListTag.Nil) === (iy.tag === ListTag.Nil);
    },
  } as Eq<List<a>>);

export const functorList = { map } as Functor1<TList>;
export const applyList = { apply, map } as Apply1<TList>;
export const applicativeList = { apply, map, pure } as Applicative1<TList>;
export const bindList = { apply, bind, map } as Bind1<TList>;
export const monadList = { apply, bind, map, pure } as Monad1<TList>;

export const semigroupList = { append } as Semigroup1<TList>;
export const monoidList = { append, mempty } as Monoid1<TList>;

export const altList = { alt, map } as Alt1<TList>;
export const plusList = { alt, empty, map } as Plus1<TList>;
export const alternativeList = { alt, apply, empty, map, pure } as Alternative1<TList>;

export const foldableList = { foldMap, foldl, foldr } as Foldable1<TList>;
export const traversableList = { foldMap, foldl, foldr, map, sequence, traverse } as Traversable1<
  TList
>;

/* NELIST */
export const makeEqNEList = makeEqList as <a>(eq: Eq<a>) => Eq<NEList<a>>;

export const functorNEList = functorList as Functor1<TNEList>;
export const applyNEList = applyList as Apply1<TNEList>;
export const applicativeNEList = applicativeList as Applicative1<TNEList>;
export const bindNEList = bindList as Bind1<TNEList>;
export const monadNEList = monadList as Monad1<TNEList>;

export const semigroupNEList = { append } as Semigroup1<TNEList>;

export const altNEList = altList as Alt1<TNEList>;

export const foldableNEList = foldableList as Foldable1<TNEList>;
export const traversableNEList = traversableList as Traversable1<TNEList>;

export const foldable1NEList = { fold1, foldMap, foldMap1, foldl, foldr } as Foldable1_1<TNEList>;
