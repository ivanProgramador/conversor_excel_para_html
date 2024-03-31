var Reader = require("./Reader");
var Processor = require("./Processor");
var Table = require("./Table");
var HtmlParser = require("./HtmlParser");
var leitor = new Reader();

async function main(){

    var dados = await leitor.Read("./lista_de_alunos.csv");

    var dadosProcessados =  Processor.Process(dados);

    var usuarios = new Table(dadosProcessados);

   var html = await HtmlParser.parse(usuarios);

   console.log(html);


}

main();
