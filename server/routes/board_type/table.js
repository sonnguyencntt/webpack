const Pagination = require('../pagination')
const Query = require('../query');

function module_query(data, sql_query, pool, res ){
    var sql_select = "SELECT * FROM tables WHERE IdArea LIKE '%" + data.room + "%' and IdTable LIKE '%" + data.table + "%' and idStatus LIKE '%" + data.status + "%'";
    var sql_count = "SELECT COUNT(*) as count FROM tables WHERE IdArea LIKE '%" + data.room + "%' and IdTable LIKE '%" + data.table + "%' and idStatus LIKE '%" + data.status + "%'";
    
    const pagi = Pagination.pagination(data.index);
    Query.query_inSert(pagi.numberOfpageForpagination, pagi.pageForgGetData,sql_query, sql_select, sql_count, pool, res);

}

module.exports = {
    insert : function(data, pool, res){
        var sql_insert ="INSERT INTO tables (IdTable, TableName, idStatus,IdArea,idBill) VALUES ('"+ data.idtable + "','"+ data.name + "',1,'" + data.idarea+ "','HD001')";// Thực hiện câu truy vấn và show dữ liệu
       module_query(data,sql_insert, pool, res);
    },
    select_all_data : function(data, pool, res){
        var sql_select =null;
        module_query(data,sql_select, pool, res);
    },
    
    select_all_data : function(data, pool, res){
        var sql_select =null;
        module_query(data,sql_select, pool, res);
    },
    update : function(data, pool, res){
        var sql_update ="UPDATE tables SET IdArea = '" + data.idarea + "' , IdTable  = " + data.idtable + " , TableName =  '" + data.name + "' WHERE IdTable =" + data.idtable +" ";
        module_query(data,sql_update, pool, res);
    },
    delete : function(data, pool, res){
        var sql_delete ="DELETE FROM tables WHERE IdTable = "+data.idtable+"";
        module_query(data,sql_delete, pool, res);
    },
    getSTT : function(data, pool, res){
        var sql = "SELECT * FROM stttable";
      pool.query(sql, function(error, result){
      if (error) 
      
      {
          res.send(error);
          return;
      }
      res.json(result);
      });
    }
}







// module.exports.delete = function(data, pool, res){
//     var sql_delete ="DELETE FROM tables WHERE IdTable = "+data.idtable+"";
//     module_query(data,sql_delete, pool, res);
// }
