<script setup>
// Enlaces a las redes sociales
const facebookLink = "https://www.facebook.com/WalmartMexico/?locale=es_LA";
const instagramLink = "https://www.instagram.com/walmartmexico/?hl=es";
const twitterLink = "https://twitter.com/Walmart?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor";
</script>

<template>
    <br>
    <!-- Encabezado de la página de contacto -->
    <header class="header">
        <div class="encabezado">
            <div id="logo">
                Contacto
            </div>
        </div>
    </header>

    <!-- Sección principal de la página de contacto -->
    <section id="principal">
        <!-- Sección de publicaciones que contendrá los contenedores para cada publicación -->
        <section id="publicaciones">
            <!-- Publicación 1: Bienvenida a Walmart Leafar -->
            <article class="post">
                <a href="" class="enlace-post">
                    <h2 class="titulo-post">¡Bienvenido a Walmart Leafar!</h2>
                </a>
                <img src="https://vippromocodes.com/media/8072.jpg" class="img-post">
                <br>
                <p><strong>Por: </strong><span class="datos-publicaciones">Leafar Ruiz</span>
                    &nbsp; &nbsp;
                    <strong>Fecha: </strong><span class="datos-publicaciones">01-Noviembre-2023</span>
                </p>
                <p class="parrafo-post">
                    En Walmart Leafar, nos enorgullece ofrecer productos de calidad, una amplia variedad y un servicio
                    excepcional. Estamos aquí para atenderte, responder tus consultas y hacer tu experiencia de compra
                    inigualable.
                </p>
            </article>

            <!-- Publicación 2: Información de Contacto -->
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

            <!-- Publicación 3: Horario de Atención -->
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

            <!-- Publicación 4: Redes Sociales -->
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
                <!-- Enlaces a las redes sociales -->
                <a :href="facebookLink" style="text-align: center;"><img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" id="imgContacto"></a>
                <a :href="instagramLink" style="text-align: center;"> <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
                        id="imgContacto"></a>
                <a :href="twitterLink" style="text-align: center;"><img
                        src="https://cdn-icons-png.flaticon.com/512/124/124021.png"
                        id="imgContacto"></a>
            </article>
        </section>
    </section>
</template>

<script setup>
</script>

<!-- Estilos tipo Sass -->
<style scoped>
@import "./styles/style1.css";
</style>
