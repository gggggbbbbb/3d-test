<template>
  <div>
    <h2>TEST</h2>
    <div class="viewer">
      <model-stl src="assets\gear.stl"></model-stl>
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
