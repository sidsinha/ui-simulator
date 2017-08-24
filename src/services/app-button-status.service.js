//this service is used for enabling and disabling the apps plus-minus button
import angular from 'angular';

class AppButton {
  constructor() {
    //
  }

  //this method is calling evrytime to check if selected app is running in any of the server, if yes returns true otherwise false
  statusButMinus(id, serverList){

    var isAvailable = false;
    var isServerEmpty = false;

    serverList:
    for(let i = serverList.length-1; i >= 0; i--){

        apps:
        for(let j = 0; j < serverList[i].apps.length; j++){
            if(serverList[i].apps[j].id == id){
                isAvailable = true;
                break serverList;
            }
        }

    }
    return isAvailable;

  };

  //this method is calling evrytime to check if the are any availabe server so that we can add the app, if yes returns true otherwise false
  statusButPlus(id, availableServer){

    var isAvailable = true;
    
    var availableKey = getKeyByValue(availableServer, 2);
    if(availableKey === undefined){
      var availableKey = getKeyByValue(availableServer, 1);
    }

    if(availableKey === undefined)
        isAvailable = false;

    return isAvailable;

  };


}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

export default angular.module('services.app-button', [])
  .service('AppButton', AppButton)
  .name;