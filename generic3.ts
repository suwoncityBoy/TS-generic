function helloArray<T>(message : T[]) : T { // array
  return message[0];
}

helloArray(['hello','world']);
helloArray(['hello',31]);

function helloTuple<T,K>(message:[T,K]):T {  // tuple
  return message[0];
}

helloTuple(['hello','world']);
helloTuple(['hello',123]);