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


    //contadores de linhas e colunas 
    // ATENÇÃO: embora seja possivel pegar esses valores direto no construtor
    //          não é aconselhavel porque eles ficam desatualizados 
    //          eles vão mostrar sempre a quantidade inicial de linhas e colunas 
    //          já separando em metodos eles atualizam conforme a demanda 


    get RowCount(){
        return this.rows.length;
    }

    get ColumnCount(){
        return this.header.length;
    }


}

module.exports = Table;