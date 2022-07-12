class PersonExtends <T extends string | number>{ // string ,number만 가능
  private _name : T;

  constructor(name:T) {
    this._name=name;
  }
}


// new PersonExtends(true); // error
new PersonExtends(39); // error
new PersonExtends("Mark");
