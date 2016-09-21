/*
  You could also use a class for a controller, but if you work
  with $scope and not the controller-as syntax a function makes
  more sense, because most of the code would anyway go to the
  constructor if you would use a class.
*/

export default class HomeController {

	/*@ngInject;*/
	constructor(GitHubService) {
		this.message = "";
		this.respositories =[];
		this.GitHubService = GitHubService;
		this.user = {name:''};
	}

	getRepositories(username){
		this.GitHubService.getRepositories(username).then(result=>{
			console.log(result);
			this.respositories = result.data;
			if(this.respositories.length === 0){
				this.message = "No Repositories found for this user."
			}
		},error=>{
			console.log("error"+error);
			this.respositories = [];
      this.message = "Error in reading repositories. Please check user name and try again."  
		});
	}
}
