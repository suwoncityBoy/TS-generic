function helloGenerics<T>(message:T): T {   // 제네릭 사용 함수명<T> 
  return message;
}

console.log(helloGenerics("Mark").length);  // 인자값을 string으로 하면 자동으로
// 타입지정해줌 뭐든지 다 받아주기만하는 any와는 다르다.