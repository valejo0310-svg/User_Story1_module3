const btn = document.querySelector(".btn");
let name, age;

btn.addEventListener ("click", () => {
   name = prompt ("Please enter your name: ");
   while (name.trim()=== ""){
    alert ("please enter a name");
    console.error ("please enter a value");
    name = prompt ("enter your name");
   };
   
   age = prompt ("Please enter you age");
   while (isNaN(age) || age.trim()===""){
    alert("Please enter the right value");
    if (isNaN(age)){
        console.error("Please enter a number");
    }else if(age.trim()===""){
        console.error("Please enter a value");
    }
    age = prompt ("Please enter your age");
   }
   let confirm = (age >= 18) ? alert ("You're an adult, you can keep going") : alert ("You're underage, please wait a little.")

});

