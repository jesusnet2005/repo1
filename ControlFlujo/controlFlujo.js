let userRole = "admin";
let accessLevel;
let isLoggedIn = true;
let userMessage;

let userType = "suscrito";
let userCategory;

let isAuthenticated = true;

if (userRole === "admin") {
    accessLevel = "Acceso completo concedido";
} else if (userRole === "manager") {
    accessLevel = "Acceso limitado concedido";
} else {
    accessLevel = "No se ha concedido acceso";
}

console.log("Nivel de acceso:", accessLevel);

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Bienvenido, Admin!";
    } else {
        userMessage = "Bienvenido, User!";
    }
} else {
    userMessage = "Por favor inicie sesión para acceder al sistema.";
}
console.log("Mensaje:", userMessage);

switch (userType) {
    case "admin":
        userCategory = "Administrador";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "suscrito":
        userCategory = "Suscriptor";
        break;
    default:
        userCategory = "No identificado";
}
console.log("Categoría de usuario:", userCategory);

let authenticationStatus = isAuthenticated ? "Autenticado" : "No autenticado";
console.log("Estado de Autenticación:", authenticationStatus);
