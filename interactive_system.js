const btn = document.querySelector(".btn"); //Const used to call the class button from the html
let name, age; // variables that will be redefined later on the code

btn.addEventListener ("click", () => { //arrow function to add an event to the button 
   name = prompt ("Please enter your name: "); //Redefinition of the name variable to be stored
   while (name.trim()=== ""){ //error control using a loop that while stay until the answer is right
    alert ("please enter a name");
    name = prompt ("enter your name");
   };
   
   age = prompt ("Please enter you age");//Redefinition of the age variable to be stored
   while (isNaN(age) || age.trim()===""){ //error control using a loop that while stay until the answer is right
    alert("Please enter the right value");
    age = prompt ("Please enter your age");
   }
   //Conditionals using ternary operators to prevent from using so many code lines.
   let confirm = (age >= 18) ? "You're an adult, you can keep going": "You're underage, please wait a little."
   
   let write = document.getElementById("result")
   write.innerHTML = ` Hello ${name}, ${confirm}`
});

