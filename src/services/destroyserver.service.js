//this service used when we want to destroy any server either by clicking on big minus button(top left) or clicking on delete while hover to server

import angular from 'angular';

class Server {
  constructor() {
    //
  }

  //use this method when cliked on big minus button(top left) 
  destroy(serverList, availableServer){

    //before deleting the server, I am storing the apps in new array (appsInDeletedServer) from that server
    var appsInDeletedServer = [];
    serverList[serverList.length-1].apps.forEach(function(key){
      appsInDeletedServer.push(key);
    })

    //deleting the mapping record of server from the hash
    delete availableServer[serverList.length - 1];

    //deleting last server from the "serverlist" array
    serverList.pop();
    
		return{
			serverList : serverList,
			availableServer : availableServer,
      appsInDeletedServer : appsInDeletedServer
    }

  };

  //use this method when cliked on "delete" while hover to server
  destroyAdhoc(serverList, index){
    var availableServer = {};

    //before deleting the server, I am storing the apps in new array (appsInDeletedServer) from that server
    var appsInDeletedServer = [];
    serverList[index].apps.forEach(function(key){
      appsInDeletedServer.push(key);
    })

    //deleting a server using "index" from the "serverlist" array
    serverList.splice(index, 1);

    //creating new hash map according to "serverlist"
    for(let i = 0; i < serverList.length; i++){
        availableServer[i] = serverList[i].availability;
    }
    
    return{
      serverList : serverList,
      availableServer : availableServer,
      appsInDeletedServer : appsInDeletedServer
    }
    
  };
}

export default angular.module('services.distroy-server', [])
  .service('destroyServer', Server)
  .name;