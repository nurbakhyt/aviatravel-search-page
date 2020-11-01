<template>
  <label
    :for="item.code"
    class="checkbox"
  >
    <input
      :id="item.code"
      :value="item.code"
      type="checkbox"
      class="checkbox__input"
      v-model="list"
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

  @Prop({ required: true })
  value!: string[];

  get list(): string[] {
    return this.value;
  }

  set list(newList: string[]) {
    this.$emit('input', newList);
  }
}
</script>

<style scoped>
.checkbox {
  cursor: pointer;
  display: block;
  font-size: 12px;
  line-height: 32px;
  padding: 0 12px;
}

.checkbox:focus,
.checkbox:hover {
  background-color: #ebebeb;
}

.checkbox__input {
  margin-right: 12px;
  vertical-align: middle;
}
</style>
