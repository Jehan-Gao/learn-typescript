
/**
 * 某种程度上来说，void 类型像是与 any 类型相反，
 * 它表示没有任何类型。当一个函数没有返回值时，你通常会见到其返回值类型是 void
*/

function foo(): void {
  console.log('foo()')
}


// 声明一个void 的变量时，值只能是 undefined 或 null
let a: void = undefined

let b: void = null

let c: void = '123'  //Error
