<template>
  <div class="container">
    <!-- cabecera -->
    <show-header title='Roles' subtitle='Crear' name='index-rol'></show-header>

    <!-- cuerpo -->
    <div class="row">
      <div class="col">
        <div class="card mb-4">
          <!-- card body -->
          <div class="card-body table-responsive">
            <form @submit.prevent="createRol">
              <div class="form-group">
                <label>Nombre:</label>
                <input type="text" class="form-control" v-model="rol.nombre" required />
              </div>
              <div class="form-group">
                <label>Descripcion</label>
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
import $sun from "@/logic/$sun";
import ShowHeader from '@/components/layouts/ShowHeader.vue';

export default {
  name: "CreateRol",
  components: {
    ShowHeader
  },
  data() {
    return {
      rol: {
        nombre: "",
        descripcion: "",
        estado: "activo",
      },
    };
  },
  methods: {
    createRol() {
      $sun
        .ajax(`http://localhost:8000/api/roles`, "POST", this.rol)
        .then((response) => {
          this.$router.push({ name: "index-rol" });
          console.log(response);
        })
        .catch((response) => console.log(response));
    },
  },
};
</script>