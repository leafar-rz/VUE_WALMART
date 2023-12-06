<script setup>
import { ref, onMounted } from 'vue';
import { db } from '../assets/firebase';
import { collection, updateDoc, doc } from 'firebase/firestore';
import { useRouter } from 'vue-router';

const router = useRouter();
const productosCol = collection(db, "Articulos");
const total = ref(0);
const carrito = ref(JSON.parse(localStorage.getItem('cart')) || []);
const vacio = ref(true);

onMounted(() => {
  let sum = 0;
  if (Array.isArray(carrito.value)) {
    carrito.value.forEach(element => {
      sum += element.precio * element.cantidad;
    });
    total.value = sum;
    console.log('Total a pagar:', sum);
  } else {
    console.error('El carrito no es un array válido.');
  }

   // Verificar si carrito está vacío
   if(carrito.value.length > 0) {
    vacio.value = false; 
  } else {
    vacio.value = true;
  }


});

// Script
function quitar(producto) {
  const index = carrito.value.indexOf(producto);
  carrito.value.splice(index, 1);
  total.value -= (producto.precio * producto.cantidad);
}

async function pagar() {
  for (let producto of carrito.value) {

    const docRef = doc(productosCol, producto.id);

    await updateDoc(docRef, {
      existencias: parseInt(producto.existencias) - parseInt(producto.cantidad)
    });

  }

  alert("Stock modificado");

  localStorage.setItem('cart', JSON.stringify([]));

  router.push('/home');
}
</script>

<template>

<div v-show="vacio"><br><br><br><br><br><br>
<table align="center">
  <tr>
    <th>
      <p style="font-size: 50px;font-family: Arial, Helvetica, sans-serif;">EL CARRITO ESTA VACIO</p>
    </th>
  </tr>
</table>
</div>

<div v-show="!vacio">
  <table>
    <tr>
      <th style="width: 5%;">

      </th>
      <th style="width: 20%; height: 50%;">
        <p id="pPrice">Imagen</p>
      </th>
      <th style="width: 55%;">
        <p id="pPrice">Descripcion</p>
      </th>
      <th style="width: 150px;">
        <p id="pPrice">Precio</p>
      </th>
      <th style="width: 150px;">
        <p id="pPrice">Total</p>
      </th>
    </tr>
  </table>
  <!-- Mostrar el carrito desde el localStorage -->
  <div v-for="producto in carrito" :key="producto.id">
    <table>
      <tr>
        <th style="width: 5%;">
          <button
            style="background-color: red; border: none; border-radius: 50px;font-size: 30px;font-family: Arial, Helvetica, sans-serif; height: 40px;width: 40px;"
            @click="quitar(producto)">-</button>
        </th>
        <th style="width: 20%; height: 50%;">
          <img id="imgCart" :src="producto.img" style="width: 100%;height: 200px;">
        </th>
        <th style="width: 55%; text-align: left;">
          <p id="pCart">{{ producto.descripcion }}</p>
        </th>
        <th style="width: 150px;">
          <p id="pPrice">${{ producto.precio }}</p>
        </th>
        <th style="width: 150px;">
          <p id="pPrice">${{ producto.precio * producto.cantidad }}</p>
        </th>
      </tr>
    </table>

  </div>

  <table align="right">
    <tr>
      <th colspan="5">
        <p id="pPrice">Total ${{ total }}</p>
      </th>
    </tr>
  </table><br><br>

  <table align="center">
    <tr>
      <th>
        <button
          style="border-radius: 20px;background-color: beige;color: black;width: 300px;height: 35px;font-size: 25px;border: none;"
          @click="pagar()">Pagar</button>
      </th>
    </tr>
  </table>
</div>

  

  <br><br><br><br><br><br><br><br>
</template>

<style scoped>@import "./styles/style1.css";</style>
