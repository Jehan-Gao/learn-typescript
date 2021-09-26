

// 1. 联合类型

const sayHello = (name: string | undefined) => {
  console.log(`${name}`)
}

sayHello('jack')
sayHello(undefined)


// 2. 可辨识联合

/**
 * TypeScript 可辨识联合（Discriminated Unions）类型，也称为代数数据类型或标签联合类型。
 * 它包含 3 个要点：可辨识、联合类型和类型守卫。
 * 这种类型的本质是结合联合类型和字面量类型的一种类型保护方法。
 * 如果一个类型是多个类型的联合类型，且多个类型含有一个公共属性，那么就可以利用这个公共属性，来创建不同的类型保护区块。
*/

// a. 可辨识

enum CarTransmission {
  Automatic = 200,
  Manual = 300
}

interface Motorcycle {
  vType; 'motorcycle';  // discriminant
  make: number;  // year
}

interface Car {
  vType: 'car'; // discriminant
  transmission: CarTransmission;
}

interface Truck {
  vType: 'truck';  // discriminant
  capacity: number;   // in tons
}


// b. 联合类型

type Vehicle = Motorcycle | Car | Truck


// c. 类型守卫

const EVALUATION_FACTOR = Math.PI

function evaluatePrice(vehicle: Vehicle) {
  return vehicle.capacity * EVALUATION_FACTOR
}

const myTruck: Truck = {vType: 'truck', capacity: 9.5}
evaluatePrice(myTruck)

/**
 * Error: 
 * Property 'capacity' does not exist on type 'Vehicle'.
 * Property 'capacity' does not exist on type 'Motorcycle'.
 * 在 Motorcycle 和 Car 接口中，并不存在 capacity 属性，需要使用类型守卫。
*/


function evaluatePrice2(vehicle: Vehicle) {
  switch(vehicle.vType) {
    case 'car':
      return vehicle.transmission * EVALUATION_FACTOR
    case 'truck':
      return vehicle.capacity * EVALUATION_FACTOR
    case 'motorcycle':
      return vehicle.make * EVALUATION_FACTOR
  }
}

const myCar: Car = {vType: 'car', transmission: 9.5}
evaluatePrice(myCar)


// d. 类型别名: 类型别名用来给一个类型起个新名字

type Message = string | string[]

