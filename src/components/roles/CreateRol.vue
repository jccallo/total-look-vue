<template>
  <div class="container">
    <!-- cabecera -->
    <div class="row align-items-center mb-2">
      <div class="col-sm-6 col-12">
        <div class="h3">
          Roles
          <small class="text-muted" style="font-size: 14px; font-weight: 500"
            >Registrar</small
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
            <form @submit.prevent="createRol">
              <div class="form-group">
                <label for="subtotal">Nombre:</label>
                <input type="text" class="form-control" v-model="rol.nombre" />
              </div>
              <div class="form-group">
                <label for="envio">Descripcion</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="rol.descripcion"
                />
              </div>
              <div class="form-group">
                <label for="descuento">Estado:</label>
                <input type="text" class="form-control" v-model="rol.estado" />
              </div>
              <button type="submit" class="btn btn-success btn-block">
                Guardar
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
  name: "CreateRol",
  data() {
    return {
      rol: {},
    };
  },
  methods: {
    createRol() {
      roles
        .create(this.rol)
        .then((response) => {
          console.log(response);
          this.$router.push({ name: "index-rol" });
        })
        .catch((response) => console.log(response));
    },
  },
};
</script>