const log4js = require('log4js');

log4js.configure({
    appenders: {
        wxLogs: {
            type: 'dateFile',
            filename: 'logs/wx.log',
            pattern: 'yyyy-MM-dd'
        }
    },
    categories: {
        default: {
            appenders: ['wxLogs'],
            level: 'info'
        }
    }
}, {});

var wxLogs = log4js.getLogger();
module.exports = wxLogs;