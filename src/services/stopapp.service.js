//thhis service is called when we want to stop the latest added app from the server
import angular from 'angular';

class Apps {
  constructor() {
    //
  }

  //this function is called when we clicked on small minus button in front of apps (left)
  stop(id, serverList, availableServer){

    serverList:
    for(let i = serverList.length-1; i >= 0; i--){//looping through all added servers

        apps:
        for(let j = 0; j < serverList[i].apps.length; j++){//the checking all apps avaible in each server from last

            if(serverList[i].apps[j].id == id){//if app found in the latest added server

                serverList[i].apps.splice(j, 1); //deletes the apps from server
                availableServer[i] = availableServer[i] + 1; //increment the availability in hashmap for that server index by 1
                serverList[i].availability += 1; //increment the availability in server list for that server by 1
                break serverList;

            }
        }

    }
		
		return{
			serverList : serverList,
			availableServer : availableServer,
		}

    };
}


export default angular.module('services.stop-app', [])
  .service('StopApp', Apps)
  .name;