import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend
({
	location: config.locationType
});

Router.map(function()
{
  // this.resource("users", {path: "users"}, function(){});
  this.resource("application", {path: "/"}, function()
  {
  	this.resource("users", {path: "users"});
  	this.resource("add-user", {path: "form"});
  });
});


export default Router;
 