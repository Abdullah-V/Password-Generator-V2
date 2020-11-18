<template>
  <div class="select-div-parent">
    <span class="desc">{{ desc }}</span>
    <span class="cbox"><cBox :cbModelType="modelType"></cBox></span>
    {{ modelType }}
  </div>
</template>

<script>
import cBox from "@/components/cBox";

import { appMixin } from '../appMixin'


export default {
  components:{
    cBox,
  },
  props:["desc","modelType"],
  mixins:[appMixin],
  mounted(){
    console.log(this.modelType)
  }
}
</script>

<style scoped>

.select-div-parent{
  width: 40%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.desc{
  font-size: 22px;
}

</style>