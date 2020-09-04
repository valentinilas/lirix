<template>
  <div id="app">
    <Header />
    <MainMenu />
    <div class="container is-fullheight">
      <div class="columns">
        <div class="column">
          <AddItem />
        </div>
        <div class="column">
          <Listing />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="js" src="./App.js"></script>
<style lang="scss" src="./App.scss"></style>
