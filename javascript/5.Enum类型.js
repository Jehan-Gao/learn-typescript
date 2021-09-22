/**
 * 使用枚举我们可以定义一些带名字的常量。
 * 使用枚举可以清晰地表达意图或创建一组有区别的用例。
 * TypeScript 支持数字的和基于字符串的枚举。
*/
// 1. 数字枚举： 会形成反向映射
var Direction;
(function (Direction) {
    Direction[Direction["NORTH"] = 0] = "NORTH";
    Direction[Direction["SOUTH"] = 1] = "SOUTH";
    Direction[Direction["EAST"] = 2] = "EAST";
    Direction[Direction["WEST"] = 3] = "WEST";
})(Direction || (Direction = {}));
var dir1 = Direction.NORTH;
console.log(dir1);
var dir2 = Direction.WEST;
console.log(dir2);
// 2. 字符串枚举
var Animal;
(function (Animal) {
    Animal["DOG"] = "DOG";
    Animal["PIG"] = "PIG";
    Animal["DUCk"] = "DUCK";
    Animal["CAT"] = "CAT";
})(Animal || (Animal = {}));
var ani1 = Animal.DOG;
console.log(ani1);
var ani2 = Animal.CAT;
console.log(ani2);
// 3. 异构枚举： 异构枚举的成员值是数字和字符串的混合
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
    Enum[Enum["B"] = 1] = "B";
    Enum["C"] = "C";
    Enum["D"] = "D";
    Enum[Enum["E"] = 8] = "E";
    Enum[Enum["F"] = 9] = "F";
})(Enum || (Enum = {}));
console.log(Enum.E, Enum.F);
