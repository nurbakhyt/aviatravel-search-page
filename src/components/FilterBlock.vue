<template>
  <div class="filter">
    <p class="filter__title">
      {{ title }}
    </p>

    <slot name="reset-button" />

    <slot />
  </div>
</template>

<script lang="ts">
import {
  Component, Prop, Vue,
} from 'vue-property-decorator';

@Component
export default class FilterBlock extends Vue {
  @Prop({ required: true })
  title!: string;
}
</script>

<style scoped>
.filter {
  background-color: #f5f5f5;
  border-radius: 4px;
  color: var(--deepDark);
  margin-bottom: 12px;
  padding: 12px 0;
  position: relative;
}

.filter__title {
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
  padding-right: 32px;
  padding-left:  12px;
  margin-bottom: 12px;
}
</style>
