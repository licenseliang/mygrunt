require.config({
    baseUrl:'js',
    paths: {
        'domReady':'../bower_components/domReady/domReady',
    	'angular':'../bower_components/angular/angular.min',
        'angular-route':'../bower_components/angular-route/angular-route'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route':{
            deps:['angular']
        }
    },
    priority:["angular"],
    deps:['bootstrap']
});

//     require(['bootstrap'],function(bootstrap){
//     //alert("加载完毕");
// });


