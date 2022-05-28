<template>
   <div class="container">
      <!-- cabecera -->
      <index-header
         title="Empleados"
         :total="total"
         name="create-empleado"
      ></index-header>

      <!-- cuerpo -->
      <div class="row">
         <div class="col">
            <div class="card mb-4">
               <!-- card body -->
               <div class="card-body table-responsive">
                  <div class="row align-items-center mb-3">
                     <div class="col-sm-6 col-12">
                        <div class="form-row form-inline justify-content-start">
                           <div class="col-auto my-1">
                              <label
                                 >Mostrar
                                 <select
                                    class="custom-select custom-select-sm mx-1"
                                    v-model="perPage"
                                 >
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option></select
                                 >registros</label
                              >
                           </div>
                        </div>
                     </div>
                     <div class="col-sm-6 col-12">
                        <div class="form-row form-inline justify-content-end">
                           <div class="col-auto my-1">
                              <laravel-paginacion
                                 :pages="pages"
                              ></laravel-paginacion>
                           </div>
                        </div>
                     </div>
                  </div>
                  <table class="table table-borderless table-striped table-sm">
                     <thead>
                        <tr>
                           <th scope="col">Id</th>
                           <th scope="col">Nombre</th>
                           <th scope="col">Apellido</th>
                           <th scope="col">Dni</th>
                           <th scope="col">Telefono</th>
                           <th scope="col">Email</th>
                           <th scope="col">Estado</th>
                           <th scope="col" class="text-right">Acciones</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr v-for="empleado in empleados" :key="empleado.id">
                           <th scope="row">{{ empleado.id }}</th>
                           <td>{{ empleado.nombre }}</td>
                           <td>{{ empleado.apellido }}</td>
                           <td>{{ empleado.dni }}</td>
                           <td>{{ empleado.telefono }}</td>
                           <td>{{ empleado.email }}</td>
                           <td>{{ empleado.estado }}</td>
                           <td><img :src="`http://localhost:8000/storage/images/${empleado.imagen}`" style="width: 25px"></td>
                           <td class="text-right">
                              <div style="width: 105px; display: inline-block">
                                 <router-link
                                    :to="{
                                       name: 'show-empleado',
                                       params: { id: empleado.id },
                                    }"
                                    class="btn btn-secondary btn-sm mr-1"
                                 >
                                    <i class="bi bi-eye"></i>
                                 </router-link>
                                 <router-link
                                    :to="{
                                       name: 'edit-empleado',
                                       params: { id: empleado.id },
                                    }"
                                    class="btn btn-primary btn-sm mr-1"
                                 >
                                    <i class="bi bi-pencil"></i>
                                 </router-link>
                                 <a
                                    class="btn btn-danger btn-sm"
                                    @click="deleteEmpleado(empleado.id)"
                                    ><i class="bi bi-trash"></i
                                 ></a>
                              </div>
                           </td>
                        </tr>
                     </tbody>
                  </table>
                  <div class="row align-items-center">
                     <div class="col-sm-6 col-12">
                        <div class="form-row form-inline justify-content-start">
                           <div class="col-auto my-1">
                              <label
                                 >Mostrar
                                 <select
                                    class="custom-select custom-select-sm mx-1"
                                    v-model="perPage"
                                 >
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option></select
                                 >registros</label
                              >
                           </div>
                        </div>
                     </div>
                     <div class="col-sm-6 col-12">
                        <div class="form-row form-inline justify-content-end">
                           <div class="col-auto my-1">
                              <laravel-paginacion
                                 :pages="pages"
                              ></laravel-paginacion>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
// import $sun from "@/logic/$sun";
import IndexHeader from "@/components/layouts/IndexHeader.vue";
import LaravelPaginacion from "@/components/paginaciones/LaravelPaginacion";

export default {
   name: "IndexEmpleado",
   components: {
      LaravelPaginacion,
      IndexHeader,
   },
   data() {
      return {
         empleados: [],
         pages: [],
         perPage: "10",
         total: 0,
      };
   },
   mounted: function () {
      this.indexEmpleado(this.$route.query.page);
   },
   methods: {
      indexEmpleado(page) {
         this.axios
            .get(`http://localhost:8000/api/empleados?perpage=${this.perPage}&page=${page}`)
            .then((response) => {
               const {
                  data: {
                     data: empleados,
                     meta: { links: pages, total, last_page },
                  },
               } = response;
               this.empleados = empleados;
               this.pages = pages;
               this.total = total;
               if (last_page < this.$route.query.page)
                  this.$router.push({ name: "index-empleado"});
               console.log(response)
            })
            .catch((response) => console.log(response));
      },
      deleteEmpleado(id) {
         if (confirm("¿Realmente desea eliminar el registro?")) {
            this.axios
               .delete(`http://localhost:8000/api/empleados/${id}`)
               .then((response) => {
                  this.indexEmpleado(this.$route.query.page);
                  console.log(response);
               })
               .catch((response) => console.log(response));
         }
      },
   },
   watch: {
      "$route.query.page": {
         inmediate: true,
         handler(page) {
            this.indexEmpleado(page);
         },
      },
      perPage() {
         if (this.$route.query.page == undefined) {
            this.indexEmpleado(1);
         } else {
            this.$router.push({ name: "index-empleado" });
         }
      },
   },
};
</script>
