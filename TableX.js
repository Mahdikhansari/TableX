// -----------------------------------------------------------------
// Table X object 
// this object lets' to create a table from a JOSN object
// Mahdi Khansari 
// Apr 13, 2023
// v 1.0
// -----------------------------------------------------------------

class tableX{

    //—————————————————————————————————————————————————————————————// 
    //                          Constants                          //
    //—————————————————————————————————————————————————————————————//


    //—————————————————————————————————————————————————————————————// 
    //                       Global Variables                      //
    //—————————————————————————————————————————————————————————————//
    // container;                      // Container to draw Table in
    // data;                           // JOSN data
    // columns=[];                       // List of columns           

    //—————————————————————————————————————————————————————————————// 
    //                         Constructor                         //
    //—————————————————————————————————————————————————————————————//
    constructor(_container, _data){
        this.container = _container;
        this.data = _data;
        this.columns = [];
        this.rows = [];
        this.class = {};
        this.tableTag = '';
    }

    //—————————————————————————————————————————————————————————————// 
    //                            Getters                          //
    //—————————————————————————————————————————————————————————————//
    get getContainer(){
        return this.container;
    }
    
    get getData(){
        return this.data;
    }

    //—————————————————————————————————————————————————————————————//   
    //                            Setters                          //
    //—————————————————————————————————————————————————————————————//
    // set addColumn()



    //—————————————————————————————————————————————————————————————//   
    //                           Functions                         //
    //—————————————————————————————————————————————————————————————//
    
    // get Columns
    //———————————————————————————————
    getColumns(_data){
        
        // checks the size of data
        if (_data['data'].length > 0 ){
            Object.keys(_data['data'][0]).forEach(function(column) {
                // fill the columns array
                this.columns.push(column);
            }, this);
        }
        else{
            return null;
        }
    }

    // get Rows
    //———————————————————————————————
    getRows(_data){

        // checks the size of data
        if (_data['data'].length > 0 ){
            
            // for each row
            _data['data'].forEach(function(row){

                // populate the Rows array
                this.rows.push(Object.values(row));
            }, this)
        }
        else{
            return null;
        }
    }

    // get Classes
    //———————————————————————————————
    getClasses(_data){
    }

    // generate table 
    //———————————————————————————————
    createTable(){
        
        // (1) Style
        // ==========================
        this.addStyle_default();
        //this.addStyle_customized(this.data);
        
        // (2) Extract Data
        // ==========================

        // Columns
        this.getColumns(this.data);
        var colNum= this.columns.length;

        // Rows
        this.getRows(this.data);

        // Table Tags
        this.tableTag = '<div class="tableX_div_container">';
        this.tableTag += '<Table class="tableX_table">';

        // (3) Create Table
        // ==========================

        // Column Headers
        this.tableTag += '<thead class="tableX_thead">';
        this.tableTag += '<tr class="tableX_tr_header">';
        this.columns.forEach((col) =>{
            this.tableTag += '<th class = "tableX_th">';
            this.tableTag += col;
            this.tableTag += '</th>';
        });
        this.tableTag += '</tr>';
        this.tableTag += '</thead>';

        // Rows
        this.tableTag += '<tbody class="tableX_tbody">';
        this.rows.forEach(function(row){
            this.tableTag += '<tr class="tableX_tr_data">';
            row.forEach((cell) => {
                this.tableTag += '<td class="tableX_td">'; 
                this.tableTag += cell;
                this.tableTag += '</td>';
            })
            this.tableTag += '</tr>';
        }, this);
        this.tableTag += '</tbody>';

        this.tableTag += '</Table>';
        this.tableTag += '</div>';

        // (4) Insert 
        // ==========================
        // Inserts the ttable to the container
        document.getElementById(this.container).innerHTML = this.tableTag;

    }
    //—————————————————————————————————————————————————————————————// 
    //                            Style                            //
    //—————————————————————————————————————————————————————————————//

    // Style (Base)
    //———————————————————————————————
    addStyle_default(){
        var style = document.createElement('style');
        style.innerHTML = this.TABLEX_STYLE_DEFAULT;
        document.head.appendChild(style);
    }

    // Basic Style
    //———————————————————————————————
    addStyle_cusomized(){

    }
    
    // Style (Base)
    //———————————————————————————————
    TABLEX_STYLE_DEFAULT = `
        // .tableX_th{
        //     color: red;
        // }
    `;

}