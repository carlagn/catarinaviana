<template>
  <div class="contacts-container">
    <a href="mailto:catarina@gmail.com">e-mail</a>
    <a href="#">instagram</a>
    <a href="#">behance</a>
  </div>
</template>

<script>
</script>

<style scoped lang="scss">
.contacts-container {
  height: 100vh;
  padding-top: 35px;
  display: flex;
  flex-direction: column;
}

.contacts-container a {
  text-decoration: none;
  text-transform: uppercase;
  color: black;
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
</style>
