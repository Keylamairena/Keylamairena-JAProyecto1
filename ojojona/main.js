//Función que se ejecutara al hacer click en el botón
function muestra_oculta(id){
    //declaro la funcion y paso por parametro el selector de referencia que quiero ocultar/mostrar
   let div = document.getElementById(id);
   //uso el if para saber si el div esta oculto (Display: none) o visible
   if (div.style.display == "none"){
    div.style.display = "flex";
   }else{
    div.style.display = "none";
   }

}