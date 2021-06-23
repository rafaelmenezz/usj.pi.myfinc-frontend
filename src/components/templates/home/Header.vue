<template>
  <header class="masthead mb-auto">
    <div class="inner">
      <h3 class="masthead-brand">
         <router-link class="nav-link" to="/">  <img src="@/assets/imagens/logo_branca.svg" width="64" alt="" /> </router-link>
       
      </h3>
      <Navegacao />
    </div>
  </header>
</template>

<script>

import Navegacao from '@/components/templates/home/Navegacao'

export default {
  name: "Header",
  components: {
    Navegacao
  }
};
</script>

<style scoped>
.masthead {
  margin-bottom: 2rem;
}

.masthead-brand {
  margin-top: 0;
  margin-bottom: 0;
}

.nav-masthead .nav-link {
  padding: 0.25rem 0;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.5);
  background-color: transparent;
  border-bottom: 0.25rem solid transparent;
}

.nav-masthead .nav-link:hover,
.nav-masthead .nav-link:focus {
  border-bottom-color: rgba(255, 255, 255, 0.25);
}

.nav-masthead .nav-link + .nav-link {
  margin-left: 1rem;
}

.nav-masthead .active {
  color: #fff;
  border-bottom-color: #fff;
}

@media (min-width: 48em) {
  .masthead-brand {
    float: left;
  }
  .nav-masthead {
    float: right;
  }
}
</style>