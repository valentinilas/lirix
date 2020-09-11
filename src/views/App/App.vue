<template>
  <div id="app">
   
    <div class="section py-0">
      <app-header />
    </div>

     <router-view></router-view>
     
    <div class="section">
      <app-footer />
    </div>
  </div>
</template>

<script lang="js" src="./App.js"></script>
<style lang="scss" src="./App.scss"></style>
