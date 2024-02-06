
const botao_criptografar = document.getElementById("botao_criptografar");
const botao_descriptografar = document.getElementById("botao_descriptografar");
const caixa_texto_criptografado = document.getElementById("caixa_texto_criptografado")
const container_mensagem = document.getElementById("container_mensagem")
const container_criptografado = document.getElementById("container_criptografado")
const titulo_texto = document.getElementById("titulo_texto")
const botao_copiar = document.getElementById("botao_copiar")

botao_criptografar.addEventListener('click', () => {
    container_criptografado.classList.add('active')
    container_mensagem.classList.add('hidden')
    criptografar()
})

function criptografar() {
    const caixa_texto1 = document.getElementById("caixa_texto").value
    let resultado = caixa_texto1.replace(/[aeiou]/g, function(match) {
        switch (match) {
            case 'a':
                return 'ai';
            case 'e':
                return 'enter';
            case 'i':
                return 'imes';
            case 'o':
                return 'ober';
            case 'u':
                return 'ufat';
            default:
                return match;
        }
    });

    console.log(resultado);

    caixa_texto_criptografado.value = resultado;
}


function descriptografar() {
    const caixa_texto1 = document.getElementById("caixa_texto").value
    let resultado = caixa_texto1.replace(/(ober|ai|imes|ufat|enter)/g, function(match) {
        switch (match) {
            case 'ober':
                return 'o';
             case 'ai':
                 return 'a';
             case 'imes':
                 return 'i';
             case 'enter':
                 return 'e';
             case 'ufat':
                 return 'u';
             default:
                 return match;
        }
    });

    console.log(resultado);
    
    caixa_texto_criptografado.value = resultado;
}

botao_descriptografar.addEventListener('click', () => {
    container_criptografado.classList.add('active')
    container_mensagem.classList.add('hidden')
    descriptografar()
})

botao_copiar.addEventListener('click', copiar);

function copiar() {
    navigator.clipboard.writeText(caixa_texto_criptografado.value);
    
}
