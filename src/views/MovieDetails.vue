<template>
  <div v-if="movie" class="details-holder">
    <img :src="movie.Poster" :alt="movie.Title" />
    <div class="movie-details">
      <h1 v-if="movie">{{ movie.Title }}</h1>
      <p>Type: {{ movie.Type }}</p>
      <p>Rating: 9/10(hardcoded)</p>
      <p>Release Year: {{ movie.Year }}</p>
      <p class="history">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quia
        delectus quasi esse consequatur commodi incidunt deserunt similique,
        aperiam harum necessitatibus accusamus repudiandae pariatur ut debitis
        error doloremque velit rerum ipsam corrupti minima eligendi architecto
        eveniet. Ipsa inventore unde maiores consectetur architecto fuga, dicta
        aliquid sed provident rerum sequi accusantium excepturi odio consequatur
        nobis dolor sint ipsam tenetur cupiditate esse, velit maxime modi libero
        explicabo. Sapiente enim, laborum vel fugit, ratione, minima placeat
        quis eligendi nisi voluptate expedita sed corrupti quam iure. Ullam ab
        quaerat neque sit, sed beatae tempore vel, corporis nemo aliquid
        laboriosam dolore autem optio. Voluptatem, nisi.
      </p>
      <p>IMDbID: {{ id }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "searchStr"],
  data: function () {
    return {
      movie: null,
      url: "https://www.omdbapi.com/?i=tt3896198&apikey=66bc3a8",
    };
  },
  mounted() {
    fetch(this.url + `&s=${this.searchStr}`)
      .then((res) => res.json())
      .then((data) => {
        const movieData = data.Search.find((x) => x.imdbID === this.id);
        this.movie = movieData;
      })
      .catch((err) => console.log(err.message));
  },
};
</script>

<style lang=scss>
$primary-color: rgb(33, 33, 33);
$text-color: #fff;

.details-holder {
  height: 720px;
  display: flex;
  flex-direction: row;
  padding: 25px 0;
  background-color: $primary-color;
  color: $text-color;
  box-sizing: border-box;

  .movie-details p:nth-of-type(1),
  .movie-details p:nth-of-type(2) {
    margin-top: 0;
    margin-bottom: 9px;
  }

  .movie-details p:last-child,
  .movie-details p:nth-of-type(3) {
    margin: 0;
  }

  img {
    margin: 0 15px;
  }

  .history {
    margin: 35px 0;
    line-height: 1.6;
  }
}

.movie-details {
  width: 100%;
  text-align: left;
}

.movie-details h1 {
  font-size: 45px;
}

.movie-details p {
  font-size: 18px;
}

@media only screen and (max-width: 650px) {
  .details-holder {
    display: flex;
    flex-direction: column;
  }

  .movie-details {
    width: 95%;
    margin: 0 auto;
  }
}

@media only screen and (max-width: 985px) {
  .details-holder {
    height: auto;
  }
}
</style>