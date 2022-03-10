<template>
  <div>
    <nav class="Tabs_nav">
      <div class="Tabs_nav_div">
        <router-link
          v-for="(item, index) in title"
          :key="index"
          :class="{
            active: activeClass === index,
            bacolod: back === 1,
          }"
          @click.native="change(index)"
          :to="item.to"
          >{{ item.title }}</router-link
        >
      </div>
    </nav>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabsBar",
  props: {
    title: [Object, Array],
  },
  data() {
    return {
      activeClass: 0,
      back: 0,
    };
  },
  created() {},
  watch: {
    $route: {
      handler: function (route) {
        if (route.fullPath == "/homeBar/recommendBar") {
          this.back = 1;
        } else {
          this.back = 0;
          console.log(this.$route.fullPath);
        }
      },
      immediate: true,
    },
  },
  methods: {
    change(index) {
      this.activeClass = index;
      console.log(this.activeClass);
    },
  },
};
</script>

<style lang="scss" scoped>
.Tabs_nav {
  width: 100%;
  overflow: scroll;
  padding: 10px 0;
  // 去除横滚样式
  &::-webkit-scrollbar {
    display: none;
  }

  &_div {
    width: 150%;
    display: flex;
    justify-content: space-between;
    background: #fff;
    a {
      padding: 10px;
      text-decoration: none;
      color: #000;
      text-align: center;
      &.active {
        color: #f00;
        font-size: 20px;
        border-bottom: 2px solid rgb(255, 0, 0);
      }
      // 路由判断 class
      &.bacolod {
        color: aqua;
        &.active {
           border-bottom: 2px solid rgb(0, 255, 255);
        }
      }
    }
  }
}
</style>