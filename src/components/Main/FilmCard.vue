<template lang="html">
  <div class="film-card"
      :style="{ backgroundImage: 'url(' + img + ')' }"
      @click="toFilm">

    <h3 class="film-card_title">{{title}} ({{releaseDate}})
    </h3>
  </div>
</template>

<script>
//Подключаем EventBus
import EventBus from '../../event-bus.js';

export default {
  name: 'FilmCard',
  props: ['id', 'title', 'img', 'releaseDate'],
  methods: {
    toFilm() {
      this.$router.push({name: 'FilmInfo'});
      EventBus.$emit('sendFilmId', this.id)
    }
  }
}
</script>

<style lang="css">
  .film-card {
    margin: .5rem;
    /* Решить без задавания высоты */
    width: 500px;
    height: 260px;
  }

  .film-card_title {
    color: #fff;
    font-size: 1.25rem;
  }



</style>
