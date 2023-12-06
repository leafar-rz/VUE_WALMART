<script setup>
// importamos la bs
import { db } from '../assets/firebase';
// importamos las colecciones
import { getDocs, collection } from 'firebase/firestore';
// Con esto vamos a recuperar datos
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const Departamentos = ref([]);

onMounted(async () => {
    //Aqui haremos una coleccion
    let DepartamentosCollection = await getDocs(collection(db, 'Departamentos'))
    DepartamentosCollection.forEach((task) => {
        Departamentos.value.push({ ...task.data(), id: task.id })
    });
});

const mostrarDepartamentos = ref(false);

function toggleDepartamentosContainer() {
    mostrarDepartamentos.value = !mostrarDepartamentos.value;
}

function GoCategories(id) {
    if (router.currentRoute.value.path === '/articles') {
        localStorage.setItem('selectedCategoryId', id);
        router.go(0);
    } else {
        localStorage.setItem('selectedCategoryId', id);
        router.push('/articles');
        console.log(id);
        mostrarDepartamentos.value = false;
    }

}

function goCart(){
    router.push('/cart');
}

function goProfile(){
    router.push('/profile');
}




</script>

<template>
    <div id="div1" style="margin-left: -10px; width: 101vw;">
        <!-- Se crea un div con el id "div1" para contener la barra de navegación. -->
        <table>
            <!-- Se crea una tabla dentro del div para estructurar la barra de navegación. -->
            <tr>
                <!-- Se crea una fila en la tabla. -->

                <th id="thEncabezado">
                    <!-- Se crea una celda de encabezado con el id "thEncabezado". -->
                    <a href="/home">
                        <!-- Se crea un enlace que apunta a "WALMART.html". -->
                        <img src="./img/logo.png" alt="" style="width: 80%;">
                        <!-- Se inserta una imagen de un logo con un atributo "width" del 80%. -->
                    </a>
                </th>

                <th id="thEncabezado2">
                    <!-- Se crea otra celda de encabezado con el id "thEncabezado2". -->
                    <button id="btnEncabezado" @click="toggleDepartamentosContainer">Departamentos</button>
                    <!-- Se inserta un botón con el id "btnEncabezado" que llama a una función "toogledepartamentosContainer()" cuando se hace clic. -->
                </th>

                <th id="thEncabezado2">
                    <!-- Otra celda de encabezado con el mismo id "thEncabezado2" (esto puede ser un error). -->
                    <button id="btnEncabezado">Servicios</button>
                    <!-- Se inserta otro botón. -->
                </th>

                <th id="thEncabezado3">
                    <!-- Celda de encabezado con el id "thEncabezado3". -->
                    <div>
                        <!-- Se crea un contenedor div. -->
                        <input type="text" id="miInput" placeholder="Buscar en WALMART">
                        <!-- Se crea un campo de entrada tipo texto con el id "miInput" y un marcador de posición. -->
                        <button id="btnBuscar" type="button" style="margin-left: -44px;">.</button>
                        <!-- Se crea un botón con el id "btnBuscar" y un texto de punto. -->
                    </div>
                </th>

                <th id="thEncabezado4">
                    <!-- Celda de encabezado con el id "thEncabezado4". -->
                    <img src="./img/account.png" alt="" style="width: 90%;" @click="goProfile()">
                    <!-- Se inserta una imagen de una cuenta de usuario con un atributo "width" del 90%. -->
                </th>

                <th id="thEncabezado4">
                    <!-- Otra celda de encabezado con el mismo id "thEncabezado4" (esto puede ser un error). -->
                    <img src="./img/carrito.png" alt="" style="width: 70%;" @click="goCart()" >
                    <!-- Se inserta una imagen de un carrito de compras con un atributo "width" del 70% y un manejador de clic llamado "visibleInvoice()". -->
                </th>

            <tr>
                <!-- Se cierra la fila actual. -->
                <th colspan="6">
                    <!-- Se crea una celda de encabezado que abarca 6 columnas. -->
                    <div id="departamentosContainer">
                        <!-- Se crea un contenedor div con el id "departamentosContainer". -->
                        <!-- Aquí se mostrarán los botones de departamentos -->
                        <!-- Comentario que no afecta la estructura de la página. -->
                    </div><br>
                </th>
            </tr>
            </tr>
        </table>
        <!-- Se cierra la tabla. -->

        <div id="departamentosContainer" v-show="mostrarDepartamentos">
            <button v-for="task in Departamentos" :key="task.id" id="btnDepartaments" @click="GoCategories(task.id)">-{{
                task.nombre }}</button>
        </div>


    </div>
    <!-- Se cierra el div "div1" que contiene la barra de navegación. -->
</template>


<style scoped>
@import "./styles/style1.css";
</style>