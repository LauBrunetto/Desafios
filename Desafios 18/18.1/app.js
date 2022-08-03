
const CampoRequerido = function(selector){
    let isValid = false;

    const elemento = document.querySelector(selector);

    elemento.addEventListener('blur', function(){
        isValid = elemento.value.length !== 0;
    });
    function getState() { return isValid; }

    elemento.isValid = getState;

    return elemento;
}