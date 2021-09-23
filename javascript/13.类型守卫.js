/**
 * 类型保护是可执行运行时检查的一种表达式，用于确保该类型在一定的范围内。
 * 换句话说，类型保护可以保证一个字符串是一个字符串，尽管它的值也可以是一个数值。
 * 类型保护与特性检测并不是完全不同，其主要思想是尝试检测属性、方法或原型，以确定如何处理值。
 * 目前主要有四种的方式来实现类型保护:
*/
function printEmployeeInformation(emp) {
    console.log("Name: " + emp.name);
    if ('privileges' in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log("Start Date: " + emp.startDate);
    }
}
// 2. typeof 关键字
function padLeft(value, padding) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }
    throw new Error("Expected string or number, got '" + padding + "'.");
}
var SpaceRepeatPadder = /** @class */ (function () {
    function SpaceRepeatPadder(numSpace) {
        this.numSpace = numSpace;
    }
    SpaceRepeatPadder.prototype.getPaddingString = function () {
        return Array(this.numSpace + 1).join(' ');
    };
    return SpaceRepeatPadder;
}());
var StringPadder = /** @class */ (function () {
    function StringPadder(value) {
        this.value = value;
    }
    StringPadder.prototype.getPaddingString = function () {
        return this.value;
    };
    return StringPadder;
}());
var padder = new SpaceRepeatPadder(6);
if (padder instanceof SpaceRepeatPadder) {
    // padder 的类型收窄为 SpaceRepeatPadder
}
// 4. 自定义类型保护的类型谓词
function isNumber(x) {
    return typeof x === 'number';
}
function isString(x) {
    return typeof x === 'string';
}
// example:
function isString2(x) {
    return typeof x === 'string';
}
function example(value) {
    if (isString(value)) {
        // 编译的时会报错，运行时也报错，因为value 是 string 不存在 toExponential方法
        console.log(value.toExponential(2));
    }
    // 编译时不会报错，运行时会报错
    console.log(value.toExponential(2));
}
function example2(value) {
    if (isString2(value)) {
        // value 为 any 类型，编译时不会报错，运行时会出错
        console.log(value.toExponential(2));
    }
    // 编译时不会报错，运行时会报错
    console.log(value.toExponential(2));
}
example('hello world');
example2('hello world');
/**
 * 在使用类型保护时，TS会进一步缩小变量的类型，上面 从 any 缩小了至 string
 * 类型保护的作用域仅仅在 if 后的块级作用域中生效
*/
