var routerApp=angular.module("routerApp",["ui.router"]);routerApp.run(function(e,t,r){e.$state=t,e.$stateParmas=r}),routerApp.config(function(e,t){t.otherwise("/login"),e.state("first",{url:"/login",views:{"":{templateUrl:"../widget/message/home.html"},"main@first":{templateUrl:"../widget/message/loginForm.html"}}}).state("second",{url:"/booklist",views:{"":{templateUrl:"../widget/message/bookList.html"}}}).state("second.third1",{url:"/third1",views:{"":{templateUrl:"../widget/message/third1.html"}}}).state("second.third2",{url:"/third2",views:{"":{templateUrl:"../widget/message/third2.html"}}}).state("second.third3",{url:"/third3",views:{"":{templateUrl:"../widget/message/third3.html"}}}).state("zhengze",{url:"/zz",views:{"":{templateUrl:"../widget/message/zhengze.html"}}}).state("zz",{url:"/{zhz:[0-9]{1,4}}",views:{"":{templateUrl:"../widget/message/zz.html"}}})});