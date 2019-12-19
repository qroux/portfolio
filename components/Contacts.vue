<template>
  <b-container fluid class="px-0">
    <div class="test bg-light bs">
      <div class="py-5 text-center">
        <h2>Contacts</h2>
        <div class="container">
          <hr />
        </div>
        <b-row>
          <b-col class="contacts-container">
            <div>
              <div class="contact-row">
                <h3>
                  <font-awesome-icon :icon="['fab', 'github']" />
                </h3>
                <a href="https://github.com/qroux" target="_blank">
                  <h3>github.com/qroux</h3>
                </a>
              </div>
              <div class="contact-row">
                <h3>
                  <font-awesome-icon :icon="['far', 'paper-plane']" />
                </h3>
                <a>
                  <h3>quentin.roux@hotmail.fr</h3>
                </a>
              </div>
              <div class="contact-row">
                <h3>
                  <font-awesome-icon :icon="['fab', 'linkedin']" />
                </h3>
                <a
                  href="https://www.linkedin.com/in/quentin-roux-445164182/"
                  target="_blank"
                >
                  <h3>linkedIn</h3>
                </a>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
  </b-container>
</template>

<style scoped lang="scss">
.bs {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
.contacts-container {
  display: flex;
  justify-content: center;
  padding: 30px 0;
}
.contact-row {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 600px) {
    padding: 5px 5px;
    h3 {
      font-size: 22px;
    }
  }
}
.contact-row img {
  height: 35px;
  width: 35px;
}
h3 {
  text-align: left !important;
}
a {
  opacity: 0.6;
  text-decoration: none;
  transition: 1s;
  cursor: pointer;
}
.contact-row:hover a {
  opacity: 1;
  transform: translateY(2px);
  transition: 1s;
}
</style>
