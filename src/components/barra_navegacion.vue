<script setup>
// Importa las funciones necesarias de vue-router y vue
import { useRouter } from 'vue-router';

// Obtiene la instancia del enrutador
const router = useRouter();

// Función para navegar a una ruta y ocultar el menú
function GoRuta(ruta) {
  router.push(ruta);
  // Oculta el menú después de navegar
 
}

// Es parte de la otra alternativa
/*
import { ref } from 'vue';

const showMenu = ref(false);

function toggleMenu() {
  // Cambia el estado de showMenu (alternativa de visibilidad del menú)
  showMenu.value = !showMenu.value;
}*/
</script>

<template>
  <!-- Contenedor principal del componente -->
  <div style="margin-top: 10px; background-color: rgb(21, 136, 223);margin-top: -5px;margin-bottom: 10px;">
    <!-- Botones que llaman a la función GoRuta con rutas específicas -->
    <button id="btnRoutes" @click="GoRuta('/home')">Inicio</button>
    <button id="btnRoutes" @click="GoRuta('/blogPublicaciones')">Blog de publicaciones</button>
    <button id="btnRoutes" @click="GoRuta('/contacto')">Contacto</button>
    <button id="btnRoutes" @click="GoRuta('/profile')">Perfil</button>
  </div>

  <!--
    Otra alternativa de enlaces de navegación (comentada)
    <div>
      <div class="menu-btn-container">
        <div class="menu-btn" :class="{ 'menu-btn-active': showMenu }" @click="toggleMenu()">
          <div class="btn-icon">&#9776;</div>
        </div>
      </div>

      <div v-show="showMenu" class="overlay">
        <div class="menu">
          <ul>
            <li><a @click="GoRuta('/')">Inicio</a></li>
            <li><a @click="GoRuta('/cart')">Blog de publicaciones</a></li>
            <li><a @click="GoRuta('/contacto')">Contacto</a></li>
            <li><a @click="GoRuta('/perfil')">Perfil</a></li>
          </ul>
        </div>
      </div>
    </div> -->
</template>

<style scoped>
/* Estilos CSS aplicados al componente (scoped para limitar el alcance) */

@import "./styles/style1.css";

/* 
Estilo de la otra alternativa de enlaces de navegación (comentado)
.menu-btn-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 2; 
}

.menu-btn {
  cursor: pointer;
}

.menu-btn-active {
  color: #fff; 
}

.btn-icon {
  font-size: 24px;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9); 
  z-index: 1;
}

.menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background-color: #000;
  padding: 20px;
  box-sizing: border-box;
}

.menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu li {
  margin-bottom: 15px;
}

.menu a {
  text-decoration: none;
  color: #fff;
  font-size: 18px;
} */
</style>
