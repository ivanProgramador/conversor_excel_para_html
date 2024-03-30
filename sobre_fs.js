/*
 fs e uma biblioteca usada para fazer a leitura de aruivos de texto no node
*/

const fs = require("fs");

/*
ele recebe 3 parametros 

    1 - a url do arquivo
    2 - codificação do texto do arquivo
    3 - a função de call back que recebe o erro e os dados que estão noa arquivo de texto  
    
    Detalhe o parametro enconding serve para ekle identificar que o aobjetivo e ler o texto e não 
    os bytes do arquivo então ele é um parametro indispensável  
*/

fs.readFile("./meu_texto.txt",{encoding:'utf-8'},(error,dados)=>{
    if(error){
        console.log('Houve um problema na leitura do arquivo : ' + error);
    }else{
        console.log(dados);
    }
});

