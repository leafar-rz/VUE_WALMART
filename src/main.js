// Se importa el archivo CSS principal
import './assets/main.css';

// Se importan las funciones necesarias de Vue
import { createApp } from 'vue';

// Se importan los componentes necesarios
import App from './App.vue';

// Se importa el enrutador
import router from './router';

// Se crea la instancia de la aplicación Vue
const app = createApp(App);

// Se configura el middleware de navegación
router.beforeEach((to, from, next) => {
  // Se verifica si la ruta requiere autenticación
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  // Si la ruta requiere autenticación y el usuario no está autenticado, se redirige a la página de inicio de sesión
  if (requiresAuth && !localStorage.getItem('token')) {
    next('/');
  } else {
    next();
  }
});

// Se utiliza el enrutador en la aplicación
app.use(router);

// Se monta la aplicación en el elemento con el ID 'app'
app.mount('#app');
