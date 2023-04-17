// -----------------------------------------------------------------
// Table X object 
// this object lets' to create a table from a JOSN object
// Mahdi Khansari 
// Apr 13, 2023
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
        
        // gets the columns
        this.getColumns(this.data);

        // gets the rows
        this.getRows(this.data);

        //this.getClasses(this.data);

        // Create the Table tags
        tableTag = '<Table>';
        tableTag += '<head>';

    }

}