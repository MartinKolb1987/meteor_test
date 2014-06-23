// Router
Router.map(function() {
  this.route('home', {path: '/'});
  this.route('home', {path: '/about'});
});

// Declare client Movies collection
Movies = new Meteor.Collection("movies");
 
// Bind moviesTemplate to Movies collection
Template.moviesTemplate.movies = function () {
	var myMovies = Movies.find().fetch();
    return Movies.find().fetch();
};

Template.moviesTemplate.events({
	'click .remove-item': function () {
		Movies.remove(this._id);
	},
	'click .edit-item': function (e) {
		helper.classToggler(e);
	},
	'click .submit-cancel': function (e) {
		helper.classToggler(e);
	},
	'click .submit-edit-save': function (e) {
		var clickedItem = $(e.currentTarget);
		var title = clickedItem.siblings('input[name=title]').val();
		var director = clickedItem.siblings('input[name=director]').val();

		// update db entry
		Movies.update(this._id, { title: title, director: director });

		helper.classToggler(e);
	}
});

var helper = {
	classToggler: function(e){
		var clickedItem = $(e.currentTarget);
		clickedItem.parents('.item').find('.edit-fields').toggleClass('hide');
		clickedItem.parents('.item').find('.show-fields').toggleClass('hide');
	}
};

Template.addForm.events({
	'submit form': function (e, template) {
		e.preventDefault();

		// get values
		var title = template.find('input[name=title]').value;
		var director = template.find('input[name=director]').value;
		
		// clear input fields
		template.find('input[name=title]').value = '';
		template.find('input[name=director]').value = '';

		// inser movies
		Movies.insert({ title: title, director: director });
	}
});
