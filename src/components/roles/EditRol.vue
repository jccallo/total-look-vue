<template>
  <div class="container">
    <!-- cabecera -->
    <show-header title='Roles' subtitle='Editar' name='index-rol'></show-header>

    <!-- cuerpo -->
    <div class="row">
      <div class="col">
        <div class="card mb-4">
          <!-- card body -->
          <div class="card-body table-responsive">
            <form @submit.prevent="editRol(rol.id)">
              <div class="form-group">
                <label>Id:</label>
                <input type="text" class="form-control" v-model="rol.id" disabled />
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
                  <option>activo</option>
                  <option>eliminado</option>
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
import $sun from "@/logic/$sun";
import ShowHeader from '@/components/layouts/ShowHeader.vue';

export default {
  name: "EditRol",
  components: {
    ShowHeader
  },
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
    this.showRol(this.$route.params.id);
  },
  methods: {
    showRol(id) {
      $sun
        .ajax(`http://localhost:8000/api/roles/${id}`)
        .then((response) => {
          this.rol = response.data;
          console.log(response);
        })
        .catch((response) => console.log(response));
    },
    editRol(id) {
      $sun
        .ajax(`http://localhost:8000/api/roles/${id}`, "PUT", this.rol)
        .then((response) => {
          this.$router.push({ name: "show-rol", params: { id: id } });
          console.log(response);
        })
        .catch((response) => console.log(response));
    },
  },
};
</script>