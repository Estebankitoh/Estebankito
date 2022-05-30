//crear array o arreglo
let arreglo = ['JavaScript','Php','Java','Csharp']

//la cantidad de elementos de un arreglo (Longitud)
let longitud = arreglo.length
console.log('longitud: '+longitud)

//primer elemento de un arreglo
console.log('primer elemento: '+arreglo[0] )

//ultimo elemento de un arreglo
console.log( 'ultimo elemento: '+arreglo[longitud-1] )

//recorrer array con forEach
arreglo.forEach( (element,index) => {
    console.log(index+'-'+element)
});


//agregar elementos al final de un arreglo
arreglo.push('Go')
console.log(arreglo)



//como eliminar ultimo elemento de un arreglo
arreglo.pop()
console.log(arreglo)

//como agregar un elemento al inicio del array
arreglo.unshift('Go')
console.log(arreglo)



//como eliminar primer elemento del array
arreglo.shift()
console.log(arreglo)



//conocer el indice de un elemento
const indice = arreglo.indexOf('Java')
console.log('indice de Java es: '+indice)
console.log(arreglo[indice])



//eliminar elemento conociendo su indice
//const eliminacion = arreglo.splice(indice,1)
//console.log(arreglo)
//console.log('elemento eliminado '+eliminacion)

//eliminar mas de un elemento---el indice, cantidad
const eliminacion = arreglo.splice(indice,2)
arreglo.splice(indice,2)
console.log(arreglo)
console.log('elemento eliminado '+eliminacion)



//generar una copia de un arreglo
let copia = arreglo.slice()
console.log(copia.push('Go'))
//cuando concatenamos un array con un string todo se traduce en una cadena de texto
console.log('original '+arreglo)
console.log('arreglo copia: '+copia)





















//funciones tradicional
function operar(){

    console.log('probando')
}
//funcion flecha
const calcular = () => console.log('probando')
