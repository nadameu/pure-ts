import { Monoid1 } from '../typeclasses/Monoid';
import { Semigroup1 } from '../typeclasses/Semigroup';
import { TEndo } from './internal';

const compose = <b, c>(f: (_: b) => c) => <a>(g: (_: a) => b) => (a: a) => f(g(a));

export const semigroupEndo = { append: compose } as Semigroup1<TEndo>;
export const monoidEndo = { append: compose, mempty: () => a => a } as Monoid1<TEndo>;