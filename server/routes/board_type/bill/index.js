var query = require('./query')
var xl = require('excel4node');

function _export(listdata, res){
    var wb = new xl.Workbook();
    // Add Worksheets to the workbook
    var ws = wb.addWorksheet('Sheet 1');
    var proPerty_obJect  = Object.keys(listdata[0])

    listdata.forEach((data, index) => {
        var index = index+1;
        proPerty_obJect.forEach((prop, index_prop )=>{
            var index_prop = index_prop+1;
            ws.cell(index,index_prop).string(data[prop].toString())
        })
    });
    wb.write('Excel.xlsx', res);
}
function excute(res, err , result){
    console.log(result);
    if(err)
          {
              return;
          }
          if(result.length == 0)
          {
              res.send(result);
              return;
          }
             for(var index = 0 ; index <=result.length ; index++){
                  if(index == result.length)
                  {
                      console.log(result);
                      res.send(result);
                      return;
                  }
                 
              var bill = [{}];
              var arr_idbilldetail = result[index].idbilldetail.split("@#$");
              
              for(var index_menu = 0 ; index_menu<arr_idbilldetail.length;index_menu++){
                
                bill[index_menu] = 
                    {
                      namemenu : result[index].namemenu.split("@#$")[index_menu],
                      idbilldetail : result[index].idbilldetail.split("@#$")[index_menu],
                      idmenu : result[index].idmenu.split("@#$")[index_menu],
                      quantity : result[index].quantity.split("@#$")[index_menu],
                      billdetail_price : result[index].billdetail_price.split("@#$")[index_menu],
                      unit : result[index].unit.split("@#$")[index_menu],
                      menu_price : result[index].menu_price.split("@#$")[index_menu]
                  }
                    
                
             
            
              }
             
              result[index].menu_detail = JSON.stringify([...bill]);
              
          }
}
module.exports = {
    query_select : function(res,conn){
        conn.query(query.query_select,(err, result)=>{
          excute(res,err,result)

        })
    },
    query_searchfor_Idbill : function(id,res,conn)
    {
        console.log(query.query_searchfor_Idbill(id));
        conn.query(query.query_searchfor_Idbill(id),(err, result)=>{
            
            excute(res,err,result)
    })
},
    query_searchfor_datetime : function(from, to, res, conn)
    {
        console.log(query.query_searchfor_datetime(from,to));
        conn.query(query.query_searchfor_datetime(from,to),(err, result)=>{
            
            excute(res,err,result)
        })
    },
    query_exportData : function(query,res,conn){
    
    conn.query(query, function(error, result){
    if (error) 
    {
     _export([{}], res)
    }
    //console.log(“– USER TABLE — “ , result);
    _export(result, res)
     // Trả kết quả về cho client dưới dạng json
    });
    // var wb = new xl.Workbook();
    // // Add Worksheets to the workbook
    // var ws = wb.addWorksheet('Sheet 1');
    // var proPerty_obJect  = Object.keys(listdata[0])
    // console.log(proPerty_obJect);

    // listdata.forEach((data, index) => {
    //     var index = index+1;
    //     proPerty_obJect.forEach((prop, index_prop )=>{
    //         var index_prop = index_prop+1;
    //         console.log(index_prop)
    //         ws.cell(index,index_prop).string(data[prop].toString())
    //     })
    // });
    // wb.write('Excel.xlsx', res);

    
    // Set value of cell A1 to 100 as a number type styled with paramaters of style
  
    


    }
}