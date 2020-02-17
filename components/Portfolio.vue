<template>
  <b-container fluid>
    <div class="test">
      <div class="portfolio-container py-5 bg-light">
        <div class="title">
          <h2 class="mb-4">Portfolio</h2>
        </div>
        <div class="grid-container">
          <b-tabs content-class="">
            <b-tab title="Javascript" active>
              <Projects :projects="reactProjects" />
            </b-tab>
            <b-tab title="Ruby">
              <Projects :projects="rubyProjects" />
            </b-tab>
          </b-tabs>
        </div>
        <br />
        <div class="container">
          <Arrow :path="'/contacts'" />
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
import Arrow from '../components/Arrow.vue'
import Projects from './portfolio/Projects.vue'
export default {
  components: {
    Arrow,
    Projects
  },
  data() {
    return {
      rubyProjects: [
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
        }
      ],
      reactProjects: [
        {
          name: 'SmartContracts',
          lang: 'Javascript + BlockChain',
          photo: 'img/kickstarter.png',
          logo: 'eth-logo.png',
          link: 'https://kickstarter-copy.herokuapp.com'
        },
        {
          name: 'React + Redux',
          lang: 'React',
          photo: 'img/cursed-twitch.png',
          logo: 'react-redux.png',
          link: 'https://react-stream-client.herokuapp.com'
        },
        {
          name: 'Vue + Firebase',
          lang: 'Vue.js',
          photo: 'img/stocks.png',
          logo: 'vue-logo.png',
          link: 'https://stocks-portfolio-vue.herokuapp.com'
        },
        {
          name: 'Cabinet Dentaire',
          lang: 'Vue + Nuxt',
          photo: 'img/nuxt-cabinet.png',
          logo: 'nuxt-logo.png',
          link: 'http://dr-roux-gilbert.chirurgiens-dentistes.fr'
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
.type-container {
  border: 1px solid red;
}
.projects {
  border: 1px solid blue;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-auto-flow: column;
}
</style>
