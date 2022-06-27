<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="6">
        <v-alert dismissible type="success" v-model="deneme"
          >Kayıt Başarılı</v-alert
        >
        <form>
          <h1 class="text-center py-5">Kayıt Ol</h1>
          <v-text-field
            @focus="$v.mail.$touch()"
            v-model="mail"
            :error-messages="mailError"
            color="black"
            label="E-Posta Adresi"
          ></v-text-field>

          <v-text-field
            @focus="$v.nick.$touch()"
            v-model="nick"
            :error-messages="nickError"
            color="black"
            label="Kullanıcı Ad"
          ></v-text-field>
          <v-text-field
            type="password"
            :error-messages="passwordError"
            @focus="$v.password.$touch()"
            v-model="password"
            color="black"
            label="Şifre"
          ></v-text-field>
          <v-text-field
            type="password"
            :error-messages="repasswordError"
            @focus="$v.repassword.$touch()"
            v-model="$v.repassword.$model"
            color="black"
            label="Şifre Tekrar"
          ></v-text-field>
          <v-row justify="center">
            <v-col cols="auto">
              <v-btn
                :disabled="$v.$invalid"
                @click="registerUser()"
                color="#00C984"
                class="white--text"
                >Kayıt Ol</v-btn
              >
            </v-col>
          </v-row>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {
  required,
  email,
  minLength,
  maxLength,
  sameAs,
} from "vuelidate/lib/validators";

export default {
  data() {
    return {
      mail: "",
      nick: "",
      password: "",
      repassword: "",
      deneme: false,
    };
  },

  validations: {
    mail: {
      required,
      email,
    },
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
    repassword: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(10),
      sameAs: sameAs("password"),
    },
  },

  computed: {
    mailError() {
      const errors = [];
      if (!this.$v.mail.$dirty) return errors;
      !this.$v.mail.required && errors.push("Bu Alan Boş Geçilmez");
      !this.$v.mail.email && errors.push("Geçersiz Email");
      return errors;
    },

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
    repasswordError() {
      const errors = [];
      if (!this.$v.repassword.$dirty) return errors;
      !this.$v.repassword.required && errors.push("Bu Alan Boş Geçilmez ");
      !this.$v.repassword.minLength && errors.push("En Az 3 Karakter Olmalı");
      !this.$v.repassword.maxLength &&
        errors.push("En Fazla 10 Karakter Olmalı");
      !this.$v.repassword.sameAs && errors.push("Şifreler Uyuşmuyor");
      return errors;
    },
  },

  methods: {
    async registerUser() {
      this.deneme = true;
      try {
        const registerApi = await this.$axios.$post(
          "http://localhost:5000/users",
          {
            mail: this.mail,
            nick: this.nick,
            password: this.password,
          }
        );
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
