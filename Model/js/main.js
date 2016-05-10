
/*
              Backbone Models

1. Containers for application data
2. Have change tracking mechanism
3. Publish events when their state changes
4. Ability to send AJAX requests to server to sync client with server

#Advantages of Models
1. No need to write AJAX calls. Models will internally take care
2. Just call methods on Models and all low level calls will be taken care

#Scope :
1. Fundamentals
2. Attributes
3. Validation
4. Sync with Restful APIs

*/


/*
Fundamentals
Creating Models */
//Method1
//extend method returns a JS constructor.
var aSong = Backbone.Model.extend();

//Method2
//setting with configuration
//Here initialize is a method. it is just like constrcutor
var bSong = Backbone.Model.extend({
  initialize : function(){
      console.log("create bSong object");
  }
});

songobj = new bSong();

/*
Summary
1. To create a model we extend Backbone.Model
2. we can supply and initialize a model which is automatically called when object is instantiated
3. To create instance of a model use new operator
*/



/*
Working with Attributes
In JS you can get/set attributes just by using . operator on objects.
Backbone stores attributes in a HASH. You cannot just use . operator. instead should use get/set
*/
var cSong = Backbone.Model.extend();
var csong = new cSong();


//Different ways to set attribute
//1. Just call set on an object. nore the comma and ""
csong.set("title","Stairway");
//2. Pass a JSON object
csong.set({
  artist : "Led Zeppelin",
  year : "1969"
});
//3. By initializing a model object
var dsong = new cSong({
  title : "paranoid",
  artist : "Black Sabbath",
  year : 1970
});
/* in console you can see that attributes is a hash of all attributes stored in object */
//4. If you want JSON representation of your model use toJSON to convert.
//And if you have a json object you can convert it to backbone model pass it while instantiating Backbone model


//Settings default attributes in a model
var eSong = Backbone.Model.extend({
  defaults : {
      genre : "rock"
  }
});
esong = new eSong({
  title : "paradoid",
  artist : "Black Sabbath",
  year : "1969"
});

/*
Operations
1. get method
2. unset method
3. clear method
4. has method
5. defaults
*/



/*
Validation
How to validate Model attributes.
lets say every object should contain a particular attribute. If it doesnt then it is not valid.
*/

fSong = Backbone.Model.extend({
    validate : function(attrs){
      if(!attrs.artist)
        return "No Valid";
    }
});

fsong = new fSong({
  title : "paranoid",
  year : 2016
});

/* you can check for validity this way in console :
fsong.isValid()
fsong.validationError
*/


/*
Summary
To implement validation implement validate method in the Model.
Backbone calls validate method when we set attributes of the model
we can tell if it valid or not by calling isValid() method
if object is invalid we can read last error method by calling ValidationError property on that object
*/




/* Inheritance
Just the way we extend Backbone Model to create custom models we can use extend method to create sub-models
*/

var Animal = Backbone.Model.extend({
  walk : function(){
        console.log("animal is walking");
  }
});

var Dog = Animal.extend({
  walk : function(){
      console.log("dog is walking");
  }

});
var adog = new Dog();
adog.walk();

//What if i want to call walk of base from derieved object? in C/C++ you can use super
//but in this case we can use the prototype
var Cat = Animal.extend({
  walk : function(){
      Animal.prototype.walk.apply(this);
  }
});
var acat = new Cat();
acat.walk();



/*
Connecting to the server
To syncronize client data with server Backbone Models provide low level AJAX functionality
You make a fetch() call to Model. Model makes an jQuery AJAX call to server to fetch the data.

Model support 3 operations to work with persistent storage
1. fetch() - GET
2. save() - POST/PUT
3. destroy - DELETE

*/







