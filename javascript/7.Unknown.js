/**
 * unknown 类型只能被赋值给 any 类型 和 unknown 类型本身
*/
var value;
var value1 = value; // ok
var value2 = value; // ok
var value3 = value; // Error
var value4 = value; // Error
/**
 * 将变量类型设置为unknown后，对该变量的所有操作都不再被认为是类型正确的。
*/
value.foo.bar; // Error
value.trim(); // Error
value(); // Error
