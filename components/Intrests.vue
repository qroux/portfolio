<template>
  <div class="intrests">
    <nuxt-link :to="path">
      <font-awesome-icon :icon="['fas', 'arrow-right']" />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['path']
}
</script>

<style scoped lang="scss">
.intrests {
  text-align: center;
  padding: 15px 0;
  svg {
    font-size: 30px;
    transition: 1s;
    float: right;
    margin-right: 20px;
    &:hover {
      transform: translateX(10px);
    }
  }
  .title {
    margin-bottom: 35px;
    border-bottom: 1px solid;
  }
}
.icons {
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    height: 50px;
    width: 50px;
  }
  svg {
    font-size: 40px;
  }
}
.item {
  text-align: center;
  h5 {
    margin-top: 15px;
  }
}
</style>
