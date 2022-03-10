<template>
  <div>
    <nav class="Tabs_nav">
      <router-link v-for="(item, index) in title" :key="index" :to="item.to">{{
        item.title
      }}</router-link>
    </nav>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabsBar",
  props: {
    title: Object,
  },
  created() {
    console.log(this.title);
  },
};
</script>

<style lang="scss" scoped>
.Tabs_nav {
  display: flex;
  justify-content: space-between;
}
</style>