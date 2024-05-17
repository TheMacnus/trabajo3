import { get_users } from "./firebase.js";

async function loadUsers() {
    try {
        const users = await get_users();
        const tableBody = document.querySelector("#users_table tbody");

        users.forEach(user => {
            const row = document.createElement("tr");

            const emailCell = document.createElement("td");
            emailCell.textContent = user.userEmail;
            row.appendChild(emailCell);

            const nameCell = document.createElement("td");
            nameCell.textContent = user.userName || "No disponible";
            row.appendChild(nameCell);

            const directionCell = document.createElement("td");
            directionCell.textContent = user.userDirection || "No disponible";
            row.appendChild(directionCell);

            const phoneCell = document.createElement("td");
            phoneCell.textContent = user.userPhone || "No disponible";
            row.appendChild(phoneCell);

            const rhCell = document.createElement("td");
            rhCell.textContent = user.userRh || "No disponible";
            row.appendChild(rhCell);

            const civilStateCell = document.createElement("td");
            civilStateCell.textContent = user.userCivilState || "No disponible";
            row.appendChild(civilStateCell);

            const genderCell = document.createElement("td");
            genderCell.textContent = user.userGender || "No disponible";
            row.appendChild(genderCell);

            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error("Error al cargar los usuarios:", error);
        alert("Hubo un problema al cargar los usuarios.");
    }
}

window.addEventListener('DOMContentLoaded', loadUsers);
