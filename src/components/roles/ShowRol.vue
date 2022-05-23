<template>
  <div class="container">
    <!-- cabecera -->
    <div class="row align-items-center mb-2">
      <div class="col-sm-6 col-12">
        <div class="h4">
          Roles
          <small class="text-muted" style="font-size: 13px; font-weight: 500"
            >Mostrar</small
          >
        </div>
      </div>
      <div class="col-sm-6 col-12">
        <div class="form-row form-inline justify-content-end">
          <div class="col-auto my-1">
            <router-link :to="{ name: 'index-rol' }" class="nav-link">
              <i class="bi bi-arrow-left-circle-fill"></i> Cancelar
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
            <div class="form-group">
              <label>Id:</label>
              <input type="number" class="form-control" v-model="rol.id" readonly />
            </div>
            <div class="form-group">
              <label>Nombre:</label>
              <input type="text" class="form-control" v-model="rol.nombre" readonly />
            </div>
            <div class="form-group">
              <label>Descripcion:</label>
              <input type="text" class="form-control" v-model="rol.descripcion" readonly />
            </div>
            <div class="form-group">
              <label>Estado:</label>
              <input type="text" class="form-control" v-model="rol.estado" readonly />
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
  name: "ShowRol",
  data() {
    return {
      rol: {
        nombre: "",
        descripcion: "",
        estado: "",
      },
    };
  },
  mounted: function () {
    this.showRol();
  },
  methods: {
    showRol() {
      roles
        .show(this.$route.params.id)
        .then((response) => (this.rol = response.rol))
        .catch((response) => console.log(response));
    },
  },
};
</script>