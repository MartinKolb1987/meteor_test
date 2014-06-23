// Declare client Movies collection
Movies = new Meteor.Collection("movies");
 
// Bind moviesTemplate to Movies collection
Template.moviesTemplate.movies = function () {
	var myMovies = Movies.find().fetch();
	// console.log(myMovies);
    return Movies.find().fetch();
};

Template.moviesTemplate.events({
	'click .item': function () {
	// console.log(this._id);
	// Users.update(this._id, {$inc: {score: 2}});
	},
	'click .remove-item': function () {
		Movies.remove(this._id);
	}
});

Template.addForm.events({
	'submit form': function (e, template) {
		e.preventDefault();
		var title = template.find("input[name=title]").value;
		var director = template.find("input[name=director]").value;
		// console.log();
		// console.log($(this).serializeArray());
		// console.log('bingo');
		// Movies.remove(this._id);
		Movies.insert({ title: title, director: director });
	}
});
