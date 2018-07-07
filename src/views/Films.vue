<template lang="html">
  <div class="films">

    <FilmCard v-for="film in films"
      :title="film.title"
      :releaseDate="film.releaseDate.slice(0,4)"
      :img="film.img"
      :id="film.id">
    </FilmCard>
  </div>
</template>

<script>
//Подумать о размере изображения для разных медиа
//Переменная на размер картинки(дублируется с Series.vue)
const imgUrl = 'https://image.tmdb.org/t/p/w500';

import LayoutDefault from '../layouts/LayoutDefault.vue';
import FilmCard from '../components/Main/FilmCard.vue';

export default {
  name: 'Films',
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
    fetch('https://api.themoviedb.org/3/movie/popular?page=1&language=en-US&api_key=624f7df45767c9a0ff7b6bf3107182d5')
    .then(response => response.json())
    .then(response => {
        this.films = response.results.reduce((accFilms, film) => accFilms.concat(
          {
            id: film.id,
            title: film.original_title || film.original_name,
            img: `${imgUrl}${film.backdrop_path}`,
            releaseDate: film.release_date || film.first_air_date,
          }), [])
        })
    .catch(error => {console.error("Error: ", error);})
  }
}

</script>

<style lang="css" >


</style>
