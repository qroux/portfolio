<template>
  <b-col class="my-5">
    <div v-for="line in stack" class="s-container">
      <StackRow :logo="`${line.logo}`" :lang="`${line.lang}`" />
    </div>
  </b-col>
</template>

<script>
import StackRow from './StackRow.vue'

export default {
  components: {
    StackRow
  },
  props: ['stack']
}
</script>

<style scoped>
.s-container {
}
</style>
