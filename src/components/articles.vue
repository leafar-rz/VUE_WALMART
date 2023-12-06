<script setup>
import { ref, onMounted } from 'vue';
import { db } from '../assets/firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';


const Categories = ref([]);
const Articles = ref([]);
const cart = [];
const cantidad = ref(1); // Agrega la referencia para la cantidad

onMounted(async () => {
  const selectedCategoryId = localStorage.getItem('selectedCategoryId');
  console.log(`Esta fue la categoría seleccionada: ${selectedCategoryId}`);

  const q = query(collection(db, 'Categorias'), where('DEPARTAMENTOS_id', '==', parseInt(selectedCategoryId)));
  const CategoriesCollection = await getDocs(q);

  CategoriesCollection.forEach((task) => {
    Categories.value.push({ ...task.data(), id: task.id });
    console.log(task.data(), "id:" + task.id);
  });

  //******************************************************************** */

  // Obtener artículos que tienen CATEGORIAS_id en las categorías encontradas
  const categoryIds = CategoriesCollection.docs.map(doc => doc.id);
  console.log("IDs de categorías:", categoryIds);

  const articlesQuery = query(collection(db, 'Articulos'), where('CATEGORIAS_id', 'in', categoryIds.map(id => parseInt(id))));

  const articlesCollection = await getDocs(articlesQuery);

  //console.log(articlesCollection.size);

  articlesCollection.forEach((task) => {
    Articles.value.push({ ...task.data(), id: task.id });
    console.log(task.data(), "id:" + task.id);
  });


});

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

async function ShowArticlesTodos() {
  Articles.value = [];
  const selectedCategoryId = localStorage.getItem('selectedCategoryId');

  const q = query(collection(db, 'Categorias'), where('DEPARTAMENTOS_id', '==', parseInt(selectedCategoryId)));
  const CategoriesCollection = await getDocs(q);

  const categoryIds = CategoriesCollection.docs.map(doc => doc.id);

  const articlesQuery = query(collection(db, 'Articulos'), where('CATEGORIAS_id', 'in', categoryIds.map(id => parseInt(id))));

  const articlesCollection = await getDocs(articlesQuery);

  articlesCollection.forEach((task) => {
    Articles.value.push({ ...task.data(), id: task.id });
    console.log(task.data(), "id:" + task.id);
  });
}
/***************************************************************** */



function AddCart(idP, descripcionP, imgP, precioP, existenciasP) {
  // Obtén el contenido actual del carrito de localStorage y conviértelo a un objeto JavaScript
  const carrito = JSON.parse(localStorage.getItem('cart')) || [];

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

  alert("Producto agregado al carrito con éxito");
}

</script>


<template>
  <div style="margin-top: 10px;">
    <button id="btnCategories" @click="ShowArticlesTodos()">Todos</button>
    <button v-for="task in Categories" :key="task.id" @click="ShowArticles(task.id)" id="btnCategories">{{
      task.Descripcion }}</button>
  </div>

  <div class="fila">
    <div v-for="task in Articles" :key="task.id" class="articulo">
      <img :src="task.img" >
      <input id="cantidadInput" type="number" min="1" :max=task.existencias v-model="cantidad">
      <button id="btnAdd" @click="AddCart(task.id, task.descripcion, task.img, task.precio, task.existencias)">+
        Agregar</button>
      <p>{{ task.descripcion }}</p>
      <p id="pPrice">${{ task.precio }}</p>
    </div>

    


    <!--<div v-for="task in Articles" :key="task.id" class="articulo">
      <img :src="task.img" alt="">
      <input id="cantidadInput" type="number" min="1" value="1">
      <button id="btnAdd" @click="AddCart()">+ Agregar</button>
      <p>{{ task.descripcion }}</p>
      <p id="pPrice">{{ task.price }}</p>
    </div>

    <div v-for="task in Articles" :key="task.id" class="articulo">
      <img :src="task.img" alt="">
      <input id="cantidadInput" type="number" min="1" value="1">
      <button id="btnAdd" @click="AddCart()">+ Agregar</button>
      <p>{{ task.descripcion }}</p>
      <p id="pPrice">{{ task.price }}</p>
    </div>

    <div v-for="task in Articles" :key="task.id" class="articulo">
      <img :src="task.img" alt="">
      <input id="cantidadInput" type="number" min="1" value="1">
      <button id="btnAdd" @click="AddCart()">+ Agregar</button>
      <p>{{ task.descripcion }}</p>
      <p id="pPrice">{{ task.price }}</p>
    </div>

    <div v-for="task in Articles" :key="task.id" class="articulo">
      <img :src="task.img" alt="">
      <input id="cantidadInput" type="number" min="1" value="1">
      <button id="btnAdd" @click="AddCart()">+ Agregar</button>
      <p>{{ task.descripcion }}</p>
      <p id="pPrice">{{ task.price }}</p>
    </div>

    <div v-for="task in Articles" :key="task.id" class="articulo">
      <img :src="task.img" alt="">
      <input id="cantidadInput" type="number" min="1" value="1">
      <button id="btnAdd" @click="AddCart()">+ Agregar</button>
      <p>{{ task.descripcion }}</p>
      <p id="pPrice">{{ task.price }}</p>
    </div>

    <div v-for="task in Articles" :key="task.id" class="articulo">
      <img :src="task.img" alt="">
      <input id="cantidadInput" type="number" min="1" value="1">
      <button id="btnAdd" @click="AddCart()">+ Agregar</button>
      <p>{{ task.descripcion }}</p>
      <p id="pPrice">{{ task.price }}</p>
    </div>

    <div v-for="task in Articles" :key="task.id" class="articulo">
      <img :src="task.img" alt="">
      <input id="cantidadInput" type="number" min="1" value="1">
      <button id="btnAdd" @click="AddCart()">+ Agregar</button>
      <p>{{ task.descripcion }}</p>
      <p id="pPrice">{{ task.price }}</p>
    </div>

    <div v-for="task in Articles" :key="task.id" class="articulo">
      <img :src="task.img" alt="">
      <input id="cantidadInput" type="number" min="1" value="1">
      <button id="btnAdd" @click="AddCart()">+ Agregar</button>
      <p>{{ task.descripcion }}</p>
      <p id="pPrice">{{ task.price }}</p>
    </div>-->

  </div>


  <br><br><br><br>
</template>


<style scoped>
@import "./styles/style1.css";
</style>
