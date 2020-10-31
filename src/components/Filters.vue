<template>
  <div class="filters"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Filters extends Vue {}
</script>

<style scoped>
.filters {
  flex: 0 0 240px;
  padding: 20px 10px;
}
</style>
