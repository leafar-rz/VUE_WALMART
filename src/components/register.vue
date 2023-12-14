<script setup>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";
const email = ref("");
const password = ref("");
import { useRouter } from 'vue-router'
const router = useRouter();

// Función para registrar un nuevo usuario
const register = () => {
    // Crear un nuevo usuario mediante Firebase Authentication
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            // Mostrar mensaje de registro exitoso y redirigir al inicio de sesión
            console.log("Successfully registred!");
            alert("Registro exitoso")
            router.push('/')
        })
        .catch((data) => {
            // Capturar y manejar errores durante el registro
            console.log(error.code);
            alert("Usuario ya existente");
        })
}
</script>

<template>
  <!-- Estructura HTML del componente de registro -->
  <div id="containerRegister">
    <div id="divRegister">

      <h1 id="labelRegister">REGISTER</h1>

      <!-- Campos de entrada para correo electrónico y contraseña -->
      <div class="input-groupRegister">
        <div class="iconRegister">
          <img src="https://static.vecteezy.com/system/resources/previews/008/302/513/original/eps10-blue-user-icon-or-logo-in-simple-flat-trendy-modern-style-isolated-on-white-background-free-vector.jpg"
            id="imgRegister" />
        </div>
        <div class="inputRegister">
          <label for="email" id="labelInputRegister">Email</label>
          <input type="email" id="email" placeholder="Email" v-model="email" required />
        </div>
      </div>

      <div class="input-groupRegister">
        <div class="iconRegister">
          <img src="https://cdn-icons-png.flaticon.com/512/5733/5733312.png" id="imgRegister" />
        </div>
        <div class="inputRegister">
          <label for="password" id="labelInputRegister">Contraseña</label>
          <input type="password" id="password" placeholder="Password" v-model="password" required />
        </div>
      </div>

      <!-- Botón para realizar el registro -->
      <button @click="register" id="btnRegister">Registrar</button>
      <p style="font-weight: normal;">¿Ya estás registrado? <router-link to="/" style="text-decoration: none;">Login</router-link></p>
    </div>
  </div>
</template>

<style scoped>
/* Estilos CSS aplicados al componente (scoped para limitar el alcance) */
@import "./styles/style1.css";
</style>
