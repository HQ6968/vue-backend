var args = require('../utils/arg') ;
var constant = require('../constant') ;
var basePath = constant.ROOT_SRC ;

var config = {
    'components/':[
        {tpl:__dirname+'/comp.tpl',genName:args.params[1],ext:'Vue'},
    ]
}

module.exports.exec = function () {
    require('../utils/parse').genFiles(config,basePath) ;
}