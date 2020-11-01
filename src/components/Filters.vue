<template>
  <aside class="filters-block">
    <div class="filters">
      <filter-block
        title="Опции тарифа"
        type="options"
        :filters="optionsArray"
      />

      <filter-block
        title="Авиакомпании"
        type="airlines"
        :filters="airlinesArray"
      />
    </div>
  </aside>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapActions, mapGetters } from 'vuex';
import FilterBlock from '@/components/FilterBlock.vue';

@Component({
  components: { FilterBlock },
  computed: mapGetters('filters', ['airlinesArray', 'optionsArray']),
  methods: mapActions('filters', ['load']),
})
export default class Filters extends Vue {
  created() {
    this.load();
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
</style>
