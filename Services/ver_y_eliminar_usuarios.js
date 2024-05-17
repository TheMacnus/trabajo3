import { get_users, deleteUser } from "./firebase.js";

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

            const actionsCell = document.createElement("td");
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Eliminar";
            deleteButton.addEventListener("click", async () => {
                try {
                    await deleteUser(user.id); // Asegúrate de que el campo 'id' esté disponible y correcto
                    row.remove();
                    alert("Usuario eliminado correctamente");
                } catch (error) {
                    console.error("Error al eliminar el usuario:", error);
                    alert("Hubo un problema al eliminar el usuario. Inténtelo de nuevo.");
                }
            });
            actionsCell.appendChild(deleteButton);
            row.appendChild(actionsCell);

            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error("Error al cargar los usuarios:", error);
        alert("Hubo un problema al cargar los usuarios.");
    }
}

window.addEventListener('DOMContentLoaded', loadUsers);
