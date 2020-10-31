<template>
  <label
    :for="item.code"
    class="checkbox"
  >
    <input
      :id="item.code"
      type="checkbox"
      class="checkbox__input"
    >
    {{ item.value }}
  </label>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Checkbox extends Vue {
  @Prop({ required: true })
  item!: FilterOption;
}
</script>

<style scoped>
.checkbox {
  display: block;
  font-size: 12px;
  line-height: 32px;
  padding: 0 12px;
}

.checkbox__input {
  margin-right: 12px;
  vertical-align: middle;
}
</style>
