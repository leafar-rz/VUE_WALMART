<script setup>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";
const email = ref("");
const password = ref("");
import { useRouter } from 'vue-router'
const router = useRouter();


async function login() {

  if (email.value.length === 0 || password.value.length === 0) {
    alert("Completa los campos");
    return;
  }

  let user;
  
  try {
    user = await signInWithEmailAndPassword(getAuth(), email.value, password.value);
    alert('Inicio de sesión exitoso');
    const emailUser=email.value;
    const token = await user.user.getIdToken();
    localStorage.setItem('token', token);
    localStorage.setItem('email', emailUser);
    router.push('/home');
  } catch (error) {
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
    <div id="containerLogin">
        <div id="divLogin">

            <h1 id="labelLogin">LOGIN</h1>

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

            <button @click="login" id="btnLogin">Login</button>
            <p style="font-weight: normal; text-align: center;">
                ¿No estás registrado? <router-link to="/register" style="text-decoration: none;">Registrarse</router-link>
            </p>
        </div>
    </div>
</template>
  
<style scoped>
@import "./styles/style1.css";
</style>
  