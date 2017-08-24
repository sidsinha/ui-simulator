//this service is used when we want to add new server and click on big plus button(top left)

import angular from 'angular';

class Server {
  constructor() {
    //
  }
  //use this method when we want to create a new empty server
  add(serverList, availableServer){

        //add new default server object to the "server list" array
        serverList.push({'name' : 'default', 'apps': [], 'props': {}, 'availability': 2});
        availableServer[serverList.length - 1] = 2;
		
		return{
			serverList : serverList,
			availableServer : availableServer,
		}

    };
}

export default angular.module('services.add-server', [])
  .service('addServer', Server)
  .name;