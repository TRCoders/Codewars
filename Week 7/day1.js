// FIXME: Get Full Name

class Dinglemouse{

  constructor( firstName, lastName ){
    this.firstName = firstName
    this.lastName = lastName
    this.none = ""
  }
  
  getFullName(){
    return (this.firstName + " " + this.lastName).trim()
  }
  
}