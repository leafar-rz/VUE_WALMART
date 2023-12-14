<template>
  <!-- Una plantilla que contiene un carrusel de logotipos -->
  <div class="logo-carousel">
    <div class="logo-container" ref="logoContainer">
      <!-- Contenedor de logotipos -->
      <div class="logos" v-for="(logo, index) in logos" :key="index">
        <!-- Iteración sobre la lista de logotipos para mostrar cada imagen -->
        <img :src="logo.src" :alt="logo.alt" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';

// Lista de logotipos con sus respectivas fuentes y descripciones alternativas
const logos = [
{ src: 'https://i5.walmartimages.com/dfw/4ff9c6c9-d25d/k2-_d70c1f51-5469-43f3-a389-58b9a3b3b97e.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF', alt: 'Gandhi' },
{ src: 'https://i5.walmartimages.com/dfw/4ff9c6c9-a40d/k2-_9a30ca8e-7547-423f-81e6-bf797213c546.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF', alt: 'Libreria el Planeta' },
{ src: 'https://www.thesun.ie/wp-content/uploads/sites/3/2022/09/LG-WALMART-LOGO-OFFPLAT.jpg?strip=all&quality=100&w=1920&h=1080&crop=1', alt: 'Amazon' },
{ src: 'https://i5.walmartimages.com/dfw/4ff9c6c9-6e06/k2-_4a4227ff-68fe-4c18-93ca-7898eb5b3a23.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF', alt: 'Casa del Libro' },
{ src: 'https://i5.walmartimages.com/dfw/4ff9c6c9-31d9/k2-_cd40d29a-3eda-4f98-a950-6ba11a238879.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF', alt: 'Buscalibre' },
{ src: 'https://i5.walmartimages.com/dfw/4ff9c6c9-3369/k2-_42f557cf-ff7a-4c45-ba8b-01af9abff8de.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF', alt: 'Gonvill' },
{ src: 'https://i5.walmartimages.com/dfw/4ff9c6c9-af12/k2-_b864f377-d742-49a4-83d4-87fc2ccacfd5.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF', alt: 'Gonvill' },
{ src: 'https://i5.walmartimages.com/dfw/4ff9c6c9-d25d/k2-_d70c1f51-5469-43f3-a389-58b9a3b3b97e.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF', alt: 'Gandhi' },
{ src: 'https://i5.walmartimages.com/dfw/4ff9c6c9-a40d/k2-_9a30ca8e-7547-423f-81e6-bf797213c546.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF', alt: 'Libreria el Planeta' },
{ src: 'https://www.thesun.ie/wp-content/uploads/sites/3/2022/09/LG-WALMART-LOGO-OFFPLAT.jpg?strip=all&quality=100&w=1920&h=1080&crop=1', alt: 'Amazon' },
{ src: 'https://i5.walmartimages.com/dfw/4ff9c6c9-6e06/k2-_4a4227ff-68fe-4c18-93ca-7898eb5b3a23.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF', alt: 'Casa del Libro' },
{ src: 'https://i5.walmartimages.com/dfw/4ff9c6c9-31d9/k2-_cd40d29a-3eda-4f98-a950-6ba11a238879.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF', alt: 'Buscalibre' },
{ src: 'https://i5.walmartimages.com/dfw/4ff9c6c9-3369/k2-_42f557cf-ff7a-4c45-ba8b-01af9abff8de.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF', alt: 'Gonvill' },
{ src: 'https://i5.walmartimages.com/dfw/4ff9c6c9-af12/k2-_b864f377-d742-49a4-83d4-87fc2ccacfd5.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF', alt: 'Gonvill' },
{ src: 'https://i5.walmartimages.com/dfw/4ff9c6c9-d25d/k2-_d70c1f51-5469-43f3-a389-58b9a3b3b97e.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF', alt: 'Gandhi' },
{ src: 'https://i5.walmartimages.com/dfw/4ff9c6c9-a40d/k2-_9a30ca8e-7547-423f-81e6-bf797213c546.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF', alt: 'Libreria el Planeta' },
{ src: 'https://www.thesun.ie/wp-content/uploads/sites/3/2022/09/LG-WALMART-LOGO-OFFPLAT.jpg?strip=all&quality=100&w=1920&h=1080&crop=1', alt: 'Amazon' },
{ src: 'https://i5.walmartimages.com/dfw/4ff9c6c9-6e06/k2-_4a4227ff-68fe-4c18-93ca-7898eb5b3a23.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF', alt: 'Casa del Libro' },
{ src: 'https://i5.walmartimages.com/dfw/4ff9c6c9-31d9/k2-_cd40d29a-3eda-4f98-a950-6ba11a238879.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF', alt: 'Buscalibre' },
{ src: 'https://i5.walmartimages.com/dfw/4ff9c6c9-3369/k2-_42f557cf-ff7a-4c45-ba8b-01af9abff8de.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF', alt: 'Gonvill' },
{ src: 'https://i5.walmartimages.com/dfw/4ff9c6c9-af12/k2-_b864f377-d742-49a4-83d4-87fc2ccacfd5.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF', alt: 'Gonvill' },
{ src: 'https://i5.walmartimages.com/dfw/4ff9c6c9-d25d/k2-_d70c1f51-5469-43f3-a389-58b9a3b3b97e.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF', alt: 'Gandhi' },
{ src: 'https://i5.walmartimages.com/dfw/4ff9c6c9-a40d/k2-_9a30ca8e-7547-423f-81e6-bf797213c546.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF', alt: 'Libreria el Planeta' },
{ src: 'https://www.thesun.ie/wp-content/uploads/sites/3/2022/09/LG-WALMART-LOGO-OFFPLAT.jpg?strip=all&quality=100&w=1920&h=1080&crop=1', alt: 'Amazon' },
{ src: 'https://i5.walmartimages.com/dfw/4ff9c6c9-6e06/k2-_4a4227ff-68fe-4c18-93ca-7898eb5b3a23.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF', alt: 'Casa del Libro' },
{ src: 'https://i5.walmartimages.com/dfw/4ff9c6c9-31d9/k2-_cd40d29a-3eda-4f98-a950-6ba11a238879.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF', alt: 'Buscalibre' },
{ src: 'https://i5.walmartimages.com/dfw/4ff9c6c9-3369/k2-_42f557cf-ff7a-4c45-ba8b-01af9abff8de.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF', alt: 'Gonvill' },
{ src: 'https://i5.walmartimages.com/dfw/4ff9c6c9-af12/k2-_b864f377-d742-49a4-83d4-87fc2ccacfd5.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF', alt: 'Gonvill' },
{ src: 'https://i5.walmartimages.com/dfw/4ff9c6c9-d25d/k2-_d70c1f51-5469-43f3-a389-58b9a3b3b97e.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF', alt: 'Gandhi' },
{ src: 'https://i5.walmartimages.com/dfw/4ff9c6c9-a40d/k2-_9a30ca8e-7547-423f-81e6-bf797213c546.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF', alt: 'Libreria el Planeta' },
{ src: 'https://www.thesun.ie/wp-content/uploads/sites/3/2022/09/LG-WALMART-LOGO-OFFPLAT.jpg?strip=all&quality=100&w=1920&h=1080&crop=1', alt: 'Amazon' },
{ src: 'https://i5.walmartimages.com/dfw/4ff9c6c9-6e06/k2-_4a4227ff-68fe-4c18-93ca-7898eb5b3a23.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF', alt: 'Casa del Libro' },
{ src: 'https://i5.walmartimages.com/dfw/4ff9c6c9-31d9/k2-_cd40d29a-3eda-4f98-a950-6ba11a238879.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF', alt: 'Buscalibre' },
{ src: 'https://i5.walmartimages.com/dfw/4ff9c6c9-3369/k2-_42f557cf-ff7a-4c45-ba8b-01af9abff8de.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF', alt: 'Gonvill' },
{ src: 'https://i5.walmartimages.com/dfw/4ff9c6c9-af12/k2-_b864f377-d742-49a4-83d4-87fc2ccacfd5.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF', alt: 'Gonvill' },
{ src: 'https://i5.walmartimages.com/dfw/4ff9c6c9-d25d/k2-_d70c1f51-5469-43f3-a389-58b9a3b3b97e.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF', alt: 'Gandhi' },
{ src: 'https://i5.walmartimages.com/dfw/4ff9c6c9-a40d/k2-_9a30ca8e-7547-423f-81e6-bf797213c546.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF', alt: 'Libreria el Planeta' },
{ src: 'https://www.thesun.ie/wp-content/uploads/sites/3/2022/09/LG-WALMART-LOGO-OFFPLAT.jpg?strip=all&quality=100&w=1920&h=1080&crop=1', alt: 'Amazon' },
{ src: 'https://i5.walmartimages.com/dfw/4ff9c6c9-6e06/k2-_4a4227ff-68fe-4c18-93ca-7898eb5b3a23.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF', alt: 'Casa del Libro' },
{ src: 'https://i5.walmartimages.com/dfw/4ff9c6c9-31d9/k2-_cd40d29a-3eda-4f98-a950-6ba11a238879.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF', alt: 'Buscalibre' },
{ src: 'https://i5.walmartimages.com/dfw/4ff9c6c9-3369/k2-_42f557cf-ff7a-4c45-ba8b-01af9abff8de.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF', alt: 'Gonvill' },
{ src: 'https://i5.walmartimages.com/dfw/4ff9c6c9-af12/k2-_b864f377-d742-49a4-83d4-87fc2ccacfd5.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF', alt: 'Gonvill' },
];

// Función para iniciar la animación del carrusel de logotipos
const startAnimation = (container) => {
  const speed = 50; // Velocidad de desplazamiento
  const containerWidth = container.offsetWidth;
  let pos = 0;

  const scroll = () => {
    pos -= 1;
    if (pos < -containerWidth) {
      pos = 0;
    }
    container.style.left = pos + 'px';
  };

  // Configurar el intervalo para la animación
  const interval = setInterval(scroll, speed);

  // Limpiar el intervalo cuando se desmonta el componente
  onBeforeUnmount(() => {
    clearInterval(interval);
  });
};

// Referencia al contenedor de logotipos
const logoContainer = ref(null);

// Acción ejecutada al montar el componente
onMounted(() => {
  const container = logoContainer.value;
  const cloneLogos = container.innerHTML;
  container.innerHTML += cloneLogos; // Duplicar los logotipos para crear un efecto de bucle
  startAnimation(container); // Iniciar la animación
});
</script>

<style scoped>
/* Estilos CSS para el carrusel de logotipos */
@import "./styles/style1.css";
</style>
