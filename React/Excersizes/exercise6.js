//Evaluate these:
//#1
[2] === [2] //false
{} === {} //false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; // 5 //4
const object2 = object1; // 5 //4
const object3 = object2;  // 5 //4 
const object4 = { a: 5}; // 5 //5
object1.a = 4; // 4


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

const Animal = (state) => ({
	greeting: () =>  console.log(`Hi! My name is ${state.name}. I am a ${state.color} ${state.type}.`)
}); 

const Mammal = (state) =>({
	isMammal: () => true 
})

const Cow = (name,color,type) =>{
	let state = {
		name,
		color,
		type,
		sound: () => console.log("MOOOO")

	}
	return Object.assign({},
		state,
		Animal(state),
		Mammal(state)
		)
}

const cow1 = Cow("Benny", "Brown","Cow");





