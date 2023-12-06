
  
<script setup>
import { getAuth,signOut } from "firebase/auth";
import { useRouter } from 'vue-router';

const emailUser = localStorage.getItem('email');
const router = useRouter();

function logOut()
{
    const auth = getAuth();
  
  signOut(auth)
    .then(() => {
      alert('Sesion cerrada con exito');
      localStorage.removeItem('email'); // Eliminar el email del localStorage
      localStorage.removeItem('token'); // Eliminar el email del localStorage
      router.push('/');
    })
    .catch(error => {
      alert(error.message);
      console.log(error);
      router.push('/');
    });
}
</script>
  
  

<template>
    <br>
    <header class="header">
        <div class="encabezado">

            <div id="logo">
                Perfil
            </div>

        </div>

    </header>
    /<!--En esta seccion se tendran los  contenedores para cada una de las publicaciones que los usuarios realizen o quieran leer-->
    <section id="principal">
        <!--En la seccion de publicaciones se agregaran las etiqetas article las cuales nos serviran como guia para saber cuantas publicaciones 
      son las que se tendran-->
        <section id="publicaciones">
            <!--Mediante el uso del class post se definiran los estilos de la caja de la publicacion-->
            <article class="post">
                <!--El enlace con la clase enlace-post hace que el titulo de la publicacion sea un enlace-->
                <a href="" class="enlace-post">
                    <h2 class="titulo-post">Bienvenido {{ emailUser }}</h2>
                </a>
                <img src="https://static.vecteezy.com/system/resources/previews/008/302/513/original/eps10-blue-user-icon-or-logo-in-simple-flat-trendy-modern-style-isolated-on-white-background-free-vector.jpg" class="img-post">
                <!--Se utiliza strong para marcar en negritas el dato de por quien y en que fecha fue hecho el comentario o la publicacion-->
                <br>
                <p><strong>Por: </strong><span class="datos-publicaciones">WALMART LEAFAR</span></p>
                <p class="parrafo-post">
                    Bienvenido a Walmart Leafar, nos enorgullece ofrecer productos de calidad, una amplia variedad y un servicio
                    excepcional. Estamos aquí para atenderte y hacer tu experiencia de compra
                    inigualable.
                </p>
                <button id="btnProfile" @click="logOut()">Cerrar Sesion</button>
            </article>
        </section>
    </section>
</template>
  
<script setup>

</script>
  <!--Se comienzan con los estilos tipo sass-->
<style scoped>
@import "./styles/style1.css";
</style>
  