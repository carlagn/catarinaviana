<template>
    <div @mouseover="mouseOverCover" @mouseleave="mouseOutCover" class="cover-wrapper">
    <h2 v-show="active" class="cover-title" :class="[proj]">
      <h5 class="cover-year">{{year}}</h5>
      <span v-for="(sy, idx) in getTitle" :class="{ space: sy.length === 1}">
        {{sy}}
      </span>
    </h2>
    <img :src="this.imgUrl">
  </div>
</template>

<script>
export default {
  props: {
    proj: {
      type: String
    },
    year: {
      type: Number
    },
    title: {
      type: Array,
      required: true,
      default: [""]
    },
    imgUrl: {
      type: String,
      required: true,
      default: ""
    }
  },
  data() {
    return {
      active: false
    }
  },
  computed: {
    getTitle() {
      return this.title;
    }
  },
  methods: {
    mouseOverCover() {
      console.log("over");
      this.active = true;
    },
    mouseOutCover() {
      this.active = false;
    },
    titleBox() {
      console.log(this.syllables);
      console.log(this.imgUrl);
      console.log(this.title);
      const tmpArray = this.title.split(" ");

    }
  }
}
</script>

<style scoped lang="scss">
.cover-wrapper {
  border: 1px solid black;
  position: relative;
  margin: 3px;

  &::after {
    content: "";
    left: 0;
    top: 0;
    position: absolute;
    z-index: 100;
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
  }
  .cover-title {
    position: absolute;
    bottom: 0;

    .cover-year {
      font-size: 75px;
      font-weight: normal;
      font-family: "SequelSansHeavyDisp";
      line-height: 1.1;
    }

    &.barcelona > span {
      font-size: 143px;
    }

    &.gui > span {
      font-size: 109px;
    }

    &.london > span {
      font-size: 150px;
    }

    span {
      display: inline-block;
      font-size: 101px;
      text-transform: uppercase;
      margin: 0 -4px;
      line-height: 0.7;
      font-family: "SequelSansBlackDisp";
      cursor: default;
      font-weight: normal;

      &.space {
        width: 43px;
      }
    }
  }
}
</style>
