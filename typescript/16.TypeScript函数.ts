
/**
 * 相比JavaScript函数来说，TypeScript函数有严格的类型
*/


// 可选参数及默认参数

function createUserId(name: string = 'jack', id: number, age?: number): string {
  return name + id
}


/**
 * 函数重载或方法重载是使用相同名称和不同参数数量或类型创建多个方法的一种能力。
 * 要解决前面遇到的问题，方法就是为同一个函数提供多个函数类型定义来进行函数重载，
 * 编译器会根据这个列表去处理函数的调用。
*/

// 普通函数重载
type Comninable = string | number

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Comninable, b: Comninable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString()
  }
  return a + b
}


// 方法重载

class Calculator {
  add(a: number, b: number): number;
  add(a: string, b: string): string;
  add(a: string, b: number): string;
  add(a: number, b: string): string;
  add(a: Comninable, b: Comninable) {
    if (typeof a === 'string' || typeof b === 'string') {
      return a.toString() + b.toString()
    }
    return a + b
  }
}

const calculator = new Calculator()
const result = calculator.add('jack', 'tom')

