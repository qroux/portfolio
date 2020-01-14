<template>
  <b-container fluid>
    <div class="test">
      <div class="portfolio-container py-5 bg-light">
        <div class="title">
          <h2 class="mb-4">Portfolio</h2>
        </div>
        <hr />
        <div class="grid-container">
          <b-row class="test-row">
            <b-col
              v-for="project in projects"
              xs="12"
              sm="10"
              md="5"
              xl="3"
              class="p-0 mt-4 d-flex align-items-start"
            >
              <div
                id="pf-bg"
                :style="{
                  backgroundImage: `url(${project.photo})`
                }"
                class="card"
              >
                <div class="card-content">
                  <a
                    :href="project.link"
                    target="_blank"
                    class="stretched-link"
                  >
                    <h3>{{ project.name }}</h3>
                  </a>
                  <img :src="`img/${project.logo}`" alt="" />
                </div>
              </div>
            </b-col>
          </b-row>
        </div>
        <br />
        <div class="container">
          <Intrests :path="'/contacts'" />
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
import Intrests from '../components/Intrests.vue'
export default {
  components: {
    Intrests
  },
  data() {
    return {
      projects: [
        {
          name: 'Notice-Droit.fr',
          lang: 'Ruby',
          photo: 'img/notice.png',
          logo: 'ruby-logo.png',
          link: 'https://www.notice-droit.fr'
        },
        {
          name: 'Open Data',
          lang: 'Ruby',
          photo: 'img/trust.png',
          logo: 'ruby-logo.png',
          link: 'https://trustpair-test.herokuapp.com'
        },
        {
          name: 'Smartcontracts',
          lang: 'Javascript + BlockChain',
          photo: 'img/kickstarter.png',
          logo: 'eth-logo.png',
          link: 'https://kickstarter-copy.herokuapp.com'
        },
        {
          name: 'Cabinet Dentaire',
          lang: 'Nuxt.js',
          photo: 'img/nuxt-cabinet.png',
          logo: 'nuxt-logo.png',
          link: 'http://dr-roux-gilbert.chirurgiens-dentistes.fr'
        },
        {
          name: 'Vue + Firebase',
          lang: 'Vue.js',
          photo: 'img/stocks.png',
          logo: 'vue-logo.png',
          link: 'https://stocks-portfolio-vue.herokuapp.com'
        }
      ]
    }
  }
}
</script>

<style scoped>
.portfolio-container {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
.title {
  text-align: center;
}
.grid-container {
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.test-row {
  justify-content: center;
}
#pf-bg {
  background-size: cover;
}
.card {
  display: flex;
  justify-content: center;
  color: white;
  height: 200px;
  width: 250px;
  margin: auto;
  background-size: cover;
}
.card-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0);
  height: 80%;
  width: 101%;
  transition: 0.5s;
}
.card-content:hover {
  color: #474747;
  background-color: rgba(255, 255, 255, 1);
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  background-size: cover;
}
.card-content a {
  color: rgba(0, 0, 0, 0);
  transition: 0.5s;
  text-decoration: none;
}
.card-content:hover a {
  color: #474747;
}
.card-content img {
  opacity: 0;
  /*  width: 40px;
  height: 40px;*/
  transition: 0.5s;
}
.card-content:hover img {
  opacity: 1;
}
</style>
