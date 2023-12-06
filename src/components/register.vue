<script setup>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ref } from "vue";
const email = ref("");
const password = ref("");
import { useRouter } from 'vue-router'
const router = useRouter();

const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            console.log("Successfully registred!");
            alert("Registro existoso")
            router.push('/')
        })
        .catch((data) => {
            console.log(error.code);
            //alert(error.message);
            alert("Usuario ya existente");
        })
}

</script>

<template>
    <div id="containerRegister">
        <div id="divRegister">

            <h1 id="labelRegister">REGISTER</h1>

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

            <button @click="register" id="btnRegister">Registrar</button>
            <p style="font-weight: normal;">¿Ya estas registrado? <router-link to="/" style="text-decoration: none;">Login</router-link></p>
        </div>
    </div>
</template>
  
<style scoped>
@import "./styles/style1.css";
</style>
  

