<template>
  <a
    v-bind="$attrs"
    v-on="$listeners"
    class="link"
  >
    <slot />
  </a>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ALink extends Vue {}
</script>

<style scoped>
.link {
  border-bottom: 1px dashed var(--buttonBlue);
  color: var(--buttonBlue);
  cursor: pointer;
  font-size: 12px;
  line-height: 16px;
  text-decoration: none;
}
</style>
