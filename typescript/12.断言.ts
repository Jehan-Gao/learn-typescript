/**
 * 有时候你会遇到这样的情况，你会比 TypeScript 更了解某个值的详细信息。
 * 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。 
 * 通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。
 * 类型断言好比其他语言里的类型转换，但是不进行特殊的数据检查和解构。
 * 它没有运行时的影响，只是在编译阶段起作用。
*/

// 1. 尖括号
let someValue: any = 'this is a string'
let strLength: number = (<string>someValue).length


// 2. as
let someValue2: any = 'this is a string'
let strLength2: number = (someValue as string).length