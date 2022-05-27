<template>
  <div class="container">
    <!-- cabecera -->
    <show-header title='Roles' subtitle='Mostrar' name='index-rol'></show-header>

    <!-- cuerpo -->
    <div class="row">
      <div class="col">
        <div class="card mb-4">
          <!-- card body -->
          <div class="card-body table-responsive">
            <div class="form-group">
              <label>Id:</label>
              <input type="number" class="form-control" v-model="rol.id" disabled />
            </div>
            <div class="form-group">
              <label>Nombre:</label>
              <input type="text" class="form-control" v-model="rol.nombre" disabled />
            </div>
            <div class="form-group">
              <label>Descripcion:</label>
              <input type="text" class="form-control" v-model="rol.descripcion" disabled />
            </div>
            <div class="form-group">
              <label>Estado:</label>
              <input type="text" class="form-control" v-model="rol.estado" disabled />
            </div>
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
  name: "ShowRol",
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
        })
        .catch((response) => console.log(response));
    },
  },
};
</script>