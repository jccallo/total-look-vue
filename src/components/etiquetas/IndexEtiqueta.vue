<template>
  <div class="container">
    <!-- cabecera -->
    <index-header title="Etiquetas" :total="total" name="create-etiqueta"></index-header>

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
                      <select class="custom-select custom-select-sm mx-1" v-model="perPage">
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
                  <th scope="col">Estado</th>
                  <th scope="col" class="text-right">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="etiqueta in etiquetas" :key="etiqueta.id">
                  <th scope="row">{{ etiqueta.id }}</th>
                  <td>{{ etiqueta.nombre }}</td>
                  <td>{{ etiqueta.estado }}</td>
                  <td class="text-right">
                    <div style="width: 105px; display: inline-block">
                      <router-link
                        :to="{ name: 'show-etiqueta', params: { id: etiqueta.id } }"
                        class="btn btn-secondary btn-sm mr-1"
                        ><i class="bi bi-eye"></i
                      ></router-link>
                      <router-link
                        :to="{ name: 'edit-etiqueta', params: { id: etiqueta.id } }"
                        class="btn btn-primary btn-sm mr-1"
                      >
                        <i class="bi bi-pencil"></i>
                      </router-link>
                      <a
                        class="btn btn-danger btn-sm"
                        @click="deleteEtiqueta(etiqueta.id)"
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
                      <select class="custom-select custom-select-sm mx-1" v-model="perPage">
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
import IndexHeader from '@/components/layouts/IndexHeader.vue';
import LaravelPaginacion from "@/components/paginaciones/LaravelPaginacion";

export default {
  name: "IndexEtiqueta",
  components: {
    LaravelPaginacion,
    IndexHeader,
  },
  data() {
    return {
      etiquetas: [],
      pages: [],
      perPage: "10",
      total: 0,
    };
  },
  mounted: function () {
    this.indexEtiqueta(this.$route.query.page);
  },
  methods: {
    indexEtiqueta(page) {
      this.axios
        .get(`http://localhost:8000/api/etiquetas?perpage=${this.perPage}&page=${page}`)
        .then((response) => {
            const {
              data: {
                  data: etiquetas,
                  meta: { links: pages, total, last_page },
              },
            } = response;
            this.etiquetas = etiquetas;
            this.pages = pages;
            this.total = total;
            if (last_page < this.$route.query.page)
              this.$router.push({ name: "index-etiqueta"});
            console.log(response)
        })
        .catch((response) => console.log(response));
    },
    deleteEtiqueta(id) {
      if (confirm("¿Realmente desea eliminar el registro?")) {
        this.axios
          .delete(`http://localhost:8000/api/etiquetas/${id}`)
          .then((response) => {
            this.indexEtiqueta(this.$route.query.page);
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
        this.indexEtiqueta(page);
      },
    },
    perPage() {
      if (this.$route.query.page == undefined) {
        this.indexEtiqueta(1);
      } else {
        this.$router.push({ name: "index-etiqueta" });
      }
    },
  },
};
</script>