const logIn = document.getElementById("logIn")
logIn.addEventListener("click", function(){
    window.location.href = "#logIn"
})

const signIn = document.getElementById("signIn")
signIn.addEventListener("click", function(){
    window.location.href = "#signIn";
})

document.getElementById('btnInicio').addEventListener('click', async function() {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const apiUrl = 'http://localhost:3000/login';

    const formData = new URLSearchParams();
    formData.append('username', username);
    formData.append('password', password);

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData
    };

    try {
        const response = await fetch(apiUrl, requestOptions);
        const data = await response.json();

        if(data.length !== 0){
            window.location.href = "../../renderer/views/infoUser.html"
        }
        console.log('Respuesta:', data);
    } catch (error) {
        console.error('Error:', error);
    }
});


