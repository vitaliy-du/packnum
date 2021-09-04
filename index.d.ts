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