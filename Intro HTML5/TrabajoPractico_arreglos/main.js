let arreglo = ['Python', 'JavaScript', 'Csharp', 'C++' , 'Java' , 'php' , 'Ruby']
console.log (arreglo)

//agregar lenguaje go al final del arreglo
arreglo.push('Go')
console.log(arreglo)

//eliminar primer elemento del arreglo
arreglo.shift()
console.log(arreglo)

//agregar un elemento al inicio del array
arreglo.unshift('kotlin')
console.log(arreglo)

//saber donde estan estos elementos
const indice = arreglo.indexOf('Java','php')
console.log('indice del elementos es: '+indice)
console.log(arreglo[indice])


//eliminar elemento conociendo su indice
const eliminacion = arreglo.splice(indice,2)
console.log(arreglo)
console.log('elemento eliminado '+eliminacion)


//buscar donde se encuentra JavaScript
const iindice = arreglo.indexOf('JavaScript')
console.log('indice del elementos es: '+iindice)
console.log(arreglo[iindice])

console.log(arreglo)

arreglo.splice(2,0,'Rust','Swift')
console.log(arreglo)


//imprimir arreglo
console.log(arreglo)


//longitud del arreglo
let longitud = arreglo.length
console.log('longitud: '+longitud)



function mostrar1(){

       
   document.getElementById("h_resultado1").textContent = longitud
   
   }


   function mostrar2(){

    document.getElementById("h_resultado2").textContent = arreglo[longitud-1] 
   }

   function mostrar3(){
    document.getElementById("h_resultado3").textContent = arreglo[3] 
}

//recorrer array con forEach
arreglo.forEach( (element,index) => {
    console.log(index+'-'+element)
});
