

/**
 * 使用枚举我们可以定义一些带名字的常量。 
 * 使用枚举可以清晰地表达意图或创建一组有区别的用例。 
 * TypeScript 支持数字的和基于字符串的枚举。
*/

// 1. 数字枚举： 会形成反向映射
enum Direction {
  NORTH,
  SOUTH,
  EAST,
  WEST
}

let dir1: Direction = Direction.NORTH
console.log(dir1)

let dir2: Direction = Direction.WEST
console.log(dir2)


// 2. 字符串枚举
enum Animal {
  DOG = 'DOG',
  PIG = 'PIG',
  DUCk = 'DUCK',
  CAT = 'CAT'
}

let ani1: Animal = Animal.DOG
console.log(ani1)

let ani2: Animal = Animal.CAT
console.log(ani2)


// 3. 异构枚举： 异构枚举的成员值是数字和字符串的混合
enum Enum {
  A,
  B,
  C = 'C',
  D = "D",
  E = 8,
  F
}


console.log(Enum.E, Enum.F)