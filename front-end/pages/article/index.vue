<template>
  <section>
    <v-container>
      <v-row justify="center">
        <v-col cols="6">
          <h1 class="py-10 text-center">Makale Formu</h1>
          <hr color="black" />
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row justify="center">
        <v-col cols="6">
          <v-alert
            v-model="alert"
            color="success"
            class="white--text text-center"
            dismissible
            >Makale Paylaşıldı</v-alert
          >
          <form method="post">
            <v-text-field
              v-model="articleImg"
              :error-messages="imgError"
              @focus="$v.articleImg.$touch()"
              color="black"
              label="makale resmi"
            ></v-text-field>
            <v-text-field
              v-model="articleTitle"
              :error-messages="titleError"
              @focus="$v.articleTitle.$touch()"
              color="black"
              label="makale başlığı"
            ></v-text-field>
            <v-text-field
              v-model="articleSubTitle"
              :error-messages="subtitleError"
              @focus="$v.articleSubTitle.$touch()"
              color="black"
              label="makale altbaşlığı"
            ></v-text-field>
            <v-textarea
              v-model="articleText"
              :error-messages="textError"
              @focus="$v.articleText.$touch()"
              color="black"
              label="makale yazısı"
            ></v-textarea>
            <v-select
              v-model="articleCatagory"
              :error-messages="catagoryError"
              @focus="$v.articleCatagory.$touch()"
              color="black"
              :items="items"
              label="katagori"
            ></v-select>
            <v-row justify="center" align="center">
              <v-col cols="auto">
                <v-btn
                  color="#00C984"
                  :disabled="$v.$invalid"
                  @click="articleForm()"
                  class="white--text"
                  >Ekle</v-btn
                >
              </v-col>
            </v-row>
          </form>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import axios from "axios";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      articleImg: null,
      articleTitle: "",
      articleSubTitle: "",
      articleText: "",
      items: ["agenda", "art", "series", "sport"],
      articleCatagory: "",
      alert: false,
    };
  },

  validations: {
    articleImg: {
      required,
      minLength: minLength(3),
    },
    articleTitle: {
      required,
      minLength: minLength(3),
    },
    articleSubTitle: {
      required,
      minLength: minLength(3),
    },
    articleText: {
      required,
      minLength: minLength(3),
    },
    articleCatagory: {
      required,
      minLength: minLength(3),
    },
  },
  computed: {
    imgError() {
      const errors = [];
      if (!this.$v.articleImg.$dirty) return errors;
      !this.$v.articleImg.required && errors.push("Bu Alan Boş Geçilmez");
      !this.$v.articleImg.minLength && errors.push("En Az 3 Karakter Olmalı");
      return errors;
    },
    titleError() {
      const errors = [];
      if (!this.$v.articleTitle.$dirty) return errors;
      !this.$v.articleTitle.required && errors.push("Bu Alan Boş Geçilmez");
      !this.$v.articleTitle.minLength && errors.push("En Az 3 Karakter Olmalı");
      return errors;
    },
    subtitleError() {
      const errors = [];
      if (!this.$v.articleSubTitle.$dirty) return errors;
      !this.$v.articleSubTitle.required && errors.push("Bu Alan Boş Geçilmez");
      !this.$v.articleSubTitle.minLength &&
        errors.push("En Az 3 Karakter Olmalı");
      return errors;
    },
    textError() {
      const errors = [];
      if (!this.$v.articleText.$dirty) return errors;
      !this.$v.articleText.required && errors.push("Bu Alan Boş Geçilmez");
      !this.$v.articleText.minLength && errors.push("En Az 3 Karakter Olmalı");
      return errors;
    },
    catagoryError() {
      const errors = [];
      if (!this.$v.articleCatagory.$dirty) return errors;
      !this.$v.articleCatagory.required && errors.push("Bu Alan Boş Geçilmez");
      !this.$v.articleCatagory.minLength &&
        errors.push("En Az 3 Karakter Olmalı");
      return errors;
    },
  },
  created() {},
  methods: {
    articleForm() {
      const postForm = axios
        .post(`http://localhost:5000/users/article-post`, {
          articleImg: this.articleImg,
          articleTitle: this.articleTitle,
          articleSubTitle: this.articleSubTitle,
          articleText: this.articleText,
          articleCatagory: this.articleCatagory,
        })
        .then((res) => {
          this.alert = true;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
