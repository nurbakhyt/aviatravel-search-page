<template>
  <aside class="filters-block">
    <div class="filters">
      <filter-block title="Опции тарифа">
        <template #reset-button>
          <reset-btn
            v-if="selectedOptions.length > 0"
            class="btn--reset"
            title="Сбросить выбор"
            @click="resetOptions"
          />
        </template>

        <checkbox
          v-for="filter in optionsArray"
          :key="filter.code"
          :item="filter"
          v-model="optionsList"
        />
      </filter-block>

      <filter-block title="Авиакомпании">
        <template #reset-button>
          <reset-btn
            v-if="selectedAirlines.length > 0"
            class="btn--reset"
            title="Сбросить выбор"
            @click="resetAirlines"
          />
        </template>

        <checkbox
          :item="{ code: 'All', value: 'Все' }"
          v-model="isAll"
        />

        <checkbox
          v-for="filter in airlinesArray"
          :key="filter.code"
          :item="filter"
          v-model="airlinesList"
        />
      </filter-block>

      <a-link @click.prevent="resetAll">
        Сбросить все фильтры
      </a-link>
    </div>
  </aside>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import FilterBlock from '@/components/FilterBlock.vue';
import Checkbox from '@/components/Checkbox.vue';
import ALink from '@/components/ALink.vue';
import ResetBtn from '@/components/ResetBtn.vue';

const filtersModule = namespace('filters');

@Component({
  components: {
    FilterBlock,
    Checkbox,
    ALink,
    ResetBtn,
  },
})
export default class Filters extends Vue {
  @filtersModule.Getter airlinesArray!: FilterOption[];

  @filtersModule.Getter selectedAirlines!: string[];

  @filtersModule.Getter optionsArray!: FilterOption[];

  @filtersModule.Getter selectedOptions!: string[];

  @filtersModule.Action selectAirlines!: Function;

  @filtersModule.Action resetAirlines!: Function;

  @filtersModule.Action selectOptions!: Function;

  @filtersModule.Action resetOptions!: Function;

  @filtersModule.Action resetAll!: Function;

  get optionsList(): string[] {
    return this.selectedOptions;
  }

  set optionsList(list: string[]) {
    this.selectOptions(list);
  }

  get airlinesList(): string[] {
    return this.selectedAirlines;
  }

  set airlinesList(list: string[]) {
    this.selectAirlines(list);
  }

  get isAll(): boolean {
    return this.selectedAirlines.length === 0;
  }

  set isAll(value: boolean) {
    this.resetAirlines();
  }
}
</script>

<style scoped>
.filters-block {
  flex: 0 0 240px;
  padding: 20px 10px;
}

.filters{
  position: sticky;
  top: 10px;
}

.btn--reset {
  position: absolute;
  top: 12px;
  right: 12px;
}
</style>
