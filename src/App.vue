<template>
  <div>

    <div>
      <b-button v-b-modal.modal-1 class=mx-4>Open 3D (No size defined)</b-button>

      <b-modal id="modal-1" title="BootstrapVue" hide-footer="true" size="lg" >
         <model-stl src="static/models/gear.stl"></model-stl>
      </b-modal>

      <b-button v-b-modal.modal-2 class=mx-4>Open 3D (Size defined)</b-button>

      <b-modal id="modal-2" title="BootstrapVue" hide-footer="true" size="lg">
         <model-stl width=400 height=400 src="static/models/gear.stl"></model-stl>
      </b-modal>
    </div>
  </div>
</template>

<script>
import ModelStl  from 'vue-3d-model/src/model-stl.vue'

export default {
  components: {
    ModelStl
  } 
}
</script>
