<template lang="html">
  <aside class="sidebar" v-show="show" v-bind:class="{slide: slide}">
    <ul> 
      <router-link :to="{ name: 'Films', params: {} }" tag="li" class="iconn1">
        <img class="icon" src="@/assets/icon1-mobile360.png" alt="logo">Фильмы</router-link>
        <ul>
          <router-link :to="{ name: 'subcategory1', params: {} }" tag="li" class="subcategory1">Подкатегория 1</router-link>
          <router-link :to="{ name: 'subcategory2', params: {} }" tag="li" class="subcategory1">Подкатегория 2</router-link>
          <router-link :to="{ name: 'subcategory3', params: {} }" tag="li" class="subcategory1">Подкатегория 3</router-link>
          <router-link :to="{ name: 'subcategory4', params: {} }" tag="li" class="subcategory1">Подкатегория 4</router-link>
        </ul>
      
      <router-link :to="{ name: 'Series', params: {} }" tag="li"  class="iconn2">
        <img class="icon" src="@/assets/icon2-mobile360.png" alt="logo">Сериалы</router-link>
      
      <router-link :to="{ name: 'Favorites', params: {} }" tag="li"  class="iconn3">
        <img class="icon" src="@/assets/icon3-mobile360.png" alt="logo">Избранное</router-link>
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
    width: 304px;
    height: 100%;
    position: absolute;  /*fixed */
    top: 56px;
    left: 0;
    bottom: 0;
    z-index: 1;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    box-shadow:  0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    opacity: .9;
  }

  .icon{
    padding-right: 34px;
  }
  .iconn1{
    margin-top: -290px;
  }

  .iconn2{
    padding: 27px 0 27px 0;
  }

  .iconn1, .iconn2, .iconn3{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    color: #372c48;
  }

  .subcategory1{
    padding-left: 60px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 12px;
    color: #372c48;
  }

  .slide-transition {
    transition: all 1.s cubic-bezier(.65, .05, .36, 1);
  }

  .slide-enter, .slide-leave {
    left: -100%;
  }

  ul{
    margin-left: 16px;
  }

  li{
    padding-top: 11px;
  }

  li:hover{
    color: #77c1bb;
  }

  @media only screen and (min-device-width : 360px) and (max-device-width : 480px) {
    .sidebar{
      
    }
  }
</style>
