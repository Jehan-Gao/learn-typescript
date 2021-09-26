/**
 * 设计泛型的关键目的是在成员之间提供有意义的约束，
 * 这些成员可以是：类的实例成员、类的方法、函数参数和函数返回值。
 * 
 * 泛型（Generics）是允许同一个函数接受不同类型参数的一种模板。
 * 相比于使用 any 类型，使用泛型来创建可复用的组件要更好，因为泛型会保留参数类型。
*/


// 泛型接口

interface GenericIdentityFn<T> {
  (arg: T): T
}


// 泛型类

class GenericNumer<T> {
  zeroValue: T
  add: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumer<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function(x, y) {
  return x + y
}


// 泛型变量

/**
 * T（Type）：表示一个 TypeScript 类型
 * K（Key）：表示对象中的键类型
 * V（Value）：表示对象中的值类型
 * E（Element）：表示元素类型
*/


// keyof : 用来获取一个对象中的所有key值

interface Person {
  name: string,
  age: number
}

type k1 = keyof Person  // 'name' | 'age'
type k2 = keyof Person[]  // 'length' | 'toString' | 'pop' | 'concat' | 'join'
type k3 = keyof { [x: string]: Person } // string | number   对象的索引类型不区分 string 和 number , number 也会被转换为 string


// in : 用来遍历枚举类型

type keys = "a" | "b" | "c"

type Obj = {
  [p in keys]: any 
}
// { a: any, b: any, c: any}


// infer : 在条件类型语句中，可以用 infer 声明一个类型变量并且对它进行使用

type ReturnType2<T> = T extends (
  ...args: any[]
) => infer R ? R : any

// 以上代码中 infer R 就是声明一个变量来承载传入函数签名的返回值类型，简单说就是用它取到函数返回值的类型方便之后使用



// extends : 有时候我们定义的泛型不想过于灵活或者说想要继承某些类等，可以通过 extends 关键字添加泛型约束

interface ILengwise {
  length: number
}

function loggingIdentity<T extends ILengwise>(arg: T) : T {
  console.log(arg.length)
  return arg
}

loggingIdentity({ length: 3, value: 1})




// Partial  Partial<T>的作用就是将某个类型的属性全部变为可选项 ？

/**
 * type Partial<T> = {
 *  [P in keyof T]?: T[P]
 * }
*/

interface Todo {
  title: string,
  description: string
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return {...todo, ...fieldsToUpdate}
}


const todo1 = {
  title: 'todo1 title',
  description: 'todo1 description'
}

updateTodo(todo1, {
  description: 'this is fieldsToUpdate description'
})











