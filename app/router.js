import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend
({
    location: config.locationType
});

Router.map(function()
{
  this.route("application", {path: "/"}, function()
	{
      this.route("users", function(){});
	});
  this.route("dataFile");
});


export default Router;
