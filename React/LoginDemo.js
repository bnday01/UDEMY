
// ------------Classical Inheritance---------
// class User {
// 	constructor(username,email){
// 		this.username = username;
// 		this.email = email;
// 	}
// 	setPassword(){
// 		prompt("What is your password?");
// 	}
// 	getPassword(){
// 		const password = setPassword();
// 		this.password = password;
// 	}
// }

// class OldUser extends User {
// 	constructor(username,email){
// 		super(username,email);
// 	}
// 	signin(){
// 		console.log(`Hello, My username is ${this.username}!`);
// 	}


//---------------Factory Function -------------

// const user = (username,email) => {	
// 	return { 
// 			username,
// 			email,
// 		join: () => console.log(`Hi, my username is ${username}!`) }
// }

// // Compositional Factories--------------

// const monster = (state) => ({
// 	roar: () => console.log("RAWRRRR!"),
// 	bite: () => console.log(`Look at my ${state.teeth}!`)
// });
// const vampire = (state) => ({
// 	blood: () => console.log("MY ELIXIR OF IMMORTALITY")
// });

// const werewolf = (state) => ({
// 	moon: () => console.log("HOOOWWWWLLLLLL!")
// });


// const hybrid = (name) => {
// 	let state = {
// 		name,
// 		teeth:"fangs"
// 	}
// 	return Object.assign({},
// 		monster(state),
// 		vampire(state),
// 		werewolf(state)
// 		);
// }

let users = [];
const User = (firstName, lastName) => ({
		firstName,
		lastName
	});

const Email = (email) => ({
	email,
	isSubscriber: () => console.log(true)

});

const Password = (password) => {
	let state = {
		password
	}

	return {
		getPassword:() => console.log(state.password)
	}
}
const Username = (username) => {
	let state = {
		username
	}
	return {
		getUsername:() => console.log(state.username)
	}
}

const signUp = Object.assign({},
	User(prompt("Enter First Name"),prompt("Enter Last Name")),
	Email(prompt("Enter Email")),
	Username(prompt("Enter Username")),
	Password(prompt("Enter Password"))
	);
 users.push(signUp); 

