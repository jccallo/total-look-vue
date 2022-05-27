<template>
  <div class="container">
    <!-- cabecera -->
    <show-header title='Empleados' subtitle='Editar' name='index-empleado'></show-header>

    <!-- cuerpo -->
    <div class="row">
      <div class="col">
        <div class="card mb-4">
          <!-- card body -->
          <div class="card-body table-responsive">
            <form @submit.prevent="editEmpleado(empleado.id)" id="updateForm">
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
                <input name="nombre"
                  type="text"
                  class="form-control"
                  v-model="empleado.nombre"
                />
              </div>
              <div class="form-group">
                <label>Apellido:</label>
                <input name="apellido"
                  type="text"
                  class="form-control"
                  v-model="empleado.apellido"
                />
              </div>
              <div class="form-group">
                <label>Dni:</label>
                <input name="dni"
                  type="text"
                  class="form-control"
                  v-model="empleado.dni"
                />
              </div>
              <div class="form-group">
                <label>Telefono:</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="empleado.telefono"
                />
              </div>
              <div class="form-group">
                <label>Direccion:</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="empleado.direccion"
                />
              </div>
              <div class="form-group">
                <label>Imagen:</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="empleado.imagen"
                />
              </div>
              <div class="form-group">
                <label>Estado:</label>
                <select class="form-control" v-model="empleado.estado">
                  <option>activo</option>
                  <option>eliminado</option>
                </select>
              </div>
              <div class="form-group">
                <label>Email:</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="empleado.email"
                />
              </div>
              <div class="form-group">
                <label>Password:</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="empleado.password"
                />
              </div>
              <div class="form-group">
                <label>Rol:</label>
                <select class="form-control" v-model="empleado.rol_id">
                  <option
                    v-for="(rol, key) in roles"
                    :key="key"
                    :value="key"
                  >
                    {{ rol }}
                  </option>
                </select>
              </div>
              <!-- <div class="form-group">
                <label>Imagen:</label>
                <input type="file" class="form-control-file border" @change="selectFile">
                <input
                  type="text"
                  class="form-control"
                  v-model="empleado.imagen"
                />
              </div> -->
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
// import axios from 'axios';
import ShowHeader from '@/components/layouts/ShowHeader.vue';

export default {
  name: "EditEmpleado",
  components: {
    ShowHeader,
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
      $sun
        .ajax(
          `http://localhost:8000/api/empleados/crear`
        )
        .then((response) => {
          this.roles = response.data.roles;
          console.log(response);
        })
        .catch((response) => console.log(response));
    },
    showEmpleado(id) {
      $sun
        .ajax(`http://localhost:8000/api/empleados/${id}`)
        .then((response) => {
          this.empleado = response.data;
        })
        .catch((response) => console.log(response));
    },
    editEmpleado(id) {
      // console.log(this.empleado)
      // let data = new FormData();

      // data.append('nombre', this.empleado.nombre);
      // data.append('apellido', this.empleado.apellido);
      // for (let key in this.empleado){
      //   empleado.append(key, this.empleado[key]);
      // }
      // axios.put(`http://localhost:8000/api/empleados/${id}`, data)
      //   .then(response => {
      //     console.log(response);
      //   }).catch(error => {
      //     console.log(error);
      //   });

      // let frm = document.getElementById("updateForm");
      
      $sun
        .ajax(`http://localhost:8000/api/empleados/${id}`, "PUT", this.empleado)
        .then((response) => {
          this.$router.push({ name: "show-empleado", params: { id: id } });
          console.log(response);
        })
        .catch((response) => console.log(response));
    },
    // selectFile(event) {
    //   this.empleado.imagen = event.target.files[0];
    // }
  },
};
</script>