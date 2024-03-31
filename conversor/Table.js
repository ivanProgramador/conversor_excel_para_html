class Table{
    constructor(arr){

        // aqui eu vou receber o array, depois de processado 
        // a primeira linha de uma tabela e sempre o cabeçalho 
        // então o this.header ao indice 0 do array que e a primeira linha 
        this.header = arr[0];
        
        // depois do cabeçalho o resto são dados, então eu uso o shift
        //pra excluir a primeira linha e deixar somente as linhas seguintes que são os dados

        arr.shift();
        
        // cabeçalho excluido eu coloco os dados na varivel rows

        this.rows = arr; 

    }


}

module.exports = Table;