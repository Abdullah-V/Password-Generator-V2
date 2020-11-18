<template>

  <label class="label">
    <input type="checkbox" id="cb">
    <span class="slider"></span>
  </label>

</template>

<script>
import { appMixin } from '../appMixin'

export default {
  mixins:[appMixin],
  props:["cbModelType"],
  mounted() {
    console.log(`cb:${this.cbModelType}`)
    var cb = document.querySelector("#cb")
    cb.setAttribute("v-model",this.cbModelType)
  }
}
</script>

<style scoped>

.label {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.label input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #39b85c;
}

input:focus + .slider {
  box-shadow: 0 0 1px #39b85c;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider{
  border-radius: 34px;
}

.slider:before {
  border-radius: 50%;
}

</style>
