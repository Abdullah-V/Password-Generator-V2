<template>

<div class="app-bar-parent">
  <h1 class="app-bar-text">Password Generator</h1>
  <h1 class="app-bar-github"><a href="https://github.com/Abdullah-V">Github</a></h1>
</div>

</template>

<script>
export default {

}
</script>

<style scoped>

.app-bar-parent{
  width: 100vw;
  height: 10vh;
  background: white;
  color: #32475B;
  display: flex;
  justify-content: space-around;
  align-items: center;
  -webkit-box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.75)
}

.app-bar-github a{
  color: #007bff;
  text-decoration: none;
}

.app-bar-github a:hover{
  text-decoration: underline;
}

</style>