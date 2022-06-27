<template>
  <nav>
    <v-container>
      <v-row justify="space-around" align="center">
        <v-col>
          <v-row align="center">
            <v-col>
              <nuxt-link
                active-class="active"
                exact
                tag="a"
                :to="{ name: 'index' }"
              >
                <img src="../static/logo.png" width="70" height="70" alt=""
              /></nuxt-link>
            </v-col>
            <v-col>
              <nuxt-link active-class="active" exact :to="{ name: 'agenda' }">
                {{ navigasyonItem.agenda }}</nuxt-link
              >
            </v-col>
            <v-col>
              <nuxt-link active-class="active" exact :to="{ name: 'art' }">{{
                navigasyonItem.art
              }}</nuxt-link>
            </v-col>
            <v-col>
              <nuxt-link active-class="active" exact :to="{ name: 'sport' }">{{
                navigasyonItem.sport
              }}</nuxt-link>
            </v-col>
            <v-col>
              <nuxt-link active-class="active" exact :to="{ name: 'Series' }"
                >{{ navigasyonItem.cinema }}
              </nuxt-link>
            </v-col>

            <v-col v-if="auth">
              <v-menu
                offset-y
                min-width="350"
                origin="center center"
                transition="scale-transition"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="#00c984" dark v-bind="attrs" v-on="on">
                    Profil
                  </v-btn>
                </template>
                <v-card>
                  <v-list>
                    <v-list-item>
                      <v-list-item-title>
                        <v-btn
                          @click="$router.push('/article')"
                          active-class="active"
                          >Makale Ekle</v-btn
                        >
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-title>
                        <v-btn @click="logout()"> çıkış yap </v-btn>
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-menu>
            </v-col>

            <v-col>
              <v-btn icon>
                <v-icon color="black" @click="search = !search"
                  >mdi-magnify</v-icon
                >
                <v-dialog class="search" width="300" v-model="search">
                  <v-card>
                    <v-card-title> Ne Aramak İstiyorsunuz </v-card-title>
                    <v-card-text>
                      <v-text-field color="black"></v-text-field>
                    </v-card-text>
                  </v-card>
                </v-dialog>
              </v-btn>
            </v-col>

            <v-col v-if="!auth">
              <v-btn icon @click="signIn = !signIn">
                <v-icon color="black"> mdi-account </v-icon>
              </v-btn>
              <v-dialog width="500" v-model="signIn">
                <v-card>
                  <v-row justify="center">
                    <v-col cols="auto">
                      <v-card-title class="text-center">
                        <img
                          class="text-center"
                          src="../static/logo.png"
                          width="70"
                          height="70"
                          alt=""
                        />
                        <p>Giriş Yap</p>
                      </v-card-title>
                    </v-col>
                  </v-row>
                  <v-divider></v-divider>
                  <v-card-text>
                    <v-text-field
                      v-model="nick"
                      :error-messages="nickError"
                      @focus="$v.nick.$touch()"
                      color="black"
                      label="kullanıcı ad"
                    ></v-text-field>
                    <v-text-field
                      v-model="password"
                      type="password"
                      :error-messages="passwordError"
                      @focus="$v.password.$touch()"
                      color="black"
                      label="şifre"
                    ></v-text-field>
                  </v-card-text>
                  <v-card-actions>
                    <v-row justify="center">
                      <v-col cols="auto">
                        <v-btn
                          color="#00C984"
                          @click="login()"
                          class="white--text"
                          >Giriş Yap</v-btn
                        >
                      </v-col>
                    </v-row>
                  </v-card-actions>

                  <br />
                  <v-card-subtitle>
                    <p class="text-center">
                      MEVN Blog Hesabı Oluşturmak İçin
                      <nuxt-link to="/register"> Tıklayın</nuxt-link>
                    </p>
                  </v-card-subtitle>
                </v-card>
              </v-dialog>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </nav>
</template>

<script>
import axios from "axios";
import { required, minLength, maxLength } from "vuelidate/lib/validators";

export default {
  name: "NavigationComponenT",
  transition: "fade",
  created() {
    if (process.client) {
      if (localStorage.getItem("auth") == "true") {
        this.auth = true;
      } else {
        this.auth = false;
      }
    }
  },

  data() {
    return {
      animationName: undefined,
      isLogin: null,
      signIn: false,
      search: false,
      nick: "",
      password: "",
      auth: null,
      navigasyonItem: {
        title: "MEVN Blog",
        agenda: "Gündem",
        art: "Sanat",
        sport: "spor",
        cinema: "dizi/sinema",
        aritcle: "Makale Ekle",
      },
    };
  },

  validations: {
    nick: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(10),
    },
    password: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(10),
    },
  },

  computed: {
    nickError() {
      const errors = [];
      if (!this.$v.nick.$dirty) return errors;
      !this.$v.nick.required && errors.push("Bu Alan Boş Geçilmez ");
      !this.$v.nick.minLength && errors.push("En Az 3 Karakter Olmalı");
      !this.$v.nick.maxLength && errors.push("En Fazla 10 Karakter Olmalı");
      return errors;
    },
    passwordError() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      // !this.$v.name.decimal && errors.push('Name must be a number')
      !this.$v.password.required && errors.push("Bu Alan Boş Geçilmez ");
      !this.$v.password.minLength && errors.push("En Az 3 Karakter Olmalı");
      !this.$v.password.maxLength && errors.push("En Fazla 10 Karakter Olmalı");
      return errors;
    },
  },

  methods: {
    login() {
      axios
        .post("http://localhost:5000/users/login", {
          nick: this.nick,
          password: this.password,
        })
        .then((res) => {
          if (res.status == 200) {
            localStorage.setItem("token", res.data.token);
            this.isLogin = true;

            if (localStorage.getItem("token") != null) {
              localStorage.setItem("auth", true);
              this.$router.push("/");
              this.auth = true;
            }
          } else {
            this.isLogin = false;
          }
        })
        .catch((err) => {
          console.log(err.response.data.error);
        });
    },
    logout() {
      localStorage.removeItem("token");
      localStorage.setItem("auth", false);
      this.auth = false;
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  font-family: "Times New Roman", Times, serif !important;
  border-bottom: 5px solid #00c984;
  a {
    font-size: 1rem;
    font-weight: 700 !important;
    color: black;
    text-decoration: none;
    text-transform: uppercase !important;
  }
  .active {
    padding-bottom: 1rem;
    color: #00c984;
    font-weight: 700 !important;
  }
}

::v-deep .v-dialog {
  position: absolute !important;
  top: 100px !important;
}
</style>
