/**
 * TypeScript 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，
 * 也常用于对「对象的形状（Shape）」进行描述。
*/
var Semlinker = {
    name: 'Semlinker',
    age: 33
};
var a = [1, 2, 3, 4];
// ReadonlyArray<number> 把所有可变方法都去掉了，因此可以确保数组创建后再也不能别修改
var ro = a;
ro[0] = 12; // Error
ro.push(5); // Error
ro.length = 100; // Error
a = ro; // Error
