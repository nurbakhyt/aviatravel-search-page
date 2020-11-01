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
import { mapGetters } from 'vuex';
import Card from '@/components/Card.vue';

@Component({
  components: { Card },
  computed: mapGetters('flights', ['byId', 'filteredIds']),
})
export default class List extends Vue {}
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
