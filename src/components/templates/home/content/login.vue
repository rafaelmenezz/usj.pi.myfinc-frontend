<template>
  <div>
    <form>
      <div class="auth-title">{{ showSignup ? 'Cadastro' : 'Login' }}</div>
      <hr class="uk-width-1-3 uk-margin-auto" />
      <div class="uk-margin">
        <input v-if="showSignup" v-model="user.name" class="uk-input uk-width-1-3" type="text" placeholder="Nome" />
      </div>
      <div class="uk-margin">
        <input  v-model="user.login" class="uk-input uk-width-1-3" type="text" placeholder="Login" />
      </div>
      <div class="uk-margin">
        <input v-if="showSignup" v-model="user.email" class="uk-input uk-width-1-3" type="text" placeholder="E-Mail" />
      </div>

      <div class="uk-margin">
        <input
          v-model="user.senha"
          class="uk-input uk-width-1-3"
          type="password"
          placeholder="Senha"
        />
      </div>
      <div class="uk-margin">
        <input
          v-if="showSignup" 
          v-model="user.confirmaSenha"
          class="uk-input uk-width-1-3"
          type="password"
          placeholder="Confirmar Senha"
        />
      </div>
      <div class="uk-margin">
        <p class="uk-width-1-2 uk-margin-auto" uk-grid>
          <vk-button v-if="showSignup" class="uk-margin uk-width-1-2 blue" type="secondary"
            >Cadastrar</vk-button
          >
           <vk-button v-else class="uk-margin uk-width-1-2 green" type="secondary"
            >Entrar</vk-button
          >
        </p>
      </div>
    </form>
    <a href @click.prevent="showSignup = !showSignup">
      <span v-if="showSignup">Já tem cadastro? Acesse o Login!</span>
      <span v-else>Não tem cadastro? Registre-se aqui!</span>
    </a>
  </div>
</template>

<script>
import { baseApiUrl, showError, userKey } from "@/global";
import axios from "axios";

export default {
  name: "Login",
  data: () => ({
    showSignup: false,
    user: {},
  }),
  methods: {
    signin() {
      axios
        .post(`${baseApiUrl}/signin`, this.user)
        .then((res) => {
          this.$store.commit("setUser", res.data);
          localStorage.setItem(userKey, JSON.stringify(res.data));
          this.$router.push({ path: "/" });
        })
        .catch(showError);
    },
    signup() {
      axios
        .post(`${baseApiUrl}/signup`, this.user)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.user = {};
          this.showSignup = false;
        })
        .catch(showError);
    },
  },
};
</script>

<style scoped>
.green {
  background-color: rgb(74, 190, 74);
  color: #fff;
  width: 275px;
  padding: 10;
}
.green:hover {
  background-color: rgba(74, 190, 74, 0.25);
  color: #fff;
}
.blue {
  background-color: rgb(71, 101, 202);
  color: #fff;
   width: 275px;
}
.blue:hover {
  background-color: rgba(71, 101, 202, 0.25);
  color: #fff;
}

 .auth-title {
        font-size: 1.2rem;
        font-weight: 100;
        margin-top: 10px;
        margin-bottom: 15px;
    }
</style>