import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

// importaciones
import EscritorioComponent from '@/components/EscritorioComponent.vue'
import PortadaComponent from '@/components/PortadaComponent.vue'

// roles
import IndexRol from '@/components/roles/IndexRol.vue'
import CreateRol from '@/components/roles/CreateRol.vue'
import ShowRol from '@/components/roles/ShowRol.vue'
import EditRol from '@/components/roles/EditRol.vue'

// empleados
import IndexEmpleado from '@/components/empleados/IndexEmpleado.vue'
import CreateEmpleado from '@/components/empleados/CreateEmpleado.vue'
import ShowEmpleado from '@/components/empleados/ShowEmpleado.vue'
import EditEmpleado from '@/components/empleados/EditEmpleado.vue'

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
          name: 'index-rol',
          component: IndexRol,
        },
        {
          path: 'roles/crear',
          name: 'create-rol',
          component: CreateRol,
        },
        {
          path: 'roles/:id/mostrar',
          name: 'show-rol',
          component: ShowRol,
        },
        {
          path: 'roles/:id/editar',
          name: 'edit-rol',
          component: EditRol,
        },

        // empleados
        {
          path: 'empleados',
          name: 'index-empleado',
          component: IndexEmpleado,
        },
        {
          path: 'empleados/crear',
          name: 'create-empleado',
          component: CreateEmpleado,
        },
        {
          path: 'empleados/:id/mostrar',
          name: 'show-empleado',
          component: ShowEmpleado,
        },
        {
          path: 'empleados/:id/editar',
          name: 'edit-empleado',
          component: EditEmpleado,
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
