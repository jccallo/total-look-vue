<template>
  <div class="container">
    <!-- cabecera -->
    <div class="row align-items-center mb-2">
      <div class="col-sm-6 col-12">
        <div class="h4">
          Roles
          <small class="text-muted" style="font-size: 13px; font-weight: 500"
            >Actualizar</small
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
            <form @submit.prevent="editRol">
              <div class="form-group">
                <label>Id:</label>
                <input type="number" class="form-control" v-model="rol.id" readonly disabled />
              </div>
              <div class="form-group">
                <label>Nombre:</label>
                <input type="text" class="form-control" v-model="rol.nombre" required />
              </div>
              <div class="form-group">
                <label>Descripcion:</label>
                <input type="text" class="form-control" v-model="rol.descripcion" required />
              </div>
              <div class="form-group">
                <label>Estado:</label>
                <select class="custom-select" v-model="rol.estado" required>
                  <option value="activo">Activo</option>
                  <option value="eliminado">Eliminado</option>
                </select>
              </div>
              <button type="submit" class="btn btn-primary btn-block">
                Actualizar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import roles from "@/logic/roles";

export default {
  name: "EditRol",
  data() {
    return {
      rol: {
        id: "",
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
    editRol() {
      roles
        .edit(this.$route.params.id, this.rol)
        .then((response) => {
          console.log(response);
          this.$router.push({ name: "index-rol" });
        })
        .catch((response) => console.log(response));
    },
  },
};
</script>