<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      name: "dashboard"
    };
  }
};
</script>

<style scoped>
.dashboard-container {
  margin: 30px;
}
.dashboard-text {
  font-size: 30px;
  line-height: 46px;
}
</style>
