export class Animal {
  constructor (protected name: string){}
  //protected es privado pero nos va permitir tener herencia
  move(){
    console.log('moving along!');
  }
  greeting(){
    return `Hello, I'm ${this.name}`;
  }
  protected doSomething(){
    console.log('dooooo')
  }
}

export class Dog extends Animal{
  constructor(
    name: string,
    public owner: string
  ){
    super(name);
  }
  woof(times: number): void {
    for(let index=0; index <times; index++){
      console.log(`woof!! ${this.name}`);
    }
    this.doSomething(); // aqui podemos llamarla porque son las clases hijas
  }

  move(){
    console.log('moving as a dog')
  }
}


const cheis = new Dog('cheis','nico')
cheis.woof(1);
cheis.move();
