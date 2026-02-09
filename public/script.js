const form = document.getElementById('loginForm');
const messageDiv = document.getElementById('mensaje');

form.addEventListener('submit', async (e) => {
    e.preventDefault(); //Evitarque la apgina se recargue

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (response.ok){
        messageDiv.innerText = data.message
        messageDiv.style.color = "green"
    } else{
        messageDiv.innerText = data.message
        messageDiv.style.color = "Red"
        messageDiv.style.fontSize = "large"
    }

});