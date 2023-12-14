<template>
  <!-- Estructura de la barra lateral derecha -->
  <div>
    <div class="menu-container" :class="{ 'menu-open': isMenuOpen }">
      <!-- Contenedor principal de la barra lateral con clase condicional para controlar la apertura/cierre -->
      <div class="toggle-button" @click="toggleMenu">
        <!-- Botón de alternancia para abrir/cerrar la barra lateral -->
        ☰
      </div>
      <div class="menu-content">
        <!-- Contenido de la barra lateral -->
        <ul :class="{ 'menu-expanded': isMenuOpen }">
          <!-- Lista de elementos con clase condicional para controlar la expansión/retracción -->
          <li v-show="isMenuOpen"><a href="/home" id="color">- Inicio</a></li><br>
          <!-- Elemento de menú para la página de inicio -->
          <li v-show="isMenuOpen"><a href="/blogPublicaciones" id="color">- Blog de publicaciones</a></li><br>
          <!-- Elemento de menú para la página de blog de publicaciones -->
          <li v-show="isMenuOpen"><a href="/contacto" id="color">- Contacto</a></li><br>
          <!-- Elemento de menú para la página de contacto -->
          <li v-show="isMenuOpen"><a href="/profile" id="color">- Perfil</a></li><br>
          <!-- Elemento de menú para la página de perfil -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Estado para controlar la apertura/cierre de la barra lateral
      isMenuOpen: false,
    };
  },
  methods: {
    // Método para alternar el estado de apertura/cierre de la barra lateral
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
/* // Se importa un archivo de estilo específico para este componente. */
@import "./styles/style1.css";
</style>
