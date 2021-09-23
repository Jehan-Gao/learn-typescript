/**
 * never 类型表示的是那些永不存在的值的类型。
 * 例如，never 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型。
*/
function error(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) { }
}
function controlFlowAnalysisWithNever(foo) {
    if (typeof foo === 'string') {
        // 这里 foo 收窄为 string 类型
    }
    else if (typeof foo === 'number') {
        // 这里 foo 收窄为 number 类型
    }
    else {
        // foo 在这里是 never
        var check = foo;
    }
}
/**
 * 上面函数这样做的好处就是：
 * 如果有一天别人扩展了 Foo 类型 如： type Foo = string | number | boolean，
 * 但是忘了在 controlFlowAnalysisWithNever 函数中去实现对应方法，那么执行该函数的时候，
 * 在 else 分支里 foo 类型会被收窄为 boolean 类型，导致无法赋值给 never 类型，产生编译错误。
 * 所以使用 never 避免出现新增了联合类型没有对应的实现，目的就是写出类型绝对安全的代码。
*/
