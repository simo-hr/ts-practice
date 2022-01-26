<template>
  <div>
    <Home />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Home from '@/components/Home.vue'

export default defineComponent({
  name: 'App',
  components: { Home },
})
</script>

<style>
#app {
  max-width: 420px;
  margin: 0 auto;
  background-color: white;
}
@media (prefers-color-scheme: dark) {
  /* ダークモードの時 */
  #app {
    background-color: #222;
  }
}
</style>
