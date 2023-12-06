
  
<script setup>
const facebookLink = "https://www.facebook.com/WalmartMexico/?locale=es_LA";
const instagramLink = "https://www.instagram.com/walmartmexico/?hl=es";
const twitterLink = "https://twitter.com/Walmart?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor";
</script>
  
  

<template>
    <br>
    <header class="header">
        <div class="encabezado">

            <div id="logo">
                Contacto
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
                    <h2 class="titulo-post">¡Bienvenido a Walmart Leafar!</h2>
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
                    En Walmart Leafar, nos enorgullece ofrecer productos de calidad, una amplia variedad y un servicio
                    excepcional. Estamos aquí para atenderte, responder tus consultas y hacer tu experiencia de compra
                    inigualable.
                </p>
            </article>

            <article class="post">
                <a href="" class="enlace-post">
                    <h2 class="titulo-post"> Información de Contacto
                    </h2>
                </a>
                <img src="https://vippromocodes.com/media/8072.jpg" class="img-post"><br>
                <p><strong>Por: </strong><span class="datos-publicaciones">Leafar Ruiz</span>
                    &nbsp; &nbsp;
                    <strong>Fecha: </strong><span class="datos-publicaciones">11-Noviembre-2023</span>
                </p>
                <p class="parrafo-post">
                    <strong>Dirección:</strong> Descubre nuestras instalaciones en La Piedad Michoacán, tu destino para
                    productos de calidad y ofertas irresistibles.
                </p>
                <p class="parrafo-post">
                    <strong>Teléfono:</strong> ¿Necesitas asistencia inmediata? Llámanos al 352-145-40-65 durante nuestras
                    horas de operación.
                </p>
                <p class="parrafo-post">
                    <strong>Correo Electrónico:</strong> Para preguntas, sugerencias o cualquier otra consulta, escríbenos a
                    walmartLeafar@gmail.com.
                </p>

            </article>

            <article class="post">
                <a href="" class="enlace-post">
                    <h2 class="titulo-post"> Horario de Atención
                    </h2>
                </a>
                <img src="https://vippromocodes.com/media/8072.jpg" class="img-post">
                <br>
                <p><strong>Por: </strong><span class="datos-publicaciones">Leafar Ruiz</span>
                    &nbsp; &nbsp;
                    <strong>Fecha: </strong><span class="datos-publicaciones">20-Noviembre-2023</span>
                </p>
                <p class="parrafo-post">
                    <strong>Lunes a Domingo:</strong> Desde las 09:00 a.m hasta las 10:00 p.m. Tus necesidades son nuestra
                    prioridad, y nos esforzamos por responder a todas las consultas en un plazo de 24 horas.
                </p>
            </article>

            <article class="post">
                <a href="" class="enlace-post">
                    <h2 class="titulo-post"> Redes Sociales
                    </h2>
                </a>
                <img src="https://vippromocodes.com/media/8072.jpg" class="img-post"><br>
                <p><strong>Por: </strong><span class="datos-publicaciones">Leafar Ruiz</span>
                    &nbsp; &nbsp;
                    <strong>Fecha: </strong><span class="datos-publicaciones">29-Noviembre-2023</span>
                </p>
                <p class="parrafo-post">
                    Conéctate con nosotros en nuestras redes sociales para descubrir las últimas ofertas, eventos y
                    novedades.
                </p>
                <a href="https://www.facebook.com/WalmartMexico/?locale=es_LA" style="text-align: center;"><img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" id="imgContacto"></a>
                <a href="https://www.instagram.com/walmartmexico/?hl=es" style="text-align: center;"> <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
                        id="imgContacto"></a>
                <a href="https://twitter.com/Walmart?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                    style="text-align: center;"><img src="https://cdn-icons-png.flaticon.com/512/124/124021.png"
                        id="imgContacto"></a>

            </article>
        </section>
    </section>
</template>
  
<script setup>

</script>
  <!--Se comienzan con los estilos tipo sass-->
<style scoped>
@import "./styles/style1.css";
</style>
  