<template>
  <div class="segments">
    <div class="flight-time">
      <span class="flight-time__point">{{ origin }}</span>
      <span class="flight-time__duration">{{ travelTime }}</span>
      <span class="flight-time__point">{{ dest }}</span>
    </div>

    <div class="diagram">
      <span class="diagram__point"></span>
      <span
        v-for="stop in stops"
        :key="stop"
        class="diagram__point"
      ></span>
      <span class="diagram__point"></span>
      <div class="diagram__line"></div>
    </div>

    <div :class="[
      'flight-time__layover',
      {'flight-time__layover--green': stops.length < 1},
    ]">
      {{ layover }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ItinerarySegments extends Vue {
  @Prop({ required: true })
  itinerary!: Itinerary;

  get origin(): string {
    return this.itinerary.segments[0].origin_code;
  }

  get dest(): string {
    return this.itinerary.segments[this.itinerary.segments.length - 1].dest_code;
  }

  get travelTime(): string {
    const inHours = Math.floor(this.itinerary.traveltime / 3600);
    const inMinutes = (this.itinerary.traveltime / 60) % 60;

    return `${inHours} ч ${inMinutes} м`;
  }

  get cities(): string[] {
    return this.itinerary.segments
      .reduce((arr: string[], segment: Segment, idx: number): string[] => {
        if (idx === 0) {
          return [
            ...arr,
            segment.origin,
            segment.dest,
          ];
        }

        return [
          ...arr,
          segment.dest,
        ];
      }, []);
  }

  get stops(): string[] {
    return this.cities.slice(1, this.cities.length - 1);
  }

  get layover(): string {
    if (this.stops.length > 0) {
      return `через ${this.stops[0]}, 1 ч 50 м`;
    }

    return 'Прямой рейс';
  }
}
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
  text-align: center;
}

.flight-time__layover--green {
  color: var(--brandColor);
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
