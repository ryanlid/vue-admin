<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <div>
        <navbar />
      </div>
      <app-main />
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar/index";
import Sidebar from "./Sidebar/index";
import AppMain from "./AppMain/index";

export default {
  name: "Layout",
  data() {
    return {
      device: "",
      sidebar: {
        opened: true
      }
    };
  },
  methods: {
    handleClickOutside() {
      console.log("handleClickOutside");
    }
  },

  components: {
    Navbar,
    Sidebar,
    AppMain
  }
};
</script>

<style>
.sidebar-container {
  transition: width 0.28s;
  width: 210px !important;
  background-color: #304156;
  height: 100%;
  position: fixed;
  font-size: 0px;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
}
.main-container {
  min-height: 100%;
  transition: margin-left 0.28s;
  margin-left: 210px;
  position: relative;
}
</style>
