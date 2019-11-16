<template>
  <div class="navbar-wrapper" :class="{'open-menu': menuOpen}">
    <div class="title">
      <nuxt-link to="/">catarinaviana</nuxt-link>
      <div class="hamburger" @click="toggleMenu">
        <div class="bar bar-1" />
        <div class="bar bar-2" />
        <div class="bar bar-3" />
      </div>
    </div>
    <div v-if="menuOpen" class="menu">
      <nuxt-link to="/about">sobre</nuxt-link>
      <nuxt-link to="/projects">projectos</nuxt-link>
      <nuxt-link to="/contacts">contactos</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  },
  watch: {
    $route (to, from) {
      this.menuOpen = false;
    }
  }
}
</script>

<style scoped lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
.menu {
  background-color: black;
  height: 100vh;
  width: 100%;
  z-index: 99;
  padding-top: 35px;
  display: flex;
  flex-direction: column;
  top: 0;
  position: fixed;
  @media (min-width: 890px) {
    justify-content: center;
  }
  a {
    text-decoration: none;
    text-transform: uppercase;
    color: white;
    font-family: 'Work Sans', sans-serif;
    font-size: 30px;
    text-transform: uppercase;
    margin-left: 2px;
    font-weight: bold;
    line-height: 70px;
    &:hover {
      text-decoration: underline;
    }
    @media (min-width: 630px) {
      font-size: 50px;
      line-height: 100px;
    }
    @media (min-width: 890px) {
      line-height: 150px;
      font-size: 80px;
    }
  }
}
.hamburger {
  position: absolute;
  right: 5px;
  cursor: pointer;
  top: 50%;
  height: 20px;
  width: 30px;
  justify-content: space-between;
  display: flex;
  z-index: 100;
  flex-direction: column;
  transform: translateY(-50%);

  .bar {
    width: 100%;
    height: 4px;
    background: black;
  }

  @media (min-width: 630px) {
    height: 30px;
    width: 50px;
    .bar {
      height: 5px;
    }
  }
}
.navbar-wrapper {
  .title {
    font-family: 'Space Mono', monospace;
    text-transform: uppercase;
    display: block;
    font-weight: 600;
    width: 100%;
    position: fixed;
    text-decoration: none;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    background: white;
    border-bottom: 1px solid black;
    height: 40px;
    a {
      text-decoration: none;
      color: black;
      letter-spacing: 0;
      padding-bottom: 7px;
      font-size: 35px;
      line-height: 35px;
    }

    @media (min-width: 630px) {
      height: 55px;
      a {
        margin-left: -2px;
        font-size: 70px;
        line-height: 50px;
      }
    }
    @media (min-width: 890px) {
      height: 80px;
      a {
        font-size: 100px;
        line-height: 70px;
      }
    }
  }

  &.open-menu {
    .title {
      background: black;
      border-color: white;
      a {
        color: white;
      }
      .bar {
        background: white;
      }
    }
    .hamburger {
      justify-content: center;
      .bar {
        position: absolute;
        width: 100%;

        &-1 {
          transform: rotate(-45deg);
        }
        &-2 {
          display: none;
        }
        &-3 {
          transform: rotate(45deg);
        }
      }
    }
  }
}

.title::after {
  content: "";
}

</style>
