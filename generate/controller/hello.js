var args = require('../utils/arg') ;

var config = {
    'components/m1/':[
        {tpl:__dirname+'/hello/FormWrapTpl',genName:args.short.m},
        {tpl:'',genName:args.short.m , ext:'scss'},
        {tpl:__dirname+'/hello/FormTpl',genName:args.short.m + 'Form'},
        {tpl:__dirname+'/hello/GridTpl',genName:args.short.m + 'Grid'},
        {tpl:__dirname+'/hello/RootTpl',genName:args.short.m + 'Root'},
    ],
    'components/m2/':[
        {tpl:__dirname+'/hello/FormWrapTpl',genName:args.short.m},
        {tpl:'',genName:args.short.m , ext:'scss'},
        {tpl:__dirname+'/hello/FormTpl',genName:args.short.m + 'Form'},
        {tpl:__dirname+'/hello/GridTpl',genName:args.short.m + 'Grid'},
        {tpl:__dirname+'/hello/RootTpl',genName:args.short.m + 'Root'},
    ],
}

module.exports.exec = function () {
    require('../utils/parse').genFiles(config) ;
}