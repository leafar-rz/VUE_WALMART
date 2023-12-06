<script setup>
import { RouterLink, RouterView } from 'vue-router'

import Footer from './components/footer.vue';
import Header from './components/header.vue';

import barra_navegacion from './components/barra_navegacion.vue'
import carrusel from './components/carrusel.vue'

import publicidad from './components/publicidad.vue'

import menu_derecho from './components/MenuExtensible.vue'

import menu_izquierdo from './components/MenuIzquierdo.vue'

</script>

<template>
  <div>
    <Header />
    <div class="app-container">
      <menu_izquierdo />
      <div class="main-content">
         <barra_navegacion />
         <carrusel/>

        <RouterView />
      </div>
      <menu_derecho />
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.app-container {
  display: grid;
 /* grid-template-columns: 150px 1fr;*/ /* Tres columnas: izquierda, centro, derecha */
  grid-template-columns: 150px 1fr 60px;
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
  padding-top: 1%; /* Altura del Header */; /* Ajusta esto según la altura de tu Header */
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
