<template>
  <div class="">
    <div class="full-page">
      <Banner />
      <b-navbar>
        <b-navbar-nav>
          <nuxt-link to="/" class="my-btn">
            <h5>Présentation</h5>
          </nuxt-link>
          <nuxt-link to="/stacks" class="my-btn">
            <h5>Skills</h5>
          </nuxt-link>
          <nuxt-link to="/portfolio" class="my-btn">
            <h5>Portfolio</h5>
          </nuxt-link>
          <nuxt-link to="/contacts" class="my-btn">
            <h5>Contacts</h5>
          </nuxt-link>
        </b-navbar-nav>
      </b-navbar>
      <transition name="slide" mode="out-in">
        <nuxt />
      </transition>
    </div>
  </div>
</template>

<script>
import Banner from '../components/Banner.vue'
export default {
  components: {
    Banner
  },
  data() {
    return {
      show: false
    }
  }
}
</script>

<style lang="scss">
$default-b: #474747;

body {
  font-family: 'Raleway', sans-serif;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url('~assets/banner-13.jpeg');
  // background-image: linear-gradient(
  //   to right bottom,
  //   #4f839b,
  //   #598da5,
  //   #6396af,
  //   #6da0b9,
  //   #77aac3,
  //   #80b4cb,
  //   #8abed4,
  //   #94c8dc,
  //   #a0d4e5,
  //   #ace0ed,
  //   #baecf6,
  //   #c7f8ff
  // );
  background-size: cover;
  background-attachment: fixed;
  color: $default-b;
}
.page-container {
  height: 100vh;
  width: 100vw;
}
.full-page {
}
.test {
  padding: 0 7vw;
  @media screen and (max-width: 600px) {
    padding: 0 5px;
  }
}
.row {
  margin: 0;
}
a {
  text-decoration: none;
  color: #474747;
  &:hover {
    color: black;
  }
}
.my-navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  .btn {
    margin: 0 15px;
  }
}
.navbar {
  padding-bottom: 0;
  padding-left: 8vw;
  @media screen and (max-width: 600px) {
    padding-left: 0;
    justify-content: center;
  }
  // justify-content: center;
}
.my-btn {
  text-align: center;
  text-decoration: none !important;
  padding: 5px 10px;
  transition: 1s;
  color: white;
  @media screen and (max-width: 600px) {
    padding: 5px 7px;
    h5 {
      font-size: 17px;
    }
  }
  // background: linear-gradient(
  //   rgba(173, 173, 173, 0.05),
  //   rgba(173, 173, 173, 0.05)
  // );
  // border: 1px solid rgba(0, 0, 0, 0.1);
  // box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
/*custom transitions*/
.slide-enter-active {
  animation: slide-in 0.5s ease-out forwards;
}
.slide-leave-active {
  animation: slide-out 0.5s ease-out forwards;
}
@keyframes slide-in {
  from {
    transform: translateX(10px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-out {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(10px);
    opacity: 0;
  }
}
</style>
