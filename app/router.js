import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("addUser", {
    path: "addUser"
  });

  this.route("displayAll", {
    path: "display"
  });

  this.route("details", {
    path: "details"
  });
});

export default Router;
