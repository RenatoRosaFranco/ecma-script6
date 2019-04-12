class List {
  constructor(){
    this.data = [];
  }

  add(data){
    this.data.push(data);
    console.log(this.data);
  }
}

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