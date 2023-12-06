<template>
  <div>
    <div class="menu-container" :class="{ 'menu-open': isMenuOpen }">
      
      <div class="toggle-button" @click="toggleMenu">
        ☰
      </div>
      
      <div class="menu-content">
        
        <ul :class="{ 'menu-expanded': isMenuOpen }">
          <li v-show="isMenuOpen"><a href="/home" id="color">- Inicio</a></li><br>
          <li v-show="isMenuOpen"><a href="/blogPublicaciones" id="color">- Blog de publicaciones</a></li><br>
          <li v-show="isMenuOpen"><a href="/contacto" id="color">- Contacto</a></li><br>
          <li v-show="isMenuOpen"><a href="/profile" id="color">- Perfil</a></li><br>
        </ul>
      </div>
    </div>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
@import "./styles/style1.css";
</style>

