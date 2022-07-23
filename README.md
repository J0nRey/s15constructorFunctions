# s15constructorFunctions
Funciones Constructoras

Las funciones constructoras permiten definir una especie de “clase” en JavaScript, con la cual luego se pueden instanciar objetos que tengan propiedades y métodos en común.

function Dish(options) {
  this.name = options.name;
  this.ingredients = options.ingredients;
  this.garnishes = options.garnishes;
  this.diners = options.diners;
};

var cevicheSimple = new Dish({
  name: 'Ceviche simple',
  ingredients: [
    '1 kilo de pescado',
    '2 cebollas',
    '1 taza de jugo de limón',
    '1 ají limo',
    'sal'
  ],
  garnishes: [
    'lechuga (2 hojas por plato)',
    'maíz cancha',
    '4 porciones de yuca',
    '4 choclos sancochados',
    'camote sancochado en rodajas (2 por plato)'
  ],
  diners: 4
});

cevicheSimple;
// Dish {name: "Ceviche simple", ingredients: Array[5], garnishes: Array[5], diners: 4}

cevicheSimple instanceof Dish;
// true

https://cevichejs.com/2-funciones.html
