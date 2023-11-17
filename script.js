//funcion para que salga una ventana emergente(pop-up/modal) pidiendo verificar la edad del usuario apenas se carga la página
function verifyAge(){
    let userBirthYear = document.getElementById("age").value

    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()

    const  userAge= currentYear - userBirthYear

    if (userAge >= 18) {
        document.getElementById("ageVerification").style.display= "none";
    }else{
        document.getElementById("ageError").style.display= "block"
    }   
}

window.onload = () => {
    document.getElementById("ageVerification").style.display= "flex";
}