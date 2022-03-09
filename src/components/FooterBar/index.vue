<template>
  <div class="foot">
    <router-link
      v-for="(item, index) in tabs"
      :key="index"
      :to="item.path"
      active-class="active"
    >
      <i :class="['default', 'iconfont', item.icon]"></i>
      <i :class="['select', 'iconfont', item.selectIcon]"></i>
      <span>{{ item.text }}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "FooterBar",
  data() {
    return {
      tabs: [
        {
          path: "/homeBar",
          icon: "icon-zhuye",
          selectIcon: "icon-maoyandianying",
          text: "首页",
        },
        {
          path: "/cinemaBar",
          icon: "icon-dianying",
          selectIcon: "icon-dianying1",
          text: "电影/影院",
        },
        {
          path: "/performBar",
          icon: "icon-yanchu",
          selectIcon: "icon-yanchu1",
          text: "演出",
        },
        {
          path: "/sportsBar",
          icon: "icon-jiangbei",
          selectIcon: "icon-jiangbei1",
          text: "体育/赛事",
        },
        {
          path: "/myBar",
          icon: "icon-yuanbaicai",
          selectIcon: "icon-yuanbaicai1",
          text: "我的",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.foot {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: auto;
  border-top: 1px solid #666;
  background: #fff;
  a {
    flex: 1;
    text-align: center;
    padding: 10px 0;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    color: #666;
    .select {
      display: none;
    }
    .default {
      display: block;
    }
    span {
      font-size: 12px;
    }
    i{
      margin-bottom: 5px;
      font-size: 20px;
    }
    &.active {
      color: #f03;
      .select {
        display: block;
      }
      .default {
        display: none;
      }
    }
  }
}
</style>