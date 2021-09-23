/**
 * 类型保护是可执行运行时检查的一种表达式，用于确保该类型在一定的范围内。
 * 换句话说，类型保护可以保证一个字符串是一个字符串，尽管它的值也可以是一个数值。
 * 类型保护与特性检测并不是完全不同，其主要思想是尝试检测属性、方法或原型，以确定如何处理值。
 * 目前主要有四种的方式来实现类型保护:
*/

// 1. in 关键字

interface Admin {
  name: string,
  privileges: string[]
}

interface Employee {
  name: string,
  startDate: Date
}

type UnknownEmployee = Employee | Admin

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log(`Name: ${emp.name}`)
  if ('privileges' in emp) {
    console.log(`Privileges: ${emp.privileges}`)
  }
  if ('startDate' in emp) {
    console.log(`Start Date: ${emp.startDate}`)
  }
}


// 2. typeof 关键字

function padLeft(value: string, padding: string | number) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value
  }
  if (typeof padding === 'string') {
    return padding + value
  }
  throw new Error(`Expected string or number, got '${padding}'.`)
}

/**
 * typeof 类型保护只支持两种形式：typeof v === "typename" 和 typeof v !== typename，
 * "typename" 必须是 "number"， "string"， "boolean" 或 "symbol"。 
 * 但是 TypeScript 并不会阻止你与其它字符串比较，语言不会把那些表达式识别为类型保护。
*/


// 3. instanceof 关键字

interface Padder {
  getPaddingString(): string
}

class SpaceRepeatPadder implements Padder {
  constructor(private numSpace: number) {}
  
  getPaddingString() {
    return Array(this.numSpace + 1).join(' ')
  }
}

class StringPadder implements Padder {
  constructor(private value: string) {}

  getPaddingString() {
    return this.value
  }
}

let padder = new SpaceRepeatPadder(6)

if (padder instanceof SpaceRepeatPadder) {
  // padder 的类型收窄为 SpaceRepeatPadder
}



// 4. 自定义类型保护的类型谓词

function isNumber(x: any): x is number {
  return typeof x === 'number'
}

function isString(x: any): x is string {
  return typeof x === 'string'
}

// example:

function isString2(x: any): boolean {
  return typeof x === 'string'
}

function example(value: any) {
  if (isString(value)) {
    // 编译的时会报错，运行时也报错，因为value 是 string 不存在 toExponential方法
    console.log(value.toExponential(2))
  }

  // 编译时不会报错，运行时会报错
  console.log(value.toExponential(2))
}


function example2(value: any) {
  if (isString2(value)) {
    // value 为 any 类型，编译时不会报错，运行时会出错
    console.log(value.toExponential(2))
  }

  // 编译时不会报错，运行时会报错
  console.log(value.toExponential(2))
}

example('hello world')
example2('hello world')

/**
 * 在使用类型保护时，TS会进一步缩小变量的类型，上面 从 any 缩小了至 string
 * 类型保护的作用域仅仅在 if 后的块级作用域中生效
*/





