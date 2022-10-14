<template>
  <h1>State Management Component</h1>
  <hr />
  <div v-if="movies.length > 0">
    <div
      class="stored-movies__container"
      v-for="movie in movies"
      :key="movie.imdbID"
    >
      <router-link
        :to="{
          name: 'movieDetails',
          params: { id: movie.imdbID, searchStr: searchString },
        }"
        ><h2 class="movie">{{ movie.Title }}</h2></router-link
      >
    </div>
  </div>
  <div v-else>
    <p>No stored movies yet</p>
  </div>
</template>

<script>
export default {
  name: "Store-Movies",
  data: function () {
    return {
      movies: this.$store.state.movies,
      searchString: this.$store.state.searchString,
    };
  },
};
</script>

<style>
.stored-movies__container h2 {
  max-width: 600px;
  margin: 10px auto;
  padding: 20px;
  background: #9d9d9d;
  color: #fff;
  border-radius: 10px;
  transition: 0.3s ease-in-out;
  cursor: pointer;
}
.stored-movies__container a {
  text-decoration: none;
}
.stored-movies__container h2:hover {
  background: #000;
}

hr {
  width: 75px;
}

h1,
hr {
  margin-bottom: 35px;
}
</style>