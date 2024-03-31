var ejs = require("ejs");

class HtmlParser{
    
    static async parse(table){

       //O bug do ejs de não encontrar o arquivo se resolve colocando a url toda 
       //da raiz ate o arquivo desejado

       return await ejs.renderFile("c:/temp/conversor_excel_para_html/conversor/Table.ejs",{header: table.header,rows: table.rows});



    }
}

module.exports = HtmlParser;