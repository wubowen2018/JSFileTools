let { logWarning, logTime, log } = require('./util')
let express = require('express')

//cors 跨域
let cors = require('cors')


let app = express()


//cors的配置项
var corsOptions = {
    //origin: 'http://www.baidu.com', //只有百度可以访问
    origin: '*',
    optionsSuccessStatus: 200
}

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




