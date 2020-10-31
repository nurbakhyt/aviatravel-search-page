<template>
  <div class="segments">
    <div class="flight-time">
      <span class="flight-time__point">ALA</span>
      <span class="flight-time__duration">4 ч 20 м</span>
      <span class="flight-time__point">TSE</span>
    </div>

    <div class="diagram">
      <span class="diagram__point"></span>
      <span class="diagram__point"></span>
      <span class="diagram__point"></span>
      <div class="diagram__line"></div>
    </div>

    <div class="flight-time__layover">
      через Шымкент, 1 ч 50 м
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ItinerarySegments extends Vue {}
</script>

<style scoped>
.segments {
  padding: 0 .5em;
  min-width: 160px;
}

.flight-time {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2px;
}

.flight-time__point {
  color: var(--gray);
  font-size: 10px;
  line-height: 12px;
}

.flight-time__duration {
  font-size: 12px;
  line-height: 18px;
}

.flight-time__layover {
  color: #ff9900;
  font-size: 12px;
  line-height: 16px;
}

.diagram {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 1px;
  border: 2px solid transparent;
  position: relative;
  margin-bottom: 2px;
}

.diagram__line {
  background-color: var(--gray);
  height: 1px;
  position: absolute;
  right: 0;
  left: 0;
}

.diagram__point {
  border: 1px solid var(--gray);
  border-radius: 50%;
  background-color: white;
  height: 5px;
  width: 5px;
  z-index: 1;
}
</style>
