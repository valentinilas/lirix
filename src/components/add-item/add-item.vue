<template>
  <div class="columns">
    <div class="column is-6 is-offset-3">

      <div class="modal" :class="{ 'is-active': modal }">
        <div class="modal-background"></div>
        <div class="modal-content pt-6 pb-6 pr-6 pl-6 has-background-white">
          <!--  -->
          <form @submit.prevent="saveToDatabase()">
            <div class="field">
              <label class="label">Title</label>
              <div class="control">
                <input class="input" type="text"  v-model="newRecord.title" />
              </div>
            </div>

            <div class="field">
              <label class="label">Author</label>
              <div class="control">
                <div class="select">
                  <select v-model="newRecord.authorId">
                    <option value="1" >Vali</option>
                    <option value="2" selected>Cosmin</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="field">
              <label class="label">Content</label>
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
    </div>
  </div>
</template>

<script lang="js" src="./add-item.js"></script>
<style lang="scss" src="./add-item.scss"></style>