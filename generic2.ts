function helloBasic<T>(message : T) : T {
  return message;
}

//generic 설정 두가지 
helloBasic<string>("MARK");   // string을 의도해서 인자값에 문자열로만 설정
helloBasic(36);      // 들어간 값에 의해서 타입이 추론