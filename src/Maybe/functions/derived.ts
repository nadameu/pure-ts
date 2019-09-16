import * as d from '../../derivations';
import { Apply_1 } from '../../typeclasses';
import { BindOnly_1 } from '../../typeclasses/Bind';
import { FilterMapOnly_1 } from '../../typeclasses/Filterable';
import { FoldLOnly_1, FoldMapOnly_1 } from '../../typeclasses/Foldable';
import { Functor_1 } from '../../typeclasses/Functor';
import { WiltOnly_1, WitherOnly_1 } from '../../typeclasses/Witherable';
import { TMaybe } from '../internal';
import { apply, bind, filterMap, foldl, foldMap, map, wilt, wither } from './original';

export const lift2 = d.lift2({ apply, map } as Apply_1<TMaybe>);
export const lift3 = d.lift3({ apply, map } as Apply_1<TMaybe>);
export const lift4 = d.lift4({ apply, map } as Apply_1<TMaybe>);
export const lift5 = d.lift5({ apply, map } as Apply_1<TMaybe>);

export const join = d.join({ bind } as BindOnly_1<TMaybe>);
export const pipeK = d.pipeK({ bind } as BindOnly_1<TMaybe>);
export const wrapBind = d.wrapBind({ bind } as BindOnly_1<TMaybe>);
export const composeK = d.composeK({ bind } as BindOnly_1<TMaybe>);

export const cleared = d.cleared({ filterMap } as FilterMapOnly_1<TMaybe>);

export const all = d.all({ foldMap } as FoldMapOnly_1<TMaybe>);
export const and = d.and({ foldMap } as FoldMapOnly_1<TMaybe>);
export const any = d.any({ foldMap } as FoldMapOnly_1<TMaybe>);
export const fold = d.fold({ foldMap } as FoldMapOnly_1<TMaybe>);
export const intercalate = d.intercalate({ foldl } as FoldLOnly_1<TMaybe>);
export const length = d.length({ foldMap } as FoldMapOnly_1<TMaybe>);
export const maximumBy = d.maximumBy({ foldl } as FoldLOnly_1<TMaybe>);
export const minimumBy = d.minimumBy({ foldl } as FoldLOnly_1<TMaybe>);
export const oneOf = d.oneOf({ foldMap } as FoldMapOnly_1<TMaybe>);
export const oneOfMap = d.oneOfMap({ foldMap } as FoldMapOnly_1<TMaybe>);
export const or = d.or({ foldMap } as FoldMapOnly_1<TMaybe>);
export const product = d.product({ foldMap } as FoldMapOnly_1<TMaybe>);
export const sum = d.sum({ foldMap } as FoldMapOnly_1<TMaybe>);
export const surround = d.surround({ foldMap } as FoldMapOnly_1<TMaybe>);
export const surroundMap = d.surroundMap({ foldMap } as FoldMapOnly_1<TMaybe>);

export const flap = d.flap({ map } as Functor_1<TMaybe>);
export const voidLeft = d.voidLeft({ map } as Functor_1<TMaybe>);
export const voidRight = d.voidRight({ map } as Functor_1<TMaybe>);
export const $$void = d.$$void({ map } as Functor_1<TMaybe>);

export const wilted = d.wilted({ wilt } as WiltOnly_1<TMaybe>);
export const withered = d.withered({ wither } as WitherOnly_1<TMaybe>);