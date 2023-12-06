<template>
    <br>
    <header class="header">
        <div class="encabezado">

            <div id="logo">
                Blog de publicaciones
            </div>

        </div>

    </header>
    /<!--En esta seccion se tendran los  contenedores para cada una de las publicaciones que los usuarios realizen o quieran leer-->
    <section id="principal">
        <!--En la seccion de publicaciones se agregaran las etiqetas article las cuales nos serviran como guia para saber cuantas publicaciones 
      son las que se tendran-->
        <section id="publicaciones">
            <!--Mediante el uso del class post se definiran los estilos de la caja de la publicacion-->
            <article class="post">
                <!--El enlace con la clase enlace-post hace que el titulo de la publicacion sea un enlace-->
                <a href="" class="enlace-post">
                    <h2 class="titulo-post">Oferta Especial de la Semana en Walmart: Descuentos Increíbles en Electrónicos
                        📱🔊</h2>
                </a>
                <img src="https://vippromocodes.com/media/8072.jpg" class="img-post">
                <!--Se utiliza strong para marcar en negritas el dato de por quien y en que fecha fue hecho el comentario o la publicacion-->
                <br>
                <p><strong>Por: </strong><span class="datos-publicaciones">Leafar Ruiz</span>
                    <!--Estos elementos nos sirven como una separacion en el renglon entre elementos-->
                    &nbsp; &nbsp;
                    <strong>Fecha: </strong><span class="datos-publicaciones">01-Noviembre-2023</span>
                </p>
                <p class="parrafo-post">
                    Descubre las últimas ofertas en nuestra sección de electrónicos esta semana. Desde smartphones hasta
                    dispositivos de audio, ¡ahorra en marcas populares! Visita tu tienda Walmart más cercana o compra en
                    línea hoy.
                </p><br>
                <!--En este apartado se crean enlaces para poder leer mas acerca de la publicacion asi como tambien mostrar cuantos comentarios se han subido-->
                <a href="" class="leer-mas">Leer Más..</a>
                &nbsp; &nbsp;
                <span class="num-comentarios">Comentarios</span>
            </article>

            <article class="post">
                <a href="" class="enlace-post">
                    <h2 class="titulo-post"> ¡Renueva tu Hogar con las Ofertas de Walmart en Artículos para el Hogar! 🏡✨
                    </h2>
                </a>
                <img src="https://vippromocodes.com/media/8072.jpg" class="img-post"><br>
                <p><strong>Por: </strong><span class="datos-publicaciones">Leafar Ruiz</span>
                    &nbsp; &nbsp;
                    <strong>Fecha: </strong><span class="datos-publicaciones">11-Noviembre-2023</span>
                </p>
                <p class="parrafo-post">
                    Dale un toque fresco a tu espacio con los increíbles descuentos en muebles, decoración y
                    electrodomésticos. Encuentra todo lo que necesitas para hacer de tu hogar un lugar acogedor. ¡Visítanos
                    hoy en Walmart!
                </p><br>
                <a href="" class="leer-mas">Leer Más..</a>
                &nbsp; &nbsp;
                <span class="num-comentarios">Comentarios</span>
            </article>

            <article class="post">
                <a href="" class="enlace-post">
                    <h2 class="titulo-post"> Renueva tu Cocina con Ofertas Exclusivas de Linea Blanca en Walmart 🍽️🌟
                    </h2>
                </a>
                <img src="https://vippromocodes.com/media/8072.jpg" class="img-post">
                <br>
                <p><strong>Por: </strong><span class="datos-publicaciones">Leafar Ruiz</span>
                    &nbsp; &nbsp;
                    <strong>Fecha: </strong><span class="datos-publicaciones">20-Noviembre-2023</span>
                </p>
                <p class="parrafo-post">
                    Descubre electrodomésticos de calidad a precios irresistibles. Desde modernas estufas hasta eficientes
                    refrigeradores, Walmart tiene todo lo que necesitas para hacer de tu cocina un lugar funcional y
                    elegante. ¡Aprovecha nuestras ofertas hoy!
                </p><br>
                <a href="" class="leer-mas">Leer Más..</a>
                &nbsp; &nbsp;
                <span class="num-comentarios">Comentarios</span>
            </article>

            <article class="post">
                <a href="" class="enlace-post">
                    <h2 class="titulo-post"> Disfruta de Noches de Descanso con Nuestras Ofertas en Colchones y Camas 🛏️😴
                    </h2>
                </a>
                <img src="https://vippromocodes.com/media/8072.jpg" class="img-post"><br>
                <p><strong>Por: </strong><span class="datos-publicaciones">Leafar Ruiz</span>
                    &nbsp; &nbsp;
                    <strong>Fecha: </strong><span class="datos-publicaciones">29-Noviembre-2023</span>
                </p>
                <p class="parrafo-post">
                    Encuentra la combinación perfecta de comodidad y ahorro en nuestra sección de colchones y camas. Renueva
                    tu dormitorio con las últimas tendencias y garantiza noches de descanso reparador. ¡Descubre las ofertas
                    exclusivas de Walmart ahora!
                </p><br>
                <a href="" class="leer-mas">Leer Más..</a>
                &nbsp; &nbsp;
                <span class="num-comentarios">Comentarios</span>
            </article>
        </section>
    </section>
</template>
  
<script setup>

</script>
  <!--Se comienzan con los estilos tipo sass-->
<style scoped>
/*Se configura la pagina con la eliminacion del posible margen en la pagina y la separacion entre elementos*/

@import "./styles/style1.css";

</style>
  