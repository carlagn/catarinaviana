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
  justify-content: center;
  top: 0;
  position: fixed;

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: white;
    font-family: 'Work Sans', sans-serif;
    font-size: 80px;
    text-transform: uppercase;
    line-height: 150px;
    margin-left: 2px;
    font-weight: bold;
    &:hover {
      text-decoration: underline;
    }
  }
}
.hamburger {
  position: absolute;
  right: 5px;
  cursor: pointer;
  top: 50%;
  width: 100px;
  padding: 25px;
  justify-content: space-between;
  display: flex;
  height: 100%;
  z-index: 100;
  flex-direction: column;
  transform: translateY(-50%);
}
.bar {
  width: 100%;
  height: 5px;
  background: black;
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
    a {
      text-decoration: none;
      font-size: 100px;
      color: black;
      letter-spacing: 0;
      margin-left: -2px;
      line-height: 70px;
      padding-bottom: 7px;
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
        width: calc(100% - 50px);

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
