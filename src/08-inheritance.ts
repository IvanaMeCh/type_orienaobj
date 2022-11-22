export class Animal {
  constructor (public name: string){}

  move(){
    console.log('moving along!');
  }
  greeting(){
    return `Hello, I'm ${this.name}`;
  }
}

export class Dog extends Animal{
  woof(times: number): void {
    for(let index=0; index <times; index++){
      console.log('woof!!')
    }
  }
}


const fifi = new Animal('fifi')
fifi.move();
console.log(fifi.greeting());

const cheis = new Dog('cheis')
fifi.move();
console.log(cheis.greeting());
cheis.woof(5);
