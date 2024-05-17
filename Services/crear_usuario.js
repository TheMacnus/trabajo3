import { addDataUser } from "./firebase.js";

document.getElementById("create_user_form").addEventListener("submit", async (event) => {
    event.preventDefault();

    const identification = document.getElementById("identification").value;
    const name = document.getElementById("name").value;
    const direction = document.getElementById("direction").value;
    const phone = document.getElementById("phone").value;
    const rh = document.getElementById("rh").value;
    const civil_state = document.getElementById("civil_state").value;
    const gender = document.getElementById("gender").value;
    const email = document.getElementById("email").value;

    try {
        await addDataUser(identification, name, direction, phone, rh, civil_state, gender, email);
        alert("Usuario creado correctamente");
        document.getElementById("create_user_form").reset();
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        alert("Hubo un problema al crear el usuario. Inténtelo de nuevo.");
    }
});
