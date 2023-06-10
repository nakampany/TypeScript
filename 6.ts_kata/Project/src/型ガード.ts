type Combinable1 = string | number;
type Numeric1 = number | boolean;

type Universal1 = Combinable & Numeric;

function add(a: Combinable1, b: Combinable1) {
  // 型ガード
  // typeofを使って型を絞り込む
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString()
  }
  return a + b
}

type Admin1 = {
  name: string;
  privileges: string[];
}
type Employee1 = {
  name: string;
  startDate: Date;
}
type ElevatedEmployee1 = Admin1 & Employee1;

type UnknownEmployee = Employee1 | Admin1;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name)

  // typeofを使って型を絞り込みを行いたいが、カスタム型ではtypeofは使えない
  // Todo: if (typeof emp === 'Employee') { // これはエラー
  // in を使って型を絞り込む
  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges)
  }
  if ('startDate' in emp) {
    console.log('Start Date: ' + emp.startDate)
  }
}

class Car {
  drive() {
    console.log('Driving...')
  }
}




class Truck {
  drive() {
    console.log('Driving a truck...')
  }

  loadCargo(amount: number) {
    console.log('Loading cargo...' + amount)
  }
}
type Vehicle = Car | Truck;

const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: Vehicle) {
  vehicle.drive()
  // 方法１
  // inを使って型を絞り込む
  if ('loadCargo' in vehicle) {
    vehicle.loadCargo(1000)
  }
  // 方法２
  // instanceofを使って型を絞り込む
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000)
  }
}
