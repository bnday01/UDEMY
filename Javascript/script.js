
// var database = [
// {
// 	username: "bnday01",
// 	password: "getout2"
// },
// {
// 	username: "googloo",
// 	password: "google"
// },
// {
// 	username: "msndotcom",
// 	password: "microsoft"
// }
// ];

// var newsfeed = [
// {
// 	username: "nicki124",
// 	timeline: "cat videos"
// },
// {
// 	username: "camedon16",
// 	timeline: "stupidity"
// },
// {
// 	username: "nextGenVideos",
// 	timeline: "disrespectful girlfriends"
// }
// ];

// var usernamePrompt = prompt("Enter Username");
// var passwordPrompt = prompt("Enter Password");

// function isUserValid(user,pass){
// 	for (var i = 0; i < database.length; i++){
// 		if (database[i].username === user && database[i].password === pass){
// 			return true;
// 		}
// 	}
// 	return false;

// }

// function signIn(){

// 	if (isUserValid(usernamePrompt,passwordPrompt)){
// 		return console.log(newsfeed);
// 	}
// 	else {
// 		alert("Sorry, Username or Password incorrect");
// 	}


// }

// signIn();

// var button = document.getElementsByTagName("button")[0];
// var input = document.getElementById("userInput");
// var ul = document.querySelector("ul");

// function inputLength(){
// 	return input.value.length;
// }

// function addItem(text){
// 	var li = document.createElement("li");
// 		li.appendChild(document.createTextNode(text));
// 		ul.appendChild(li);
// 		input.value ="";
// }

// function addClickListen(){
// 	if ( inputLength() > 0){
// 		addItem(input.value);
// 	}
// 	else { alert("Please Enter Text!");
// 	}
// }

// function addKeyListen(event){
// 	if (inputLength() === 0 && event.keyCode === 13){
// 		alert("Please Enter Text!");
// 	}
// 	else if (inputLength() > 0 && event.keyCode === 13){
// 		addItem(input.value);
// 	}

// }

// button.addEventListener("click", addClickListen);

// input.addEventListener("keypress", addKeyListen);