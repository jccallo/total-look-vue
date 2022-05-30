<template>
   <!-- cabecera -->
   <div>
      <nav-bar></nav-bar>
      <portada-component></portada-component>
   </div>
</template>

<script>
import NavBar from './layouts/NavBar.vue'
import PortadaComponent from './PortadaComponent.vue'
export default {
   name: "EscritorioComponent",
   components: {
      NavBar,
      PortadaComponent,
   }
}
</script>