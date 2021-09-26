/**
 * 在面向对象语言中，类是一种面向对象计算机编程语言的构造，
 * 是创建对象的蓝图，描述了所创建的对象共同的属性和方法。
*/

// 类

class Gretter {
  // 静态属性
  static cname: string = 'Greeter'
  // 成员属性
  greeting: string

  constructor(message: string) {
    this.greeting = message
  }

  // 静态方法
  static getClassName() {
    return 'Class name is Greeter'
  }

  // 成员方法
  greet() {
    return 'Hello' + this.greeting
  }
}

let greeter = new Gretter('world')



// 类的继承

/**
 * 继承 (Inheritance) 是一种联结类与类的层次模型。
 * 指的是一个类（称为子类、子接口）继承另外的一个类（称为父类、父接口）的功能，
 * 并可以增加它自己的新功能的能力，继承是类与类或者接口与接口之间最常见的关系。
*/

class Animal1 {
  name: string

  constructor(name: string) {
    this.name = name 
  }

  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters
    }m.`)
  }
}


class Snake extends Animal1 {
  constructor(name: string) {
    super(name)
  }

  move(distanceInMeters = 5) {
    console.log('slithering...')
    super.move(distanceInMeters)
  }
}

let sam = new Snake("sammy the python")
sam.move()




// ECNAScript 私有字段

class Person {
  #name: string

  constructor(name: string) {
    this.#name = name
  }

  greet() {
    console.log(`Hello, my name is ${this.#name}`)
  }
}

let semlinker = new Person('Semlinker')

semlinker.#name // Property '#name' is not accessible outside class 'Person' because it has a private identifier.

/**
 * 与常规属性（甚至使用 private 修饰符声明的属性）不同，私有字段要牢记以下规则：
 * 私有字段以 # 字符开头，有时我们称之为私有名称
 * 每个私有字段名称都唯一地限定于其包含的类
 * 不能在私有字段上使用 TypeScript 可访问性修饰符（如 public 或 private）
 * 私有字段不能在包含的类之外访问，甚至不能被检测到
*/

