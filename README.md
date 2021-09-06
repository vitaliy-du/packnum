packnum
===========

[![npm version][npm-image]][npm-url] [![license][license-image]][license-url] [![downloads][downloads-image]][downloads-url]

Tiny library that allow you encode/decode numbers to represent as win-1251 string.
You can reduce long number like 2043958943.54321 to compact string kyЫ5qдHb.
Order of sorting encoded numbers will match string sort for numbers with same length.

Install with [npm](https://www.npmjs.com/):

npm:
```sh
npm install packnum --save
```

### How to use
```tsx
import {packNumDecode, packNumEncode} from "packnum";

let encoded = packNumEncode(114110961536);
console.log(encoded, '==', packNumDecode(encoded));
// -> Danny0 == 114110961536

encoded = packNumEncode(3136316946745024);
console.log(encoded, '==', packNumDecode(encoded));
// -> Maximus0 == 3136316946745024

encoded = packNumEncode(31133503505984);
console.log(encoded, '==', packNumDecode(encoded));
// -> Serjio0 == 31133503505984

encoded = packNumEncode(654066699936621800);
console.log(encoded, '==', packNumDecode(encoded));
// -> adsPlace0 == 654066699936621800

encoded = packNumEncode(-12345678);
console.log(encoded, '==', packNumDecode(encoded));
// -> йvцТ == -12345678

encoded = packNumEncode(123456.789);
console.log(encoded, '==', packNumDecode(encoded));
// -> wрQLZ == 123456.789

encoded = packNumEncode(-123456.789);
console.log(encoded, '==', packNumDecode(encoded));
// -> ЖGжлд == -123456.789

encoded = packNumEncode('bebab0ba', 16);
console.log(encoded, '==', packNumDecode(encoded, 16));
// -> lШh5Q == bebab0ba

encoded = packNumEncode('b0ba.beba', 16);
console.log(encoded, '==', packNumDecode(encoded, 16));
// -> Сl1NFgДСi == b0ba.beba

console.time('speedTest');
for (let i = -2500000; i < 2500000; i++) {
    const float = i / 2;
    encoded = packNumEncode(float);
    const decoded = packNumDecode(encoded);
    if (decoded != float) throw new Error(`Panic! Float is ${float}`);
}
console.timeEnd('speedTest');
// -> speedTest: ~1000 ms
```

## Doc
```ts
/**
 * Return numeric value of string.
 *
 * @param value PackNum encoded string;
 * @param radix Specifies a radix for converting numeric values to strings. By default is 10.
 */
export function packNumDecode(value: string, radix?: number): number | string;

/**
 * Return string value of number.
 *
 * @param value Numeric value;
 * @param radix A value between 2 and 36 that specifies the base of the number in string. By default is 10.
 */
export function packNumEncode(value: number | string, radix?: number): string;
```

## Thanks
- [Maxim Odorodko](https://www.npmjs.com/~ihaveataletotell) (for radix idea)

## License
[MIT](LICENSE). Copyright (c) 2021 Vitaliy Dyukar.

[npm-image]: https://img.shields.io/npm/v/packnum.svg?style=flat-square
[npm-url]: https://npmjs.org/package/packnum
[license-image]: https://img.shields.io/npm/l/packnum.svg?style=flat-square
[license-url]: https://npmjs.org/package/packnum
[downloads-image]: http://img.shields.io/npm/dm/packnum.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/packnum