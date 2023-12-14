<script setup>
// Importa las funciones necesarias de vue-router y vue
import { useRouter } from 'vue-router';

// Obtiene la instancia del enrutador
const router = useRouter();

// Función para navegar a una ruta y ocultar el menú
function GoRuta(ruta) {
  router.push(ruta); 
}

</script>

<template>
  <!-- Contenedor principal del componente -->
  <div style="margin-top: 10px; background-color: rgb(21, 136, 223);margin-top: -5px;margin-bottom: 10px;">
    <!-- Botones que llaman a la función GoRuta con rutas específicas -->
    <button id="btnRoutes" @click="GoRuta('/home')">Inicio</button>
    <!-- Botón para ir a la página de inicio -->
    <button id="btnRoutes" @click="GoRuta('/blogPublicaciones')">Blog de publicaciones</button>
    <!-- Botón para ir a la página de blog de publicaciones -->
    <button id="btnRoutes" @click="GoRuta('/contacto')">Contacto</button>
    <!-- Botón para ir a la página de contacto -->
    <button id="btnRoutes" @click="GoRuta('/profile')">Perfil</button>
    <!-- Botón para ir a la página de perfil -->
  </div>
</template>

<style scoped>
/* Estilos CSS aplicados al componente (scoped para limitar el alcance) */
@import "./styles/style1.css";
</style>
