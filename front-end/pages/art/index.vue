<template>
  <article>
    <v-container>
      <v-row>
        <v-col>
          <v-icon
            color="black"
            size="90"
            class="d-flex flex-direction-row justify-content-center"
          >
            mdi-balloon
          </v-icon>
          <hr color="black" class="my-5" />
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <v-row justify="center" align="start">
        <news-card :news="news"></news-card>
      </v-row>
    </v-container>
  </article>
</template>

<script>
import NewsCard from "~/components/newsCard.vue";
export default {
  name: "ArtPage",
  data() {
    return {};
  },
  async asyncData({ $axios }) {
    try {
      const news = await $axios.$get("http://localhost:5000/users/art-article");

      return { news: news };
    } catch (error) {
      console.log(error);
    }
  },
  components: {
    NewsCard,
  },
};
</script>

<style></style>
