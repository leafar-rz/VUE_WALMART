<script setup>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";
const email = ref("");
const password = ref("");
import { useRouter } from 'vue-router'
const router = useRouter();

// Función para realizar el inicio de sesión
async function login() {

  // Validar que los campos de correo electrónico y contraseña no estén vacíos
  if (email.value.length === 0 || password.value.length === 0) {
    alert("Completa los campos");
    return;
  }

  let user;

  try {
    // Intentar realizar el inicio de sesión con Firebase Authentication
    user = await signInWithEmailAndPassword(getAuth(), email.value, password.value);
    
    // Mostrar mensaje de inicio de sesión exitoso
    alert('Inicio de sesión exitoso');
    
    // Obtener el token de usuario y almacenarlo en el almacenamiento local
    const emailUser = email.value;
    const token = await user.user.getIdToken();
    localStorage.setItem('token', token);
    localStorage.setItem('email', emailUser);
    
    // Redirigir a la página de inicio
    router.push('/home');
  } catch (error) {
    // Manejar errores específicos de inicio de sesión
    switch (error.code) {
      case 'auth/invalid-credential':
        alert('Datos incorrectos');
        break;
      case 'auth/invalid-email':
        alert('Formato de correo electrónico inválido');
        break;
      case 'auth/user-disabled':
        alert('La cuenta de usuario ha sido deshabilitada');
        break;
      default:
        console.error(error);
        alert('Error desconocido durante el inicio de sesión');
    }
  }
}
</script>

<template>
  <!-- Estructura HTML del componente de inicio de sesión -->
  <div id="containerLogin">
    <div id="divLogin">

      <h1 id="labelLogin">LOGIN</h1>

      <!-- Campos de entrada para correo electrónico y contraseña -->
      <div class="inputLogin-group">
        <div class="iconLogin">
          <img src="https://static.vecteezy.com/system/resources/previews/008/302/513/original/eps10-blue-user-icon-or-logo-in-simple-flat-trendy-modern-style-isolated-on-white-background-free-vector.jpg"
            id="imgLogin" />
        </div>
        <div class="inputLogin">
          <label for="email" id="labelInput">Email</label>
          <input type="email" id="email" placeholder="Email" v-model="email" required />
        </div>
      </div>

      <div class="inputLogin-group">
        <div class="iconLogin">
          <img src="https://cdn-icons-png.flaticon.com/512/5733/5733312.png" id="imgLogin" />
        </div>
        <div class="inputLogin">
          <label for="password" id="labelInputLogin">Contraseña</label>
          <input type="password" id="password" placeholder="Password" v-model="password" required />
        </div>
      </div>

      <!-- Botón para realizar el inicio de sesión -->
      <button @click="login" id="btnLogin">Login</button>
      <p style="font-weight: normal; text-align: center;">
        <!-- Enlace para redirigir a la página de registro -->
        ¿No estás registrado? <router-link to="/register" style="text-decoration: none;">Registrarse</router-link>
      </p>
    </div>
  </div>
</template>

<style scoped>
/* Estilos CSS aplicados al componente (scoped para limitar el alcance) */
@import "./styles/style1.css";
</style>
