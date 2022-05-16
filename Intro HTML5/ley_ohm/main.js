//funcion traducionales
function calcular()
{

const d1 = document.getElementById("inp_dato1").value
const d2 = document.getElementById("inp_dato2").value

const operacion = document.getElementById("slt_oper").value


let resultado = null

if (operacion == 0 ){
//debo calcular corriente
        resultado = d1/d2;
    }else{
        if (operacion == 1 ){
            //calcula la tesion
            resultado = d1*d2;
            }else{
                    //calcula resistencia
                    resultado = d1/d2;
               }

            }
            document.getElementById("h_resultado").textContent = 'Resultado = '+resultado

            
} 

function setearLabel()
{
   const operacion = document.getElementById("slt_oper").value

   if(operacion == 0)
   {
       document.getElementById("lbl_dato1").textContent = 'Tension'
       document.getElementById("lbl_dato2").textContent = 'Resistencia'
   }else{
       if(operacion ==  1){
        document.getElementById("lbl_dato1").textContent = 'Corriente'
        document.getElementById("lbl_dato2").textContent = 'Resistencia'
       }else{
        document.getElementById("lbl_dato1").textContent = 'Tension'
        document.getElementById("lbl_dato2").textContent = 'Corriente'
       }
   }

}   

function resultadofooter(){
    const operacion = document.getElementById("slt_oper").value
 
    if(operacion == 0){
    document.getElementById("h_resultadofooter").textContent = 'Corriente'
}else{
        if(operacion == 1){
            document.getElementById("h_resultadofooter").textContent = 'Tension'
        }else{
        document.getElementById("h_resultadofooter").textContent = 'Resistencia'
}
}
}