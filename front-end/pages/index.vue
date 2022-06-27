<template>
  <article>
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <v-icon
            class="d-flex flex-directtion-row justify-content-center"
            color="black"
            size="90"
          >
            mdi-home
          </v-icon>
          <hr color="black " class="my-5" />
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row justify="start">
        <v-col cols="12">
          <OvarleyCard :card="card" />
        </v-col>
      </v-row>
    </v-container>

    <br /><br /><br />

    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12">
          <v-icon
            class="d-flex flex-directtion-row justify-content-center"
            color="black"
            size="90"
          >
            mdi-newspaper-variant
          </v-icon>
          <hr color="black" class="my-5" />
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row justify="center" align="end">
        <news-card :news="news"></news-card>
      </v-row>
    </v-container>

    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12">
          <v-icon
            class="d-flex flex-directtion-row justify-content-center"
            color="black"
            size="90"
          >
            mdi-thumbs-up-down</v-icon
          >
          <hr color="black" class="my-5" />
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12">
          <v-row justify="center" align="center">
            <v-col cols="2">
              <div class="social-card">
                <h1>
                  <v-icon color="white" size="50">mdi-facebook</v-icon>
                </h1>
                <hr color="white" class="my-5" />

                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Animi saepe quaerat ipsum reiciendis sunt voluptate impedit
                  laudantium odio repellendus facilis.
                </p>
                <p>
                  <v-btn color="white" class="white--black">Follow</v-btn>
                </p>
              </div>
            </v-col>
            <v-col cols="2">
              <div class="social-card">
                <h1>
                  <v-icon color="white" size="50">mdi-instagram</v-icon>
                </h1>
                <hr color="white" class="my-5" />

                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Animi saepe quaerat ipsum reiciendis sunt voluptate impedit
                  laudantium odio repellendus facilis.
                </p>
                <p>
                  <v-btn color="white" class="white--black">Follow</v-btn>
                </p>
              </div>
            </v-col>
            <v-col cols="2">
              <div class="social-card">
                <h1>
                  <v-icon color="white" size="50">mdi-twitter</v-icon>
                </h1>
                <hr color="white" class="my-5" />

                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Animi saepe quaerat ipsum reiciendis sunt voluptate impedit
                  laudantium odio repellendus facilis.
                </p>
                <p>
                  <v-btn color="white" class="white--black">Follow</v-btn>
                </p>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </article>
</template>

<script>
import NewsCard from "~/components/newsCard.vue";

import OvarleyCard from "../components/OvarleyCard.vue";
export default {
  name: "IndexPage",
  components: {
    OvarleyCard,
    NewsCard,
  },
  data() {
    return {};
  },
  async asyncData({ $axios }) {
    try {
      const card = await $axios.$get(
        "http://localhost:5000/users/limit-article"
      );
      const news = await $axios.$get("http://localhost:5000/users/all-article");

      return { news: news, card: card };
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style lang="scss" scoped>
.social-card {
  padding: 2rem;
  background-color: black;
  text-align: center !important;
  color: white;
  transition: 0.5s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
}
</style>
