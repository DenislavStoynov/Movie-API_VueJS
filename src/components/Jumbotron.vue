<template>
  <AnimatedText />
  <section>
    <img :src="images[counter]" />
    <div class="jumbo-content__container">
      <div class="jumbo-text">
        <h1>Welcome to Movie World</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          molestiae natus iusto, quae iste soluta?
        </p>
      </div>
      <div class="buttons-holder">
        <span @click="prevImage">Back</span>
        <span @click="nextImage">Next</span>
      </div>
    </div>
  </section>
</template>

<script>
import AnimatedText from "./AnimatedText.vue";
export default {
  name: "jumbotron",
  components: {
    AnimatedText,
  },
  data: function () {
    return {
      counter: 0,
      images: [
        require("../assets/1.jpg"),
        require("../assets/2.jpg"),
        require("../assets/3.jpg"),
      ],
    };
  },
  methods: {
    prevImage() {
      this.counter--;
      if (this.counter < 0) {
        this.counter = 2;
      }
    },
    nextImage() {
      this.counter++;
      if (this.counter > 2) {
        this.counter = 0;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$primary-color: #fff;

p {
  margin: 0;
}

section {
  position: relative;
  height: 595px;
  background-color: rgba(13, 161, 139, 0);
  font-family: sans-serif;
  box-sizing: border-box;

  img {
    width: 100%;
    height: 100%;
  }

  .jumbo-content__container {
    position: absolute;
    top: 25px;
    left: 50%;
    transform: translate(-50%, 0);
  }

  .jumbo-text {
    display: inline-block;
  }

  div h1,
  div p {
    color: $primary-color;
  }

  .buttons-holder {
    display: flex;
    justify-content: space-around;
    margin-top: 155px;
    font-size: 21px;
    color: $primary-color;
  }

  .buttons-holder span {
    padding: 5px 10px;
    background-color: rgba(0, 0, 0, 0.5);
    border: 3px solid $primary-color;
    border-radius: 5px;
    cursor: pointer;
  }
}

div h1 {
  font-size: 41px;
}

div p {
  font-size: 25px;
}

@media only screen and (max-width: 715px) {
  div h1 {
    font-size: 33px;
  }

  div p,
  .buttons-holder {
    font-size: 19px;
  }
}
</style>