<template>
  <div class="list">
    <card
      v-for="flightId in filteredIds"
      :key="flightId"
      :flight="byId[flightId]"
    />

    <div
      v-if="filteredIds.length < 1"
      class="alert"
    >
      Oops! Пустой список
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import Card from '@/components/Card.vue';

const flightsModule = namespace('flights');

@Component({
  components: { Card },
})
export default class List extends Vue {
  @flightsModule.Getter byId!: FlightsMap;

  @flightsModule.Getter filteredIds!: string[];
}
</script>

<style scoped>
.list {
  flex: 1 1 auto;
  padding: 20px 10px;
}

.alert {
  background-color: #ff9d9d;
  border-radius: 4px;
  font-size: 1.25em;
  padding: 1em;
  text-align: center;
}
</style>
