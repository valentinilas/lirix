<template>
  <div class="section">
    <div class="container">
      <div class="lyrix-listing columns">

    <div class="column is-6 is-offset-3">
    <list-item :item-data="getSingleLiric"></list-item>
    </div>
    </div>
    </div>
    <!-- <list-item v-for="(liric,index) in getSingleLiric" :key="index" :item-data="liric"></list-item> -->
  </div>
</template>

<script lang="js" src="./single-liric.js"></script>
