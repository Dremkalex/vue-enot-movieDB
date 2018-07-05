<template lang="html">
  <div class="header">
    <!-- Рапсисать Header тут -->
    <button class="header_btn" @click="show = !show">
      <ion-icon name="menu"></ion-icon>
    </button>
    <div class="header_logo">
      <h1><img src="@/assets/logo.png" alt="logo">Mooogle</h1>
    </div>


    <Sidebar v-show="show"></Sidebar>

    <!-- <Search></Search> -->
  </div>
</template>

<script>
//import Search from '@/components/Header/Search.vue'
import Sidebar from './Sidebar.vue'

export default {
  name: 'Header',
  components: {
    //Search,
    Sidebar
  },
  data() {
    return {
      show: false,
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: flex-start;
    width: 100%;
//Высоту уберем
    height: 56px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 80;
    background-color: #77c1bb;
//box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.95);
    padding: 8px 16px;
    overflow: hidden;
    box-sizing: border-box;
//От App не применился
    font-family: 'Roboto', sans-serif;
  }

  .header_btn {
    background-color: transparent;
    border: 0;
    width: 40px;
    height: 40px;
    font-size: 30px;
    outline: none;
    //color: #9f9f9f;
    cursor: pointer;
    border-radius: 50%;
    transition: all .3s ease-in-out;
  }

  .header_logo {

  }

</style>
