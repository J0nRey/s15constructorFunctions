const koderObject = {
name:       "Jonathan",
lastname:   "Reyes",
generation: 11
}

// Declaration

function Koder(name, lastname, generation, birthDate, country, bootcamp, school = "Kodemia", scores = [8,5,9,7]){
    this.name = name;
    this.lastname = lastname;
    this.generation = generation;
    this.birthDate = birthDate;
    this.country = country;
    this.bootcamp = bootcamp;
    this.school = school;
    this.scores = scores;
    this.Mascotas = 'Ninguna'
    this.greet = function(){
        console.log( `Hola mi nombre es ${this.name} y soy de la generacion ${this.generation} de ${this.bootcamp}` )
    }
    this.asking = function(question, mentor){
        console.log(`${mentor} tengo duda sobre ${question}`)
    }
}

console.log(Koder)
// Instanciar

const KoderPrueba = new Koder('prueba_1', 'prueba_2', 'xxxx/xx/xx', 'City', 'Lenguitch', 'School_#', 'otro_dato_1', 'otro_dato_2', 'otro_dato_3', 'otro_dato_4', 'otro_dato_4', 'otro_dato_6')
const KoderJonathan = new Koder('Jonathan', 'Reyes', 11, '1986/09/10', 'Mexico', 'javascript')
const KoderDiana = new Koder('Diana', 'ibañez', 11, '1992/06/03', 'peru', 'javascript', 'koderHause')
const KoderTaquito = new Koder('Vero', 'Paredes', 11, '1992/06/03', 'Mexico', 'javascript',)

console.log(KoderPrueba)
console.log(KoderJonathan)
console.log(KoderDiana)
console.log(KoderTaquito)

console.log(KoderJonathan.greet())
console.log(KoderDiana.greet())
console.log(KoderTaquito.greet())

console.log(KoderJonathan.asking("por que el cielo es azul", "David"))
console.log(KoderDiana.asking('¿Como podemos poner un array?', 'Fer'))
console.log(KoderTaquito.asking('question', 'mentor'))

console.log(" ")

//consola
console.log(KoderJonathan.country)
console.log(KoderDiana.birthDate)
console.log(KoderTaquito.school)
console.log("generation",KoderPrueba.generation) //se recorre el dato al siguiente ya que es posicional

