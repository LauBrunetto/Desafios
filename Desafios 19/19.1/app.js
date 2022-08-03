function getFromPokeApi(url, callback)
{

    const peticion = new XMLHttpRequest();  

    peticion.responseType = "json";      

    peticion.open('GET', 'https://pokeapi.co/api/v3/'+url); 
    peticion.send(); 
    
    peticion.onload = function() {
       callback(peticion.response);
    }
}