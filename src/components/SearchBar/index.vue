//搜索组件
<template>
  <div class="search-bar">
    <div class="placeholder-warp">
      <div :style="style">
        <span v-for="(item, index) in placeholder" :key="index">{{
          item
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  props: {
    placeholder: Array,
  },
  data() {
    return {
      activeIndex: 0,
    };
  },
  computed: {
    style() {
      return {
        marginTop: -this.activeIndex * 30 + "px",
      };
    },
  },
  created() {
    setInterval(() => {
      this.activeIndex += 1;
      if (this.activeIndex >= this.placeholder.length) {
        this.activeIndex = 0;
      }
    }, 2000);
  },
};
</script>

<style lang="scss" scoped>
.search-bar {
  width: 100%;
  height: 30px;
  background: rgb(245, 242, 242);
  border-radius: 40px;
  overflow: hidden;
  .placeholder-warp {
    font-size: 12px;
    color: #999;
    padding: 0px 40px;
    line-height: 30px;
    span {
      display: block;
    }
  }
}
</style>