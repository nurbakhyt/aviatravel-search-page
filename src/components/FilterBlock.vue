<template>
  <div class="filter">
    <p class="filter__title">{{ title }}</p>

    <checkbox
      v-for="filter in filters"
      :key="filter.code"
      :item="filter"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Checkbox from '@/components/Checkbox.vue';

@Component({
  components: { Checkbox },
})
export default class FilterBlock extends Vue {
  @Prop()
  title!: string;

  @Prop({ required: true })
  filters!: FilterOption[];
}
</script>

<style scoped>
.filter {
  background-color: #f5f5f5;
  border-radius: 4px;
  color: var(--deepDark);
  margin-bottom: 12px;
  padding: 12px 0;
}

.filter__title {
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
  padding: 0 12px;
  margin-bottom: 12px;
}
</style>
