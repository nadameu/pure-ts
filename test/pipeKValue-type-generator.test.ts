import { generate } from './type-generator';

test('Generate type description', () => {
  const o1 = generate({
    name: 'PipeKleisliValue_1<f extends Generic1, a>',
    functionPrefix: 'pipeK',
    type: x => `Type1<f, ${x}>`,
    outputIsFunction: false,
  });
  const o2 = generate({
    name: 'PipeKleisliValue_2<f extends Generic2, b>',
    functionPrefix: 'pipeK',
    firstLetter: 'b',
    lastLetter: 'c',
    type: x => `Type2<f, a, ${x}>`,
    lettersPrefix: ['a'],
    outputIsFunction: false,
  });
  const z = [o1, o2].join('\n\n');
  expect(z).toMatchInlineSnapshot(`
    "export interface PipeKleisliValue_1<f extends Generic1, a> {
      pipeK(): Type1<f, a>;
      pipeK<b>(f0: (_: a) => Type1<f, b>): Type1<f, b>;
      pipeK<x0, b>(f0: (_: a) => Type1<f, x0>, f1: (_: x0) => Type1<f, b>): Type1<f, b>;
      pipeK<x0, x1, b>(f0: (_: a) => Type1<f, x0>, f1: (_: x0) => Type1<f, x1>, f2: (_: x1) => Type1<f, b>): Type1<f, b>;
      pipeK<x0, x1, x2, b>(f0: (_: a) => Type1<f, x0>, f1: (_: x0) => Type1<f, x1>, f2: (_: x1) => Type1<f, x2>, f3: (_: x2) => Type1<f, b>): Type1<f, b>;
      pipeK<x0, x1, x2, x3, b>(f0: (_: a) => Type1<f, x0>, f1: (_: x0) => Type1<f, x1>, f2: (_: x1) => Type1<f, x2>, f3: (_: x2) => Type1<f, x3>, f4: (_: x3) => Type1<f, b>): Type1<f, b>;
      pipeK<x0, x1, x2, x3, x4, b>(f0: (_: a) => Type1<f, x0>, f1: (_: x0) => Type1<f, x1>, f2: (_: x1) => Type1<f, x2>, f3: (_: x2) => Type1<f, x3>, f4: (_: x3) => Type1<f, x4>, f5: (_: x4) => Type1<f, b>): Type1<f, b>;
      pipeK<x0, x1, x2, x3, x4, x5, b>(f0: (_: a) => Type1<f, x0>, f1: (_: x0) => Type1<f, x1>, f2: (_: x1) => Type1<f, x2>, f3: (_: x2) => Type1<f, x3>, f4: (_: x3) => Type1<f, x4>, f5: (_: x4) => Type1<f, x5>, f6: (_: x5) => Type1<f, b>): Type1<f, b>;
      pipeK<x0, x1, x2, x3, x4, x5, x6, b>(f0: (_: a) => Type1<f, x0>, f1: (_: x0) => Type1<f, x1>, f2: (_: x1) => Type1<f, x2>, f3: (_: x2) => Type1<f, x3>, f4: (_: x3) => Type1<f, x4>, f5: (_: x4) => Type1<f, x5>, f6: (_: x5) => Type1<f, x6>, f7: (_: x6) => Type1<f, b>): Type1<f, b>;
      pipeK<x0, x1, x2, x3, x4, x5, x6, x7, b>(f0: (_: a) => Type1<f, x0>, f1: (_: x0) => Type1<f, x1>, f2: (_: x1) => Type1<f, x2>, f3: (_: x2) => Type1<f, x3>, f4: (_: x3) => Type1<f, x4>, f5: (_: x4) => Type1<f, x5>, f6: (_: x5) => Type1<f, x6>, f7: (_: x6) => Type1<f, x7>, f8: (_: x7) => Type1<f, b>): Type1<f, b>;
      pipeK<x0, x1, x2, x3, x4, x5, x6, x7, x8, b>(f0: (_: a) => Type1<f, x0>, f1: (_: x0) => Type1<f, x1>, f2: (_: x1) => Type1<f, x2>, f3: (_: x2) => Type1<f, x3>, f4: (_: x3) => Type1<f, x4>, f5: (_: x4) => Type1<f, x5>, f6: (_: x5) => Type1<f, x6>, f7: (_: x6) => Type1<f, x7>, f8: (_: x7) => Type1<f, x8>, f9: (_: x8) => Type1<f, b>): Type1<f, b>;
      pipeK<x0, x1, x2, x3, x4, x5, x6, x7, x8, x9, b>(f0: (_: a) => Type1<f, x0>, f1: (_: x0) => Type1<f, x1>, f2: (_: x1) => Type1<f, x2>, f3: (_: x2) => Type1<f, x3>, f4: (_: x3) => Type1<f, x4>, f5: (_: x4) => Type1<f, x5>, f6: (_: x5) => Type1<f, x6>, f7: (_: x6) => Type1<f, x7>, f8: (_: x7) => Type1<f, x8>, f9: (_: x8) => Type1<f, x9>, f10: (_: x9) => Type1<f, b>): Type1<f, b>;
      pipeK<x0, x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, b>(f0: (_: a) => Type1<f, x0>, f1: (_: x0) => Type1<f, x1>, f2: (_: x1) => Type1<f, x2>, f3: (_: x2) => Type1<f, x3>, f4: (_: x3) => Type1<f, x4>, f5: (_: x4) => Type1<f, x5>, f6: (_: x5) => Type1<f, x6>, f7: (_: x6) => Type1<f, x7>, f8: (_: x7) => Type1<f, x8>, f9: (_: x8) => Type1<f, x9>, f10: (_: x9) => Type1<f, x10>, f11: (_: x10) => Type1<f, b>): Type1<f, b>;
      pipeK<x0, x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, b>(f0: (_: a) => Type1<f, x0>, f1: (_: x0) => Type1<f, x1>, f2: (_: x1) => Type1<f, x2>, f3: (_: x2) => Type1<f, x3>, f4: (_: x3) => Type1<f, x4>, f5: (_: x4) => Type1<f, x5>, f6: (_: x5) => Type1<f, x6>, f7: (_: x6) => Type1<f, x7>, f8: (_: x7) => Type1<f, x8>, f9: (_: x8) => Type1<f, x9>, f10: (_: x9) => Type1<f, x10>, f11: (_: x10) => Type1<f, x11>, f12: (_: x11) => Type1<f, b>): Type1<f, b>;
      pipeK<x0, x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, b>(f0: (_: a) => Type1<f, x0>, f1: (_: x0) => Type1<f, x1>, f2: (_: x1) => Type1<f, x2>, f3: (_: x2) => Type1<f, x3>, f4: (_: x3) => Type1<f, x4>, f5: (_: x4) => Type1<f, x5>, f6: (_: x5) => Type1<f, x6>, f7: (_: x6) => Type1<f, x7>, f8: (_: x7) => Type1<f, x8>, f9: (_: x8) => Type1<f, x9>, f10: (_: x9) => Type1<f, x10>, f11: (_: x10) => Type1<f, x11>, f12: (_: x11) => Type1<f, x12>, f13: (_: x12) => Type1<f, b>): Type1<f, b>;
      pipeK<x0, x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13, b>(f0: (_: a) => Type1<f, x0>, f1: (_: x0) => Type1<f, x1>, f2: (_: x1) => Type1<f, x2>, f3: (_: x2) => Type1<f, x3>, f4: (_: x3) => Type1<f, x4>, f5: (_: x4) => Type1<f, x5>, f6: (_: x5) => Type1<f, x6>, f7: (_: x6) => Type1<f, x7>, f8: (_: x7) => Type1<f, x8>, f9: (_: x8) => Type1<f, x9>, f10: (_: x9) => Type1<f, x10>, f11: (_: x10) => Type1<f, x11>, f12: (_: x11) => Type1<f, x12>, f13: (_: x12) => Type1<f, x13>, f14: (_: x13) => Type1<f, b>): Type1<f, b>;
      pipeK<x0, x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13, x14, b>(f0: (_: a) => Type1<f, x0>, f1: (_: x0) => Type1<f, x1>, f2: (_: x1) => Type1<f, x2>, f3: (_: x2) => Type1<f, x3>, f4: (_: x3) => Type1<f, x4>, f5: (_: x4) => Type1<f, x5>, f6: (_: x5) => Type1<f, x6>, f7: (_: x6) => Type1<f, x7>, f8: (_: x7) => Type1<f, x8>, f9: (_: x8) => Type1<f, x9>, f10: (_: x9) => Type1<f, x10>, f11: (_: x10) => Type1<f, x11>, f12: (_: x11) => Type1<f, x12>, f13: (_: x12) => Type1<f, x13>, f14: (_: x13) => Type1<f, x14>, f15: (_: x14) => Type1<f, b>): Type1<f, b>;
      pipeK<x0, x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13, x14, x15, b>(f0: (_: a) => Type1<f, x0>, f1: (_: x0) => Type1<f, x1>, f2: (_: x1) => Type1<f, x2>, f3: (_: x2) => Type1<f, x3>, f4: (_: x3) => Type1<f, x4>, f5: (_: x4) => Type1<f, x5>, f6: (_: x5) => Type1<f, x6>, f7: (_: x6) => Type1<f, x7>, f8: (_: x7) => Type1<f, x8>, f9: (_: x8) => Type1<f, x9>, f10: (_: x9) => Type1<f, x10>, f11: (_: x10) => Type1<f, x11>, f12: (_: x11) => Type1<f, x12>, f13: (_: x12) => Type1<f, x13>, f14: (_: x13) => Type1<f, x14>, f15: (_: x14) => Type1<f, x15>, f16: (_: x15) => Type1<f, b>): Type1<f, b>;
      pipeK<x0, x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13, x14, x15, x16, b>(f0: (_: a) => Type1<f, x0>, f1: (_: x0) => Type1<f, x1>, f2: (_: x1) => Type1<f, x2>, f3: (_: x2) => Type1<f, x3>, f4: (_: x3) => Type1<f, x4>, f5: (_: x4) => Type1<f, x5>, f6: (_: x5) => Type1<f, x6>, f7: (_: x6) => Type1<f, x7>, f8: (_: x7) => Type1<f, x8>, f9: (_: x8) => Type1<f, x9>, f10: (_: x9) => Type1<f, x10>, f11: (_: x10) => Type1<f, x11>, f12: (_: x11) => Type1<f, x12>, f13: (_: x12) => Type1<f, x13>, f14: (_: x13) => Type1<f, x14>, f15: (_: x14) => Type1<f, x15>, f16: (_: x15) => Type1<f, x16>, f17: (_: x16) => Type1<f, b>): Type1<f, b>;
      pipeK<x0, x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13, x14, x15, x16, x17, b>(f0: (_: a) => Type1<f, x0>, f1: (_: x0) => Type1<f, x1>, f2: (_: x1) => Type1<f, x2>, f3: (_: x2) => Type1<f, x3>, f4: (_: x3) => Type1<f, x4>, f5: (_: x4) => Type1<f, x5>, f6: (_: x5) => Type1<f, x6>, f7: (_: x6) => Type1<f, x7>, f8: (_: x7) => Type1<f, x8>, f9: (_: x8) => Type1<f, x9>, f10: (_: x9) => Type1<f, x10>, f11: (_: x10) => Type1<f, x11>, f12: (_: x11) => Type1<f, x12>, f13: (_: x12) => Type1<f, x13>, f14: (_: x13) => Type1<f, x14>, f15: (_: x14) => Type1<f, x15>, f16: (_: x15) => Type1<f, x16>, f17: (_: x16) => Type1<f, x17>, f18: (_: x17) => Type1<f, b>): Type1<f, b>;
      pipeK<x0, x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13, x14, x15, x16, x17, x18, b>(f0: (_: a) => Type1<f, x0>, f1: (_: x0) => Type1<f, x1>, f2: (_: x1) => Type1<f, x2>, f3: (_: x2) => Type1<f, x3>, f4: (_: x3) => Type1<f, x4>, f5: (_: x4) => Type1<f, x5>, f6: (_: x5) => Type1<f, x6>, f7: (_: x6) => Type1<f, x7>, f8: (_: x7) => Type1<f, x8>, f9: (_: x8) => Type1<f, x9>, f10: (_: x9) => Type1<f, x10>, f11: (_: x10) => Type1<f, x11>, f12: (_: x11) => Type1<f, x12>, f13: (_: x12) => Type1<f, x13>, f14: (_: x13) => Type1<f, x14>, f15: (_: x14) => Type1<f, x15>, f16: (_: x15) => Type1<f, x16>, f17: (_: x16) => Type1<f, x17>, f18: (_: x17) => Type1<f, x18>, f19: (_: x18) => Type1<f, b>): Type1<f, b>;
    }

    export interface PipeKleisliValue_2<f extends Generic2, b> {
      pipeK<a>(): Type2<f, a, b>;
      pipeK<a, c>(f0: (_: b) => Type2<f, a, c>): Type2<f, a, c>;
      pipeK<a, x0, c>(f0: (_: b) => Type2<f, a, x0>, f1: (_: x0) => Type2<f, a, c>): Type2<f, a, c>;
      pipeK<a, x0, x1, c>(f0: (_: b) => Type2<f, a, x0>, f1: (_: x0) => Type2<f, a, x1>, f2: (_: x1) => Type2<f, a, c>): Type2<f, a, c>;
      pipeK<a, x0, x1, x2, c>(f0: (_: b) => Type2<f, a, x0>, f1: (_: x0) => Type2<f, a, x1>, f2: (_: x1) => Type2<f, a, x2>, f3: (_: x2) => Type2<f, a, c>): Type2<f, a, c>;
      pipeK<a, x0, x1, x2, x3, c>(f0: (_: b) => Type2<f, a, x0>, f1: (_: x0) => Type2<f, a, x1>, f2: (_: x1) => Type2<f, a, x2>, f3: (_: x2) => Type2<f, a, x3>, f4: (_: x3) => Type2<f, a, c>): Type2<f, a, c>;
      pipeK<a, x0, x1, x2, x3, x4, c>(f0: (_: b) => Type2<f, a, x0>, f1: (_: x0) => Type2<f, a, x1>, f2: (_: x1) => Type2<f, a, x2>, f3: (_: x2) => Type2<f, a, x3>, f4: (_: x3) => Type2<f, a, x4>, f5: (_: x4) => Type2<f, a, c>): Type2<f, a, c>;
      pipeK<a, x0, x1, x2, x3, x4, x5, c>(f0: (_: b) => Type2<f, a, x0>, f1: (_: x0) => Type2<f, a, x1>, f2: (_: x1) => Type2<f, a, x2>, f3: (_: x2) => Type2<f, a, x3>, f4: (_: x3) => Type2<f, a, x4>, f5: (_: x4) => Type2<f, a, x5>, f6: (_: x5) => Type2<f, a, c>): Type2<f, a, c>;
      pipeK<a, x0, x1, x2, x3, x4, x5, x6, c>(f0: (_: b) => Type2<f, a, x0>, f1: (_: x0) => Type2<f, a, x1>, f2: (_: x1) => Type2<f, a, x2>, f3: (_: x2) => Type2<f, a, x3>, f4: (_: x3) => Type2<f, a, x4>, f5: (_: x4) => Type2<f, a, x5>, f6: (_: x5) => Type2<f, a, x6>, f7: (_: x6) => Type2<f, a, c>): Type2<f, a, c>;
      pipeK<a, x0, x1, x2, x3, x4, x5, x6, x7, c>(f0: (_: b) => Type2<f, a, x0>, f1: (_: x0) => Type2<f, a, x1>, f2: (_: x1) => Type2<f, a, x2>, f3: (_: x2) => Type2<f, a, x3>, f4: (_: x3) => Type2<f, a, x4>, f5: (_: x4) => Type2<f, a, x5>, f6: (_: x5) => Type2<f, a, x6>, f7: (_: x6) => Type2<f, a, x7>, f8: (_: x7) => Type2<f, a, c>): Type2<f, a, c>;
      pipeK<a, x0, x1, x2, x3, x4, x5, x6, x7, x8, c>(f0: (_: b) => Type2<f, a, x0>, f1: (_: x0) => Type2<f, a, x1>, f2: (_: x1) => Type2<f, a, x2>, f3: (_: x2) => Type2<f, a, x3>, f4: (_: x3) => Type2<f, a, x4>, f5: (_: x4) => Type2<f, a, x5>, f6: (_: x5) => Type2<f, a, x6>, f7: (_: x6) => Type2<f, a, x7>, f8: (_: x7) => Type2<f, a, x8>, f9: (_: x8) => Type2<f, a, c>): Type2<f, a, c>;
      pipeK<a, x0, x1, x2, x3, x4, x5, x6, x7, x8, x9, c>(f0: (_: b) => Type2<f, a, x0>, f1: (_: x0) => Type2<f, a, x1>, f2: (_: x1) => Type2<f, a, x2>, f3: (_: x2) => Type2<f, a, x3>, f4: (_: x3) => Type2<f, a, x4>, f5: (_: x4) => Type2<f, a, x5>, f6: (_: x5) => Type2<f, a, x6>, f7: (_: x6) => Type2<f, a, x7>, f8: (_: x7) => Type2<f, a, x8>, f9: (_: x8) => Type2<f, a, x9>, f10: (_: x9) => Type2<f, a, c>): Type2<f, a, c>;
      pipeK<a, x0, x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, c>(f0: (_: b) => Type2<f, a, x0>, f1: (_: x0) => Type2<f, a, x1>, f2: (_: x1) => Type2<f, a, x2>, f3: (_: x2) => Type2<f, a, x3>, f4: (_: x3) => Type2<f, a, x4>, f5: (_: x4) => Type2<f, a, x5>, f6: (_: x5) => Type2<f, a, x6>, f7: (_: x6) => Type2<f, a, x7>, f8: (_: x7) => Type2<f, a, x8>, f9: (_: x8) => Type2<f, a, x9>, f10: (_: x9) => Type2<f, a, x10>, f11: (_: x10) => Type2<f, a, c>): Type2<f, a, c>;
      pipeK<a, x0, x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, c>(f0: (_: b) => Type2<f, a, x0>, f1: (_: x0) => Type2<f, a, x1>, f2: (_: x1) => Type2<f, a, x2>, f3: (_: x2) => Type2<f, a, x3>, f4: (_: x3) => Type2<f, a, x4>, f5: (_: x4) => Type2<f, a, x5>, f6: (_: x5) => Type2<f, a, x6>, f7: (_: x6) => Type2<f, a, x7>, f8: (_: x7) => Type2<f, a, x8>, f9: (_: x8) => Type2<f, a, x9>, f10: (_: x9) => Type2<f, a, x10>, f11: (_: x10) => Type2<f, a, x11>, f12: (_: x11) => Type2<f, a, c>): Type2<f, a, c>;
      pipeK<a, x0, x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, c>(f0: (_: b) => Type2<f, a, x0>, f1: (_: x0) => Type2<f, a, x1>, f2: (_: x1) => Type2<f, a, x2>, f3: (_: x2) => Type2<f, a, x3>, f4: (_: x3) => Type2<f, a, x4>, f5: (_: x4) => Type2<f, a, x5>, f6: (_: x5) => Type2<f, a, x6>, f7: (_: x6) => Type2<f, a, x7>, f8: (_: x7) => Type2<f, a, x8>, f9: (_: x8) => Type2<f, a, x9>, f10: (_: x9) => Type2<f, a, x10>, f11: (_: x10) => Type2<f, a, x11>, f12: (_: x11) => Type2<f, a, x12>, f13: (_: x12) => Type2<f, a, c>): Type2<f, a, c>;
      pipeK<a, x0, x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13, c>(f0: (_: b) => Type2<f, a, x0>, f1: (_: x0) => Type2<f, a, x1>, f2: (_: x1) => Type2<f, a, x2>, f3: (_: x2) => Type2<f, a, x3>, f4: (_: x3) => Type2<f, a, x4>, f5: (_: x4) => Type2<f, a, x5>, f6: (_: x5) => Type2<f, a, x6>, f7: (_: x6) => Type2<f, a, x7>, f8: (_: x7) => Type2<f, a, x8>, f9: (_: x8) => Type2<f, a, x9>, f10: (_: x9) => Type2<f, a, x10>, f11: (_: x10) => Type2<f, a, x11>, f12: (_: x11) => Type2<f, a, x12>, f13: (_: x12) => Type2<f, a, x13>, f14: (_: x13) => Type2<f, a, c>): Type2<f, a, c>;
      pipeK<a, x0, x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13, x14, c>(f0: (_: b) => Type2<f, a, x0>, f1: (_: x0) => Type2<f, a, x1>, f2: (_: x1) => Type2<f, a, x2>, f3: (_: x2) => Type2<f, a, x3>, f4: (_: x3) => Type2<f, a, x4>, f5: (_: x4) => Type2<f, a, x5>, f6: (_: x5) => Type2<f, a, x6>, f7: (_: x6) => Type2<f, a, x7>, f8: (_: x7) => Type2<f, a, x8>, f9: (_: x8) => Type2<f, a, x9>, f10: (_: x9) => Type2<f, a, x10>, f11: (_: x10) => Type2<f, a, x11>, f12: (_: x11) => Type2<f, a, x12>, f13: (_: x12) => Type2<f, a, x13>, f14: (_: x13) => Type2<f, a, x14>, f15: (_: x14) => Type2<f, a, c>): Type2<f, a, c>;
      pipeK<a, x0, x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13, x14, x15, c>(f0: (_: b) => Type2<f, a, x0>, f1: (_: x0) => Type2<f, a, x1>, f2: (_: x1) => Type2<f, a, x2>, f3: (_: x2) => Type2<f, a, x3>, f4: (_: x3) => Type2<f, a, x4>, f5: (_: x4) => Type2<f, a, x5>, f6: (_: x5) => Type2<f, a, x6>, f7: (_: x6) => Type2<f, a, x7>, f8: (_: x7) => Type2<f, a, x8>, f9: (_: x8) => Type2<f, a, x9>, f10: (_: x9) => Type2<f, a, x10>, f11: (_: x10) => Type2<f, a, x11>, f12: (_: x11) => Type2<f, a, x12>, f13: (_: x12) => Type2<f, a, x13>, f14: (_: x13) => Type2<f, a, x14>, f15: (_: x14) => Type2<f, a, x15>, f16: (_: x15) => Type2<f, a, c>): Type2<f, a, c>;
      pipeK<a, x0, x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13, x14, x15, x16, c>(f0: (_: b) => Type2<f, a, x0>, f1: (_: x0) => Type2<f, a, x1>, f2: (_: x1) => Type2<f, a, x2>, f3: (_: x2) => Type2<f, a, x3>, f4: (_: x3) => Type2<f, a, x4>, f5: (_: x4) => Type2<f, a, x5>, f6: (_: x5) => Type2<f, a, x6>, f7: (_: x6) => Type2<f, a, x7>, f8: (_: x7) => Type2<f, a, x8>, f9: (_: x8) => Type2<f, a, x9>, f10: (_: x9) => Type2<f, a, x10>, f11: (_: x10) => Type2<f, a, x11>, f12: (_: x11) => Type2<f, a, x12>, f13: (_: x12) => Type2<f, a, x13>, f14: (_: x13) => Type2<f, a, x14>, f15: (_: x14) => Type2<f, a, x15>, f16: (_: x15) => Type2<f, a, x16>, f17: (_: x16) => Type2<f, a, c>): Type2<f, a, c>;
      pipeK<a, x0, x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13, x14, x15, x16, x17, c>(f0: (_: b) => Type2<f, a, x0>, f1: (_: x0) => Type2<f, a, x1>, f2: (_: x1) => Type2<f, a, x2>, f3: (_: x2) => Type2<f, a, x3>, f4: (_: x3) => Type2<f, a, x4>, f5: (_: x4) => Type2<f, a, x5>, f6: (_: x5) => Type2<f, a, x6>, f7: (_: x6) => Type2<f, a, x7>, f8: (_: x7) => Type2<f, a, x8>, f9: (_: x8) => Type2<f, a, x9>, f10: (_: x9) => Type2<f, a, x10>, f11: (_: x10) => Type2<f, a, x11>, f12: (_: x11) => Type2<f, a, x12>, f13: (_: x12) => Type2<f, a, x13>, f14: (_: x13) => Type2<f, a, x14>, f15: (_: x14) => Type2<f, a, x15>, f16: (_: x15) => Type2<f, a, x16>, f17: (_: x16) => Type2<f, a, x17>, f18: (_: x17) => Type2<f, a, c>): Type2<f, a, c>;
      pipeK<a, x0, x1, x2, x3, x4, x5, x6, x7, x8, x9, x10, x11, x12, x13, x14, x15, x16, x17, x18, c>(f0: (_: b) => Type2<f, a, x0>, f1: (_: x0) => Type2<f, a, x1>, f2: (_: x1) => Type2<f, a, x2>, f3: (_: x2) => Type2<f, a, x3>, f4: (_: x3) => Type2<f, a, x4>, f5: (_: x4) => Type2<f, a, x5>, f6: (_: x5) => Type2<f, a, x6>, f7: (_: x6) => Type2<f, a, x7>, f8: (_: x7) => Type2<f, a, x8>, f9: (_: x8) => Type2<f, a, x9>, f10: (_: x9) => Type2<f, a, x10>, f11: (_: x10) => Type2<f, a, x11>, f12: (_: x11) => Type2<f, a, x12>, f13: (_: x12) => Type2<f, a, x13>, f14: (_: x13) => Type2<f, a, x14>, f15: (_: x14) => Type2<f, a, x15>, f16: (_: x15) => Type2<f, a, x16>, f17: (_: x16) => Type2<f, a, x17>, f18: (_: x17) => Type2<f, a, x18>, f19: (_: x18) => Type2<f, a, c>): Type2<f, a, c>;
    }"
  `);
});
