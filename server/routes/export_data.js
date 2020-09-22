var xl = require('excel4node');

exports.export_data = function(board,res,pool)
{
    console.log('export');
    var sql = "SELECT * FROM "+board+"";// Thực hiện câu truy vấn và show dữ liệu
    pool.query(sql, function(error, result){
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