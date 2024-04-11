var idade = 55
console.log (`voce tem ${idade} anos`)
if (idade < 16) {
    console.log('nao vota' )
} else {
     if (idade > 67 || idade <18) {
        console.log('voto opcional')
    }
    else if (idade >=18 ) {
        console.log('voto obrigatorio')
    }
    
}