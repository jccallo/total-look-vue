<template>
  <!-- cabecera -->
  <div class="row align-items-center mb-2">
    <div class="col-sm-6 col-12">
      <div class="h4">
        {{title}}
        <small class="text-muted" style="font-size: 15px; font-weight: 500"
          >{{subtitle}}</small
        >
      </div>
    </div>
    <div class="col-sm-6 col-12">
      <div class="form-row form-inline justify-content-end">
        <div class="col-auto my-1">
          <router-link :to="{ name: name }" class="nav-link">
            <i class="bi bi-arrow-left-circle-fill"></i> Regresar
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowHeader',
  props: {
    title: String,
    subtitle: String,
    name: String,
  },
}
</script>