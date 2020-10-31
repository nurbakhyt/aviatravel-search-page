<template>
  <div class="container">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Container extends Vue {}
</script>

<style>
.container {
  display: flex;
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
}
</style>
