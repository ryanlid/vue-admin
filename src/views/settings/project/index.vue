<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
  </div>
</template>

<script>
export default {
  name: "project",
  data() {
    return {
      name: "project"
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
