<template>
  <b-container fluid>
    <div class="test">
      <div class="stacks-container bg-light py-5">
        <div class="stack-title">
          <h2 class="mb-4">Stacks</h2>
          <div class="container">
            <hr />
          </div>
        </div>
        <b-row class="justify-content-center">
          <StackList
            v-for="(stack, index) in stacks"
            :stack="stack"
            :index="index"
          />
        </b-row>
        <div class="stack-title">
          <h2 class="mb-4">Autres</h2>
          <div class="container">
            <hr />
          </div>
        </div>
        <b-row class="justify-content-center">
          <StackList
            v-for="(stack, index) in other"
            :stack="stack"
            :index="index + 3"
          />
        </b-row>
        <b-row>
          <div class="container">
            <Arrow :path="'/portfolio'" />
          </div>
        </b-row>
      </div>
    </div>
  </b-container>
</template>

<script>
// import Stack from '../components/Stack.vue'
import Arrow from '../components/Arrow.vue'
import StackList from '../components/stacks/StackList.vue'
export default {
  components: {
    // Stack,
    StackList,
    Arrow
  },
  data() {
    return {
      stacks: [
        {
          a: {
            type: 'FullStack',
            lang: 'Rails 6',
            logo: 'rails.png',
            title: 'Ruby'
          },
          b: {
            type: 'FullStack',
            lang: 'Sinatra',
            logo: 'sinatra-logo.png'
          },
          c: {
            type: 'Database',
            lang: 'Postgresql',
            logo: 'pg-logo.png'
          },
          d: {
            type: 'Testing',
            lang: 'Rspec',
            logo: 'rspec-logo.png'
          }
        },
        {
          a: {
            type: 'Backend',
            lang: 'es6',
            logo: 'es6-logo.png',
            title: 'Javascript'
          },
          b: {
            type: 'Backend',
            lang: 'Node + Express',
            logo: 'node-logo.svg',
            title: 'Javascript'
          },
          c: {
            type: 'Frontend',
            lang: 'React + Redux',
            logo: 'react-redux.png',
            title: 'Javascript'
          },
          d: {
            type: 'Frontend',
            lang: 'Vue + Nuxt',
            logo: 'vue-logo.png'
          }
          // d: {
          //   type: 'Testing',
          //   lang: 'Jest + Mocha',
          //   logo: 'jest-logo.png'
          // }
        }
        // {
        //   a: {
        //     type: 'Devops',
        //     lang: 'Docker',
        //     logo: 'docker-logo.png',
        //     title: 'Devops'
        //   },
        //   b: {
        //     type: 'Frontend',
        //     lang: 'ES6 + Webpack',
        //     logo: 'es6-logo.png'
        //   },
        //   c: {
        //     type: 'Database',
        //     lang: 'Postgresql',
        //     logo: 'pg-logo.png'
        //   },
        //   d: {
        //     type: 'Testing',
        //     lang: 'Rspec',
        //     logo: 'rspec-logo.png'
        //   }
        // },
        // {
        //   a: {
        //     type: 'Backend',
        //     lang: 'Solidity + Node',
        //     logo: 'solidity-logo.png',
        //     title: 'BlockChain'
        //   },
        //   b: {
        //     type: 'Frontend',
        //     lang: 'Web3 + React',
        //     logo: 'web3-logo.png'
        //   }
        //   // d: {
        //   //   type: 'Testing',
        //   //   lang: 'Mocha',
        //   //   logo: 'jest-logo.png'
        //   // }
        // }
      ],
      other: [
        {
          a: {
            type: 'Devops',
            lang: 'Docker',
            logo: 'docker-logo.png',
            title: 'Devops'
          }
        },
        {
          a: {
            type: 'Backend',
            lang: 'Solidity + Node',
            logo: 'solidity-logo.png',
            title: 'BlockChain'
          },
          b: {
            type: 'Frontend',
            lang: 'Web3 + React',
            logo: 'web3-logo.png'
          }
          // d: {
          //   type: 'Testing',
          //   lang: 'Mocha',
          //   logo: 'jest-logo.png'
          // }
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
// .full-stack {
//   padding: 15px 50px;
//   svg {
//     transition: 0.5s;
//   }
//   .list-size {
//     width: 350px;
//     padding: 0 !important;
//   }
//   img {
//     width: 30px;
//     height: 30px;
//   }
// }
.stacks-container {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
.stack-title {
  text-align: center;
  // background-color: #b4d7d6;
  // margin-bottom: 30px;
}
.stack {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  background-color: white;
}
</style>
