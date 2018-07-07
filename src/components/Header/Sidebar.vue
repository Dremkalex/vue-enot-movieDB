<template lang="html">
  <aside class="sidebar" v-show="show" v-bind:class="{slide: slide}">
    <ul>
      <router-link :to="{ name: 'Films', params: {} }" tag="li">Фильмы</router-link>
      <router-link :to="{ name: 'Series', params: {} }" tag="li">Сериалы</router-link>
    </ul>
  </aside>
</template>

<script>

export default {
  name: 'Sidebar',
  props: ['show'],
  data() {
    return {
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
    opacity: .9;
  }

  .slide-transition {
    transition: all 1.s cubic-bezier(.65, .05, .36, 1);
  }

  .slide-enter, .slide-leave {
    left: -100%;
  }
</style>
