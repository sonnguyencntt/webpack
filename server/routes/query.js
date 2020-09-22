const Type  = require('./type_error');

module.exports.query_inSert = function(numberOfpageForpagination, pageForgGetData,sql_query, sql_select, sql_count, pool, res)
{
    if(sql_query)
    {
        
        pool.query(sql_query, function(error, result_insert){
            if (error)
            {
              res.send({error : 'INSERT'});
              return;
            }
            query_notExit(numberOfpageForpagination, pageForgGetData, sql_select, sql_count, pool, res)
          })  
    }
    else
    {
        query_notExit(numberOfpageForpagination, pageForgGetData, sql_select, sql_count, pool, res)
    }

  
  
}

function query_notExit(numberOfpageForpagination, pageForgGetData, sql_select, sql_count, pool, res) {
    var _sql_select = sql_select +" LIMIT "+pageForgGetData+","+numberOfpageForpagination;
           pool.query(_sql_select, function(error, result_select){
            if (error){
              res.send({error :'SELECT'});
              return;
            }
            //var sql_count = "SELECT COUNT(*) as count FROM tables WHERE IdArea LIKE '%" + data.room + "%' and IdTable LIKE '%" + data.table + "%' and idStatus LIKE '%" + data.status + "%'";
            pool.query (sql_count, function(error, result_count){
              //console.log(result[0].count / numberOfpageForpagination);
              if(error) {
                  res.send({error :'COUNT'});
                return;
              }
             
             const count =  Math.ceil(result_count[0].count / numberOfpageForpagination);
              res.json({data : result_select, 
                count : count});
            })
            })
}
module.exports.query_Room = (sql_query, sql_select, pool, res) =>{
    if(sql_query)
    {
        
        pool.query(sql_query, function(error, result_insert){
          console.log('dasd');
          console.log(result_insert)
          console.log(error);
            if (error)
            {
              res.send({error : Type.Type});
              return;
            }
            notExit_for_Room( sql_select, pool, res)
          })  
    }
    else
    {
        notExit_for_Room( sql_select, pool, res)
    }
}

const notExit_for_Room = (sql_select, pool, res) =>{
   
    pool.query(sql_select, function(error, result_select){
    if (error) 
    {
        res.send({error : Type.Type});
        return;
    }
    else
    {
        // res.json({data : result_select, 
        //         count : count});
        res.json(result_select);
    } 
    });
}