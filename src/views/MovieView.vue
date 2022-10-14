<template>
  <section :style="{ minHeight: initialHeight + 'px' }">
    <div class="title">
      <h1>Find a Movie</h1>
      <img
        src="../assets/arrow-down.png"
        class="animated-arrow"
        alt="arrow-down"
      />
    </div>
    <form @submit.prevent="fetchMoviesData" @keyup.enter="fetchMoviesData">
      <div>
        <input type="text" v-model="searchString" placeholder="Type movie..." />
        <button>Get Movies</button>
      </div>
    </form>
    <div v-if="movies && movies.length > 0">
      <button class="sort-btn" @click="sortMovies">
        <span v-if="!sortedAsc">Sort Asc</span>
        <span v-else>Sort Desc</span>
      </button>
    </div>
    <div v-if="isFetched === false">
      <p>Field cannot be blank</p>
    </div>
    <div v-if="isFetched && noResults === false">
      <!--I am using the list from the store in StoreMovies.vue-->
      <div
        class="movies__container"
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
    <div v-else-if="isFetched && noResults === true">
      <p>No Results</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "movies",
  data: function () {
    return {
      movies: [],
      searchString: "",
      url: "https://www.omdbapi.com/?i=tt3896198&apikey=66bc3a8",
      isFetched: null,
      noResults: false,
      sortedAsc: false,
      initialHeight: window.innerHeight
    };
  },
  methods: {
    configure(movies, noResults) {
      this.movies = movies;
      this.noResults = noResults;
    },
    commits(data) {
      this.$store.commit("addMovies", data);
      this.$store.commit("updateString", this.searchString);
    },
    fetchMoviesData() {
      this.searchString = this.searchString.trimStart().trimEnd().replace(/[|&;$%!$#{}*/`^@"<>()+,]/g, "");
      if (this.searchString) {
        fetch(this.url + `&s=${this.searchString}`)
          .then((res) => res.json())
          .then((data) => {
            if (data.Response === "False") {
              this.configure(null, true);
              return;
            }
            this.configure(data.Search, false);
            this.commits(data.Search);
          })
          .catch((err) => alert(err.message));
        this.isFetched = true;
      } else {
        this.isFetched = false;
      }
    },
    sortMovies() {
      const sortedMovies = this.movies.sort((a, b) => {
        if (a.Title < b.Title) return -1;
        if (a.Title > b.Title) return 1;
        return 0;
      });
      this.sortedAsc ? (this.movies = sortedMovies.reverse()) : (this.movies = sortedMovies);
      this.sortedAsc = !this.sortedAsc;
    },
  },
};
</script>

<style lang="scss" scoped>
$primary-color: #42b983;
$text-color: #fff;

section {
  padding: 25px 0;
  font-family: sans-serif;
  background-color: #424242;
  color: $text-color;
  box-sizing: border-box;
}

.title {
  position: relative;
  margin-bottom: 95px;
}

.animated-arrow {
  position: absolute;
  left: 49%;
  width: 30px;
  height: 30px;
  transform: translate(-50%, 50%);
  transform: rotate(-90deg);
  animation-name: arrowAnimation;
  animation-duration: 1.1s;
  animation-iteration-count: infinite;
}

@keyframes arrowAnimation {
  0% {
    bottom: -45px;
  }
  100% {
    bottom: -65px;
  }
}

h1 {
  font-size: 35px;
}

form div {
  width: 75%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

input[type="text"] {
  background-color: transparent;
  border: none;
  border-bottom: 2px solid $primary-color;
  color: $text-color;
}

input[type="text"]:focus {
  outline: none;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  background: $primary-color;
  color: $text-color;
  border: 0;
  border-radius: 20px;
  cursor: pointer;
}

.sort-btn {
  background: rgb(0, 110, 255);
}

.movies__container h2 {
  max-width: 600px;
  margin: 10px auto;
  padding: 20px;
  background: #f4f4f4;
  color: #444;
  border-radius: 10px;
  transition: 0.3s ease-in-out;
  cursor: pointer;
}
.movies__container h2:hover {
  background: #ddd;
}
.movies__container a {
  text-decoration: none;
}
</style>