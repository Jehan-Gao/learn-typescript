
/**
 * unknown 类型只能被赋值给 any 类型 和 unknown 类型本身
*/

let value: unknown

let value1: unknown = value // ok

let value2: any = value // ok

let value3: boolean = value // Error

let value4: string = value // Error

/**
 * 将变量类型设置为unknown后，对该变量的所有操作都不再被认为是类型正确的。
*/

value.foo.bar  // Error

value.trim() // Error

value() // Error
