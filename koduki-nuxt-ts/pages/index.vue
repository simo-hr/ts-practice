<template>
  <div class="container">
    <div>
      <NuxtLogo />
      <h1 class="title">Hello, {{ $accessor.user.name }}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  middleware: ["auth-filter"],
});
</script>