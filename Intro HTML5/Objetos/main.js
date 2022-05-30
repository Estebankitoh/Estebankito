//como crear un objeto
let usuario = {
    nombre:'Estrilda',
    apellido:'Arelleous',
    dni:2312346575,
    correo:{
        gmail:'itscipoletti@gmail.com',
        outlook:'itscipolletti@hotmail.com'
    },
    localidad:'cipolletti'

}
//forma1
const gmail = usuario.correo.gmail
const outlook = usuario.correo.outlook

//forma2
console.log(`
    apellido: ${usuario.apellido}
    nombre: ${usuario.nombre}
    gmail: ${gmail}
    outlook: ${outlook}
`)