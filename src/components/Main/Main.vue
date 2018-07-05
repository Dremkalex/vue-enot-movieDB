<template lang="html">
  <div id="app-main">
    <div></div> <!-- блок для сортировки, реализуем потом-->

    <div id="nav"> <!-- блок навигации -->
      <!-- router-link to Films -->
      <!-- router-link to Series -->
      <!-- link to MovieInfo !!!Открытие по клику на FIlmBlock!!! -->
    </div>

    <div id="display"> <!-- блок отображения выбранной страницы -->
      <!-- router-view -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style lang="scss" scoped>
</style>
