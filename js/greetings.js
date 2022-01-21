const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
// string 정보만 담긴 변수는 대문자로 쓰는게 보통
const USERNAME_KEY = "username";
// localStorge의 username 키

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    // greeting.innerText = "Hello " + username;
    localStorage.setItem(USERNAME_KEY, username);
    // greeting.innerText = `Hello ${username}`;
    // 위와 같음
    // ``(백틱)로 감싸야함: not ""/''(~표 shift를 누르지 말고)
    // ${변수명}
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    paintingGreeting(username);
}

function paintingGreeting(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    paintingGreeting(savedUsername);
}