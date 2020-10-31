<template>
  <aside class="filters">
    <filter-block
      title="Опции тарифа"
      :filters="tariffs"
    />

    <filter-block
      title="Авиакомпании"
      :filters="airlines"
    />
  </aside>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FilterBlock from '@/components/FilterBlock.vue';

type FiltersTree = {
  tariffs: IsomorphicObject;
  airlines: IsomorphicObject;
};

@Component({
  components: { FilterBlock },
})
export default class Filters extends Vue {
  filters: FiltersTree = {
    tariffs: {
      onlyDirect: 'Только прямые',
      onlyWithBaggage: 'Только с багажом',
      onlyReturnable: 'Только возвратные',
    },
    airlines: {
      ALL: 'Все',
      KC: 'Air Astana',
      HY: 'Uzbekistan Airways',
      EK: 'Emirates',
      HR: 'HR',
      FZ: 'Flydubai',
      S7: 'S7 Airlines',
      LH: 'Lufthansa',
      BT: 'Air Baltic',
      CZ: 'China Southern Airlines',
      SU: 'Aeroflot',
      B2: 'Belavia',
      DV: 'SCAT Airlines',
      TK: 'Turkish Airlines',
    },
  }

  get airlines(): FilterOption[] {
    return Filters.transformToOptions(this.filters.airlines);
  }

  get tariffs(): FilterOption[] {
    return Filters.transformToOptions(this.filters.tariffs);
  }

  static transformToOptions(obj: IsomorphicObject): FilterOption[] {
    return Object.keys(obj)
      .reduce((arr: FilterOption[], key: string) => ([
        ...arr,
        {
          code: key,
          value: obj[key],
        },
      ]), []);
  }
}
</script>

<style scoped>
.filters {
  flex: 0 0 240px;
  padding: 20px 10px;
}
</style>
