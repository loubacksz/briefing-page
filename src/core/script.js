const enviar = document.getElementById("submit");
console.log(enviar);
const camposDoFormulario = document.querySelectorAll("[required]");

camposDoFormulario.forEach((campo) => {
    console.log(campo);
    campo.addEventListener("blur", () => verificaCampo(campo));
})

// o que verificar no campo? o que pode dar errado? como posso me defender?
function verificaCampo(campo) {
    
}

enviar.addEventListener('click', () => {

    let valor = document.querySelectorAll("[required]").value;

    console.log(valor)
    
})