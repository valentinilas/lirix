<template>
  <div class="lyric-listing py-6">
    <div class="listing p-6 m-6">
         
    
                <list-item v-for="(liric,index) in allLirix" :key="index"  :item-data="liric"></list-item>
        
    </div>
  </div>
</template>

<script lang="js" src="./listing.js"></script>
<style lang="scss" src="./listing.scss" ></style>