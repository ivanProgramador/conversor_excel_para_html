var Reader = require("./Reader");

var leitor = new Reader();

/*
 o método Read agora é assincrono então para executar ele eu vou precisar 
 executar de forma assincrona 
*/

async function main(){

   //agora ele espera o retono da função pra depois mostrar os dados no console
   var dados =  await leitor.Read("./lista_de_alunos.csv");
   
   console.log(dados);


}

main();

