<template>
  <time class="date">
    <span class="date__value">{{ dateTime.date }}</span>
    <span class="date__time">{{ dateTime.time }}</span>
  </time>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class DateTime extends Vue {
  @Prop({ default: 'origin' })
  type!: SegmentType;

  @Prop({ required: true })
  segments!: Segment[];

  get segmentDateTime(): string {
    if (this.type === 'origin') return this.segments[0].dep_time;

    return this.segments[this.segments.length - 1].arr_time;
  }

  get dateTime(): DateTimeType {
    const parsed = this.segmentDateTime.split(' ');

    return {
      date: parsed.slice(0, parsed.length - 1).join(' '),
      time: parsed.slice(-1)[0],
    };
  }
}
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
