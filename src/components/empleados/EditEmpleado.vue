<template>
  <div class="container">
    <!-- cabecera -->
    <div class="row align-items-center mb-2">
      <div class="col-sm-6 col-12">
        <div class="h4">
          Empleados
          <small class="text-muted" style="font-size: 13px; font-weight: 500"
            >Actualizar</small
          >
        </div>
      </div>
      <div class="col-sm-6 col-12">
        <div class="form-row form-inline justify-content-end">
          <div class="col-auto my-1">
            <router-link :to="{ name: 'index-empleado' }" class="nav-link">
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
            <form @submit.prevent="editEmpleado(empleado.id)">
              <div class="form-group">
                <label>Nombre:</label>
                <input
                  type="text"
                  class="form-control"
                  disabled
                  readonly
                  v-model="empleado.id"
                />
              </div>
              <div class="form-group">
                <label>Nombre:</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="empleado.nombre"
                />
              </div>
              <div class="form-group">
                <label>Apellido</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="empleado.apellido"
                />
              </div>
              <div class="form-group">
                <label>Dni</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="empleado.dni"
                />
              </div>
              <div class="form-group">
                <label>Telefono</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="empleado.telefono"
                />
              </div>
              <div class="form-group">
                <label>Direccion</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="empleado.direccion"
                />
              </div>
              <div class="form-group">
                <label>Imagen</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="empleado.imagen"
                />
              </div>
              <div class="form-group">
                <label>Estado:</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="empleado.estado"
                />
              </div>
              <div class="form-group">
                <label>Email</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="empleado.email"
                />
              </div>
              <div class="form-group">
                <label>Password</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="empleado.password"
                />
              </div>
              <div class="form-group">
                <label
                  >Rol:
                  <select class="custom-select mx-1" v-model="empleado.rol.id">
                    <option :value="empleado.rol.id">{{empleado.rol.nombre}}</option></select
                  >registros
                </label>
              </div>
              <button type="submit" class="btn btn-success btn-block">
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
// import empleados from "@/logic/empleados";
import $sun from "@/logic/$sun";

export default {
  name: "EditEmpleado",
  data() {
    return {
      empleado: {
        id: "",
        nombre: "",
        apellido: "",
        dni: "",
        telefono: "",
        direccion: "",
        imagen: "",
        estado: "",
        email: "",
        password: "",
        rol: {
          id: "",
          nombre: "",
        },
      },
    };
  },
  mounted: function () {
    this.showEmpleado(this.$route.params.id);
  },
  methods: {
    showEmpleado(id) {
      console.log(Object.assign(this.empleado, { rol_id: this.empleado.rol.id }))
      $sun
        .ajax(`http://localhost:8000/api/empleados/${id}`)
        .then((response) => (this.empleado = response.data))
        .catch((response) => console.log(response));
    },
    editEmpleado(id) {
      console.log(id);
      console.log(this.empleado);
      $sun
        .ajax(
          `http://localhost:8000/api/empleados/${id}`,
          "PUT",
          Object.assign(this.empleado, { rol_id: this.empleado.rol.id })
        )
        .then((response) => {
          this.indexEmpleado(this.$route.query.page);
          // this.$router.push({ name: "index-empleado" });
          console.log(response);
        })
        .catch((response) => console.log(response));
    },
  },
};
</script>