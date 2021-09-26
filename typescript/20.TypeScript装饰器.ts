
/**
 * 装饰器是什么
 * 它是一个表达式
 * 该表达式被执行后，返回一个函数
 * 函数的入参分别为 target, name 和 descriptor
 * 执行该函数后，可能返回 descriptor 对象，用于配置 target 对象
*/

/**
 * 装饰器的分类：
 * 类装饰器
 * 属性装饰器
 * 方法装饰器
 * 参数装饰器
*/



// 类装饰器

/**
 * 类装饰器声明
 * declare type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void
*/

// function Greeter(target: Function): void {
//   target.prototype.greet = function(): void {
//     console.log('Hello semlinker')
//   }
// }


// @Greeter
// class Greeting {
//   [x: string]: any
//   constructor() {

//   }
// }

// let myGreeting = new Greeting()
// myGreeting.greet()


// 装饰器如何自定义输出内容？ 

function Greeter(greeting: string) {
  return function (target: Function) {
    target.prototype.greet = function (): void {
      console.log(greeting)
    }
  }
}

@Greeter('Hello world')
class Greeting {
  [x: string]: any
  constructor() {

  }
}

let myGreeting = new Greeting()
myGreeting.greet()





// 属性装饰器

/**
 * 属性装饰器声明
 * declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void
*/

function logProperty(target: any, key: string) {
  delete target[key]

  const backingField = '_' + key

  Object.defineProperty(target, backingField, {
    writable: true,
    enumerable: true,
    configurable: true
  })

  // property getter 
  const getter = function (this: any) {
    const currVal = this[backingField]
    console.log(`Get: ${key} => ${currVal}`)
    return currVal
  }
  // property setter 
  const setter = function (this: any, newVal: any) {
    console.log(`Set: ${key} => ${newVal}`)
    this[backingField] = newVal
  }

  Object.defineProperty(target, key, {
    get:getter,
    set:setter,
    enumerable: true,
    configurable: true
  })
}

class Student {
  @logProperty
  public name: string

  constructor(name: string) {
    this.name = name
  }
}


const p1 = new Student('jack')
p1.name = 'tom'




// 方法装饰器

/**
 * 方法装饰器声明：
 * declare type MethodDecorator = <T>(target: Object, propertyKey: string | symbol,
 * descriptor: TypePropertyDescript<T>) => TypedPropertyDescriptor<T> | void;
*/

/**
 * target: Object - 被装饰的类
 * propertyKey: string | symbol - 方法名
 * descriptor: TypePropertyDescript - 属性描述符
*/

function LogOutput(target: Function, key: string, descriptor: any) {
  let originalMethod = descriptor.value
  let newMethod = function(...args: any[]): any {
    let result: any = originalMethod.apply(this, args)
    if (!this.loggedOutput) {
      this.loggedOutput = new Array<any>()
    }
    this.loggedOutput.push({
      method: key,
      parameters: args,
      output: result,
      timestamp: new Date()
    })
    return result
  }
  descriptor.value = newMethod
}

class Computed {
  @LogOutput
  double(num: number): number {
    return num * 2
  }
}

let comp = new Computed()
comp.double(11)




// 参数装饰器

/**
 * 参数装饰器声明：
 * declare type ParameterDecorator = (target: Object, propertyKey: string | symbol,
 * parameterIndex: number) => void
*/

function Log(target: Function, key: string, parameterIndex: number) {
  let functionLogged = key || target.prototype.constructor.name
  console.log(`The parameter in position ${parameterIndex} at ${functionLogged} has been decorated`)
}


class Greeter2 {
  greeting: string
  constructor(@Log phrase: string) {
    this.greeting = phrase
  }
}

const greeter2 = new Greeter2('jehan')




