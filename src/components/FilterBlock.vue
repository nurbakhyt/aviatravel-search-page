<template>
  <div class="filter">
    <p class="filter__title">{{ title }}</p>

    <checkbox
      v-for="filter in filters"
      :key="filter.code"
      :item="filter"
      v-model="selectedList"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapActions, mapGetters } from 'vuex';
import Checkbox from '@/components/Checkbox.vue';

@Component({
  components: { Checkbox },
  computed: mapGetters('filters', ['selectedAirlines', 'selectedOptions']),
  methods: mapActions('filters', ['selectAirlines', 'selectOptions']),
})
export default class FilterBlock extends Vue {
  @Prop()
  title!: string;

  @Prop({ required: true })
  type!: FilterType;

  @Prop({ required: true })
  filters!: FilterOption[];

  status = false;

  get selectedList(): string[] {
    if (this.type === 'options') {
      return this.selectedOptions;
    }

    return this.selectedAirlines;
  }

  set selectedList(list: string[]) {
    if (this.type === 'options') {
      this.selectOptions(list);
    } else if (this.type === 'airlines') {
      this.selectAirlines(list);
    }
  }
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
