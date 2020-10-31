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
import { mapActions, mapGetters } from 'vuex';
import Card from '@/components/Card.vue';

@Component({
  components: { Card },
  computed: mapGetters('flights', ['items']),
  methods: mapActions('flights', ['load']),
})
export default class List extends Vue {
  created() {
    this.load();
  }
}
</script>

<style scoped>
.list {
  flex: 1 1 auto;
  padding: 20px 10px;
}
</style>
