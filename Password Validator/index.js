const passwordField = document.getElementById("exampleInputPassword1");
const passwordConfirmField = document.getElementById("exampleInputConfPassword");
const suggestionField = document.getElementById("suggestionsField");

passwordField.addEventListener("input", function () {
    var passwordVal = passwordField.value;
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const numerics = /[0-9]+/;
    const characters = /[a-zA-Z]/;
    
    if (passwordVal.length < 5) {
        suggestionField.innerText = "Weak Password";
        suggestionField.classList.add("bg-danger")
        suggestionField.classList.add("bg-opacity-25")
        suggestionField.classList.add("p-2")
    } else if (passwordVal.length >= 5 && passwordVal.length < 8 && (specialChars.test(passwordVal) || numerics.test(passwordVal) || characters.test(passwordVal))) {
        suggestionField.innerText = "Good Password";
        suggestionField.classList.add("bg-danger")
        suggestionField.classList.add("bg-opacity-25")
        suggestionField.classList.add("p-2")
    } else if(passwordVal.length>=8 && passwordVal.length<=10 && (specialChars.test(passwordVal) || numerics.test(passwordVal) || characters.test(passwordVal))){
        suggestionField.innerText = "Strong Password";
        suggestionField.classList.remove("bg-danger")
        suggestionField.classList.add("bg-success")
        suggestionField.classList.add("bg-opacity-25")
        suggestionField.classList.add("p-2")
    }
    else if (passwordVal.length > 10 && specialChars.test(passwordVal) && numerics.test(passwordVal) && characters.test(passwordVal)) {
        suggestionField.innerText = "Very Strong Password";
        suggestionField.classList.remove("bg-danger")
        suggestionField.classList.add("bg-success")
        suggestionField.classList.add("bg-opacity-25")
        suggestionField.classList.add("p-2")
    } 
    
    console.log(passwordVal);
});
passwordConfirmField.addEventListener("input",function(){
    var passwordVal = passwordField.value;
    var passwordConfirmVal = passwordConfirmField.value
    if(passwordVal === passwordConfirmVal){
        suggestionField.innerText = "Password match";
        suggestionField.classList.remove("bg-danger")
        suggestionField.classList.add("bg-success")

    }else{
        suggestionField.innerText = "Password not matching";
        suggestionField.classList.remove("bg-success")
        suggestionField.classList.add("bg-danger")

    }

})

console.log(passwordField);
