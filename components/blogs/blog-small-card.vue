<template>
  <nuxt-link :to="`${routes.blog}/${blogData.id}`" class="blog-small-card">
    <h3 class="blog-card-title">
      {{ blogData.title }}
    </h3>
    <!-- <h5 class="blog-card-date">
      {{ getPostDate(blogData.createdAt) }}
    </h5> -->
    <div class="blog-card-image-wrapper">
      <img class="blog-card-image" :src="randomImage()" />
    </div>
    <p class="blog-card-description">
      {{ slicePreview(blogData.body) }}
      <nuxt-link class="read-more" :to="`${routes.blog}/${blogData.id}`">
        read more
      </nuxt-link>
    </p>
  </nuxt-link>
</template>

<script lang="ts">
import Vue from "vue";

import moment from "moment";

import { routes } from "~/routes";

export default Vue.extend({
  name: "BlogSmallCard",
  props: {
    blogData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      routes,
    };
  },

  methods: {
    slicePreview(text) {
      let value = text.slice(0, 80);
      return value;
    },
    randomImage() {
      let images = [
        "images/1.jpg",
        "images/2.jpg",
        "images/3.jpg",
        "images/4.jpg",
        "images/5.jpg",
        "images/6.jpg",
        "images/7.jpg",
      ];
      let random = Math.floor(Math.random() * images.length);
      return images[random];
    },
    getPostDate(date: string) {
      return `${moment(date).format("LL")}`;
    },
  },
});
</script>

<style lang="scss" scoped>
.blog-small-card {
  width: 48.4%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  .blog-card-title {
    font-family: "Oswald";
    font-size: 20px;
    font-weight: 700 !important;
    text-transform: uppercase;
    margin: 0;
    cursor: pointer;
    transition: 0.3s;
    height: 90px;
    &:hover {
      color: $whiteGrayColor;
    }
  }
  .blog-card-date {
    font-size: 13px;
    font-style: italic;
    color: $lightGrayColor;
    font-weight: 400;
  }
  .blog-card-image-wrapper {
    width: 100%;
    height: 202px;
    .blog-card-image {
      width: 100%;
      height: 202px;
      object-fit: cover;
    }
  }
  .blog-card-description {
    font-size: 14px;
    color: $lightGrayColor;
    letter-spacing: 1px;
    margin: 0;
    .read-more {
      text-decoration: underline !important;
      font-style: italic;
      color: $grayColor;
      transition: 0.3s;
      &:hover {
        color: $whiteGrayColor;
      }
    }
  }
}
</style>