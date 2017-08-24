//this setting page top set up default apps in default server and hash map for checking the availability, these are used when page loads the first time
import angular from "angular";


class Settings {
  constructor() {
    //default value
  }

  //default apps which are listed of left panel
  defaultApps() {
    return [
	        {'id' : 1, 'initial': 'Hd', 'name': 'Hadoop'},
	        {'id' : 2, 'initial': 'Rl', 'name': 'Rails'},
	        {'id' : 3, 'initial': 'Ch', 'name': 'Chronos'},
	        {'id' : 4, 'initial': 'St', 'name': 'Storm'},
	        {'id' : 5, 'initial': 'Sp', 'name': 'Spark'}
	    ];
  }
  //default empty servers which are already loaded when application starts
  defaultServer() {
    return [
	        {'name' : 'default', 'apps': [], 'props': {}, 'availability': 2},
	        {'name' : 'default', 'apps': [], 'props': {}, 'availability': 2},
	        {'name' : 'default', 'apps': [], 'props': {}, 'availability': 2},
	        {'name' : 'default', 'apps': [], 'props': {}, 'availability': 2}
	    ];
  }
  //mappsing the hashmap with server list, in orser to check available servers
  serverAvailability() {
    return { 
    	0 : 2, 1 : 2, 2 : 2, 3 : 2
    };
  }
}

export default angular.module('services.settings', [])
  .service('settings', Settings)
  .name;