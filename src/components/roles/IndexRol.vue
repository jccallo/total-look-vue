<template>
  <div class="container">
    <!-- cabecera -->
    <div class="row align-items-center mb-2">
      <div class="col-sm-6 col-12">
        <div class="h3">
          Roles
          <small class="text-muted" style="font-size: 14px; font-weight: 500"
            >Mostrando {{ roles.length }} resultados en Total</small
          >
        </div>
      </div>
      <div class="col-sm-6 col-12">
        <div class="form-row form-inline justify-content-end">
          <div class="col-auto my-1">
            <router-link :to="{ name: 'create-rol' }" class="btn btn-primary">
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
                      <select class="custom-select custom-select-sm mx-1">
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
                    <ul
                      class="pagination pagination-sm mb-0 justify-content-end"
                    >
                      <li class="page-item disabled">
                        <a class="page-link" href="#">&laquo;</a>
                      </li>
                      <li class="page-item active">
                        <a class="page-link" href="index.html">1</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="index-2.html">2</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="index-3.html">&raquo;</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <table class="table table-borderless table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Descripcion</th>
                  <th scope="col">Estado</th>
                  <th scope="col" class="text-right">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="rol in roles" :key="rol.id">
                  <th scope="row">{{ rol.id }}</th>
                  <td>{{ rol.nombre }}</td>
                  <td>{{ rol.descripcion }}</td>
                  <td>{{ rol.estado }}</td>
                  <td class="text-right">
                    <div style="width: 105px; display: inline-block">
                      <!-- <a
                        href="detalles.html"
                        class="btn btn-secondary btn-sm mr-1"
                        ><i class="bi bi-eye"></i
                      ></a> -->
                      <router-link
                        :to="{ name: 'edit-rol', params: { id: rol.id } }"
                        class="btn btn-primary btn-sm mr-1"
                      >
                        <i class="bi bi-pencil"></i>
                      </router-link>
                      <a
                        class="btn btn-danger btn-sm"
                        data-toggle="modal"
                        data-target="#myModal"
                        @click="deleteRol(rol.id)"
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
                      <select class="custom-select custom-select-sm mx-1">
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
                    <ul
                      class="pagination pagination-sm mb-0 justify-content-end"
                    >
                      <li class="page-item disabled">
                        <a class="page-link" href="#">&laquo;</a>
                      </li>
                      <li class="page-item active">
                        <a class="page-link" href="index.html">1</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="index-2.html">2</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="index-3.html">&raquo;</a>
                      </li>
                    </ul>
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
import roles from "@/logic/roles";

export default {
  name: "IndexRol",
  data() {
    return {
      roles: [],
    };
  },
  mounted: function () {
    this.indexRol();
  },
  methods: {
    indexRol() {
      roles
        .index()
        .then((response) => (this.roles = response.roles))
        .catch((response) => console.log(response));
    },
    deleteRol(id) {
      if (confirm("¿Realmente desea eliminar el registro?")) {
        roles
          .delete(id)
          .then((response) => {
            console.log(response);
            this.indexRol();
          })
          .catch((response) => console.log(response));
      }
    },
  },
};
</script>