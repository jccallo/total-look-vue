<template>
  <!-- cabecera -->
  <div class="row align-items-center mb-2">
    <div class="col-sm-6 col-12">
      <div class="h3">
        {{title}}
        <small class="text-muted" style="font-size: 15px; font-weight: 500"
          >{{ total }} resultados en total</small
        >
      </div>
    </div>
    <div class="col-sm-6 col-12">
      <div class="form-row form-inline justify-content-end">
        <div class="col-auto my-1">
          <router-link
            :to="{ name: name }"
            class="btn btn-primary"
          >
            <i class="bi bi-plus-circle"></i> Registrar
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexHeader',
  props: {
    title: String,
    total: Number,
    name: String,
  },
}
</script>