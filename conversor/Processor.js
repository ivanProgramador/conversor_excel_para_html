class Processor{

    static Process(data){

         // essa função quebra string com base em um caractere especificado no parametro
         // no caso cada vez que ela usar o quebra linha \n ou \r a string será dividida
         //então aqui eu tenho as linhas 

        var a = data.split("\r\n"); 

        //agora eu preciso colocar todas as palavras em um array 
        //para obter as colunas 

        var rows = []; // crio um array vazio chamado linhas
        
        //eu pego a avriavel a que ja tem as linhas poprcessadas e faço um forEach
        //mandando cada linha dessas ppra dentro da variavel rows 
        a.forEach(row=>{

            // crio a varivel arr que vai receber o valor da variavel row divida ppor virgulas 
            // cada palavra e separada por virgula no texto então eu vou ter as palavras separadas
            //de cada linha 

            var arr = row.split(",");

            //agora eu pego as palvaras a coloco no array rows

            rows.push(arr);

        })
        
        // e por ultimo eu retorno o texto porcessado agora cada linha dessas virou um array de palavras

        return rows;

    }
}

module.exports = Processor;