<template>
  <nav class="nav nav-masthead justify-content-center">
    <router-link class="nav-link"  :class="{ active: isActive('/')}"   to="/"> home </router-link>
    <router-link class="nav-link"  :class="{ active: isActive('/about')}"  to="/about"> sobre </router-link>
    <router-link class="nav-link"  :class="{ active: isActive('/login')}"  to="/login"> login </router-link>
  </nav>
</template>

<script>
export default {
  name: "Navegacao",
  data(){
    return{
        isActive: function(path){
            if(this.$route.path == path){
                return true;
            }
          }
    
        }
    }
}
</script>

<style scoped>
.nav-masthead .nav-link {
  padding: 0.25rem 0;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.5);
  background-color: transparent;
  border-bottom: 0.25rem solid transparent;
}


.nav-masthead .nav-link:hover,
.nav-masthead .nav-link:focus {
  border-bottom-color: #fff;
  text-decoration: none;
  color: #fff;
}

.nav-masthead .nav-link + .nav-link {
  margin-left: 1rem;
}

.nav-masthead .active {
  color: #fff;
  border-bottom-color:  #fff;
}


.btn-secondary,
.btn-secondary:hover,
.btn-secondary:focus {
  color: #333;
  text-shadow: none; /* Prevent inheritance from `body` */
  background-color: #fff;
  border: 0.05rem solid #fff;
}
@media (min-width: 48em) {
  .nav-masthead {
    float: right;
  }
}
</style>