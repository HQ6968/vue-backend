var args = require('./utils/arg') ;

if(args.params[0]){
    var controllerName = './controller/'+args.params[0]+'.js';
    require(controllerName).exec() ;

}else{
    var s = `
#生成Component
    node index.js comp Layout
    `;
    console.log(s)
}

