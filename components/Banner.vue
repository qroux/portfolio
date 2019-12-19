<template>
  <div class="banner">
    <div>
      <Intro />
    </div>
  </div>
</template>

<script>
import Intro from '../components/Intro.vue'

export default {
  components: {
    Intro
  }
}
</script>

<style scoped land="scss">
.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15vh;
  color: white;
}
@media screen and (max-width: 600px) {
  .banner {
    height: 15px;
  }
}
</style>
