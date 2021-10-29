const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const loginButton = document.getElementById('login');
const mailSignUp = document.getElementById('mailSignUp');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
loginButton.addEventListener("click", function () {
	console.log("Loging in...");
	location.replace('/SabirWebProject/index.html');
});
mailSignUp.addEventListener('click', () => {
	console.log("Signing Up...");
	location.replace('google.com');
});