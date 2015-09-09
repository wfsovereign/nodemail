module.exports = {
    db: {
        url: 'mongodb://10.12.1.32/nodemail'
    },
    local_dir: __dirname,
    port: 3000,
    secret: 'secret',
    mail_opts: {
        host: 'smtp.exmail.qq.com',
        port: 25,
        auth: {
            user: 'fengyangqijun@jimitec.com',
            pass: '19854160qj'
        },
        poll: 200
    },
    sms: {
        //sms上行发送连接
        up_sms: 'http://sdk4report.eucp.b2m.cn:8080/sdkproxy/sendsms.action',
        //服务商提供的key
        key: '0SDK-EAA-6688-JERLM',
        //服务商提供的key对应的密码
        password: '17876',
        poll: 100
    },
    name: 'wfsovereign', // 社区名字
    setting: {
        cookieSecret: "nodemail",
        db: "nodemail",
        host: "localhost",
        port: "27017"

    },
    hostname: 'http://localhost',
    default_pager_num: 25,
    bug_email: ['wfsovereign@outlook.com'],
    bug_sms: ['15574488257', '15501619399'],
    data_type_arr: ['Datas', 'Comment', 'Favor', 'Like'],
    file_cache_path: './tmp',
    oss: {
        accessKeyId: "Dri7GdpNKeDznarj",
        secretAccessKey: "PLz4ZewVks5aO8pASBjrSbMJkFLPfx",
        endpoint: 'http://oss-cn-hangzhou.aliyuncs.com'
    }

};