var Reader = require("./Reader");
var Processor = require("./Processor");
var Writer = require("./Writer");
var Table = require("./Table");
var HtmlParser = require("./HtmlParser");


var leitor = new Reader();
var escritor = new Writer();


async function main(){

    var dados = await leitor.Read("./lista_de_alunos.csv");

    var dadosProcessados =  Processor.Process(dados);

    var usuarios = new Table(dadosProcessados);

    var html = await HtmlParser.parse(usuarios);

    // pra escrever um novo arquivo html eu tenho que passar o nome dele 
    //e depois os dados que vão ser escritos para que todos so arquivos não fiquem com o mesmo  nome 
    // eu chamei a função date now que conta data/hora/minutos/segundos então cada vez que eu 
    // gerar um aruivo novo o nome vai mudar    

    escritor.Write( Date.now()+".html",html);

    


}

main();
