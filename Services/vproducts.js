import{viewproducts} from "../Controllers/firebase.js"

const ver =  document.getElementById('vdata')

async function cargar(){
    ver.innerHTML=''
    const docref = viewproducts()
    const querySnapshot = await docref
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id}`);
        ver.innerHTML+=`
            <tr>
            <th scope="row">${doc.data().codigo}</th>
            <td>${doc.data().nombre}</td>
            <td>${doc.data().descripcion}</td>
            <td>${doc.data().cantidad}</td>
            </tr>
        `
    });
}

window.addEventListener('DOMContentLoaded', async()=>{
    cargar()
})