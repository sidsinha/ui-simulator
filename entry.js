//Main javascript file, which holds everything which is happining in tha appilication. IMported all services whichwe have added, initialized angular modules and defiled main controller for the application

import angular from "angular";
require('angular-moment');
import settings from "./src/services/settings.js";
import addServer from "./src/services/addserver.service.js";
import destroyServer from "./src/services/destroyserver.service.js";
import StartApp from "./src/services/startapp.service.js";
import StopApp from "./src/services/stopapp.service.js";
import AppButton from "./src/services/app-button-status.service.js";

var app = angular.module('app',['angularMoment', settings, addServer, destroyServer, StartApp, StopApp, AppButton]);

app.controller('mainController', ['$scope', '$filter', 'settings', 'addServer', 'destroyServer', 'StartApp', 'StopApp', 'AppButton', 
	($scope, $filter, settings, addServer, destroyServer, StartApp, StopApp, AppButton) => {

    $scope.title = "This is default Title";
	$scope.apps = settings.defaultApps();
    $scope.serverList = settings.defaultServer();
    $scope.availableServer = settings.serverAvailability();


    if(!$scope.serverList.length){
        $scope.disablePlus = true;
        	
    }
	

	//function called when we "Add Server" the server (clicked on plus on top)    
	$scope.addServer = () => {

		var data = addServer.add($scope.serverList, $scope.availableServer);
		
		$scope.serverList = data.serverList;
		$scope.availableServer = data.availableServer;
		
    };
	
    
    //function called when we "Distroy" the server (clicked on minus on top)
    $scope.removeServer = () => {

    	var data = destroyServer.destroy($scope.serverList, $scope.availableServer);

    	$scope.serverList = data.serverList;
		$scope.availableServer = data.availableServer;

    };

    
    //function called when we hover on any server and click on "delete"
    $scope.removeServerOnClick = getIndex => {

    	var data = destroyServer.destroyAdhoc($scope.serverList, getIndex);

    	$scope.serverList = data.serverList;
		$scope.availableServer = data.availableServer;
        $scope.appsInDeletedServer = data.appsInDeletedServer

        $scope.appsInDeletedServer.forEach(function(key){
            $scope.startApp(key.id, key.initial, key.name);
        })
    };

    
    //function called when click (plus) on any app
    $scope.startApp = (id, initial, name) => {
		
		
        var data = StartApp.start(id, initial, name, $scope.serverList, $scope.availableServer);

    	$scope.serverList = data.serverList;
		$scope.availableServer = data.availableServer;
    };

    
    //function called when click on (minus) on any app
    $scope.stopApp = id => {

    	var data = StopApp.stop(id, $scope.serverList, $scope.availableServer);

    	$scope.serverList = data.serverList;
		$scope.availableServer = data.availableServer;
    };


    //this method is calling evrytime to check if selected app is running in any of the server, if yes returns true otherwise false
    $scope.isAppsAvailable = function(id){
    	return AppButton.statusButMinus(id, $scope.serverList);
    }
    
    //this method is calling evrytime to check if the are any availabe server so that we can add the app, if yes returns true otherwise false
    $scope.isServerAvailable = function(id){
		return AppButton.statusButPlus(id, $scope.availableServer);
	}
    

}]);

