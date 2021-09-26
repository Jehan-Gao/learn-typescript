/**
 * 装饰器是什么
 * 它是一个表达式
 * 该表达式被执行后，返回一个函数
 * 函数的入参分别为 target, name 和 descriptor
 * 执行该函数后，可能返回 descriptor 对象，用于配置 target 对象
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
function Greeter(greeting) {
    return function (target) {
        target.prototype.greet = function () {
            console.log(greeting);
        };
    };
}
var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting = __decorate([
        Greeter('Hello world')
    ], Greeting);
    return Greeting;
}());
var myGreeting = new Greeting();
myGreeting.greet();
// 属性装饰器
/**
 * 属性装饰器声明
 * declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void
*/
function logProperty(target, key) {
    delete target[key];
    var backingField = '_' + key;
    Object.defineProperty(target, backingField, {
        writable: true,
        enumerable: true,
        configurable: true
    });
    // property getter 
    var getter = function () {
        var currVal = this[backingField];
        console.log("Get: " + key + " => " + currVal);
        return currVal;
    };
    // property setter 
    var setter = function (newVal) {
        console.log("Set: " + key + " => " + newVal);
        this[backingField] = newVal;
    };
    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    });
}
var Student = /** @class */ (function () {
    function Student(name) {
        this.name = name;
    }
    __decorate([
        logProperty
    ], Student.prototype, "name");
    return Student;
}());
var p1 = new Student('jack');
p1.name = 'tom';
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
function LogOutput(target, key, descriptor) {
    var originalMethod = descriptor.value;
    var newMethod = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var result = originalMethod.apply(this, args);
        if (!this.loggedOutput) {
            this.loggedOutput = new Array();
        }
        this.loggedOutput.push({
            method: key,
            parameters: args,
            output: result,
            timestamp: new Date()
        });
        return result;
    };
    descriptor.value = newMethod;
}
var Computed = /** @class */ (function () {
    function Computed() {
    }
    Computed.prototype.double = function (num) {
        return num * 2;
    };
    __decorate([
        LogOutput
    ], Computed.prototype, "double");
    return Computed;
}());
var comp = new Computed();
comp.double(11);
// 参数装饰器
/**
 * 参数装饰器声明：
 * declare type ParameterDecorator = (target: Object, propertyKey: string | symbol,
 * parameterIndex: number) => void
*/
function Log(target, key, parameterIndex) {
    var functionLogged = key || target.prototype.constructor.name;
    console.log("The parameter in position " + parameterIndex + " at " + functionLogged + " has been decorated");
}
var Greeter2 = /** @class */ (function () {
    function Greeter2(phrase) {
        this.greeting = phrase;
    }
    Greeter2 = __decorate([
        __param(0, Log)
    ], Greeter2);
    return Greeter2;
}());
var greeter2 = new Greeter2('jehan');
