<template>
  <b-container fluid>
    <div class="test">
      <div class="bg-light">
        <b-row class="pres-container">
          <b-col xs="12" md="9">
            <div class="pres">
              <img src="~@/assets/portrait.jpg" alt="" />
              <div class="pres-text">
                <h2>Quentin Roux - Juriste/Codeur</h2>
                <hr />
                <h5>
                  <strong>Pourquoi</strong>
                </h5>
                <h5>
                  Juriste de formation, je suis finalement tombé dans la
                  programmation en cherchant à coder des smartcontracts sur
                  blockchain ethereum.
                </h5>
                <br />
                <hr />
                <h5>
                  <strong>Comment</strong>
                </h5>
                <h5>
                  Après une période de découverte en autodidacte, j'ai fini par
                  suivre une formation de développeur Fullstack au Wagon
                  Marseille (batch #212).
                </h5>
                <br />
                <hr />
                <h5>
                  <strong>Maintenant</strong>
                </h5>
                <h5>
                  Je développe en langage Ruby et Javascript ( Backend/Frontend
                  ).
                </h5>
                <br />
              </div>
            </div>
          </b-col>
          <div class="container">
            <Arrow :path="'/stacks'" />
          </div>
        </b-row>
      </div>
    </div>
  </b-container>
</template>

<script>
import Arrow from '../components/Arrow.vue'
export default {
  components: {
    Arrow
  }
}
</script>

<style scoped lang="scss">
.pres-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
.pres {
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 15px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
}
.pres img {
  height: 30vh;
  width: auto;
  margin-top: 100px;
  @media screen and (max-width: 600px) {
    height: 40vh;
    width: auto;
    margin-top: 0px;
  }
}
.pres-text {
  text-align: left;
  margin-left: 5vw;
  word-break: break-word;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    text-align: center;
    margin-left: 0;
    padding-top: 15px;
  }
  h2 {
    text-align: center;
  }
}
</style>
