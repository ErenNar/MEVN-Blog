<template>
  <v-row justify="center" align="center">
    <div class="ma-5" v-for="(item, i) in card" :key="i">
      <v-hover>
        <template v-slot:default="{ hover }">
          <nuxt-link :to="'/' + item.articleCatagory + '/' + item._id">
            <v-card height="300" width="300">
              <img :src="item.articleImg" alt="" width="100%" height="100%" />
              <p class="card-description">{{ item.articleTitle }}</p>

              <v-row justify="center">
                <v-fade-transition>
                  <v-overlay v-if="hover" absolute> </v-overlay>
                </v-fade-transition>
              </v-row>
            </v-card>
          </nuxt-link>
        </template>
      </v-hover>
    </div>
  </v-row>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    card: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.card-description {
  position: absolute;
  z-index: 500;
  bottom: 15px;
  margin: 1rem;
  color: white;
  font-weight: 800;
}
</style>
