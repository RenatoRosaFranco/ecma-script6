class List {
  constructor(){
    this.data = [];
  }

  add(data){
    this.data.push(data);
    console.log(this.data);
  }
}

// var = default variable definition
// const = define a constant, they can't have own value altered
const a = 3;

// you can't alter a constant, but you can mute the value inside;
const usuario = {nome: 'Renato Franco', age: 25};
console.log(usuario);

usuario.nome = 'John Doe';
console.log(usuario);

class TodoList extends List {
  // some code here
  constructor(){
    super();
    this.usuario = 'Renato Franco';
  }

  mostraUsuario(){
    console.log(this.usuario);
  }

  static sayHello(user){
    console.log('Hello ' + user);
  }
}

var MinhaLista = new TodoList();
document.getElementById('novotodo').onclick = function(){
  MinhaLista.add('Novo todo');
};

MinhaLista.mostraUsuario();
// MinhaLista.sayHello();

// Map method
// Arrays
const arr = [1,3,4,5,6];
const newArr = arr.map(function(item){
  return item * 2;
});

console.log(newArr);

// Reduce method
// Arrays
const sum = arr.reduce(function(total, next){
  return total + next;
})

console.log(sum);

// Filter method
// Arrays
const filter = arr.filter(function(element){
  return element % 2 === 0
});

console.log(filter);

const find = arr.find(function(item){
  return item
});

console.log(find);

// Arrows functions
console.log('Arrow function');
const zArr = arr.map(item => item * 2);
console.log(zArr);

const test = () => {
  return 'test';
}

console.log(test());