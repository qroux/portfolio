<template>
  <div>
    <div class="flip-card">
      <div class="flip-card-inner">
        <div
          :style="{ backgroundImage: `url(${project.photo})` }"
          class="flip-card-front"
        ></div>
        <div class="flip-card-back">
          <img :src="`img/${project.logo}`" alt="" />
          <a :href="project.link" target="_blank" class="">
            <h3 title="Accéder au site">
              {{ project.name }}
            </h3>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    flipped: {
      type: Boolean,
      default: false
    },
    project: {
      type: Object
    }
  }
}
</script>

<style lang="scss">
$strong: #637675;
.flip-card {
  background-color: transparent;
  width: 100%;
  height: 21vh;
  perspective: 1000px;
}
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}
.flip-card-front,
.flip-card-back {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}
.flip-card-front {
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
}
.flip-card-back {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $strong;
  color: white;
  transform: rotateY(180deg);
  img {
    margin-right: 20px;
  }
  h3 {
    font-size: 25px;
    word-break: break-all;
  }
  a {
    color: white;
    transition: 0.5s;
    text-decoration: none;
    &:hover {
      color: black;
    }
  }
}
</style>
