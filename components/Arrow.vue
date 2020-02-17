<template>
  <div class="intrests">
    <nuxt-link :to="path">
      <font-awesome-icon :icon="['fas', 'arrow-right']" />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      default: '/',
      type: String
    }
  }
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
</style>
