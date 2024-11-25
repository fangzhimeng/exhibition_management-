<template>
  <el-carousel :interval="interval" arrow="always" indicator-position="outside" @change="handleChange">
    <el-carousel-item v-for="(item, index) in items" :key="index">
      <img :src="item.image" alt="" class="carousel-item-image">
      <div class="carousel-item-text">
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>
.carousel-item-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.carousel-item-enter-active,
.carousel-item-leave-active {
  transition: all 0.5s;
}

.carousel-item-enter,
.carousel-item-leave-to {
  opacity: 0;
}
</style>
