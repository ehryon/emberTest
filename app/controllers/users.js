import Ember from 'ember';

export default Ember.Controller.extend({
	searchTerm: '',

	searchResult: function(){
        var searchTerm = this.get('searchTerm');
        var regExp = new RegExp(searchTerm,'i');
        this.get('model').set('content',this.store.filter('user',function(item){
            return regExp.test(item.get('nom'));
        }));
    }.observes('searchTerm'),

});
