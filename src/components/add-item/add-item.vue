<template>
  <div class="new-lyric py-6">
    <form @submit.prevent="saveToDatabase()">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Text input" v-model="newRecord.title" />
        </div>
      </div>

      <div class="field">
        <label class="label">Subject</label>
        <div class="control">
          <div class="select">
            <select v-model="newRecord.authorId">
              <option value="1">Vali</option>
              <option value="2">Cosmin</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea class="textarea" placeholder="Textarea" v-model="newRecord.bodyText"></textarea>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="js" src="./add-item.js"></script>
<style lang="scss" src="./add-item.scss"></style>