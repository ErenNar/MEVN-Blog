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
            mdi-theater
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
  name: "SeriesPage",
  data() {
    return {};
  },

  async asyncData({ $axios }) {
    try {
      const news = await $axios.$get(
        "http://localhost:5000/users/series-article"
      );

      return { news: news };
    } catch (error) {
      console.log(error);
    }
  },
  component: {
    NewsCard,
  },
};
</script>
