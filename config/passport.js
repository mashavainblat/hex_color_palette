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
					newUser.username = req.body.username;
					newUser.email = email;
					newUser.password = newUser.generateHash(password);
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





	// ============================================
	// ================    LOGIN    ===============
	// ============================================


	passport.use('local-login', new LocalStrategy({
		// by default, local strategy uses username and password, we will override with email
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true //allows us to pass back the entire request to the callback
	}, 

	function(req, email, password, done) { // callback with email and passwrod from our form

		// find a user whose email is the same as the forms email
		// checking to see if the user trying to login already exists
		User.findOne({ 'email': email }, function(err, user) {
			// if there are errors, return the error before anything else
			if (err) { return done(err) }

			// if no user is found, return the message
			if (!user) {
				console.log('NO USER FOUND');
				return done(null, false);
			}

			// if the user is found but the password is wrong
			if (!user.validPassword(password)) {
				return done(null, false);
			}

			// return successful user
			return done(null, user);
		}); // end find user

	} // end localstrategy params

	)); // end passport local login



};