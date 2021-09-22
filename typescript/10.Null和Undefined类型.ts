/**
 * TypeScript 里，undefined 和 null 两者有各自的类型分别为 undefined 和 null
 * 默认情况下 null 和 undefined 是所有类型的子类型。 
 * 就是说你可以把 null 和 undefined 赋值给 number 类型的变量。
 * 然而，如果你指定了--strictNullChecks 标记，null 和 undefined 只能赋值给 void 和它们各自的类型。
*/

let u: undefined = undefined

let n: null = null
