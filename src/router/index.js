import { createRouter, createWebHistory } from 'vue-router'
import store from '../store' 

import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import LandingPage from '../views/LandingPage.vue'
import Adoption from '../views/Adoption.vue'
import Profile from '../views/Profile.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import Dogs from '../views/dogs.vue'

const routes = [
  { path: '/', name: 'LandingPage', component: LandingPage },
  { path: '/login', name: 'Login', component: Login },
  { path: '/cadastro', name: 'Cadastro', component: Signup },
  { path: '/esqueci-senha', name: 'ForgotPassword', component: ForgotPassword },
  { path: '/perfil', name: 'Profile', component: Profile },
  { path: '/adocao', name: 'Adocao', component: Adoption, meta: { requiresAuth: true } },
  { path: '/cachorros', name: 'Dogs', component: Dogs, meta: { requiresAuth: true } },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {
  const token = store.state.token 

  if (to.meta.requiresAuth && !token) {
    return '/login' 
  }
})

export default router
