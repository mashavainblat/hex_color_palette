var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

module.exports = function(passport){

	console.log("passport is firing");

	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});


	passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });



	// ============================================= //
	// ================    SIGNUP    =============== //
	// ============================================= //

	passport.use('local-signup', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	}, function(req, email, password, done) {

		console.log('Req.body within local signup: ', req.body);


		//find user whose email is the same as the forms email
		//checking if user typing to login already exists
		User.findOne({ 'email': email }, function(err, user) {
			if (err) { return done(err) }
			if (user) { 
				return done(null, false); 
			} else {
				var newUser = new User();
				newUser.email = email;
				newUser.password = newUser.generateHash(password);
				newUser.username = req.body.username;
				newUser.save(function(err) {
					if (err) { 
						console.log(err)
						throw err
					} else {
						return done(null, newUser);
					}
				}); // end user save
			} // end user check exists
		}) // end find user

	} // end localstategy params

	)); // end passport local signup

};