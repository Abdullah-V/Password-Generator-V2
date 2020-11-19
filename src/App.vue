<template>

  <div id="app">
    <AppBar />

    <div class="main">


      <div class="select-div-parent">
        <span class="desc">A-Z</span>
        <span class="cbox">
           <label class="label">
    <input type="checkbox" v-model="uppersModel" @click="cbClick(allKeys.upperKeys)">
    <span class="slider"></span>
  </label>
        </span>
      </div>

      <div class="select-div-parent">
        <span class="desc">a-z</span>
        <span class="cbox">
           <label class="label">
    <input type="checkbox" v-model="lowersModel" @click="cbClick(allKeys.lowerKeys)">
    <span class="slider"></span>
  </label>
        </span>
      </div>

      <div class="select-div-parent">
        <span class="desc">0-9</span>
        <span class="cbox">
           <label class="label">
    <input type="checkbox" v-model="numbersModel" @click="cbClick(allKeys.numbersKeys)">
    <span class="slider"></span>
  </label>
        </span>
      </div>

      <div class="select-div-parent">
        <span class="desc">~!@#$%^&*_+?-</span>
        <span class="cbox">
           <label class="label">
    <input type="checkbox" v-model="sym1Model" @click="cbClick(allKeys.sym1Keys)">
    <span class="slider"></span>
  </label>
        </span>
      </div>


      <div class="select-div-parent">
        <span class="desc">()[]{} &lt; &gt; </span>
        <span class="cbox">
           <label class="label">
    <input type="checkbox" v-model="bracketsModel" @click="cbClick(allKeys.bracketsKeys)">
    <span class="slider"></span>
  </label>
        </span>
      </div>


      <div class="select-div-parent">
        <span class="desc">`\/|';:,.</span>
        <span class="cbox">
           <label class="label">
    <input type="checkbox" v-model="sym2Model" @click="cbClick(allKeys.sym2Keys)">
    <span class="slider"></span>
  </label>
        </span>
      </div>



      <div class="select-length">
        <span class="text">Length</span>
        <span class="cbox"><input type="number" v-model="lengthModel"></span>
      </div>



      <button class="generate" @click="generate(passkeys)">Generate</button>

      <div class="custom-area">
        <input type="text" class="output-input" v-model="customPassKeys" placeholder="Enter a custom password keys">
        <button class="copy custom-btn" @click="generate(customPassKeys)">Generate from custom keys</button>
      </div>


      <span class="error" v-if="errors"><span v-for="(error,index) in errors" :key="index"> {{ error }} <br></span></span>

      <div class="output-area">
        <input type="text" class="output-input" v-model="password" placeholder="Here is your random password">
        <button class="copy" @click="copy()">Copy</button>
      </div>
    </div>

  </div>

</template>

<script>
// import cBox from './components/cBox.vue'
import AppBar from "@/components/AppBar";
// import SelectDiv from "@/components/SelectDiv";

import { appMixin } from './appMixin'

export default {
  name: 'App',
  components: {
    // cBox,
    AppBar,
    // SelectDiv
  },
  mixins:[appMixin]
}
</script>

<style>


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


















.main{
  width: 100vw;
  min-height: 100vh;
  height: auto;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
}

.select-length{
  width: 40%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.text{
  font-size: 22px;
}

.generate{
  width: 150px;
  height: 40px;
  background: #272c30;
}

button{
  transition: 300ms all;
  font-size: 18px;
  color: white;
  border-radius: 10px;
  outline: none;
}

input{
  outline: none;
}

.generate:hover{
  background: #1c1f22;
}

.cbox input{
  width: 60px;
}

.output-area{
  display: flex;
  align-items: center;
}

.output-input{
  width: 300px;
  height: 30px;
  border-radius: 8px;
  font-size: 18px;
  padding-left: 5px;
}


.copy{
  min-width: 110px;
  min-height: 40px;
  width: auto;
  height: auto;
  background: #0069D9;
}


.copy:hover{
  background: #0057ba;
}

.custom-btn{
  background: #dc3545;
}

.custom-btn:hover{
  background: #bc2e3c;
}

.error{
  font-size: 21px;
  color: red;
  text-align: center;
}

/* #0069D9 */

</style>
