<template>
  <div class="side-bar">
    <el-scrollbar>
      <SidebarItem
        v-for="route in routes"
        :item="route"
        :key="route.path"
      ></SidebarItem>
    </el-scrollbar>
  </div>
</template>

<script>
import SidebarItem from "./SidebarItem";
export default {
  name: "Sidebar",
  computed: {
    routes() {
      console.log(this.$router.options.routes);
      return this.$router.options.routes;
    }
  },
  components: {
    SidebarItem
  }
};
</script>

<style scoped></style>
