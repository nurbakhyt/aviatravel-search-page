<template>
  <aside class="filters">
    <filter-block
      title="Опции тарифа"
      :filters="optionsArray"
    />

    <filter-block
      title="Авиакомпании"
      :filters="airlinesArray"
    />
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
.filters {
  flex: 0 0 240px;
  padding: 20px 10px;
}
</style>
