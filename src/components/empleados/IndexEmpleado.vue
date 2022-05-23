<template>
  <div class="container">
    <!-- cabecera -->
    <div class="row align-items-center mb-2">
      <div class="col-sm-6 col-12">
        <div class="h3">
          Empleados
          <small class="text-muted" style="font-size: 14px; font-weight: 500"
            >Mostrando {{ empleados.length }} resultados en Total</small
          >
        </div>
      </div>
      <div class="col-sm-6 col-12">
        <div class="form-row form-inline justify-content-end">
          <div class="col-auto my-1">
            <router-link
              :to="{ name: 'create-empleado' }"
              class="btn btn-primary"
            >
              <i class="bi bi-plus-circle"></i> Registrar
            </router-link>
          </div>
        </div>
      </div>
    </div>

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
                      >Mostrando
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
                    <button class="btn btn-info btn-sm" href="#">
                      <i class="bi bi-filter-circle"></i> Filtrar
                    </button>
                  </div>
                  <div class="col-auto my-1">
                    <laravel-paginacion :pages="pages"></laravel-paginacion>
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
                  <th scope="col">Estado</th>
                  <th scope="col">Rol</th>
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
                  <td>{{ empleado.estado }}</td>
                  <td>{{ empleado.rol }}</td>
                  <td class="text-right">
                    <div style="width: 105px; display: inline-block">
                      <!-- <a
                        href="detalles.html"
                        class="btn btn-secondary btn-sm mr-1"
                        ><i class="bi bi-eye"></i
                      ></a> -->
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
                        data-toggle="modal"
                        data-target="#myModal"
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
                      >Mostrando
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
                    <button class="btn btn-info btn-sm" href="#">
                      <i class="bi bi-filter-circle"></i> Filtrar
                    </button>
                  </div>
                  <div class="col-auto my-1">
                    <laravel-paginacion :pages="pages"></laravel-paginacion>
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
import $sun from "@/logic/$sun";
import LaravelPaginacion from "@/components/paginaciones/LaravelPaginacion";

export default {
  name: "IndexEmpleado",
  components: {
    LaravelPaginacion,
  },
  data() {
    return {
      empleados: [],
      pages: [],
      perPage: "5",
    };
  },
  mounted: function () {
    this.indexEmpleado(this.$route.query.page);
  },
  methods: {
    indexEmpleado(page) {
      console.log(
        `http://localhost:8000/api/empleados/?perpage=${this.perPage}&page=${page}`
      );
      $sun
        .ajax(
          `http://localhost:8000/api/empleados/?perpage=${this.perPage}&page=${page}`
        )
        .then((response) => {
          this.empleados = response.data;
          this.pages = response.meta.links;
          console.log(response);
        })
        .catch((response) => console.log(response));
    },
    deleteEmpleado(id) {
      if (confirm("¿Realmente desea eliminar el registro?")) {
        $sun
          .ajax(`http://localhost:8000/api/empleados/${id}`, "DELETE")
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
      handler() {
        this.indexEmpleado(this.$route.query.page);
      },
    },
    perPage() {
      if (this.$route.query.page == undefined) {
        console.log(true)
        this.indexEmpleado(1);
      } else {
        this.$router.push({ name: "index-empleado" });
      }
    },
  },
};
</script>


