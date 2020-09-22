const Pagination = require('../pagination')
const Query = require('../query');

function module_query(data, sql_query, pool, res ){
    var sql_select = "SELECT * FROM suppliers WHERE Namesupplier LIKE '%" + data.id + "%' and Debit >= "+data.debit+"";
    var sql_count = "SELECT COUNT(*) as count FROM suppliers WHERE Namesupplier LIKE '%" + data.id + "%' and Debit >= "+data.debit+"";
    
    const pagi = Pagination.pagination(data.index);
    Query.query_inSert(pagi.numberOfpageForpagination, pagi.pageForgGetData,sql_query, sql_select, sql_count, pool, res);

}

module.exports.insert = function(data, pool, res){
    var sql_insert ="INSERT INTO suppliers (Idsupplier, Namesupplier, Email,Phone,Address, Note, Debit, Avatar) VALUES ('"+ data.idsupplier + "','"+ data.namesupplier + "','" + data.emailsupplier+ "','"+ data.phonesupplier + "','"+ data.addresssupplier + "','"+ data.notesupplier + "','"+ data.debitsupplier + "','"+data.avatarsupplier+"')";// Thực hiện câu truy vấn và show dữ liệu
    module_query(data,sql_insert, pool, res);
}


module.exports.select_all_data = function(data, pool, res){
    var sql_select =null;
    module_query(data,sql_select, pool, res);
}

module.exports.update = function(data, pool, res){
    
    var sql_update ="UPDATE suppliers SET Idsupplier = '" + data.idsupplier + "' , Namesupplier  = '" + data.namesupplier + "' , Email =  '" + data.emailsupplier + "', Phone =  '" + data.phonesupplier + "', Address =  '" + data.addresssupplier + "', Note =  '" + data.notesupplier + "', Debit =  '" + data.debitsupplier + "', Avatar =  '"+data.avatarsupplier+"' WHERE id =" + data.indexsupplier +" ";
    module_query(data,sql_update, pool, res);
}

module.exports.delete = function(data, pool, res){
    var sql_delete ="DELETE FROM suppliers WHERE id = "+data.indexsupplier+"";
    module_query(data,sql_delete, pool, res);
}


module.exports.getSTT = function(data, pool, res){
    var sql = "SELECT * FROM stttable";
  pool.query(sql, function(error, result){
  if (error) 
  
  {
      res.send([{}]);
      return;
  }
  res.json(result);
  });
}