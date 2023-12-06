<template>
    <div v-if="showAd" class="ad-containerPublicidad">
      <div class="divBtnPublicidad">
        <p class="subscription-textPublicidad">Suscríbete para recibir los beneficios</p>
        <button @click="hideAd()" class="close-buttonPublicidad">X</button>
      </div>
      <div>
        <img src="https://caracoltv.brightspotcdn.com/dims4/default/3fdaa5c/2147483647/strip/false/crop/1200x628+0+0/resize/1200x628!/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.amazonaws.com%2F6a%2Fce%2Fc5c68bc54d0094dd480ea972bdf1%2Fdisney.jpg" alt="Advertisement" class="ad-imagePublicidad" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const showAd = ref(true);
  
  function hideAd() {
    showAd.value = false;
  }
  </script>
  
  <style scoped>
  .ad-containerPublicidad {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 600px;
    width: 30%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(248, 248, 248);
    padding: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
  }
  
  .ad-imagePublicidad {
    width: 100%;
    height: auto;
  }
  
  .close-buttonPublicidad {
    padding: 5px 10px;
    background-color: #007BFF;
    color: #fff;
    border: none;
    cursor: pointer;
    border-radius: 25px;
  }
  
  .divBtnPublicidad {
    display: flex;
    justify-content: space-between; /* Alinea los elementos en los extremos */
    width: 100%;
    margin-bottom: 5px;
  }
  
  .subscription-textPublicidad {
    display: inline; /* o 'inline-block' según tus necesidades */
    margin: 0; /* Elimina el margen predeterminado del párrafo */
    font-family: Arial, Helvetica, sans-serif;
    font-size: 24px;
  }
  </style>
  