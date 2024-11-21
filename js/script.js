document.addEventListener("DOMContentLoaded", function () {
    // Código para navegación en index.html
    const banner = document.querySelector("#banner");
    const features = document.querySelector("#features");
    const about = document.querySelector("#about");
    const contact = document.querySelector("#contact");

    if (banner) {
        banner.addEventListener("click", (b) => {
            b.preventDefault();
            const sectionB = document.querySelector(".banner");
            sectionB.scrollIntoView({ behavior: "smooth" });
        });
    }

    if (features) {
        features.addEventListener("click", (f) => {
            f.preventDefault();
            const sectionF = document.querySelector(".features");
            sectionF.scrollIntoView({ behavior: "smooth" });
        });
    }

    if (about) {
        about.addEventListener("click", (a) => {
            a.preventDefault();
            const sectionA = document.querySelector(".about");
            sectionA.scrollIntoView({ behavior: "smooth" });
        });
    }

    if (contact) {
        contact.addEventListener("click", (c) => {
            c.preventDefault();
            const sectionC = document.querySelector(".contact");
            sectionC.scrollIntoView({ behavior: "smooth" });
        });
    }

    // Formulario de contacto en index.html
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        const confirmationMessage = document.getElementById("confirmationMessage");

        function validateField(field, errorContainer, message) {
            if (!field.checkValidity()) {
                errorContainer.textContent = message;
                field.classList.add("invalid");
                return false;
            } else {
                errorContainer.textContent = "";
                field.classList.remove("invalid");
                return true;
            }
        }

        function validateForm() {
            let isValid = true;

            return isValid;
        }

        contactForm.addEventListener("submit", function (event) {
            if (!validateForm()) {
                event.preventDefault();
            } else {
                event.preventDefault();
                confirmationMessage.style.display = "block";
                contactForm.reset();
                setTimeout(() => {
                    confirmationMessage.style.display = "none";
                }, 5000);
            }
        });
    }

/// Formulario de login en login.html
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    const errorMessage = document.getElementById("errorMessage");
    const confirmationMessage = document.getElementById("confirmationMessage");

    const validCredentials = {
        //credenciales de prueba para iniciar sesión
        username: "admin",
        password: "1234"
    };

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        validateLoginForm();
    });

    function validateLoginForm() {
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        
        errorMessage.style.display = "none";
        confirmationMessage.style.display = "none";

        // para verificar
        if (username === validCredentials.username && password === validCredentials.password) {
            confirmationMessage.style.display = "block";
            setTimeout(() => {
                window.location.href = "index.html";
            }, 2500);
        } else {
            errorMessage.textContent = "Usuario o contraseña incorrectos. Intente de nuevo";
            errorMessage.style.display = "block";
            setTimeout(() => errorMessage.style.display = "none", 3500);
        }
    }

    // Validar el formulario de login al presionar Enter
    loginForm.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && document.activeElement !== document.getElementById("recoveryEmail")) {
            e.preventDefault();  
            validateLoginForm();
        }
    });
}

// Botón "Volver" para redirigir al index.html
document.getElementById("btnVolver").addEventListener("click", () => {
    window.location.href = "index.html";
});



// Mostrar la sección de recuperación de contraseña
document.getElementById("forgotPassword").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("recoverPassword").style.display = "block"; 
});

// Función para enviar el correo de recuperación
document.getElementById("sendRecovery").addEventListener("click", (event) => {
    event.preventDefault();

    const email = document.getElementById("recoveryEmail").value.trim();
    const recoveryMessage = document.createElement("div"); 


    const existingMessage = document.getElementById("recoveryMessage");
    if (existingMessage) {
        existingMessage.remove();
    }

    // Expresión regular para validar el correo
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;


    if (!email || !emailPattern.test(email)) {
        recoveryMessage.textContent = "Por favor, ingresa un correo válido (ejemplo: usuario@dominio.com).";
        recoveryMessage.style.color = "red";
        recoveryMessage.style.marginTop = "10px";
        recoveryMessage.style.textAlign = "center";
        recoveryMessage.id = "recoveryMessage"; 
        document.getElementById("recoverPassword").appendChild(recoveryMessage);

        setTimeout(() => recoveryMessage.remove(), 3500);
        return;
    }

    // Mostrar mensaje de éxito si el correo es válido
    recoveryMessage.textContent = "¡Correo de recuperación enviado con éxito! Espere";
    recoveryMessage.style.color = "green";
    recoveryMessage.style.marginTop = "10px";
    recoveryMessage.style.textAlign = "center";
    recoveryMessage.id = "recoveryMessage"; // Asignamos un ID para poder eliminarlo después
    document.getElementById("recoverPassword").appendChild(recoveryMessage);
    document.getElementById("recoveryEmail").value = '';

    // Ocultar la sección de recuperación después de 3 segundos solo si el correo es válido
    setTimeout(() => {
        recoveryMessage.remove();
        document.getElementById("recoverPassword").style.display = "none"; // Solo oculta la sección si el correo fue enviado correctamente
    }, 2300);
});

// Validar el formulario de recuperación al presionar Enter
document.getElementById("recoveryEmail").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();  // Evitar que el Enter ejecute alguna acción no deseada
        document.getElementById("sendRecovery").click(); // Llama al evento de clic para enviar el correo de recuperación
    }
});

});