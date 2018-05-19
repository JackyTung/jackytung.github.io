<script>
export default {
  name: 'Navbar',
  methods: {
    closeCollapse() {
      $('#navbarNavAltMarkup').collapse('hide');
    },
  },
};
</script>

<template>
  <nav class="Navbar navbar navbar-expand-lg fixed-top">
    <div class="container-fluid container--max-width">
    <router-link to="/home" class="navbar-brand offset-xs-0 offset-lg-1" v-on:click.native="closeCollapse">
      <img class="brand" src="~Src/assets/images/Jacky_Logo.svg">
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ml-auto col-lg-4">
        <router-link to="#" class="nav-item nav-link nav-text col-lg" v-on:click.native="closeCollapse">Blog</router-link>
        <router-link to="#" class="nav-item nav-link nav-text col-lg" v-on:click.native="closeCollapse">About</router-link>
      </div>
    </div>
  </div>
  </nav>
</template>

<style lang="scss">
@import '~Src/stylesheets/main.scss';
.Navbar {
  background-color: rgba(black, 0.5);

  .brand {
    width: 19rem;

    @include mobile {
      padding: 0.5rem 1rem;
    }
  }

  .nav-text {
    color: white;
    padding: 2.5rem 0;
    @include font-s5-size;
    text-decoration: none;
    text-align: center;

    &:hover {
      background-color: rgba(#585858, 1);
    }

    @include mobile {
      text-align: left;
      padding-left: 1rem;
    }
  }

  // overwrite
  &.navbar {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 0;
  }

  .navbar-toggler-icon {
    background-image: url('~Src/assets/images/icon-menu.svg');
    fill: white;
  }

  .navbar-toggler {
    outline: none;
  }
}
</style>
