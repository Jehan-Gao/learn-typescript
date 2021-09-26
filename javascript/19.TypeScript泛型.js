/**
 * 设计泛型的关键目的是在成员之间提供有意义的约束，
 * 这些成员可以是：类的实例成员、类的方法、函数参数和函数返回值。
 *
 * 泛型（Generics）是允许同一个函数接受不同类型参数的一种模板。
 * 相比于使用 any 类型，使用泛型来创建可复用的组件要更好，因为泛型会保留参数类型。
*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// 泛型类
var GenericNumer = /** @class */ (function () {
    function GenericNumer() {
    }
    return GenericNumer;
}());
var myGenericNumber = new GenericNumer();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
loggingIdentity({ length: 3, value: 1 });
function updateTodo(todo, fieldsToUpdate) {
    return __assign(__assign({}, todo), fieldsToUpdate);
}
var todo1 = {
    title: 'todo1 title',
    description: 'todo1 description'
};
updateTodo(todo1, {
    description: 'this is fieldsToUpdate description'
});
