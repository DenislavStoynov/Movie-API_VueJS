<template>
  <div class="animated-text__container">
    <div>
      <span>The Best Movie Website.</span>
      <span>The Best Movie Website.</span>
    </div>
  </div>
</template>

<script>

</script>

<style lang=scss scoped>
$primary-color: #42b983;

.animated-text__container {
  position: relative;
  width: 100%;
  height: 25px;
  background-color: $primary-color;
  overflow: hidden;

  div {
    position: absolute;
    display: block;
    width: 200%;
    height: 30px;
    overflow: hidden;
    animation: animatedText 8s linear infinite;
  }

  span {
    float: left;
    width: 50%;
    margin-top: 3px;
    font-weight: 700;
    color: #fff;
  }
}

@keyframes animatedText {
  0% {
    left: 0;
  }
  100% {
    left: -100%;
  }
}
</style>