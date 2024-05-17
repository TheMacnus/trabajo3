import { login_auth } from "../Services/firebase.js";

const evento = document.getElementById("login_btn");

async function validar() {
    const isAdmin = document.getElementById('admincheckbox').checked;
    const email = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;

    if (email.trim() === '' || password.trim() === '') {
        alert("Debe llenar los campos de usuario y el de contraseña.");
        return;
    }

    try {
        const verification = await login_auth(email, password);

        if (verification) {
            if (isAdmin) {
                const adminEmail = "victormanuel22122@gmail.com"; // Cambia esto por el correo electrónico del administrador
                const isAdminEmail = email === adminEmail;

                if (!isAdminEmail) {
                    alert("No tienes permiso para iniciar sesión como administrador.");
                } else {
                    window.location.href = "/Templates/admin.html"; // Redirige a la página de administrador
                }
            } else {
                alert("Usuario autenticado: " + email);
                window.location.href = "/Templates/home.html"; // Redirige a la página de administrador
            }
        } else {
            alert("Error de usuario, verifique usuario y/o contraseña.");
        }
    } catch (error) {
        console.error("Error al autenticar:", error);
        alert("Error de usuario, verifique usuario y/o contraseña.");
    }
}

window.addEventListener('DOMContentLoaded', () => {
    evento.addEventListener('click', validar);
});