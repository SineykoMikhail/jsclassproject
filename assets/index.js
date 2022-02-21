class Cat {
  constructor(breed, name, mouseCattched = 0) {
    this.breed = breed;
    this.name = name;
    this.mouseCatched = mouseCattched;
  }
  voice() {
    return `Кот ${this.name}мяукает`;
  }
  eat() {
    return `Кот ${this.name}ест`;
  }
  sleep() {
    return `Кот ${this.name}спит`;
  }
  hunt() {
    this.mouseCatched++;
    return "Кот" + this.mouseCatched;
  }
}
const cat1 = new Cat("Майкун", "Доби");
console.log(cat1.mouseCatched);

class StrayCat extends Cat {
  constructor(name, catchingmice = 0, mouseEaten = 0) {
    super("stray", name, catchingmice);
    this.mouseEaten = mouseEaten;
  }
  eat() {
    this.mouseEaten++;
    return "Кот дворовой" + this.mouseEaten;
  }
}
const cat2 = new StrayCat("Tom");
console.log(cat2.mouseEaten);
