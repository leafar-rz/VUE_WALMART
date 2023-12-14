<script setup>
// Importación de componentes y funciones de Vue Router
import { RouterLink, RouterView } from 'vue-router'

// Importación de componentes locales
import Footer from './components/footer.vue';
import Header from './components/header.vue';
import barra_navegacion from './components/barra_navegacion.vue'
import carrusel from './components/carrusel.vue'
import menu_derecho from './components/MenuExtensible.vue'
import menu_izquierdo from './components/MenuIzquierdo.vue'
</script>

<template>
  <!-- Estructura principal de la aplicación -->
  <div>
    <!-- Componente del encabezado -->
    <Header />
    <!-- Contenedor principal de la aplicación -->
    <div class="app-container">
      <!-- Componente del menú izquierdo -->
      <menu_izquierdo />
      <!-- Contenido principal de la aplicación -->
      <div class="main-content">
        <!-- Componente de la barra de navegación -->
        <barra_navegacion />
        <!-- Componente del carrusel -->
        <carrusel/>
        <!-- Componente de la vista de enrutamiento -->
        <RouterView />
      </div>
      <!-- Componente del menú derecho -->
      <menu_derecho />
    </div>
    <!-- Componente del pie de página -->
    <Footer />
  </div>
</template>

<style scoped>
/* Estilos específicos para la aplicación */
.app-container {
  display: grid;
  grid-template-columns: 150px 1fr 60px; /* Tres columnas: izquierda, centro, derecha */
  height: 70vh;
  width: auto;
  position: relative;
}

.menu_izquierdo, .menu_derecho {
  background-color: rgb(49, 96, 216);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

.menu_derecho {
  order: 3;
}

.main-content {
  overflow-y: auto; /* Permitir el desplazamiento vertical */
  padding-top: 1%; /* Ajustar según la altura del Header */
  scrollbar-width: thin; /* Configurar el ancho de la barra de desplazamiento en navegadores compatibles con WebKit */
  scrollbar-color: rgb(49, 96, 216) transparent; /* Configurar el color de la barra de desplazamiento en navegadores compatibles con WebKit */
}

.main-content::-webkit-scrollbar {
  width: 8px; /* Ancho de la barra de desplazamiento en navegadores compatibles con WebKit */
}

.main-content::-webkit-scrollbar-thumb {
  background-color: rgb(255, 255, 255); /* Color del pulgar de la barra de desplazamiento en navegadores compatibles con WebKit */
}
</style>
