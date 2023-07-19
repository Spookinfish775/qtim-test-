<template>
  <div class="blog-author">
    <div class="about-author _common-block">
      <h3 class="_title">About me</h3>
      <div class="about-author-description">
        <img
          class="author-avatar"
          src="~/static/images/blogAuthor.png"
          alt="authorAvatar"
        />
        <p class="author-story">
          I'm a professional photographer for 10 years. It is a long established
          fact that a reader will be distracted by the readable content of a
          page when looking at its layout.
        </p>
      </div>
    </div>
    <div class="recent-posts _common-block" v-if="authorDetail">
      <h3 class="_title">recent posts</h3>
      <div class="recent-posts-list">
        <nuxt-link
          v-for="post in authorDetail?.slice(-5)"
          :key="post.id"
          :to="`${routes.blog}/${post.id}`"
          class="recent-post-link"
        >
          {{ post.title }}
        </nuxt-link>
      </div>
    </div>
    <div class="like-us _common-block">
      <h3 class="_title">like us on facebook</h3>
      <img
        class="like-us-image"
        src="~/static/images/likeUs.png"
        alt="likeUs"
      />
    </div>
    <div class="recent-comments _common-block" v-if="authorDetail">
      <h3 class="_title">recent comments</h3>
      <div class="recent-comments-list">
        <nuxt-link
          v-for="post in authorDetail?.slice(-5)"
          :key="post.id"
          :to="`${routes.blog}/${post.id}`"
          class="recent-comments-link"
        >
          {{ post.title }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { routes } from "~/routes";

export default Vue.extend({
  name: "BlogAuthor",
  components: {},
  props: {
    authorDetail: {
      default: null,
    },
  },
  data() {
    return {
      routes,
    };
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
.blog-list {
  width: 65.5%;
  display: flex;
  flex-wrap: wrap;
  gap: 19px;
  margin: 28px 0 0 0;
}
.blog-author {
  margin: 28px 0 0 0;
  width: 31.5%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  ._common-block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
  }
  .about-author {
    .about-author-description {
      .author-avatar {
        width: 80px;
        height: 80px;
        border-radius: 100%;
        float: left;
        margin: 7px 21px 0 0;
      }
      .author-story {
        color: $grayColor !important;
        line-height: 1.8;
        font-size: 14px;
        margin: 0;
      }
    }
  }
  .recent-posts {
    .recent-posts-list {
      display: flex;
      flex-direction: column;
      gap: 6px;
      .recent-post-link {
        color: $grayColor !important;
        line-height: 1.8;
        font-size: 14px;
        margin: 0;
        transition: 0.3s;
        &:hover {
          color: $whiteGrayColor !important;
        }
      }
    }
  }
  .like-us {
    .like-us-image {
      width: 299px;
      height: 150px;
    }
  }
  .recent-comments-list {
    display: flex;
    flex-direction: column;
    .recent-comments-link {
      gap: 6px;
      color: $grayColor !important;
      line-height: 1.8;
      font-size: 14px;
      margin: 0;
      transition: 0.3s;
      &:hover {
        color: $whiteGrayColor !important;
      }
    }
  }
}
</style>
