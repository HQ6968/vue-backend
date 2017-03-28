/**
 * 
 * 命令行参数
 * node index.js  aaa bbb --option-name=xxxx  --option-age=32 -p -s -t=100
 */

var args =  process.argv.slice(2) ;
var params = [] , options = {} , short = {} ;

for(var i = 0 ; i < args.length ; i++){
    if(args[i].substr(0,2) == '--'){
        var item = args[i].substr(2).split('=') ;

        item[0] = item[0].replace('-','_') ;
        options[item[0]] = item[1] ;
    }else if(args[i].substr(0,1) == '-'){
        var item = args[i].substr(1).split('=') ;
        if(item.length == 1){
            item[1] = true ;
        }
        item[0] = item[0].replace('-','_') ;
        short[item[0]] = item[1] ;
    }else{
        params.push(args[i]);
    }
}



function replaceAll(s , s1,s2){
    return s.replace(new RegExp(s1,"gm"),s2);
}

module.exports.options = options ;
module.exports.params = params ;
module.exports.short = short ;

