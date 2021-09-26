/**
 * 相比JavaScript函数来说，TypeScript函数有严格的类型
*/
// 可选参数及默认参数
function createUserId(name, id, age) {
    if (name === void 0) { name = 'jack'; }
    return name + id;
}
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
// 方法重载
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        if (typeof a === 'string' || typeof b === 'string') {
            return a.toString() + b.toString();
        }
        return a + b;
    };
    return Calculator;
}());
var calculator = new Calculator();
var result = calculator.add('jack', 'tom');
