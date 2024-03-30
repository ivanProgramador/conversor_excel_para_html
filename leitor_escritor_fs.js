const fs = require("fs");

//essa função usa o fs para editar um arquivo json 

modificarArquivo('wilson','java','Desktop');


function modificarArquivo(nome,curso,categoria){

    fs.readFile("./usuario.json",{encoding:'utf-8'},(erro,dados)=>{

        if(erro){
            console.log("Erro durante a escrita " + erro);
        }else{

            var conteudo = JSON.parse(dados);

            conteudo.nome = nome;
            conteudo.curso = curso;
            conteudo.categoria = categoria;

            fs.writeFile("./usuario.json", JSON.stringify(conteudo),(erro)=>{
                if (erro) {
                    console.log('Aconteceu um erro durante a escrita ');
                    
                }
            })
        }

    })
}