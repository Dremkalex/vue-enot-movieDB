<template lang="html">
  <div class="series">

    <FilmCard v-for="film in films"
      :title="film.title"
      :releaseDate="film.releaseDate.slice(0,4)"
      :img="film.img">
    </FilmCard>

  </div>
</template>

<script>
//Переменная на размер картинки(дублируется с Film.vue)
const imgUrl = 'https://image.tmdb.org/t/p/w500';

import LayoutDefault from '../layouts/LayoutDefault.vue';
import FilmCard from '../components/Main/FilmCard.vue';

export default {
  name: 'Series',
  components: {
    FilmCard,
  },
  data() {
    return{
      films: []
    }
  },
  created() {
    this.$emit(`update:layout`, LayoutDefault);
    fetch('https://api.themoviedb.org/3/tv/popular?api_key=624f7df45767c9a0ff7b6bf3107182d5&language=en-US&page=1')
    .then(response => response.json())
    .then(response => {
        this.films = response.results.reduce((accFilms, film) => accFilms.concat(
          {
            title: film.original_title || film.original_name,
            img: `${imgUrl}${film.backdrop_path}`,
            releaseDate: film.release_date || film.first_air_date,
          }), [])
        })
    .catch(error => {console.error("Error: ", error);})
  }
}


</script>

<style lang="scss" scoped>
</style>
