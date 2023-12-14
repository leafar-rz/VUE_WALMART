<script setup>
// Importación de funciones de Vue y Firebase
import { ref, onMounted } from 'vue';
import { db } from '../assets/firebase';
import { collection, updateDoc, doc } from 'firebase/firestore';
import { useRouter } from 'vue-router';

// Inicialización del enrutador de Vue
const router = useRouter();
// Colección de productos en la base de datos
const productosCol = collection(db, "Articulos");
// Referencias reactivas para el total del carrito, el contenido del carrito y su estado de vacío
const total = ref(0);
const carrito = ref(JSON.parse(localStorage.getItem('cart')) || []);
const vacio = ref(true);

// Función ejecutada después de que el componente se ha montado
onMounted(() => {
  let sum = 0;
  if (Array.isArray(carrito.value)) {
    // Calcular el total de la compra sumando el precio de cada producto multiplicado por su cantidad
    carrito.value.forEach(element => {
      sum += element.precio * element.cantidad;
    });
    total.value = sum;
    console.log('Total a pagar:', sum);
  } else {
    console.error('El carrito no es un array válido.');
  }

  // Verificar si el carrito está vacío
  if (carrito.value.length > 0) {
    vacio.value = false;
  } else {
    vacio.value = true;
  }
});

// Función para quitar un producto del carrito
function quitar(producto) {
  const index = carrito.value.indexOf(producto);
  carrito.value.splice(index, 1);
  total.value -= (producto.precio * producto.cantidad);
}

// Función para procesar el pago y actualizar el stock en la base de datos
async function pagar() {
  for (let producto of carrito.value) {
    // Referencia al documento del producto en la base de datos
    const docRef = doc(productosCol, producto.id);
    // Actualizar el stock restando la cantidad comprada
    await updateDoc(docRef, {
      existencias: parseInt(producto.existencias) - parseInt(producto.cantidad)
    });
  }

  // Alerta y redirección después de realizar el pago
  alert("Stock modificado");
  localStorage.setItem('cart', JSON.stringify([]));
  router.push('/home');
}
</script>

<template>
  <!-- Sección que se muestra si el carrito está vacío -->
  <div v-show="vacio">
    <br><br><br><br><br><br>
    <table align="center">
      <tr>
        <th>
          <p style="font-size: 50px;font-family: Arial, Helvetica, sans-serif;">EL CARRITO ESTÁ VACÍO</p>
        </th>
      </tr>
    </table>
  </div>

  <!-- Sección que se muestra si el carrito no está vacío -->
  <div v-show="!vacio">
    <table>
      <tr>
        <th style="width: 5%;"></th>
        <th style="width: 20%; height: 50%;">
          <p id="pPrice">Imagen</p>
        </th>
        <th style="width: 55%;">
          <p id="pPrice">Descripción</p>
        </th>
        <th style="width: 150px;">
          <p id="pPrice">Precio</p>
        </th>
        <th style="width: 150px;">
          <p id="pPrice">Total</p>
        </th>
      </tr>
    </table>

    <!-- Mostrar cada producto en el carrito -->
    <div v-for="producto in carrito" :key="producto.id">
      <table>
        <tr>
          <th style="width: 5%;">
            <button style="background-color: red; border: none; border-radius: 50px;font-size: 30px;font-family: Arial, Helvetica, sans-serif; height: 40px;width: 40px;" @click="quitar(producto)">-</button>
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

    <!-- Sección del total a pagar y botón de pago -->
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
          <button style="border-radius: 20px;background-color: beige;color: black;width: 300px;height: 35px;font-size: 25px;border: none;" @click="pagar()">Pagar</button>
        </th>
      </tr>
    </table>
  </div>
  <br><br><br><br><br><br><br><br>
</template>

<style scoped>@import "./styles/style1.css";</style>
