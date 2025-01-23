let arrayAmigos = [];
const inputName = document.querySelector("#amigo");
const buttonAdd = document.querySelector(".button-add");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.querySelector("#resultado");

inputName.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        adicionarAmigo();
        e.preventDefault();
    }
})

function adicionarAmigo() {
    if (inputName.value == "") return;
    const amigo = inputName.value;
    arrayAmigos.push(amigo);
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);

    inputName.value = "";
}

function sortearAmigo() {
    // Validação e sorteio
    if (arrayAmigos.length == 0) return alert("Não há amigos para sortear.");
    const sorteio = parseInt(Math.random() * arrayAmigos.length);
    console.log(`O tamanho do array é ${arrayAmigos.length} e o número sorteado é ${sorteio}`);

    const li = document.createElement("li");
    li.textContent = `O amigo sorteado foi o ${arrayAmigos[sorteio]}`;
    resultado.appendChild(li);

    // Reset
    arrayAmigos = [];
    inputName.value = "";
    while (listaAmigos.firstChild) listaAmigos.removeChild(listaAmigos.firstChild);
}