"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var List =
/*#__PURE__*/
function () {
  function List() {
    _classCallCheck(this, List);

    this.data = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
      console.log(this.data);
    }
  }]);

  return List;
}(); // var = default variable definition
// const = define a constant, they can't have own value altered


var a = 3; // you can't alter a constant, but you can mute the value inside;

var usuario = {
  nome: 'Renato Franco',
  age: 25
};
console.log(usuario);
usuario.nome = 'John Doe';
console.log(usuario);

var TodoList =
/*#__PURE__*/
function (_List) {
  _inherits(TodoList, _List);

  // some code here
  function TodoList() {
    var _this;

    _classCallCheck(this, TodoList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TodoList).call(this));
    _this.usuario = 'Renato Franco';
    return _this;
  }

  _createClass(TodoList, [{
    key: "mostraUsuario",
    value: function mostraUsuario() {
      console.log(this.usuario);
    }
  }], [{
    key: "sayHello",
    value: function sayHello(user) {
      console.log('Hello ' + user);
    }
  }]);

  return TodoList;
}(List);

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
  MinhaLista.add('Novo todo');
};

MinhaLista.mostraUsuario(); // MinhaLista.sayHello();
// Map method
// Arrays

var arr = [1, 3, 4, 5, 6];
var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr); // Reduce method
// Arrays

var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum); // Filter method
// Arrays

var filter = arr.filter(function (element) {
  return element % 2 === 0;
});
console.log(filter);
var find = arr.find(function (item) {
  return item;
});
console.log(find); // Arrows functions

console.log('Arrow function');
var zArr = arr.map(function (item) {
  return item * 2;
});
console.log(zArr);

var test = function test() {
  return 'test';
};

console.log(test());
