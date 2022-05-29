<template>
  <div class="container">
    <!-- cabecera -->
    <show-header title='Empleados' subtitle='Mostrar' name='index-empleado'></show-header>

    <!-- cuerpo -->
    <div class="row">
      <div class="col">
        <div class="card mb-4">
          <!-- card body -->
          <div class="card-body table-responsive">
            <div class="form-group">
               <label>Id:</label>
               <input
               type="text"
               class="form-control"
               disabled
               v-model="empleado.id"
               />
            </div>
            <div class="form-group">
               <label>Nombre:</label>
               <input
               type="text"
               class="form-control"
               disabled
               v-model="empleado.nombre"
               />
            </div>
            <div class="form-group">
               <label>Apellido:</label>
               <input
               type="text"
               class="form-control"
               disabled
               v-model="empleado.apellido"
               />
            </div>
            <div class="form-group">
               <label>Dni:</label>
               <input
               type="text"
               class="form-control"
               disabled
               v-model="empleado.dni"
               />
            </div>
            <div class="form-group">
               <label>Telefono:</label>
               <input
               type="text"
               class="form-control"
               disabled
               v-model="empleado.telefono"
               />
            </div>
            <div class="form-group">
               <label>Direccion:</label>
               <input
               type="text"
               class="form-control"
               disabled
               v-model="empleado.direccion"
               />
            </div>
            <div class="form-group">
               <label>Imagen:</label>
               <input
               type="text"
               class="form-control"
               disabled
               v-model="empleado.imagen"
               />
            </div>
            <div class="form-group">
               <label>Estado:</label>
               <select class="form-control" disabled v-model="empleado.estado">
               <option>activo</option>
               <option>eliminado</option>
               </select>
            </div>
            <div class="form-group">
               <label>Email:</label>
               <input
               type="text"
               class="form-control"
               disabled
               v-model="empleado.email"
               />
            </div>
            <div class="form-group">
               <label>Password:</label>
               <input
               type="text"
               class="form-control"
               disabled
               v-model="empleado.password"
               />
            </div>
            <div class="form-group">
               <label>Rol:</label>
               <select class="form-control" disabled v-model="empleado.rol_id">
               <option
                  v-for="(rol, index) in roles"
                  :key="index"
                  :value="index"
               >
                  {{ rol }}
               </option>
               </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShowHeader from '@/components/layouts/ShowHeader.vue';

export default {
  name: "ShowEmpleado",
  components: {
    ShowHeader
  },
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
        rol_id: "",
      },
      roles: {},
    };
  },
  mounted: function () {
    this.createEmpleado();
    this.showEmpleado(this.$route.params.id);
  },
  methods: {
    createEmpleado() {
      this.axios
        .get("http://localhost:8000/api/empleados/crear")
        .then((response) => {
            this.roles = response.data.data.roles;
            console.log(response);
        })
        .catch((response) => console.log(response));
    },
    showEmpleado(id) {
      this.axios
        .get(`http://localhost:8000/api/empleados/${id}`)
        .then((response) => {
          this.empleado = response.data.data
          console.log(response);
        })
        .catch((response) => console.log(response));
    },
  },
};
</script>