<template>
  <!-- <div class="list-item tile">
    {{itemData}}
    <div class="level">
        <div class="level-right">
            <button @click="deleteItemfromDatabase(itemData.lirixId)" class="button is-danger is-small level-item">Delete</button>
        </div>
        
    </div>
  </div>-->

  <div class="card mb-5" :class="{ active: editMode }">
    <div class="card-content">

        <div class="notification is-danger is-light" v-if="errors.length">
            <ul>
              <li v-for="(error,index) in errors" :key="index">{{ error }}</li>
            </ul>
          </div>


      <!--  -->
      <p class="title original">{{itemData.title}}</p>

      <div class="title-edit mb-5 edit">
        <h4 class="title is-4">Title</h4>
        <input class="input" type="text" v-model="newRecord.title" />
      </div>
      <!--  -->
      <p class="has-text-grey-lighter original">Added by {{itemData.authorName}} {{addedOnDate}}</p>

      <div class="subtitle-edit mb-5 edit">
        <h4 class="title is-4">Author</h4>
        <div class="select">
          <select v-model="newRecord.authorId">
            <option value="0" selected>Vali</option>
            <option value="1">Cosmin</option>
          </select>
        </div>
      </div>
      <!--  -->
      <div class="body-text original my-5">
        <pre>{{itemData.bodyText}}</pre>
      </div>
      <div class="body-text-edit mb-3 edit">
        <h4 class="title is-4">Content</h4>
        <textarea class="textarea" v-model="newRecord.bodyText"></textarea>
      </div>

      <!--  -->
      <div class="buttons mt-2">
        <button
          class="button is-success is-outlined edit"
          @click="updateItemInDatabase(itemData.lirixId)"
          :class="{ 'is-loading': loading }"
        >Save</button>
        <button class="button is-danger is-outlined edit " @click="disableEditing()">Cancel</button>
        <!--  -->
      </div>
    </div>
    <footer class="card-footer">
      <button class=" button is-white " @click="enableEditing()">Edit</button>
      <button
        @click="deleteItemfromDatabase(itemData.lirixId)"
        class=" button is-white "
        :class="{ 'is-loading': loading }"
        :disabled="editMode"
      >Delete</button>
   
      <router-link  class="button is-white " :to="'/li/' + itemData.lirixId" v-if="!this.$route.params.id">Link</router-link>
    </footer>
  </div>
</template>

<script lang="js" src="./list-item.js"></script>
<style lang="scss" src="./list-item.scss"></style>
