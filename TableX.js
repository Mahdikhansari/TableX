// -----------------------------------------------------------------
// Table X object 
// this object lets' to create a table from a JOSN object
// Mahdi Khansari 
// Apr 13, 2023
// v 1.0
// -----------------------------------------------------------------
// link: https://mahdikhansari.github.io/TableX.js
// -----------------------------------------------------------------

class tableX{
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
    :root{
        font-family:            'Proxima Nova';
    }
    .tableX_div_container{
        width:                  calc(100% - 4px);
        max-height:             calc(100% - 4px);
        overflow-x:             auto;
        overflow-y:             auto;
        margin:                 2px;
    }
    .tableX_table{
        border-spacing:         0px;
        height:                 100%;
        width:                  100%;
        border-collapse:        separate;
        border-left:            1px #838383 solid;
        border-right:           1px #838383 solid;
        border-bottom:          1px #838383 solid;
    }
    .tableX_thead{
        position:               sticky;
        top:                    0px;
    }
    .tableX_tbody{
        width:                  100%;
        overflow-y:             visible;
        overflow-x:             hidden;
    }
    .tableX_tr_header{
        background-color:       rgb(70, 70, 70);
        box-sizing:             border-box;
        position:               sticky;
        top:                    0px;
    }
    .tableX_tr_data{
        background-color:       rgb(228, 228, 228);
        
        width: 100%;
    }
    .tableX_tr_data:nth-child(even){
        background-color:       white;
    }
    .tableX_th{
        color:                  rgb(233, 233, 233);
        font-size:              .8rem ;
        font-weight:            400;
        height:                 30px;
        min-width:              80px;
        padding:                2px 2px;
        position:               sticky;
        top:                    0px;
        border-top:             1px #838383  solid;
        border-bottom:          1px #838383 solid;
    }
    .tableX_td{
        color:                  rgb(70, 70, 70);
        background-color:       inherit;
        text-align:             center;
        min-width:              80px;
        font-size:              .8rem;
        padding:                2px 2px;
        transition:             0.4s;
        cursor:                 pointer;
    }
    .tableX_td:hover{
        background-color:       rgb(173, 173, 173);
        color:                  rgb(36, 36, 36);
        font-weight:            500;
    }

    ::-webkit-scrollbar {
        width:                  8px;
        height:                  8px;
        background:             #ffffff;
    }
    ::-webkit-scrollbar-thumb {
        background:             #a3a3a3;
        border-radius:          3px;
        border:                 1px solid #f3f3f3;
    }
    `;

}