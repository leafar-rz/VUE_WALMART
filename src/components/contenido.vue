<script setup>

</script>

<template>
    <!-- Contenedor principal que tiene todo el contenido de template -->
    <div class="contenedorPrincipal">

        <!-- Primer subcontenedor que da acomodo a la primer sección superior del contenido -->
        <div class="subcontendor">
            <h3 class="titulo">¡Bienvenido a Walmart Leafar!</h3><br>
            <!-- Este contenedor interno da formato a las cards en acomodo en fila -->
            <div class="contenedor1">

                <!-- Este contenedor es específico del contenido de cada card -->
                <div class="contenedor1Div1">
                    <img src="../assets/imagen_home_1.png"
                        style="width: 100%;" />
                    <h2>Entrega apartir de 60 minutos</h2>
                    <p>Todos los productos en tienda a precios bajos todos los dias.</p>
                    <button>Comienza a comprar</button>
                </div>

                <!-- Este contenedor es específico del contenido de cada card -->
                <div class="contenedor1Div1">
                    <img src="../assets/imagen_home_2.png"
                        style="width: 100%;" />
                    <h2>Millones de productos desde 24 horas</h2>
                    <p>Envio a todo México</p>
                    <button>Comienza a comprar</button>
                </div>
            </div>
        </div>

        <!-- Segundo subcontenedor que da acomodo a la segunda sección superior del contenido -->
        <div class="subcontenedor" >

            <h3 class="titulo">¡Millones de productos!</h3>
            <br>
            <!-- Este contenedor interno da formato a las cards en acomodo en fila -->
            <div class="contenedor2">

                <!-- Este contenedor es específico del contenido de cada card -->
                <div class="contenedor2Div2">
                    <img src="../assets/imagen_home_3.png"
                        style="width: 100%;">
                    <h2>Juguetes</h2>
                    <p>Con hasta 30% de ahorro</p>
                    <button>Ver más</button>
                </div>

                <!-- Este contenedor es específico del contenido de cada card -->
                <div class="contenedor2Div2">
                    <img src="../assets/imagen_home_4.png"
                        style="width: 100%;">
                    <h2>Pantallas</h2>
                    <p>Con hasta 40% de ahorro</p>
                    <button>Ver más</button>
                </div>

                <!-- Este contenedor es específico del contenido de cada card -->
                <div class="contenedor2Div2">
                    <img src="../assets/imagen_home_5.png"
                        style="width: 100%;">
                    <h2>Subtítulo descriptivo</h2>
                    <p>Con hasta 45% de ahorro</p>
                    <button>Ver más</button>
                </div>

            </div>
        </div>

        <!-- Segundo subcontenedor que da acomodo a la segunda sección superior del contenido -->
        <div class="subcontenedor" >

<h3 class="titulo">¡Recibe hoy mismo!</h3>
<br>
<!-- Este contenedor interno da formato a las cards en acomodo en fila -->
<div class="contenedor2">

    <!-- Este contenedor es específico del contenido de cada card -->
    <div class="contenedor2Div2">
        <img src="../assets/imagen_home_6.png"
            style="width: 100%;">
        <h2>Click Days recibe hoy</h2>
        <p>Con nuestros precios bajos</p>
        <button>Ver más</button>
    </div>

    <!-- Este contenedor es específico del contenido de cada card -->
    <div class="contenedor2Div2">
        <img src="../assets/imagen_home_7.png"
            style="width: 100%;">
        <h2>Te bonificamos $100 en la compra</h2>
        <p>de $600 en alimentos para bebé</p>
        <button>Ver más</button>
    </div>

    <!-- Este contenedor es específico del contenido de cada card -->
    <div class="contenedor2Div2">
        <img src="../assets/imagen_home_8.png"
            style="width: 100%;">
        <h2>Para este Halloween</h2>
        <p>Decora con precios bajos</p>
        <button>Ver más</button>
    </div>

</div>
</div>



    </div>
</template>
  
  <script setup>
  </script>
  
<style scoped>
/*Estilos del contenedor principal que tiene todo el contenido de template */
@import "./styles/style1.css";
</style>
