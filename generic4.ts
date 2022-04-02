type HelloFunctionGeneric1 = <T>(message : T) => T;     //type alias로 제네릭 정의

const helloFunction1: HelloFunctionGeneric1 = <T>(message: T) : T => {
  return message;
}


interface HelloFunctionGeneric2 {     // interface로 제네릭 정의 
  <T>(message: T) : T;
}

const helloFunction2 : HelloFunctionGeneric2 = <T>(message : T): T => {
  return message;
}