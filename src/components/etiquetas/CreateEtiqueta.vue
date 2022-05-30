<template>
   <div class="container">
      <!-- cabecera -->
      <show-header
         title="Etiquetas"
         subtitle="Crear"
         name="index-etiqueta"
      ></show-header>

      <!-- cuerpo -->
      <div class="row">
         <div class="col">
            <div class="card mb-4">
               <!-- card body -->
               <div class="card-body table-responsive">
                  <form @submit.prevent="storeEtiqueta">
                     <div class="form-group">
                        <label>Nombre:</label>
                        <input
                           type="text"
                           class="form-control"
                           v-model="etiqueta.nombre"
                           name="nombre"
                           required
                        />
                     </div>
                     <div class="form-group">
                        <label>Estado:</label>
                        <select
                           class="custom-select"
                           v-model="etiqueta.estado"
                           name="estado"
                           required
                        >
                           <option value="activo">activo</option>
                           <option value="eliminado">eliminado</option>
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
   name: "CreateEtiqueta",
   components: {
      ShowHeader,
   },
   data() {
      return {
         etiqueta: {
            nombre: "",
            estado: "activo",
         },
      };
   },
   methods: {
      storeEtiqueta() {
         this.axios
            .post("http://localhost:8000/api/etiquetas", this.etiqueta)
            .then((data) => {
               this.$router.push({ name: "index-etiqueta" });
               console.log(data);
            })
            .catch((response) => console.log(response));
      },
   },
};
</script>