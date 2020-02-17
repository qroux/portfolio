<template>
  <b-col xs="6" sm="6" md="4" xl="4">
    <div class="full-stack mb-5">
      <div
        @click="testsvg"
        v-b-toggle="`collapse-${index + 1}`"
        class="stack-line"
      >
        <h4>{{ stack.a.title }}</h4>
        <div class="custom-btn">
          <font-awesome-icon
            :icon="['fas', `times`]"
            :class="{ rotate: toggled }"
          />
        </div>
      </div>
      <b-collapse :id="`collapse-${index + 1}`" type="transition">
        <div
          v-for="line in stack"
          class="list-size d-flex justify-content-between"
        >
          <img :src="`img/${line.logo}`" alt="" />
          <h5>
            {{ line.lang }}
          </h5>
        </div>
      </b-collapse>
    </div>
  </b-col>
</template>

<script>
export default {
  props: ['stack', 'index'],
  data() {
    return {
      toggled: true
    }
  },
  methods: {
    testsvg() {
      this.toggled = !this.toggled
    }
  }
}
</script>

<style scoped lang="scss">
$default-b: #474747;
// $strong: #326273;
$strong: #637675;
.full-stack {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  .custom-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
  }
  svg {
    color: white;
    font-size: 15px;
    transition: 0.5s;
  }
  .stack-line {
    display: flex;
    padding: 0px 15px 0px 30px;
    background-color: $strong;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    justify-content: space-between;
    align-items: center;
    color: white;
    &:hover {
      cursor: pointer;
    }
  }
  .list-size {
    padding: 8px 30px;
  }
  img {
    width: 30px;
    height: 30px;
  }
}
.rotate {
  transform: rotate(0.125turn);
}
</style>
