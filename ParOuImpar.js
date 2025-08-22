//Par ou impar
parOuimpar(2) // aqui entra o número que vai ser testado.
parOuimpar(5)

function parOuimpar(n){
    
    if(n % 2 === 0){
        console.log(n + " é um número par")
    }else{
        console.log(n + " é um número ímpar")
    }
}
