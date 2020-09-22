module.exports = {
    parseNullToString : (data) =>{
        if(typeof data == 'undefined')
        {
                return null;
        }
        return "'" + data + "'";
        
    }
}