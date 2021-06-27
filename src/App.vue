<template>
  <div id="app" class="uk-margin-remove">
    <div class="corpo">
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import { baseApiUrl, userKey } from "@/global"
import axios from 'axios'
import Header from "@/components/templates/home/Header"
import Main from "@/components/templates/home/Main"
import Footer from "@/components/templates/home/Footer"

export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer,
  },
  data: function () {
    return {
      validatingToken: true,
    };
  },

   methods: {
    async validateToken() {
      this.validatingToken = true;
      const json = localStorage.getItem(userKey);
      const userData = JSON.parse(json);
     
      this.$store.commit("setUser", null);
        
      if (!userData) {
    
        this.validatingToken = false;
        this.$router.push({ name: "home" });

        return;
      }
      
      const res = await axios.post(`${baseApiUrl}/validateToken`, userData)

      if (res.data) {
        this.$store.commit("setUser", userData);

      } else {
        localStorage.removeItem(userKey);
        this.$router.push({ name: "home" });
      }

    },
    loadDataHoje() {
      this.hoje = new Date();
      this.seisMeses = new Date();
      this.seisMeses.setDate(this.hoje.getDate() - 180);
    },
    loadAdmins() {
      this.user = JSON.parse(localStorage.getItem(userKey));
      const url = `${baseApiUrl}/admin/${this.user.id}`;
      axios.get(url).then((res) => {
        this.admin = res.data;
      });
    },
  },
  mounted() {

  },
  created() {
  
  this.validateToken();
  },
};
</script>

<style scoped>
a,
a:focus,
a:hover {
  color: #fff;
}
text-center {
  text-align: center !important;
}

#app {
  -webkit-box-pack: center;
  justify-content: center;

  height: 100vh;
  text-align: center;
  color: #fff;
  margin: 0;
  background-color: #333;
  text-shadow: 0 0.05rem 0.1rem rgb(0 0 0 / 50%);
  box-shadow: inset 0 0 5rem rgb(0 0 0 / 50%);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
}
.corpo {
  width: 100vw;
}
</style>
