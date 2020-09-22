module.exports.pagination = function(index){
    var numberOfpageForpagination = 5;
  
    var pageForgGetData =((index - 1) *numberOfpageForpagination);
    return {
        numberOfpageForpagination,
        pageForgGetData
    };
}