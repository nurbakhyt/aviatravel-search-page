<template>
  <div id="app">
    <container>
      <filters />

      <list />
    </container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapActions } from 'vuex';
import Container from '@/components/Container.vue';
import Filters from '@/components/Filters.vue';
import List from '@/components/List.vue';

@Component({
  components: {
    Container,
    Filters,
    List,
  },
  methods: mapActions(['loadAll']),
})
export default class App extends Vue {
  created() {
    this.loadAll();
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');

:root {
  --brandColor: #55bb06;
  --buttonBlue: #7284e4;
  --gray: #b9b9b9;
  --dark: #707276;
  --deepDark: #202123;
}

* {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  font-family:
    'Open Sans', sans-serif,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    "Roboto",
    "Helvetica Neue", Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 12px;
  line-height: 16px;
}

body {
  background-color: #e1e1e1;
}
</style>
