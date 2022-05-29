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
            <form @submit.prevent="editRol(id)">
              <div class="form-group">
                <label>Id:</label>
                <input type="text" class="form-control" v-model="id" disabled />
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
import ShowHeader from '@/components/layouts/ShowHeader.vue';

export default {
  name: "EditRol",
  components: {
    ShowHeader
  },
  data() {
    return {
      rol: {
        nombre: "",
        descripcion: "",
        estado: "",
      },
      id: "",
    };
  },
  mounted: function () {
    this.showRol(this.$route.params.id);
  },
  methods: {
    showRol(id) {
      this.axios
        .get(`http://localhost:8000/api/roles/${id}`)
        .then((response) => {
          this.rol.nombre = response.data.data.nombre;
          this.rol.descripcion = response.data.data.descripcion;
          this.rol.estado = response.data.data.estado;
          this.id = response.data.data.id;
          console.log(response);
        })
        .catch((response) => console.log(response));
    },
    editRol(id) {
      this.axios.put(`http://localhost:8000/api/roles/${id}`, this.rol)
      .then((response) => {
        this.$router.push({ name: "show-rol", params: { id: id } });
        console.log(response);
      })
      .catch((response) => console.log(response));
    },
  },
};
</script>