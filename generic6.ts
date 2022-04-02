class PersonExtends <T extends string | number>{ // string ,number만 가능
  private _name : T;

  constructor(name:T) {
    this._name=name;
  }
}


// new PersonExtends(true); // 에러
new PersonExtends(39); // 에러
new PersonExtends("Mark");