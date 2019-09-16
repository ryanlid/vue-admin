<template>
  <div class="app-wrapper" :class="classObj">
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <div>
        <navbar />
        <Tagsview />
      </div>
      <app-main />
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar/index";
import Sidebar from "./Sidebar/index";
import Tagsview from "./Tagsview/index";
import AppMain from "./AppMain/index";

export default {
  name: "Layout",
  data() {
    return {
      device: ""
      // sidebar: {
      //   opened: true
      // }
    };
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar;
    },
    classObj() {
      return {
        openSidebar: this.sidebar.opened,
        hideSidebar: !this.sidebar.opened
      };
    }
  },
  methods: {
    handleClickOutside() {
      console.log("handleClickOutside");
    }
  },

  components: {
    Navbar,
    Sidebar,
    Tagsview,
    AppMain
  }
};
</script>
