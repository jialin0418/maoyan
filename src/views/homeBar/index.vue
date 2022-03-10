<template>
  <div class="homepage">
    <HeaderWarp />
    <div>
    </div>
    首页
  </div>
</template>

<script>
import HeaderWarp from "./components/HeaderWarp.vue";

export default {
  name: "homeBar",
  components: {
    HeaderWarp,
  },
};
</script>

<style lang="scss" scoped>
.homepage {
  padding: 5px;
}
</style>