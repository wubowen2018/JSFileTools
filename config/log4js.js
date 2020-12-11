var log4js = require('log4js');

var config = {
    "appenders": {
        "console": { //输出到控制台
            "type": "console"
        },
        "trace": {  //输出到文件 （log/access.log）
            "type": "file",
            "filename": "log/access.log",
            "maxLogSize ": 31457280
        },
        "http": {
            "type": "logLevelFilter",  //定义输出到文件，日志的等级
            "appender": "trace",       //对应定义的 appenders 里面的 trace任务
            "level": "trace",          //输出到任务文件（log/access.log）的 日志最低等级
            "maxLevel": "trace"     //  输出到任务文件（log/access.log）的 日志最高等级
        },
        "info": {
            "type": "dateFile",  //输出到格式化的文件（log/info-yyyy-MM-dd.log）
            "filename": "log/info",
            "pattern": "-yyyy-MM-dd.log",
            "alwaysIncludePattern": true,
            "compress": true
        },
        "maxInfo": {
            "type": "logLevelFilter", //定义输出到文件，日志的等级
            "appender": "info",//对应定义的 appenders 里面的 info任务
            "level": "debug",  //输出到任务文件（log/info-yyyy-MM-dd.log）的 日志最低等级
            "maxLevel": "info" //输出到任务文件（log/info-yyyy-MM-dd.log）的 日志最高等级
        },
        "error": {
            "type": "dateFile", //输出到格式化的文件  （log/error-yyyy-MM-dd.log）
            "filename": "log/error",
            "pattern": "-yyyy-MM-dd.log",
            "alwaysIncludePattern": true,
            "compress": true
        },
        "minError": {
            "type": "logLevelFilter", //定义输出到文件，日志的等级
            "appender": "error",//对应定义的 appenders 里面的 error任务
            "level": "error"  //输出到任务文件（log/error-yyyy-MM-dd.log）的 日志最低等级
        }
    },
    "categories": {
        "default": {
            "appenders": [
                "console",
                "http",
                "maxInfo",
                "minError"
            ],
            "level": "all"
        }
    }
}

//配置日志的输出级别,共ALL<TRACE<DEBUG<INFO<WARN<ERROR<FATAL<MARK<OFF八个级别,default level is OFF

//只有大于等于日志配置级别的信息才能输出出来，可以通过category来有效的控制日志输出级别

// if (process.env.NODE_ENV == "production") {
//     //生产环境
//     config.categories.default.appenders = ["http", "maxInfo", "minError"];
//     config.categories.default.level = "info";
// } else {
//     config.categories.default.appenders = ["console"];
//     config.categories.default.level = "all";
// }

log4js.configure(config);

module.exports = log4js;