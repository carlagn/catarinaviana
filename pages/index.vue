<template>
  <div class="container">
    <div class="content">
      <img src="https://dummyimage.com/400x600/000/fff">
      <img src="https://dummyimage.com/400x600/000/fff">
      <img src="https://dummyimage.com/400x600/000/fff">
      <img src="https://dummyimage.com/400x600/000/fff">
      <img src="https://dummyimage.com/400x600/000/fff">
      <img src="https://dummyimage.com/400x600/000/fff">
      <img src="https://dummyimage.com/400x600/000/fff">
      <img src="https://dummyimage.com/400x600/000/fff">
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss">
.container {
  margin: 78px auto 0 auto;
  min-height: 100vh;
}

.content {
  /* padding: 0 400px; */
  margin: 0 auto;
  max-width: 700px;
  display: flex;
  position: relative;
  flex-wrap: wrap;
}

.content::before {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(6,5,82,1) 19%, rgba(9,9,121,1) 35%, rgba(7,53,150,1) 49%, rgba(6,84,171,1) 59%, rgba(4,118,194,1) 70%, rgba(3,149,214,1) 80%, rgba(0,212,255,1) 100%);
}
.content img {
  width: 50%;
  padding: 1px;
}
</style>
