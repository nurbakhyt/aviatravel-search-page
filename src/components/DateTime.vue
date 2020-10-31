<template>
  <time class="date">
    <span class="date__value">25 ноя, вс</span>
    <span class="date__time">23:25</span>
  </time>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class DateTime extends Vue {}
</script>

<style scoped>
.date {
  display: flex;
  flex-direction: column;
  padding: 0 .5em;
}

.date__value {

}

.date__time {
  font-size: 24px;
  line-height: 30px;
}
</style>
