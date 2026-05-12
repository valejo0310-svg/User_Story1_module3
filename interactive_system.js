const btn = document.querySelector(".btn");
let name, age;

btn.addEventListener ("click", () => {
   name = prompt ("Please enter your name: ");
   while (name.trim()=== ""){
    alert ("please enter a name");
    name = prompt ("enter your name");
   };
   
   age = prompt ("Please enter you age");
   while (isNaN(age) || age.trim()===""){
    alert("Please enter the right value");
    age = prompt ("Please enter your age");
   }
   let confirm = (age >= 18) ? alert ("You're an adult, you can keep going") : alert ("You're underage, please wait a little.")

});

