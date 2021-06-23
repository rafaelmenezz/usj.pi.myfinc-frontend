<template>
  <div id="app">
    <div class="uk-container uk-width-2-3 uk-margin-top">
      <Header />
      <Main />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "@/components/templates/home/Header";
import Main from "@/components/templates/home/Main";
import Footer from "@/components/templates/home/Footer";

export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer,
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



/* Custom default button */
.btn-secondary,
.btn-secondary:hover,
.btn-secondary:focus {
  color: #333;
  text-shadow: none; /* Prevent inheritance from `body` */
  background-color: #fff;
  border: 0.05rem solid #fff;
}

#app {

  -webkit-box-pack: center;
  justify-content: center;
  color: #fff;
  margin: 0;
  background-color: #333;
  text-shadow: 0 0.05rem 0.1rem rgb(0 0 0 / 50%);
  box-shadow: inset 0 0 5rem rgb(0 0 0 / 50%);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
}


</style>
