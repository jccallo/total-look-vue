<template>
  <!-- modal -->
  <div class="modal fade" id="detalles">
    <div class="modal-dialog">
      <div class="modal-content">
        <!-- Modal Header -->
        <div class="modal-header">
          <h5 class="modal-title">Detalles</h5>
          <button type="button" class="close" data-dismiss="modal">
            &times;
          </button>
        </div>
        <!-- Modal body -->
        <div class="modal-body">
          <div>{{rol.nombre}}</div>
        </div>
        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Cerrar
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- fin modal -->
</template>

<script>
export default {
  props: {
    rol: Object,
  },
  name: "RolModal",
  data() {
    return {};
  },
  methods: {
    senal(a) {
      console.log(a)
    }
  }
};
</script>

<style>
</style>