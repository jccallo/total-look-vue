<template>
   <div class="container">
      <!-- cabecera -->
      <show-header
         title="Roles"
         subtitle="Crear"
         name="index-rol"
      ></show-header>

      <!-- cuerpo -->
      <div class="row">
         <div class="col">
            <div class="card mb-4">
               <!-- card body -->
               <div class="card-body table-responsive">
                  <form @submit.prevent="storeRol">
                     <div class="form-group">
                        <label>Nombre:</label>
                        <input
                           type="text"
                           class="form-control"
                           v-model="rol.nombre"
                           name="nombre"
                           required
                        />
                     </div>
                     <div class="form-group">
                        <label>Descripcion</label>
                        <input
                           type="text"
                           class="form-control"
                           v-model="rol.descripcion"
                           name="descripcion"
                           required
                        />
                     </div>
                     <div class="form-group">
                        <label>Estado:</label>
                        <select
                           class="custom-select"
                           v-model="rol.estado"
                           name="estado"
                           required
                        >
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
import ShowHeader from "@/components/layouts/ShowHeader.vue";

export default {
   name: "CreateRol",
   components: {
      ShowHeader,
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
      storeRol() {
         this.axios
            .post("http://localhost:8000/api/roles", this.rol)
            .then((data) => {
               this.$router.push({ name: "index-rol" });
               console.log(data);
            })
            .catch((response) => console.log(response));
      },
   },
};
</script>