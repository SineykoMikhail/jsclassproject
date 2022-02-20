class Cat {
  constructor(breed, name, catchingmice = 0) {
    this.breed = breed;
    this.name = name;
    this.catchingmice = catchingmice;
  }
  voice() {
    return "Кот ${this.name}мяукает";
  }
  eat() {
    return "Кот ${this.name}ест";
  }
  sleep() {
    return "Кот ${this.name}спит";
  }
  catchingmice1() {
    this.catchingmice++;
    return "Кот" + this.catchingmice;
  }
}
const cat1 = new Cat("Майкун", "Доби");
console.log(cat1.catchingmice);

class StrayCat extends Cat {
  constructor(name, catchingmice = 0) {
    super("stray", name, (miceeaten = 0));
  }
}
