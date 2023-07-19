<template>
  <div class="blog-page">
    <div class="blog-list-wrapper">
      <div class="blog-list" v-if="blogs">
        <BlogSmallCard
          v-for="blog in pagObjects()"
          :key="blog.id"
          :blogData="blog"
        />
        <div class="blog-list-pagination">
          <v-pagination
            v-model="page"
            class="my-4"
            :total-visible="5"
            :length="paginationLength()"
            color="#222222"
          ></v-pagination>
        </div>
      </div>
    </div>
    <BlogAuthor :authorDetail="blogs" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { dataApi } from "~/api/dataApi";

export default Vue.extend({
  name: "BlogPage",
  components: {
    BlogSmallCard: () => import("~/components/blogs/blog-small-card.vue"),
    BlogAuthor: () => import("~/components/blogs/author.vue"),
  },
  data() {
    return {
      blogs: [],
      page: 1,
      postPerPage: 6,
    };
  },
  methods: {
    pagObjects() {
      let startIndex = (this.page - 1) * this.postPerPage;
      let endIndex = startIndex + this.postPerPage;
      return this.blogs.slice(startIndex, endIndex);
    },
    async getPosts() {
      try {
        let res = await this.$axios.get(`${dataApi.blogs}`);
        this.blogs = res.data;
      } catch (err) {
        console.log(err);
      }
    },
    paginationLength() {
      let currentLength = Math.ceil(this.blogs.length / 6);
      return currentLength;
    },
  },
  mounted() {
    this.getPosts();
  },
});
</script>

<style lang="scss" scoped>
._title {
  font-family: "Oswald";
  font-size: 14px;
  font-weight: 600 !important;
  text-transform: uppercase;
  margin: 0;
}
.blog-page {
  display: flex;
  gap: 19px;
  width: 100%;
  .blog-list-wrapper {
    width: 65.5%;
    display: flex;
    flex-direction: column;
    margin: 28px 0 0 0;
    .blog-list {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 19px;
    }
    .blog-list-pagination {
      width: 100%;
    }
  }
}
</style>
