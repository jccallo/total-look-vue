<template>
   <div class="container">
      <!-- cabecera -->
      <show-header
         title="Empleados"
         subtitle="Editar"
         name="index-empleado"
      ></show-header>

      <!-- cuerpo -->
      <div class="row">
         <div class="col">
            <div class="card mb-4">
               <!-- card body -->
               <div class="card-body table-responsive">
                  <form @submit.prevent="editEmpleado(id)" id="updateForm">
                     <div class="form-group">
                        <label>Id:</label>
                        <input
                           type="text"
                           class="form-control"
                           v-model="id"
                           disabled
                           name="id"
                        />
                     </div>
                     <div class="form-group">
                        <label>Nombre:</label>
                        <input
                           type="text"
                           class="form-control"
                           v-model="empleado.nombre"
                           name="nombre"
                        />
                     </div>
                     <div class="form-group">
                        <label>Apellido:</label>
                        <input
                           type="text"
                           class="form-control"
                           v-model="empleado.apellido"
                           name="apellido"
                        />
                     </div>
                     <div class="form-group">
                        <label>Dni:</label>
                        <input
                           type="text"
                           class="form-control"
                           v-model="empleado.dni"
                           name="dni"
                        />
                     </div>
                     <div class="form-group">
                        <label>Telefono:</label>
                        <input
                           type="text"
                           class="form-control"
                           v-model="empleado.telefono"
                           name="telefono"
                        />
                     </div>
                     <div class="form-group">
                        <label>Direccion:</label>
                        <input
                           type="text"
                           class="form-control"
                           v-model="empleado.direccion"
                           name="direccion"
                        />
                     </div>
                     <div class="form-group">
                        <label>Imagen:</label>
                        <input
                           type="file"
                           class="form-control-file"
                           name="imagen"
                           @change="onImagenChange"
                        />
                     </div>
                     <div class="form-group">
                        <label>Estado:</label>
                        <select
                           class="form-control"
                           v-model="empleado.estado"
                           name="estado"
                        >
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
                           name="email"
                        />
                     </div>
                     <div class="form-group">
                        <label>Password:</label>
                        <input
                           type="text"
                           class="form-control"
                           v-model="empleado.password"
                           name="password"
                        />
                     </div>
                     <div class="form-group">
                        <label>Rol:</label>
                        <select
                           class="form-control"
                           v-model="empleado.rol_id"
                           name="rol_id"
                        >
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
import ShowHeader from "@/components/layouts/ShowHeader.vue";

export default {
   name: "EditEmpleado",
   components: {
      ShowHeader,
   },
   data() {
      return {
         empleado: {
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
            _method: "PUT",
         },
         id: "",
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
               this.empleado.nombre = response.data.data.nombre;
               this.empleado.apellido = response.data.data.apellido;
               this.empleado.dni = response.data.data.dni;
               this.empleado.telefono = response.data.data.telefono;
               this.empleado.direccion = response.data.data.direccion;
               this.empleado.estado = response.data.data.estado;
               this.empleado.email = response.data.data.email;
               this.empleado.password = response.data.data.password;
               this.empleado.rol_id = response.data.data.rol_id;
               this.id = response.data.data.id;
               console.log(response);
            })
            .catch((response) => console.log(response));
      },
      editEmpleado(id) {
         let empleado = new FormData();
         for (let key in this.empleado) {
            if(key == "imagen" && !this.empleado[key]) continue;
            empleado.append(key, this.empleado[key]);
         }
         // solucion bug php: se usa axios.post y se añade _metho: "PUT" al objeto
         this.axios
            .post(`http://localhost:8000/api/empleados/${id}`, empleado) 
            .then((response) => {
               console.log(response);
            })
            .catch((error) => {
               console.log(error);
            });
      },
      onImagenChange(e) {
         this.empleado.imagen = e.target.files[0];
      },
   },
};
</script>