
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

var inputFrase = document.querySelector("#input-texto");
var nuevaFrase = document.querySelector("#msg");
var btnAencriptar = document.querySelector("#btn-encriptar");
var btnDesencriptar = document.querySelector("#btn-desencriptar");
var btnCopiar = document.querySelector("#btn-copy");
//var nuevaFrase = inputFrase.value;



function copiar() {
   event.preventDefault();
 var FraseFinal = inputFrase.value;
 
 if (inputFrase.value == '' || nuevaFrase == null) {
  var contenido = document.getElementById('msg');
  contenido.select();
  document.execCommand('copy');
  
} else {
  var contenido = document.getElementById('input-texto');
  contenido.select();
  document.execCommand('copy');
}
 
 }



function encriptar() {
  event.preventDefault();
var nuevaFrase = inputFrase.value;

  if (nuevaFrase == '' || nuevaFrase == null) {
         alert('No existen datos a encriptar')

} else {

  nuevaFrase = nuevaFrase.toLowerCase();  

  var nuevaFrase = inputFrase.value;
  var nuevaFraseA = nuevaFrase.replaceAll('e','enter');
  var nuevaFraseB = nuevaFraseA.replaceAll('i','imes');
  var nuevaFraseC = nuevaFraseB.replaceAll('a','ai');
  var nuevaFraseD = nuevaFraseC.replaceAll('u','ufat');
  var nuevaFraseFinal = nuevaFraseD.replaceAll('o','ober');
 //ingreso la nueva frase
msg.value = nuevaFraseFinal;
inputFrase.value = ""

}

}


/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/


function desencriptar() {
   event.preventDefault();
  
   var nuevaFrase = msg.value;
   var nuevaFraseA = nuevaFrase.replaceAll("enter", "e");
   var nuevaFraseB = nuevaFraseA.replaceAll("imes", "i");
   var nuevaFraseC = nuevaFraseB.replaceAll("ai", "a");
   var nuevaFraseD = nuevaFraseC.replaceAll("ufat", "u");
   var nuevaFraseFinal = nuevaFraseD.replaceAll("ober", "o");
  //ingreso la nueva frase
  inputFrase.value = nuevaFraseFinal;

 msg.value = "";
 
 }
 


 function sololetras(e){
   key=e.keycode || e.which;
   teclado=String.fromCharCode(key).toLowerCase();
   letras=" abcdefghijklmnñopqrstuvwxyz";
   especiales="8-37-38-46-164";
   teclado_especial=false;

   for(var i in especiales) {
      if(key==especiales[i]){
            teclado_especial=true; break;
      }
   }

   if(letras.indexOf(teclado) ==-1 && !teclado_especial){
      //no permitira el ingreso de ese valor   
      return false;
   }

}




btnAencriptar.onclick = encriptar;

btnDesencriptar.onclick = desencriptar;

btnCopiar.onclick = copiar;
