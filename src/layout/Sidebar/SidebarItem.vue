<template>
  <div class="menu-wrapper">
    {{ item }}
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{ item.meta.title }}</span>
        </template>
        <template v-if="item.children">
          <el-menu-item v-for="child in item.children" :key="child.path">
            {{ child.meta.title }}
          </el-menu-item>
          {{ item.children }}
          <!-- <sidebar-item
          v-for="child in item.children"
          :key="child.path"
          :is-nest="true"
          :item="child"
          :base-path="resolvePath(child.path)"
          class="nest-menu"
          />-->
        </template>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "SidebarItem",
  props: {
    // route object
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleOpen() {
      console.log("open");
    },
    handleClose() {
      console.log("close");
    }
  }
};
</script>
