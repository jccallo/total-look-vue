<template>
  <div class="container">
    <!-- cabecera -->
    <div class="row align-items-center mb-2">
      <div class="col-sm-6 col-12">
        <div class="h4">
          Roles
          <small class="text-muted" style="font-size: 13px; font-weight: 500"
            >Registrar</small
          >
        </div>
      </div>
      <div class="col-sm-6 col-12">
        <div class="form-row form-inline justify-content-end">
          <div class="col-auto my-1">
            <router-link :to="{ name: 'indexRol'}" class="nav-link">
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
               <form @submit.prevent="createRol">
                  <div class="form-group">
                     <label for="subtotal">Nombre:</label>
                     <input type="text" class="form-control" v-model="rol.nombre">
                  </div>
                  <div class="form-group">
                     <label for="envio">Descripcion</label>
                     <input type="text" class="form-control" v-model="rol.descripcion">
                  </div>
                  <div class="form-group">
                     <label for="descuento">Estado:</label>
                     <input type="text" class="form-control" v-model="rol.estado">
                  </div>
                  <button type="submit" class="btn btn-success btn-block">Guardar</button>
               </form>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   name: "CreateRol",
   data() {
      return {
         rol: {}
      }
   },
   methods: {
      createRol() {
         console.log(this.rol)
         fetch('http://localhost:8000/api/roles', {
            method: 'POST',
            headers: {
               "Content-type": 'application/json'
            },
            body: JSON.stringify(this.rol)
         })
         .then(res => res.json())
         .then(res => {
            if (res.res)
               this.$router.push({name:"indexRol"})
         })
      }
   }
};
</script>