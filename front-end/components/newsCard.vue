<template>
  <v-col cols="12">
    <div class="card" v-for="(item, n) in news" :key="n">
      <nuxt-link tag="p" :to="'/' + item.articleCatagory + '/' + item._id">
        <v-row align="center">
          <v-col cols="auto">
            <img :src="item.articleImg" width="230" height="150" alt="" />
          </v-col>
          <v-col>
            <h3 class="card-title">{{ item.articleTitle }}</h3>
            <span class="card-date">{{ item.articleText }}</span>
          </v-col>
        </v-row>
      </nuxt-link>
    </div>
  </v-col>
</template>

<script>
export default {
  props: {
    news: {
      type: Array,
      require: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  cursor: pointer;
  border-right: 5px solid #00c984;
  padding: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  .card-title {
    text-decoration: none !important;
    font-weight: 500;
    font-size: 1.5rem;
  }
  &:hover {
    color: #00c984;
    border-bottom: 1px solid black;
  }
}
</style>
