<template>
  <div class="lyric-listing py-6">
    <div class="listing p-6 m-6">
            <h1>Listing</h1>
            <ul>
              <li v-for="(liric,index) in allLirix" :key="index">
              {{index}} - {{liric}}
              </li>
            </ul>
            <!-- <div v-for="(record, index) in records" v-bind:key="index">{{record}}</div> -->
    </div>
  </div>
</template>

<script lang="js" src="./listing.js"></script>
<style lang="scss" src="./listing.scss" ></style>