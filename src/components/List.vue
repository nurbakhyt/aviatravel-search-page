<template>
  <div class="list">
    <card
      v-for="flight in items"
      :key="flight.id"
      :flight="flight"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Card from '@/components/Card.vue';

@Component({
  components: { Card },
})
export default class List extends Vue {
  items: Flight[] = Array(10)
    .fill(1)
    .map((_: number, index: number) => ({ id: `${index}` }));
}
</script>

<style scoped>
.list {
  flex: 1 1 auto;
  padding: 20px 10px;
}
</style>
