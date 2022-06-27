<template>
  <v-app id="header" :class="{ darkTema: mod }">
    <header>
      <Navigation></Navigation>
    </header>

    <section>
      <v-container>
        <v-row justify="end" align="center">
          <v-col cols="auto">
            <v-switch v-model="mod" color="#00cccc"> </v-switch>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <v-main>
      <Nuxt />
    </v-main>

    <v-container>
      <v-row justify="start">
        <v-col cols="auto">
          <v-btn icon href="#header">
            <v-icon color="#00c984" size="40"> mdi-arrow-up-thick </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <br /><br />
    <br /><br />
    <br />
    <v-footer
      :absolute="true"
      color="black"
      class="ma-0 pa-0"
      :class="{ darkTema: mod }"
    >
      <v-container>
        <v-row justify="center">
          <v-col cols="12">
            <p class="text-center">&copy; {{ new Date().getFullYear() }}</p>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import Navigation from "../components/Navigation.vue";

export default {
  name: "HomePage",
  data() {
    return {
      mod: false,
    };
  },

  components: {
    Navigation,
  },
};
</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
}
header {
  position: sticky;
  top: 0;
  z-index: 50000;
  background-color: white;
}

.darkTema {
  .v-select__selections {
    color: white !important;
  }
  textarea {
    color: white !important;
  }
  header {
    background-color: #32475b;
  }
  background-color: #32475b !important;
  .black--text {
    color: white !important;
  }

  a {
    color: white !important;
  }

  .active {
    color: #00c984 !important;
  }
  hr {
    border-top-color: #00c984 !important;
    border-right-color: #00c984 !important;
    border-bottom-color: #00c984 !important;
    border-left-color: #00c984 !important;
    background-color: #00c984 !important;
  }
  h3 {
    color: white;
  }

  h1 {
    color: white;
  }
  p {
    color: white;
    margin-bottom: 0px;
  }
  strong {
    color: white;
  }

  .card {
    &:hover {
      border-bottom: 1px solid white !important;
    }
  }
  input {
    color: white !important;
  }

  .theme--light.v-text-field > .v-input__control > .v-input__slot:before {
    color: white !important;
  }
  label {
    color: white !important;
  }

  .v-card {
    background-color: #32475b;
  }
}
</style>
