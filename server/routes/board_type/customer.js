const Pagination = require('../pagination')
const Query = require('../query');

function module_query(data, sql_query, pool, res ){
    var sql_select = "SELECT * FROM customers WHERE CustomerName LIKE '%" + data.id + "%' and Debit >= "+data.debit+"";
    var sql_count = "SELECT COUNT(*) as count FROM customers WHERE CustomerName LIKE '%" + data.id + "%' and Debit >= "+data.debit+"";
    
    const pagi = Pagination.pagination(data.index);
    Query.query_inSert(pagi.numberOfpageForpagination, pagi.pageForgGetData,sql_query, sql_select, sql_count, pool, res);

}

module.exports.insert = function(data, pool, res){
    var sql_insert ="INSERT INTO customers (IdCustomer, CustomerName, PhoneNumber,Email,Address, Note,Birthday, Gender, Debit, Avatar) VALUES ('"+ data.idcustomer + "','"+ data.namecustomer + "','" + data.phonecustomer+ "','"+ data.emailcustomer + "','"+ data.addresscustomer + "','"+ data.notecustomer + "','"+ data.birthdaycustomer + "',null,'"+data.debitcustomer+"','"+data.avatarcustomer+"')";// Thực hiện câu truy vấn và show dữ liệu
    module_query(data,sql_insert, pool, res);
}


module.exports.select_all_data = function(data, pool, res){
    var sql_select =null;
    module_query(data,sql_select, pool, res);
}

module.exports.update = function(data, pool, res){
    
    var sql_update ="UPDATE customers SET IdCustomer  = '" + data.idcustomer + "' , CustomerName  = '" + data.namecustomer + "' , Email =  '" + data.emailcustomer + "', PhoneNumber =  '" + data.phonecustomer + "', Address =  '" + data.addresscustomer + "', Note =  '" + data.notecustomer + "', Debit =  '" + data.debitcustomer + "', Avatar =  '"+data.avatarcustomer+"', Birthday =  '"+data.birthdaycustomer+"' WHERE id =" + data.indexcustomer +" ";
    module_query(data,sql_update, pool, res);
}

module.exports.delete = function(data, pool, res){
    var sql_delete ="DELETE FROM customers WHERE id = "+data.indexcustomer+"";
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