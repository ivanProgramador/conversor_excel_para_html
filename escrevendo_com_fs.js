/*
 usando o fs para escerver em um arquivo 
*/

const fs = require("fs");

/*
A função de escrever e mais simples recebe a 
1 - url
2 - o conteudo
3 - a função que vai executar se der erro  

Executando o codigo abaxo ele vai mudar o conteudo do arquivo de texto 
para o conteudo que esta escrito no segundo paramentro 
*/

fs.writeFile("./meu_texto.txt","Novo conteudo",(err)=>{
    if(err){
        console.log('Erro no salvamento');
    }
})