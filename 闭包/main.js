/**
 * Created by zhangpeng on 2016/4/27.
 */
var a = function () {
    var name = '';
    return (function(){
        var name = 'peng';
        return name;
    })();
    console.log(name);

}
a();