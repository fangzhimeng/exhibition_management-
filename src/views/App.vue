<template>
  <div id="app">
    <Carousel :items="items" :interval="interval" />
  </div>
</template>

<script>
// import Carousel from '../components/Carousel.vue'
import Carousel from './Carousel2.vue'
export default {
  name: 'App',
  components: {
    Carousel
  },
  data() {
    return {
      items: [
        {
          image: 'https://picsum.photos/800/400?random=1',
          title: '标题一',
          description: '描述一'
        },
        {
          image: 'https://picsum.photos/800/400?random=2',
          title: '标题二',
          description: '描述二'
        },
        {
          image: 'https://picsum.photos/800/400?random=3',
          title: '标题三',
          description: '描述三'
        }
      ],
      interval: 3000
    }
  }
}
</script>
