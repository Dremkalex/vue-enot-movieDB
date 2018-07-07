<template lang="html">
  <div class="film-info">
    <h1>Описание</h1>
    <!--
      Макет 1440-4
      Минимальный набор:
        - Картинка
        - Название фильма
        - Информация по фильму (страна, продолжительность. жанр и так далее)
        - Описание фильма
    -->
  </div>
</template>

<script>

import EventBus from '../../event-bus.js';
import LayoutDefault from '../../layouts/LayoutDefault.vue';

export default {
  name: 'FilmInfo',
  props: ['id'],
  created () {
    this.$emit(`update:layout`, LayoutDefault);
    EventBus.$on('sendFilmId', function (id) {
      this.id = id;
    });
  }

}

// получает данные с Films или Series
</script>

<style lang="scss" scoped>
</style>
