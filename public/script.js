const messageDiv = document.getElementById('mensaje');
const btnSignIn = document.getElementById("btnSignin");
const btnLogIn = document.getElementById("btnLogin");


btnLogIn.addEventListener('click', async (e) => {
    e.preventDefault(); //Evitar que la pagina se recargue

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    console.log(username);
    console.log(password);
    
    const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    renderResponse(response);

});

btnSignIn.addEventListener('click', async (e) => {

    e.preventDefault(); //Evitar que la pagina se recargue

    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, username, password })
    });

    renderResponse(response);
})

async function renderResponse(response) {
    const data = await response.json();
    messageDiv.innerText = data.message;
    messageDiv.style.color = response.ok ? "green" : "red";
}