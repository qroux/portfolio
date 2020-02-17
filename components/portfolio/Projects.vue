<template>
  <div class="mt-4">
    <Test />
    <b-container fluid class="justify-content-center">
      <b-row class="text-center">
        <b-col
          v-for="project in projects"
          xs="12"
          sm="6"
          md="4"
          xl="3"
          class="project-card px-2 mb-3"
        >
          <Project :project="project" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Project from './Project'
export default {
  components: {
    Project
  },
  props: {
    projects: {
      default: () => [
        {
          name: 'Notice-Droit.fr',
          lang: 'Ruby',
          photo: 'img/notice.png',
          logo: 'ruby-logo.png',
          link: 'https://www.notice-droit.fr'
        }
      ],
      type: Array
    }
  }
}
</script>
