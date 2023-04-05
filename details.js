console.log([document])
let urlParams = location.search
console.log(urlParams)
let params = new URLSearchParams (urlParams)
console.log(new URLSearchParams)
let id = params.get("id")
console.log(id)

let agentesFiltrados = data.filter(agente => {
    return agente.isPlayableCharacter
})

let  agenteEncontrado = agentesFiltrados.find (agente => agente.uuid == id )
console.log(agenteEncontrado)

// function pintarAgente (agente) {
//     const fragmentElement = document.createDocumentFragment()
//     const contenedor = document.getElementById("contenedor")
//     const divCard = document.createElement("div")
//     const imageCard = document.createElement("img")
//     imageCard.src = agente.fullPortrait
//     const h3 = document.createElement("h3")
//     h3.textContent = agente.displayName
//     const p = document.createElement("p")
//     p.textContent = agente.description
//     divCard.append(imageCard,h3, p) 
//     fragmentElement.appendChild(divCard)
//     contenedor.appendChild(fragmentElement)
// }

function pintarAgenteDos (agente) {
    let cards = ""
    cards = `<div class='card' style='width:20rem'>
    <img src="${agente.fullPortrait}" class="card-img-top" alt="...">
    <div class="card-body">
        <h4 class="card-title">${agente.displayName}</h4>
        <h5 class="card-text">${agente.role.displayName}</h5>
        <p>${agente.description}</p>
    </div>
</div>`
    contenedor.innerHTML = cards
}

pintarAgenteDos(agenteEncontrado)