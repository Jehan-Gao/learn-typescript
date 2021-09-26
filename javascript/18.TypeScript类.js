/**
 * 在面向对象语言中，类是一种面向对象计算机编程语言的构造，
 * 是创建对象的蓝图，描述了所创建的对象共同的属性和方法。
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Person_name;
// 类
var Gretter = /** @class */ (function () {
    function Gretter(message) {
        this.greeting = message;
    }
    // 静态方法
    Gretter.getClassName = function () {
        return 'Class name is Greeter';
    };
    // 成员方法
    Gretter.prototype.greet = function () {
        return 'Hello' + this.greeting;
    };
    // 静态属性
    Gretter.cname = 'Greeter';
    return Gretter;
}());
var greeter = new Gretter('world');
// 类的继承
/**
 * 继承 (Inheritance) 是一种联结类与类的层次模型。
 * 指的是一个类（称为子类、子接口）继承另外的一个类（称为父类、父接口）的功能，
 * 并可以增加它自己的新功能的能力，继承是类与类或者接口与接口之间最常见的关系。
*/
var Animal1 = /** @class */ (function () {
    function Animal1(name) {
        this.name = name;
    }
    Animal1.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal1;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log('slithering...');
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal1));
var sam = new Snake("sammy the python");
sam.move();
// ECNAScript 私有字段
var Person = /** @class */ (function () {
    function Person(name) {
        _Person_name.set(this, void 0);
        __classPrivateFieldSet(this, _Person_name, name, "f");
    }
    Person.prototype.greet = function () {
        console.log("Hello, my name is " + __classPrivateFieldGet(this, _Person_name, "f"));
    };
    return Person;
}());
_Person_name = new WeakMap();
var semlinker = new Person('Semlinker');
semlinker.; // Property '#name' is not accessible outside class 'Person' because it has a private identifier.
/**
 * 与常规属性（甚至使用 private 修饰符声明的属性）不同，私有字段要牢记以下规则：
 * 私有字段以 # 字符开头，有时我们称之为私有名称
 * 每个私有字段名称都唯一地限定于其包含的类
 * 不能在私有字段上使用 TypeScript 可访问性修饰符（如 public 或 private）
 * 私有字段不能在包含的类之外访问，甚至不能被检测到
*/
