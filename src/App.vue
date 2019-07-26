<template>
    <div style="height: 550px" class="view" >
      <model-stl ref="model" src="/static/models/gear.stl"></model-stl>
    <button @click="takeSnap">Snapshot</button>
    </div>    
</template>

<script>
import ModelStl  from 'vue-3d-model/src/model-stl.vue'
export default {
  components: {
    ModelStl
  } ,
  data(){
    return{
    }
  },

  methods:{
      takeSnap(){
          let {renderer}  = this.$refs.model;
          let image =  renderer.domElement.toDataURL("image/png");
          window.open(image); 
    }
  }
}
</script>
