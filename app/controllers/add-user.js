import Ember from 'ember';

export default Ember.Controller.extend({
	actions:
	{
		createUser: function()
		{
			var user, nom, prenom, telephone;

			nom = this.get('nom');
			prenom = this.get('prenom');
			telephone = this.get('telephone');
			
			// debug
			console.log(nom);
			console.log(prenom);
			console.log(telephone);
			console.log(this);

			user = this.store.createRecord('user',
			{
				nom: nom,
				prenom: prenom,
				telephone: telephone
			});
			user.save();

			this.set('nom','');
			this.set('prenom','');
			this.set('telephone','');
		}
	}
});
