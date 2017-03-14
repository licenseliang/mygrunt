/*
* @Author: liangshian
* @Date:   2017-03-08 17:26:02
* @Last Modified by:   liangshian
* @Last Modified time: 2017-03-10 14:10:03
*/

define(['./module','angular'], function(controllers,ng){
	'use strict';
	controllers.controller('mySeckillCtrl', ['$scope',function($scope){

		$scope.seckillUrl='http://www.baidu.com';

		$scope.loadPage = function(){
			//ng.element('#ifrmaePage').attr('src',$scope.seckillUrl);
		};
	}]);
});