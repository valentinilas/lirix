<template>

    <label for="theme-switcher" class="theme-switcher level-item">
      <input  type="checkbox" id="theme-switcher" name="theme-switcher" class="is-hidden" v-model="checked" @change="changeTheme(checked)">
      
        <span class="dark-icon">Dark</span>
        <span class="light-icon">Light</span>
     
    </label>

</template>

<script lang="js" src="./theme-switcher.js"></script>
<style lang="scss" src="./theme-switcher.scss" ></style>