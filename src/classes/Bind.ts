import { Prop1, Prop2, Type1, Type2 } from '../Types';
import { Apply1, Apply2 } from './Apply';

export interface Bind1<f extends Prop1> extends Apply1<f> {
	bind: <a>(fa: Type1<f, a>) => <b>(f: (_: a) => Type1<f, b>) => Type1<f, b>;
}
export interface Bind2<f extends Prop2> extends Apply2<f> {
	bind: <a, b>(fa: Type2<f, a, b>) => <c>(f: (_: b) => Type2<f, a, c>) => Type2<f, a, c>;
}

interface Derived1<f extends Prop1> extends Bind1<f> {
	bindFlipped: <a, b>(f: (_: a) => Type1<f, b>) => (fa: Type1<f, a>) => Type1<f, b>;
	join: <a>(fa: Type1<f, Type1<f, a>>) => Type1<f, a>;
	composeKleisli: <a, b>(
		f: (_: a) => Type1<f, b>,
	) => <c>(g: (_: b) => Type1<f, c>) => (_: a) => Type1<f, c>;
	composeKleisliFlipped: <b, c>(
		f: (_: b) => Type1<f, c>,
	) => <a>(g: (_: a) => Type1<f, b>) => (_: a) => Type1<f, c>;
	ifM: (
		cond: Type1<f, boolean>,
	) => <a>(whenTrue: Type1<f, a>) => (whenFalse: Type1<f, a>) => Type1<f, a>;
}
interface Derived2<f extends Prop2> extends Bind2<f> {
	bindFlipped: <a, b, c>(f: (_: b) => Type2<f, a, c>) => (fa: Type2<f, a, b>) => Type2<f, a, c>;
	join: <a, b>(fa: Type2<f, a, Type2<f, a, b>>) => Type2<f, a, b>;
	composeKleisli: <a, b, c>(
		f: (_: b) => Type2<f, a, c>,
	) => <d>(g: (_: c) => Type2<f, a, d>) => (_: b) => Type2<f, a, d>;
	composeKleisliFlipped: <c, d, a>(
		f: (_: c) => Type2<f, a, d>,
	) => <b>(g: (_: b) => Type2<f, a, c>) => (_: b) => Type2<f, a, d>;
	ifM: <a>(
		cond: Type2<f, a, boolean>,
	) => <b>(whenTrue: Type2<f, a, b>) => (whenFalse: Type2<f, a, b>) => Type2<f, a, b>;
}

type Derive<r extends keyof Derived1<never>> = <f extends Prop1>(B: Bind1<f>) => Derived1<f>[r];
interface DeriveAll<r extends keyof Derived1<never>> {
	<f extends Prop2>(B: Bind2<f>): Derived2<f>[r];
	<f extends Prop1>(B: Bind1<f>): Derived1<f>[r];
}

export const bindFlipped: DeriveAll<'bindFlipped'> = (({ bind }) => f => fa =>
	bind(fa)(f)) as Derive<'bindFlipped'>;

export const join: DeriveAll<'join'> = (({ bind }) => fa => bind(fa)(x => x)) as Derive<'join'>;

export const composeKleisli: DeriveAll<'composeKleisli'> = (({ bind }) => f => g => x =>
	bind(f(x))(g)) as Derive<'composeKleisli'>;

export const composeKleisliFlipped: DeriveAll<'composeKleisliFlipped'> = (({
	bind,
}) => f => g => x => bind(g(x))(f)) as Derive<'composeKleisliFlipped'>;

export const ifM: DeriveAll<'ifM'> = (({ bind }) => cond => whenTrue => whenFalse =>
	bind(cond)(x => (x ? whenTrue : whenFalse))) as Derive<'ifM'>;
