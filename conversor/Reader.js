const fs = require("fs");
const util = require("util");

/*
fs é um biblioteca antiga criada antes da criação das promisses,
nesse caso eu não posso usar ela como função assincrona diretamente 
eu tenho que fazer a coversão usando a biblioteca

util que tem a função promissify

*/
class Reader{

    constructor(){
        //convertendo
        this.reader = util.promisify(fs.readFile);

    }

   //usando
   async Read(filepath){
       try{

         return await this.reader(filepath,{encoding:"utf-8"});
         
       }catch(err){

         return undefined

       }
    }



}

module.exports = Reader;

