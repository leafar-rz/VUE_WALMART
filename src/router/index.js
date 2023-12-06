import { createRouter, createWebHistory } from 'vue-router'
import home from '../components/home.vue'
import articles from '../components/articles.vue'
import cart from '../components/cart.vue'
import register from '../components/register.vue'
import login from '../components/login.vue'
import blogPublicaciones from '../components/blogPublicaciones.vue' 
import contacto from '../components/contacto.vue'
import profile from '../components/profile.vue'
import contenido from '../components/contenido.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home2',
      name: 'home',
      component: home,
      //meta: { requiresAuth: true } // Esta ruta requiere autenticación
    },
    {
      path: '/articles',
      name: 'articles',
      component: articles,
      meta: { requiresAuth: true } // Esta ruta requiere autenticación
    },
    ,
    {
      path: '/cart',
      name: 'cart',
      component: cart,
      meta: { requiresAuth: true } // Esta ruta requiere autenticación
    }
    ,
    {
      path: '/register',
      name: 'register',
      component: register
    }
    ,
    {
      path: '/',
      name: 'login',
      component: login
    }
    ,
    {
      path: '/blogPublicaciones',
      name: 'blogPublicaciones',
      component: blogPublicaciones,
      meta: { requiresAuth: true } // Esta ruta requiere autenticación 
    }
    ,
    {
      path: '/contacto',
      name: 'contacto',
      component: contacto,
      meta: { requiresAuth: true } // Esta ruta requiere autenticación   
    }
    ,
    {
      path: '/profile',
      name: 'profile',
      component: profile,
      meta: { requiresAuth: true } // Esta ruta requiere autenticación  
    }
    ,
    {
      path: '/home',
      name: 'contenido',
      component: contenido,
      meta: { requiresAuth: true } // Esta ruta requiere autenticación  
    }

  ]
})

export default router
