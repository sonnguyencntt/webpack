var checkCookie = require('./checkcookie')


module.exports = {

    check_authenTication : (req, res, next)=>{
        console.log(req.body);
        if(req.originalUrl == '/checkpass')
        {
            next();
            return;
        }
        var cookie = req.headers.cookie;
        checkCookie.checkCookie(cookie, req, next, res);
    }

}