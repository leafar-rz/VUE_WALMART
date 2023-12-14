<script setup>
import { ref, onMounted } from 'vue';
import { db } from '../assets/firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';

// Referencias reactivas para almacenar categorías, artículos, cantidad y carrito
const Categories = ref([]);//arreglo de categorias
const Articles = ref([]);//arreglo de articulos
const cart = [];//arreglo del carrito
const cantidad = ref(1); // Agrega la referencia para la cantidad

// Función ejecutada después de que el componente se ha montado
onMounted(async () => {
  // Obtener el ID de la categoría seleccionada desde el almacenamiento local
  const selectedCategoryId = localStorage.getItem('selectedCategoryId');
  console.log(`Esta fue la categoría seleccionada: ${selectedCategoryId}`);

  // Consulta para obtener la categoría específica
  const q = query(collection(db, 'Categorias'), where('DEPARTAMENTOS_id', '==', parseInt(selectedCategoryId)));
  const CategoriesCollection = await getDocs(q);

  // Almacenar las categorías obtenidas en la referencia reactiva
  CategoriesCollection.forEach((task) => {
    Categories.value.push({ ...task.data(), id: task.id });
    console.log(task.data(), "id:" + task.id);
  });

  // Obtener IDs de categorías para la siguiente consulta
  const categoryIds = CategoriesCollection.docs.map(doc => doc.id);
  console.log("IDs de categorías:", categoryIds);

  // Consulta para obtener artículos relacionados con las categorías encontradas
  const articlesQuery = query(collection(db, 'Articulos'), where('CATEGORIAS_id', 'in', categoryIds.map(id => parseInt(id))));
  const articlesCollection = await getDocs(articlesQuery);

  // Almacenar los artículos obtenidos en la referencia reactiva
  articlesCollection.forEach((task) => {
    Articles.value.push({ ...task.data(), id: task.id });
    console.log(task.data(), "id:" + task.id);
  });
});

// Función para mostrar artículos basados en el ID de la categoría
async function ShowArticles(id) {
  Articles.value = [];
  console.log(": " + id);
  const articlesQuery = query(collection(db, 'Articulos'), where('CATEGORIAS_id', '==', parseInt(id)));
  const articlesCollection = await getDocs(articlesQuery);

  articlesCollection.forEach((task) => {
    Articles.value.push({ ...task.data(), id: task.id });
    console.log(task.data(), "id:" + task.id);
  });
}

// Función para mostrar todos los artículos independientemente de la categoría
async function ShowArticlesTodos() {
  Articles.value = [];
  const selectedCategoryId = localStorage.getItem('selectedCategoryId');

  // Consulta para obtener la categoría específica
  const q = query(collection(db, 'Categorias'), where('DEPARTAMENTOS_id', '==', parseInt(selectedCategoryId)));
  const CategoriesCollection = await getDocs(q);

  // Obtener IDs de categorías para la siguiente consulta
  const categoryIds = CategoriesCollection.docs.map(doc => doc.id);

  // Consulta para obtener artículos relacionados con las categorías encontradas
  const articlesQuery = query(collection(db, 'Articulos'), where('CATEGORIAS_id', 'in', categoryIds.map(id => parseInt(id))));
  const articlesCollection = await getDocs(articlesQuery);

  // Almacenar los artículos obtenidos en la referencia reactiva
  articlesCollection.forEach((task) => {
    Articles.value.push({ ...task.data(), id: task.id });
    console.log(task.data(), "id:" + task.id);
  });
}

// Función para agregar productos al carrito
function AddCart(idP, descripcionP, imgP, precioP, existenciasP) {
  // Obtén el contenido actual del carrito de localStorage y conviértelo a un objeto JavaScript
  const carrito = JSON.parse(localStorage.getItem('cart')) || [];

  //Objeto json que contiene los datos del articulo que se acaba de agregar
  const producto = {
    id: idP,
    descripcion: descripcionP,
    img: imgP,
    precio: precioP,
    cantidad: parseInt(cantidad.value),
    existencias: existenciasP
  };

  if (carrito.length > 0) {
    // Si el carrito ya tiene contenido, simplemente agrega el nuevo producto
    carrito.push(producto);
  } else {
    // Si el carrito está vacío, crea un nuevo carrito con el producto
    carrito.push(producto);
  }

  // Guarda el carrito actualizado en localStorage
  localStorage.setItem('cart', JSON.stringify(carrito));

  // Muestra una alerta indicando que el producto se ha agregado al carrito con éxito
  alert("Producto agregado al carrito con éxito");
}
</script>

<template>
  <!-- Botones para mostrar artículos de todas las categorías o categorías específicas -->
  <div style="margin-top: 10px;">
    <button id="btnCategories" @click="ShowArticlesTodos()">Todos</button>
    <button v-for="task in Categories" :key="task.id" @click="ShowArticles(task.id)" id="btnCategories">{{ task.Descripcion }}</button>
  </div>

  <!-- Contenedor de artículos con información y botones para agregar al carrito -->
  <div class="fila">
  <!-- Ciclo que se repite por cada aritculo del arreglo -->
    <div v-for="task in Articles" :key="task.id" class="articulo">
      <img :src="task.img" >
      <input id="cantidadInput" type="number" min="1" :max="task.existencias" v-model="cantidad">
      <button id="btnAdd" @click="AddCart(task.id, task.descripcion, task.img, task.precio, task.existencias)">+
        Agregar</button>
      <p>{{ task.descripcion }}</p>
      <p id="pPrice">${{ task.precio }}</p>
    </div>
  </div>

  <br><br><br><br>
</template>

<style scoped>
@import "./styles/style1.css";
</style>
