import { constant, flip } from '../combinators';
import { Type1, Placeholder as _ } from '../Types';

export interface Functor<f> {
	map: <a, b>(f: (_: a) => b) => <y, x, w>(fa: Type1<f, w, x, y, a>) => Type1<f, w, x, y, b>;
}

export const map: <f>(F: Functor<f>) => Functor<f>['map'] = F => F.map;

export const mapFlipped: <f>(
	F: Functor<f>,
) => <a, y, x, w>(
	fa: Type1<f, w, x, y, a>,
) => <b>(f: (_: a) => b) => Type1<f, w, x, y, b> = F => fa => f => map(F)(f)(fa);

export const voidLeft: <f>(
	F: Functor<f>,
) => <y, x, w>(fa: Type1<f, w, x, y, any>) => <b>(y: b) => Type1<f, w, x, y, b> = F =>
	flip<any, any, any>(y => map(F)(constant(y)));

export const voidRight: <f>(
	F: Functor<f>,
) => <a>(x: a) => <y, x, w>(fb: Type1<f, w, x, y, any>) => Type1<f, w, x, y, a> = F => x =>
	map(F)(constant(x));

const _void: <f>(
	F: Functor<f>,
) => <y, x, w>(fa: Type1<f, w, x, y, any>) => Type1<f, w, x, y, void> = F =>
	map(F)(constant(undefined));
export { _void as void };
