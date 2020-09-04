<template>
  <div class="lyric-listing py-6">
    <div class="listing p-6 m-6">
            <h1>Listing</h1>
            <h2>Random Joke:</h2>
            <p>{{joke}}</p>
            <h2>All jokes</h2>
            <ul>
              <li v-for="(j,index) in jokes" :key="index">
                {{j}}
              </li>
            </ul>
            <!-- <div v-for="(record, index) in records" v-bind:key="index">{{record}}</div> -->
            <button @click="getNewJoke">Get Data</button>
    </div>
  </div>
</template>

<script lang="js" src="./listing.js"></script>
<style lang="scss" src="./listing.scss" ></style>