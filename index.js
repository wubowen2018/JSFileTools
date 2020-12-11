let express = require('express')
let { logWarning, logTime, log } = require('./util')

let log4js = require('log4js');
let logger = require("./config/log4js").getLogger("index.js"); //表示这个日志来着于 index.js文件

//cors 跨域
let cors = require('cors')

let app = express()


//cors的配置项
var corsOptions = {
    //origin: 'http://www.baidu.com', //只有百度可以访问
    origin: '*',
    optionsSuccessStatus: 200
}

// 一个简单的 logger
// app.use(function (req, res, next) {
//     log('%s %s', req.method, req.url);
//     next();
// });

 //http请求日志，输出的等级为trace
app.use(log4js.connectLogger(log4js.getLogger("http"), { level: 'trace' }));

//在其他地方使用
// var logger = require("./lib/logger").getLogger("other.js");
// //logger.level = 'error';      //可以不设置，不设置就使用之前配置的default里面的等级
// logger.debug("debug---asdasdasd");
// logger.info("info--sadadasd");
// logger.error("error--sadadasd");
// logger.error("error--sadadasd");
// logger.fatal("fatel--sadadasd");
// logger.trace("trace--sadadasd");

//利用中间件实现跨域
app.use('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); //这个表示任意域名都可以访问，这样写不能携带cookie了。
    //res.header('Access-Control-Allow-Origin', 'http://www.baidu.com'); //这样写，只有www.baidu.com 可以访问。
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');//设置方法
    if (req.method == 'OPTIONS') {
        res.send(200); // 意思是，在正常的请求之前，会发送一个验证，是否可以请求。
    }
    else {
        next();
    }
});

app.get('/info', function (req, res, next) {
    res.json({ msg: 'get data successfully!' })
})


app.listen(3000, () => log("服务启动，监听端口3000..."))




