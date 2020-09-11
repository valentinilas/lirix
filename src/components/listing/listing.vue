<template>
  <div class="lyrix-listing columns">

    <div class="column is-6 is-offset-3">
      <list-item v-for="(liric,index) in filteredLirix" :key="index" :item-data="liric"></list-item>
    </div>



    <!-- <div class="column is-6 is-offset-3">
          OriginalList:
      <list-item v-for="(liric,index) in allLirixReversed" :key="index" :item-data="liric"></list-item>
    </div> -->
  </div>
</template>

<script lang="js" src="./listing.js"></script>
<style lang="scss" src="./listing.scss" ></style>