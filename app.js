process.env.DEBUG = "nodemail-*";
var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var router = require('./routes/index');
var config = require('./config.js');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var debug = require('debug')('nodemail-app');

var log4js = require('log4js');
var logConfig = {
    "appenders":[
        {"type": "console","category":"console"},
        {
            type: 'dateFile', //文件输出
            "filename":"./log/",
            "pattern":"yyyyMMdd.log",
            //命名规则，我们是按天，也可以设置为yyyyMMddhh.log，为按时
            "absolute":true,
            "alwaysIncludePattern":true,
            "category":"logInfo"
        }
    ],
    "levels":{"logInfo":"INFO"}
};

log4js.configure(logConfig);
var logInfo =log4js.getLogger('logInfo');


var app = express();

// view engine setup
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(log4js.connectLogger(logInfo,{level:'auto',format:':method : url'}));
app.use(session({
    secret: config.setting.cookieSecret,
    key: config.setting.db,
    cookie: {maxAge: 1000 * 60 * 60 * 2},
    store: new MongoStore({
        db: config.setting.db,
        host: config.setting.host,
        port: config.setting.port
    })
}));




router(app);

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.listen(app.get('port'), function () {
    debug('zhongzhong project server start on :' + app.get('port'));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        console.log(err,"服务器的错误");
        res.render('404', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('404', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
