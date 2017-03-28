var fileUtils = require('./file') ;
var args = require('./arg') ;
var constant= require('../constant') ;
var renderData = {short:args.short , options:args.options , params:args.params} ;
//var basePath = constant.ROOT_TEST + 'routes/' + args.short.p + '/' ;
/**
 *
 * @param config
 * 通过配置文件生成解析好的文件
 */
module.exports.genFiles = function (config,basePath) {
    for(var _path in config){
        config[_path].map(function (v) {
            var content = '' ;
            if(v.tpl){
                content = require(v.tpl).parse( renderData ) ;
            }
            var ext = v.ext || 'js' ;
            fileUtils.writeFileSync(`${basePath}${_path}/${v.genName}.${ext}`, content );
        })
    }
}
