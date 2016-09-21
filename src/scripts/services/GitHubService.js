export default class GitHubService {

	/*
	  The below annotation will be processes by ngAnnotate, which
	  will annotate the constructor after compiling for minification.
	*/
	/*@ngInject;*/
	constructor($q,$http) {
		this._$q = $q;
		this._$http = $http;
	}

	getRepositories(username){		
		var gitUrl = "https://api.github.com/users/"+username+"/repos";
		return this._$http.get(gitUrl);
	}
}