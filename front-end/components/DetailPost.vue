<template>
  <v-col cols="8">
    <div class="detail-post">
      <img :src="detail.articleImg" alt="" width="100%" height="400" />

      <h1>{{ detail.articleTitle }}</h1>
      <h3>{{ detail.articleSubtitle }}</h3>
      <p>
        {{ detail.articleText }}
      </p>
      <v-row justify="space-between">
        <v-col>
          <p>{{ detail.articleDate }}</p>
          <br />
        </v-col>
      </v-row>
    </div>
  </v-col>
</template>

<script>
export default {
  naem: "DetailComponent",
  props: {
    detail: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 2.5rem !important;
}
h3 {
  font-size: 2rem !important;
  border-bottom: 1px solid #00c984;
  font-weight: 300;
}
p {
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: 500;
}
</style>
