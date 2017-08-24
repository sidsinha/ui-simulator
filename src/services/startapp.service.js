//this service is used when we click on small plus button next to apps (on left)
import angular from 'angular';

class Apps {
  constructor() {
    //
  }
  //used this method when starting new app in available server
  start(id, initial, name, serverList, availableServer){

    //getting the key of first available server
    var firstKey = getKeyByValue(availableServer, 2); //first checking if any server has availability 2
    if(firstKey === undefined){
      var firstKey = getKeyByValue(availableServer, 1);//if not then, checking if any server has atleast availability 1
    }

    if(firstKey !== undefined) { //getting into the loop, if there are available servers
        
        serverList[firstKey].availability -= 1;

        if (availableServer[firstKey] == 2) {
        
            serverList[firstKey].apps[0] = {'id' : id, 'initial': initial, 'name': name, 'dateAdded': new Date()};

        } 
        else if (availableServer[firstKey] == 1) {
        
            serverList[firstKey].apps[1] = {'id' : id, 'initial': initial, 'name': name, 'dateAdded': new Date()};
        }
        
        availableServer[firstKey] = availableServer[firstKey] - 1;
    }
		
    

		return{
			serverList : serverList,
			availableServer : availableServer,
		}

    };
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

export default angular.module('services.start-app', [])
  .service('StartApp', Apps)
  .name;