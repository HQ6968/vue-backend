/**
 *
 * 文件助手函数
 */
var fs = require("fs");
var path = require("path");

//递归创建目录 异步方法
function mkdirs(dirname, callback) {
    fs.exists(dirname, function (exists) {
        if (exists) {
            callback();
        } else {
            //console.log(path.dirname(dirname));
            mkdirs(path.dirname(dirname), function () {
                fs.mkdir(dirname, callback);
            });
        }
    });
}

//递归创建目录 同步方法
function mkdirsSync(dirname) {
    //console.log(dirname);
    if (fs.existsSync(dirname)) {
        return true;
    } else {
        if (mkdirsSync(path.dirname(dirname))) {
            fs.mkdirSync(dirname);
            return true;
        }
    }
}

function writeFileSync(filename, data, options) {
    if( data === undefined ){
        data = '' ;
    }
    mkdirsSync( path.dirname(filename) ) ;
    fs.writeFileSync( filename, data, options ) ;
}

module.exports.mkdirs = mkdirs;
module.exports.writeFileSync = writeFileSync;

module.exports.mkdirsSync= mkdirsSync;

//调用
//mkdirsSync("./aa/bb/cc" , null);
//mkdirs("./aa/bb/cc", function (ee) {
//    console.log(ee)
//});