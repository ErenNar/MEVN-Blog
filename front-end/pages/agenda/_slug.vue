<template>
  <v-container>
    <v-row justify="center">
      <detail-post :detail="detail"></detail-post>
    </v-row>
  </v-container>
</template>

<script>
import DetailPost from "~/components/DetailPost.vue";
export default {
  data() {
    return {};
  },

  async asyncData({ $axios, params }) {
    try {
      const detail = await $axios.$get(
        `http://localhost:5000/users/art-article/` + params.slug
      );
      return { detail: detail };
    } catch (error) {
      console.log(error);
    }
  },

  components: { DetailPost },
};
</script>

<style></style>
