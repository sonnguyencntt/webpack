const Query = require('../query');

function module_query(sql_query, pool, res ){
    var sql_select = "SELECT * FROM areas";
    Query.query_Room(sql_query, sql_select, pool, res);

}

module.exports.insert = function(data, pool, res){
    var sql_insert ="INSERT INTO areas (IdArea, BranchName) VALUES ('"+ data.id + "','" + data.value+ "')";
   module_query(sql_insert, pool, res);
}


module.exports.select_all_data = function(pool, res){
    var sql_select =null;
    module_query(sql_select, pool, res);
}

module.exports.update = function(data, pool, res){
    var sql_update ="UPDATE areas SET IdArea ='"+data.idarea+"', BranchName = '"+data.name+"' WHERE id = "+data.id+"  ";
    module_query(sql_update, pool, res);
}

module.exports.delete = function(data, pool, res){
    var sql_delete = "DELETE FROM areas WHERE id =" + data.id;
    module_query(sql_delete, pool, res);
}

module.exports.search = function(data, pool, res){
    var sql = "SELECT * FROM areas WHERE IdArea LIKE '%" + data.name + "%' OR BranchName LIKE '%" + data.name + "%'";
  pool.query(sql, function(error, result){
  if (error) 
  {
      res.send([{}]);
      return;
  }; 
  res.json(result);
 
  });
}
