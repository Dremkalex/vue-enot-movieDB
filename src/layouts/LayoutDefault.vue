<template lang="html">
  <div class="LayoutDefault">
    <Header></Header>
    <main class="LayoutDefault__main">
      <slot/>
    </main>
  </div>
</template>

<script>
import Header from '../components/Header/Header.vue';

export default {
  name: 'LayoutDefault',
  components: {
    Header
  },
  
}
</script>

<style lang="css">
</style>
