/*
  Import all Angular components via ES6 imports and register them
  at your module via their corresponding functions (controller, service, etc.).
*/

import HomeController from './controllers/HomeController';
import GitHubService from './services/GitHubService';


angular.module('myApp', [])
	.controller('HomeController', HomeController)
	.service('GitHubService', GitHubService);
	
