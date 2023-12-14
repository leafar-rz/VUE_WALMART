<script setup>
// Importaciones de firebase para poder hacer un log out
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from 'vue-router';

// Obtener el correo electrónico del usuario desde el almacenamiento local
const emailUser = localStorage.getItem('email');
const router = useRouter();

// Función para cerrar sesión
function logOut() {
  const auth = getAuth();

  // Realizar el cierre de sesión mediante Firebase Authentication
  signOut(auth)
    .then(() => {
      // Alertar al usuario que la sesión se cerró con éxito
      alert('Sesión cerrada con éxito');

      // Eliminar el correo electrónico y el token del almacenamiento local
      localStorage.removeItem('email');
      localStorage.removeItem('token');

      // Redirigir al usuario a la página de inicio
      router.push('/');
    })
    .catch(error => {
      // En caso de error, alertar al usuario y mostrar el error en la consola
      alert(error.message);
      console.log(error);

      // Redirigir al usuario a la página de inicio
      router.push('/');
    });
}
</script>

<template>
    <br>
    <!-- Encabezado de la página de perfil -->
    <header class="header">
        <div class="encabezado">
            <!-- Logo del perfil -->
            <div id="logo">
                Perfil
            </div>
        </div>
    </header>

    <!-- Sección principal del perfil -->
    <section id="principal">
        <!-- Contenedor de publicaciones específicas para el perfil -->
        <section id="publicaciones">
            <!-- Publicación única para mostrar información del usuario y permitir cerrar sesión -->
            <article class="post">
                <!-- Título con el nombre del usuario -->
                <a href="" class="enlace-post">
                    <h2 class="titulo-post">Bienvenido {{ emailUser }}</h2>
                </a>
                <!-- Imagen del usuario (puedes personalizar esto según tus necesidades) -->
                <img src="https://static.vecteezy.com/system/resources/previews/008/302/513/original/eps10-blue-user-icon-or-logo-in-simple-flat-trendy-modern-style-isolated-on-white-background-free-vector.jpg" class="img-post">
                <!-- Datos fijos de la publicación -->
                <br>
                <p><strong>Por: </strong><span class="datos-publicaciones">WALMART LEAFAR</span></p>
                <!-- Contenido de bienvenida al usuario -->
                <p class="parrafo-post">
                    Bienvenido a Walmart Leafar, nos enorgullece ofrecer productos de calidad, una amplia variedad y un servicio
                    excepcional. Estamos aquí para atenderte y hacer tu experiencia de compra
                    inigualable.
                </p>
                <!-- Botón para cerrar sesión con llamada a la función logOut -->
                <button id="btnProfile" @click="logOut()">Cerrar Sesión</button>
            </article>
        </section>
    </section>
</template>

<script setup>
</script>

<!-- Estilos tipo Sass específicos del componente de perfil -->
<style scoped>
@import "./styles/style1.css";
</style>
