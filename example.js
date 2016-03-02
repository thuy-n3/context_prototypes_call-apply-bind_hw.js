
var greeterObject = {
	name: 'Rufus',
	greet: function(moreInfo){
		console.log("Why hello there, " + this.name)
		console.log("and i have this to say: " + moreInfo)
		// return "Why hello there, " + this.name
	}
}

console.log('++++++++++++++++++++')

greeterObject.greet("original context heree")

// .call -- points `this` keyword inside an object to a new context (only for the executed time)
//          AND executes immediately

var someUser = {
	name: 'Thomas',
	city: 'Houston'
}

greeterObject.greet.call(someUser, "this is from another user")


// .bind -- points `this` keyword inside an object to a new context, 
//            AND returns a function with the new context to be called later 
console.log('-===============')

initiallyNamelessObj = {
	name: null,
	age: 33,
}

greeterObject.greet.call(initiallyNamelessObj)
var executeGreetWhenISay = greeterObject.greet.bind(initiallyNamelessObj)

// some things happen.... and we now the name on our context-object

initiallyNamelessObj.name = "Jimmy"

executeGreetWhenISay()