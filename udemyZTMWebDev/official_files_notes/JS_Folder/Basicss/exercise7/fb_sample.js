
//fb-like page trials

var usr1 = {
	username: "Bruce",
	password: "batman"
};

var usr2 = {
	username: "Diana",
	password: "wonderwoman"
};

var usr3 = {
	username: "Clark",
	password: "superman"
};

var database = [usr1, usr2, usr3];

var newsfeed = [
	{
		username: "Tom",
		timeline: "New Job!! yay!!!"
	},
	{
		username: "Tony",
		timeline: "New place, New GF!!!!"
	},
	{
		username: "Bruce",
		timeline: "Everything is maaya."
	}
	
];


function signIn(usr,pas) {
	var token = Number(0);
	while( (token < database.length) && !(credentialTally(token, usr, pas)) ) {
		token++;
	}
	acknowledgeSignIn(isValid(token));
	return 0;
}


var credentialTally = function(tok, usr, pas){
	if((usr === database[token].username) && (pas === database[token].password)){
		return true;
	}
	else{
		return false;
	}
}

var acknowledgeSignIn = function(bool){
	if(bool){
		console.log(newsfeed);
		alert("Welcome! You have signed in");
	}
	else{
		alert("Credentials not identified. Couldn't sign in.");
	}
	return 0;
}


var isValid = function(token){
	if(token < database.length) {
		return true;
	}
	else {
		return false;
	}
}

function askCredentials(){
	var usernamePrompt = prompt("what\'s your username?");
	var passwordPrompt = prompt("what\'s your password?");
	return [usernamePrompt, passwordPrompt];
}

var credentialArray = askCredentials();
signIn(credentialArray[0], credentialArray[1]);
