var LocalStrategy = require("passport-local").Strategy;
var User = require("../models/user_model")

module.exports = function(passport){

	console.log("passport is firing");

	//used to serialize the user for the session
	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	//used to deserialize the user
	passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });



	// ============================================= //
	// ================    SIGNUP    =============== //
	// ============================================= //

	passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    }, function(req, email, password, done) {

		console.log('Req.body within local signup: ', req.body);

		// asynchronous
        // User.findOne wont fire unless data is sent back
        process.nextTick(function() {

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
		}) // ends nextTick

	} // end localstategy params

	)); // end passport local signup





	// ============================================= //
	// ================    LOGIN    =============== //
	// ============================================= //


	passport.use('local-login', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	}, function(req, email, password, done) {

		User.findOne({ 'email': email }, function(err, user) {
			if (err) { return done(err) }

			if (!user) {
				console.log('NO USER FOUND');
				return done(null, false);
			}

			if (!user.validPassword(password)) {
				return done(null, false);
			}

			return done(null, user);
		}); // end find user

	} // end localstrategy params

	)); // end passport local login



};