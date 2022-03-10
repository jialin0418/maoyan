<template>
  <div class="header-warp">
    <header>
      <a href="javascript:;">中牟县</a>
      <Search-Bar :placeholder="hotSearchWord" to="/search"></Search-Bar>
    </header>
    <div>
      <TabsBar :title="navigation">
        <router-view></router-view>
      </TabsBar>
    
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderWarp",

  data() {
    return {
      hotSearchWord: ["这个杀手不太冷", "四海", "喜羊羊与灰太狼"],
      navigation: [
        {
          title: "推荐",
          to: "/homeBar/recommendBar",
        },
        {
          title: "热片解读",
          to: "/homeBar/UnscrambleBar",
        },
        {
          title: "预告片",
          to: "/homeBar/NoticeBar",
        },
        {
          title: "说电影",
          to: "/homeBar/filmBar",
        },
        {
          title: "佳片",
          to: "/homeBar/goodBar",
        },
        {
          title: "剧综",
          to: "/homeBar/dramaBar",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.header-warp {
  header {
    display: flex;
    padding: 5px 10px;
    justify-content: space-between;
    a {
      font-size: 12px;
      text-decoration: none;
      flex-shrink: 0;
      color: #333;
      margin-top: 10px;
      padding-right: 10px;
    }
  }
}
</style>