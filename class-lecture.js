// encapsulation --> acheived by #, we need to create getter setter for retreiving/updating variables
class Person {
    //properties
    #name;
    //constructor
    constructor(name) {
      this.#name = name;
    }
    //method
    introduceSelf() {
      console.log(`name is ${this.#name}`);
    }
    // getter for name
    getName() {
      return this.#name;
    }
    //setter for name -- to update or mutate object on class level
    setName(name) {
      this.#name = name;
    }
  }
  
  const person = new Person('John');
  person.introduceSelf();
  
  person.name = 'z'; //this will only update name on object level which person(object),it will change dynamically on object scope
  person.introduceSelf();
  console.log(person);
  
  person.setName('Doe'); //this will only update name on class level which Person(class), it will change dynamically on global(class) scope
  console.log(person.getName());
  person.introduceSelf();

  /* ************************************************************************************************************************************** */
 
 class Make{
    name;     //optional in JS
    year;
    constructor(name,year){
       this.name= name;
       this.year=year;
    }
    getDetails(){}
 }
 class Model extends Make{
  model;

  constructor(name,year,model){
    super(name,year);
    this.model = model;
  }

  getDetails(){
    console.log('Make/Year/Model',this.name,this.year,this.model);
  }

 }
 let car1  = new Model('home','19','city');
 car1.getDetails();