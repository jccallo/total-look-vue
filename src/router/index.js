import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

// importaciones
import EscritorioComponent from '@/components/EscritorioComponent.vue'
import PortadaComponent from '@/components/PortadaComponent.vue'

import IndexRol from '@/components/roles/IndexRol.vue'
import CreateRol from '@/components/roles/CreateRol.vue'
import EditRol from '@/components/roles/EditRol.vue'
import IndexEmpleado from '@/components/empleados/IndexEmpleado.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  // rutas de escritorio
  {
    path: '/escritorio',
    component: EscritorioComponent,
      children: [
        {
          path: '',
          name: 'portada',
          component: PortadaComponent,
        },
        // roles
        {
          path: 'roles',
          name: 'indexRol',
          component: IndexRol,
        },
        {
          path: 'roles/crear',
          name: 'createRol',
          component: CreateRol,
        },
        {
          path: 'roles/:id',
          name: 'editRol',
          component: EditRol,
        },
        // empleados
        {
          path: 'empleados',
          name: 'empleados',
          component: IndexEmpleado,
        }
      ]
  },

  // rutas web
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
