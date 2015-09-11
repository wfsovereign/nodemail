
var debug = require('debug')('nodemail-index');
var mailer = require('../lib/email');



function router (app) {
    app.get('/',function  (req,res) {
        res.render('index',{
            title:'Node email'
        });
    });

    app.post('/signup',function (req,res){
        debug('sign');
        var email = req.body.email;
        debug(email);
        mailer.sendActiveMail(email,null,'童鞋');
        debug('success');
        res.json({
            status:'success',
            data:""
        });
    });
}


module.exports = router;