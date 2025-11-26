// js/protegerRutas.js

const TOKEN_KEY = "token"; // misma clave que usas al guardar el token

function requireAuth() {
  console.log("[requireAuth] Revisando token...");

  const token = localStorage.getItem(TOKEN_KEY);
  console.log("[requireAuth] token encontrado:", token);

  if (!token) {
    console.log("[requireAuth] No hay token, redirigiendo a registroUsuario.html");
    window.location.href = "registroUsuario.html";
    return null;
  }

  console.log("[requireAuth] Hay token, acceso permitido");
  return token;
}
