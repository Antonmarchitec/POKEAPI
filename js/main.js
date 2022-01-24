let template_poke = document.querySelector('#template_poke').content
let cards = document.querySelector('#cards')
let fragmentPoke = document.createDocumentFragment()


let boton = document.querySelector("#boton")
//let fragmentPoke2 = document.createDocumentFragment()



 

boton.addEventListener("click", ()=>{
    let random = getRamdonInt(1,501)
    dataFech(random)
})


//FUNCION QUE GENERA UN NUMERO ALEATORIO
const getRamdonInt = ( min , max ) =>{
    return Math.floor(Math.random() * (max - min)) + min
}


const dataFech = async (random) =>{
    try{
      
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
        const data = await res.json()
        pintarPoke(data)
        
        

    }catch(error){
        console.log("error")
    }
}








const pintarPoke = (data) =>{
   //console.log(data)
   let clone = template_poke.cloneNode(true)
   clone.querySelector('#name').textContent = data.name
   clone.querySelector('img').setAttribute("src", data.sprites.other.dream_world.front_default)
   clone.querySelector('#tipo').textContent = data.types[0].type.name
   clone.querySelector('#mov').textContent = data.moves[3].move.name
   clone.querySelector('#id').textContent = data.id


   fragmentPoke.appendChild(clone)
   cards.appendChild(fragmentPoke)

    
}


