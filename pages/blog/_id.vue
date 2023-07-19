<template>
  <div class="blog-detail-page" v-if="post">
    <div class="blog-detail-page-content">
      <h2 class="blog-title">
        {{ post.title }}
      </h2>
      <div class="blog-image-wrapper">
        <img class="blog-image" src="~/static/images/3.jpg" alt="blogImage" />
      </div>
      <p class="blog-description">
        {{ post.body }}
      </p>
      <h3 class="blog-reply-title">leave a reply</h3>
      <p class="blog-reply-description">
        Your email address will not be published. Required fields are marked *
      </p>
      <form class="blog-reply-form">
        <div class="form-comment">
          <p class="_placeholder">Comment</p>
          <textarea class="_textarea" />
        </div>
        <div class="form-input">
          <p class="_placeholder">Name *</p>
          <input type="text" class="_input" />
        </div>
        <div class="form-input">
          <p class="_placeholder">Email *</p>
          <input type="text" class="_input" />
        </div>
        <div class="form-input">
          <p class="_placeholder">Website</p>
          <input type="text" class="_input" />
        </div>
        <input type="submit" class="form-submit" value="Post Comment" />
      </form>
    </div>
    <BlogAuthor :authorDetail="recentPosts" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { dataApi } from "~/api/dataApi";

export default Vue.extend({
  name: "BlogDetailPage",
  components: {
    BlogAuthor: () => import("~/components/blogs/author.vue"),
  },
  data() {
    return {
      post: {},
      recentPosts: [],
    };
  },
  methods: {
    async getCurrentPost() {
      try {
        let res = await this.$axios.get(
          `${dataApi.blogs}/${this.$route.params.id}`
        );
        this.post = res.data;
      } catch (err) {
        console.log(err);
      }
    },
    async getRecentPosts() {
      try {
        let res = await this.$axios.get(`${dataApi.blogs}`);
        this.recentPosts = res.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.getCurrentPost();
    this.getRecentPosts();
  },
});
</script>

<style lang="scss" scoped>
.blog-detail-page {
  width: 100%;
  display: flex;
  gap: 19px;
  width: 100%;
  .blog-detail-page-content {
    width: 65.5%;
    margin: 28px 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 19px;
    .blog-title {
      font-size: 20px;
      text-transform: uppercase;
      font-family: "Oswald";
    }
    .blog-image-wrapper {
      width: 628px;
      height: 417px;
      .blog-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .blog-description {
      color: $grayColor !important;
      line-height: 1.8;
      font-size: 14px;
      margin: 0;
    }
    .blog-reply-title {
      font-size: 16px;
      text-transform: uppercase;
      font-family: "Oswald";
    }
    .blog-reply-description {
      font-size: 14px;
      font-weight: 400;
      color: $lightGrayColor;
    }
    .blog-reply-form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 19px;
      ._placeholder {
        font-size: 14px;
        font-weight: 400;
        color: $lightGrayColor;
        margin: 0;
        min-width: 58px;
      }
      ._textarea {
        width: 82%;
        height: 240px;
        border: 0.1px solid $whiteGrayColor;
        outline: none;
      }
      ._input {
        width: 38%;
        border: 0.1px solid $whiteGrayColor;
        outline: none;
        height: 39px;
        padding: 0 6px;
      }
      .form-comment {
        width: 100%;
        display: flex;
        align-items: flex-start;
        gap: 6px;
      }
      .form-input {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .form-submit {
        height: 33px;
        width: 125px;
        background-color: $whiteGrayColor;
        color: $whiteColor;
        font-size: 14px;
        transition: 0.3s;
        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
}
</style>