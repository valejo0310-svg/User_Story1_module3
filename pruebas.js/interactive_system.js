let name = String( prompt ("Please enter your name: ")); //Variable used to enter the user's name
let age = Number (prompt ("PLease enter your age: ")); //Variable used to enter the age

//Conditionals used to verify if the age is a number or a decimal
//isNaN it's used just to see if it's a integer and isInteger is used to verify if it's a decimal
if (isNaN(age)){
    console.error("Incorrect value")
}else if (Number.isInteger (age)){
    if (age < 18){
    console.log("Hi "+ name + ", you're underage. Keep learning and enjoying coding!")
}else{
    console.log ("Hi "+name+", you're an adult. Prepare for big chances on the coding world!")
}
}else{
    console.error("The value entered is a decimal")
}
