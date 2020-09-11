<template>
  <!-- <div class="columns">
    <div class="column is-6 is-offset-3"> -->
      <div class="modal" :class="{ 'is-active': modal }">
        <div class="modal-background"></div>
        <div class="modal-content pt-6 pb-6 pr-6 pl-6 has-background-white">
          <div class="notification is-danger is-light" v-if="errors.length">
            <ul>
              <li v-for="(error,index) in errors" :key="index">{{ error }}</li>
            </ul>
          </div>

          <!--  -->
          <form @submit.prevent="saveToDatabase()">
            <div class="field">
              <label class="label">Title</label>
              <div class="control">
                <input class="input" type="text" v-model="newRecord.title" />
              </div>
            </div>

            <div class="field">
              <label class="label">Author*</label>
              <div class="control">
                <div class="select">
                  <select v-model="newRecord.authorId">
                    <option value="0" selected>Vali</option>
                    <option value="1" >Cosmin</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field">
              <label class="label">Content*</label>
              <div class="control">
                <textarea class="textarea" placeholder="Textarea" v-model="newRecord.bodyText"></textarea>
              </div>
            </div>

            <div class="field is-grouped">
              <div class="control">
                <button class="button is-link" :class="{ 'is-loading': loading }">Add</button>
              </div>
            </div>
          </form>
          <!--  -->
        </div>
        <button class="modal-close is-large" aria-label="close" @click="hideAddScreen();"></button>
      </div>
    <!-- </div>
  </div> -->
</template>

<script lang="js" src="./add-item.js"></script>
<style lang="scss" src="./add-item.scss"></style>