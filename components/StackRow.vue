<template>
  <b-row align-v="center" align-h="between" class="stack-container px-3 py-2">
    <div class="stack-logo">
      <img :src="`img/${logo}`" alt="" />
    </div>
    <h5>{{ lang }}</h5>
  </b-row>
</template>

<script>
export default {
  props: {
    logo: String,
    lang: String
  }
}
</script>

<style scoped>
.stack-container {
  /*  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.2);*/
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 5px;
  word-break: break-all;
}
.stack-logo img {
  width: 30px;
  height: 30px;
}
</style>
