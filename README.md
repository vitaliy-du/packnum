packnum
===========

[![npm version][npm-image]][npm-url] [![license][license-image]][license-url] [![downloads][downloads-image]][downloads-url]

Tiny library that allow you encode/decode numbers to represent as string symbols.
You can reduce long number like 2043958943.54321 to compact string kyЫ5qдH5.
Order of sorting encoded numbers will match string sort for numbers with same length.

Install with [npm](https://www.npmjs.com/):

npm:
```sh
npm install packnum --save
```

### How to use
```tsx
import {packNumDecode, packNumEncode} from "packnum";

let encoded = packNumEncode(3565967548);
console.log(encoded, '==', packNumDecode(encoded));
// -> Danny0 == 3565967548

encoded = packNumEncode(98009904585782);
console.log(encoded, '==', packNumDecode(encoded));
// -> Maximus0 == 98009904585782

encoded = packNumEncode(972921984562);
console.log(encoded, '==', packNumDecode(encoded));
// -> Serjio0 == 972921984562

encoded = packNumEncode(20439584373019430);
console.log(encoded, '==', packNumDecode(encoded));
// -> adsPlace0 == 20439584373019430

encoded = packNumEncode(-12345678);
console.log(encoded, '==', packNumDecode(encoded));
// -> ыEznБ == -12345678

encoded = packNumEncode(123456.789);
console.log(encoded, '==', packNumDecode(encoded));
// -> wрQL3 == 123456.789

encoded = packNumEncode(-123456.789);
console.log(encoded, '==', packNumDecode(encoded));
// -> ЖGжлД == -123456.789
```

## Doc
```ts
/**
 * Return numeric value of string.
 *
 * @param value PackNum encoded string.
 */
export function packNumDecode(value: string): number;

/**
 * Return string value of number.
 *
 * @param value Numeric value.
 */
export function packNumEncode(value: number): string;
```

## License

[MIT](LICENSE). Copyright (c) 2021 Vitaliy Dyukar.

[npm-image]: https://img.shields.io/npm/v/packnum.svg?style=flat-square
[npm-url]: https://npmjs.org/package/packnum
[license-image]: https://img.shields.io/npm/l/packnum.svg?style=flat-square
[license-url]: https://npmjs.org/package/packnum
[downloads-image]: http://img.shields.io/npm/dm/packnum.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/packnum