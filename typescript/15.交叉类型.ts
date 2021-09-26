/**
 * 交叉类型：
 * TypeScript 交叉类型是将多个类型合并为一个类型，
 * 这让我们可把现有的多种类型叠加到一起成为一种类型，
 * 它包含了所需的所有类型的特性。
*/

interface IPerson {
  id: string,
  age: number
}

interface IWorker {
  companyId: string
}

type IStaff = IPerson & IWorker

const staff: IStaff = {
  id: '001',
  age: 33,
  companyId: '123'
}

