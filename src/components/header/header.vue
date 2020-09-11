<template>
  <div class="container">
          <div class="columns">

    <div class="column is-6 is-offset-3">
    <div class="level">
      <div class="level-left">
         <router-link class="level-item" to="/">
        <div class="logo-container">
          <span class="logo-text">{{siteName}}</span>
        </div>
      </router-link>
      </div>
      <div class="level-right">
        <theme-switcher></theme-switcher>
      </div>
     
    </div>
    
  </div>
      </div>
    
  </div>
</template>

<script lang="js" src="./header.js"></script>
<style lang="scss" src="./header.scss" ></style>