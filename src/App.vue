<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class App extends Vue {}
</script>

<style lang="scss">
body {
  .modal {
    z-index: 1000;
  }
  .page-header {
    text-align: center;
    margin: 3rem;
  }
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  margin: 0 auto;
  padding: 0;
  background: var(--bg);
  * {
    color: var(--text-color);
  }
  .content-wrapper {
    box-sizing: border-box;
    min-height: 100vh;
    margin-bottom: -3rem;
    padding-bottom: 5rem;
    @media (max-width: 600px) {
      margin-bottom: -8rem;
      padding-bottom: 10rem;
    }
  }
}
</style>
