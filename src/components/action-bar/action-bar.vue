<template>
  <div class="columns">
    <div class="column is-6 is-offset-3">
     

      <div class="level py-5 px-5 action-bar has-background-white-bis">
        <div class="level-left">
          <button class="button is-info level-item" @click="showAddScreen()">Add New</button>
        </div>
        <div class="level-right">
          <input
            v-model="searchTerm"
            @input="search()"
            class="input level-item"
            type="text"
            placeholder="Filter"
          />
        
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js" src="./action-bar.js"></script>
<style lang="scss" src="./action-bar.scss"></style>