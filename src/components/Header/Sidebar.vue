<template lang="html">
  <aside class="sidebar" v-show="show" v-bind:class="{slide: slide}"></aside>
</template>

<script>

export default {
  name: 'Sidebar',
  data() {
    return {
      //show: false,
      slide: true
    }
  }
}
</script>

<style lang="css">
  .sidebar {
    background-color: #fff;
    width: 300px;
    position: fixed;
    top: 56px;
    left: 0;
    bottom: 0;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow:  0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }

  .slide-transition {
    transition: all .s cubic-bezier(.65, .05, .36, 1);
  }

  .slide-enter, .slide-leave {
    left: -100%;
  }
</style>
