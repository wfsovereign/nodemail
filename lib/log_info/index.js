/**
 * Created by shining3d-fyqj on 15/9/11.
 */


var log4js = require('log4js');
var logConfig = {
    "appenders": [
        {"type": "console", "category": "console"},
        {
            type: 'dateFile', //文件输出
            "filename": "./log/",
            "pattern": "yyyyMMdd.log",
            //命名规则，我们是按天，也可以设置为yyyyMMddhh.log，为按时
            "absolute": true,
            "alwaysIncludePattern": true,
            "category": "logInfo"
        }
    ],
    "levels": {"logInfo": "INFO"}
};

log4js.configure(logConfig);
var logInfo = log4js.getLogger('logInfo');
