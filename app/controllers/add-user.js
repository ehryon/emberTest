import Ember from 'ember';

export default Ember.Controller.extend({
	isCreated:false,

	actions:
	{
		createUser: function()
		{
			var user, nom, prenom, telephone;

			nom = this.get('nom');
			prenom = this.get('prenom');
			telephone = this.get('telephone');
			
			if(!nom || ! prenom || !telephone)
			{
				return;
			}
			// debug
			console.log(nom);
			console.log(prenom);
			console.log(telephone);

			user = this.store.createRecord('user',
			{
				nom: nom,
				prenom: prenom,
				telephone: telephone
			});
			user.save();

			// not working, why ?
			this.set('nom','');
			this.set('prenom','');
			this.set('telephone','');


			this.set('isCreated', true);
		}
	},


});
