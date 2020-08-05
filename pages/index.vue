<template>
  <div class="container">
    <div class="content">
      <ProjectCover :year="2017" :title="[`pa`, `re`, `des`, ` `, `de`, `cou`, `ra`]" :imgUrl="require('~/assets/img/000021.JPG')" />
      <ProjectCover :year="2019" :title="[`bar`, `ce`, `lo`, `na`]" :imgUrl="require('~/assets/img/000023.JPG')" :proj="`barcelona`"/>
      <ProjectCover :year="2018" :title="[`lon`, `don`]" :imgUrl="require('~/assets/img/000059.JPG')" :proj="`london`"/>
      <ProjectCover :year="2019" :title="[`gui`, `lher`, `me`, ` `, `at`, `ho`, `me`]" :imgUrl="require('~/assets/img/000064.JPG')" :proj="`gui`" />

      <!-- <ProjectCover :syllables="4" :title="`barcelona`" :imgUrl="`https://dummyimage.com/400x600/fff/000`" />
      <ProjectCover :syllables="2" :title="`london`" :imgUrl="`https://dummyimage.com/400x600/fff/000`" />
      <ProjectCover :syllables="6" :title="`guilherme at home`" :imgUrl="`https://dummyimage.com/400x600/fff/000`" /> -->
      <!-- <ProjectCover :syllables="2" :title="`askjdfhaskdjfh`" :imgUrl="`https://dummyimage.com/400x600/000/fff`" />
      <ProjectCover :syllables="2" :title="`askjdfhaskdjfh`" :imgUrl="`https://dummyimage.com/400x600/000/fff`" />
      <ProjectCover :syllables="2" :title="`askjdfhaskdjfh`" :imgUrl="`https://dummyimage.com/400x600/000/fff`" />
      <ProjectCover :syllables="2" :title="`askjdfhaskdjfh`" :imgUrl="`https://dummyimage.com/400x600/000/fff`" /> -->
    </div>
  </div>
</template>

<script>
import ProjectCover from "~/components/ProjectCover.vue"
export default {
  components: {
    ProjectCover
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  margin: 38px auto 38px auto;
  @media (min-width: 630px) {
    margin: 53px auto 38px auto;
  }
  @media (min-width: 890px) {
    margin: 78px auto 38px auto;
  }
}

.content {
  /* padding: 0 400px; */
  margin: 0 auto;
  top: -3px;
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
.content div {
  width: calc(50% - 6px);
  margin: 3px;
}
</style>
