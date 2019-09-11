<template>
  <div class="tags-view-wrapper">
    <router-link
      v-for="tag in visitedViews"
      ref="tag"
      :key="tag.path"
      :class="isActive(tag) ? 'active' : ''"
      :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }"
      tag="span"
      class="tags-view-item"
      @click.middle.native="closeSelectedTag(tag)"
    >
      {{ tag.title }}
      <span
        v-if="!tag.meta.affix"
        class="el-icon-close"
        @click.prevent.stop="closeSelectedTag(tag)"
      />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "tagsView",
  data() {
    return {
      // visitedViews: {}
    };
  },
  computed: {
    visitedViews() {
      console.log(this.$store.state.tagsView);
      return this.$store.state.tagsView.visitedViews;
    }
  },
  mounted() {
    this.addTags();
  },
  watch: {
    $route() {
      this.addTags();
    }
  },

  methods: {
    isActive(route) {
      return route.path === this.$route.path;
    },
    addTags() {
      const { name } = this.$route;
      if (name) {
        this.$store.dispatch("tagsView/addView", this.$route);
      }
      return false;
    },
    closeSelectedTag(view) {
      this.$store
        .dispatch("tagsView/delView", view)
        .then(({ visitedViews }) => {
          if (this.isActive(view)) {
            this.toLastView(visitedViews, view);
          }
        });
    },
    toLastView(visitedViews, view) {
      const latestView = visitedViews.slice(-1)[0];
      if (latestView) {
        this.$router.push(latestView);
      } else {
        // now the default is to redirect to the home page if there is no tags-view,
        // you can adjust it according to your needs.
        if (view.name === "Dashboard") {
          // to reload home page
          this.$router.replace({ path: "/redirect" + view.fullPath });
        } else {
          this.$router.push("/");
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
.tags-view-wrapper {
  .tags-view-item {
    display: inline-block;
    position: relative;
    cursor: pointer;
    height: 26px;
    line-height: 26px;
    border: 1px solid #d8dce5;
    color: #495060;
    background: #fff;
    padding: 0 8px;
    font-size: 12px;
    margin-left: 5px;
    margin-top: 4px;
    &:first-of-type {
      margin-left: 15px;
    }
    &:last-of-type {
      margin-right: 15px;
    }
    &.active {
      background-color: #42b983;
      color: #fff;
      border-color: #42b983;
      &::before {
        content: "";
        background: #fff;
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        position: relative;
        margin-right: 2px;
      }
    }
  }
}
</style>
