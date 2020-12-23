function input() {
    let name = (document.getElementById("fname").value);
    let email = (document.getElementById("email").value);
    let password = (document.getElementById("password").value);


    var userInput = {
        userName: name,
        userEmail: email,
        userPassword: password,

    }

    const Http = new XMLHttpRequest();
    const url = 'https:localhost:3000/signup';
    Http.open("POST", url);

    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(userInput));

    Http.onreadystatechange = (e) => {
        console.log(Http.responseText)
    }


    alert("SignUp Successfully")

    window.location.href = "./signin.html"
    return false;

}


const login = () => {

    let email= document.getElementById("").value;
    let password= document.getElementById("").value;

    const Http = new XMLHttpRequest();
    const url = 'https:localhost:3000/login';
    Http.open("POST", url);

    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(userInput));

    
    Http.onreadystatechange = (e) => {
        console.log(Http.responseText);
    }

    return false;
}