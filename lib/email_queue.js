var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//定义在这里是为了方便以后已到另外的项目中
var MailQueueSchema = new Schema({
    created_on: {
        type: Date,
        default: Date.now,
        //一天过期
        expires: 3600 * 24
    },
    mailOptions: Schema.Types.Mixed,
    //状态值,[new 新加入队列,down 完成,failure 失败]
    status: {
        type: String,
        default: 'new'
    },
    //重发计数，email可重发三次
    time: {
        type: Number,
        default: 0
    }
});


exports.MailQueue = mongoose.model('MailQueue', MailQueueSchema);
