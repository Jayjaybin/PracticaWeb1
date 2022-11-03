function Sumar(){
    let num1 = parseInt(document.getElementById("txtNum1").value);
    let num2 = parseInt(document.getElementById("txtNum2").value);
    let resultado = num1 + num2;
    document.getElementById("txtResultado").innerHTML = 'Resultado: ' + resultado;
}

function CalcularOperacion(){
    let op =document.getElementById('selectOp').value;
    let num1 =parseInt(document.getElementById('txt2Num1').value);
    let num2 =parseInt(document.getElementById('txt2Num2').value);
    if(op ==0){
        alert("Seleccione primero la operación");
    }
    else if(op ==1){
        document.getElementById('txt2Result').innerHTML="La suma es: "+(num1 +num2);
    }
    else if(op ==2){
        document.getElementById('txt2Result').innerHTML="La resta es: "+(num1 -num2);
    }
    else if(op ==3){
        document.getElementById('txt2Result').innerHTML="El producto es: "+(num1 *num2);
    }
    else if(op ==4){
        document.getElementById('txt2Result').innerHTML="La division es: "+(num1 /num2);
    }
}