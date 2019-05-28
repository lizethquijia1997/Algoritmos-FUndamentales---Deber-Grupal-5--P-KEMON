
function Pokemon (nombre)
{
    this.nombre=nombre,
    this.ataque=100,
    this.vida=100;
    this.atacar=function(pokemonObjetivo)
    {
        if(pokemonObjetivo.vida<=0)
        {
            console.error("POKEMON MURIO");
          
        }
        else{
            pokemonObjetivo.vida -= 50;
            this.vida +=50;
            this.mostrarInfo(pokemonObjetivo);
        }
       
    }
    this.mostrarInfo= function(pokemonObjetivo)
    {
        console.log(pokemonObjetivo);
        console.log(this);
    }
}

var pikachu = new Pokemon("Pikachu");
var charmander = new Pokemon("Charmander");
console.log(pikachu);
console.log(charmander);
pikachu.atacar(charmander);
 