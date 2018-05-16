<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide>
                <img class="swiper-img" src="@/assets/banner/banner01.jpg"/>
            </swiper-slide>
            <swiper-slide>
                <img class="swiper-img" src="@/assets/banner/banner01.jpg"/>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
// require styles
import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'Swiper',
  data () {
    return {
      swiperOption: {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>
<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet
        width 30px
        height 4px
        border-radius: 10px
        margin 0 10px
    .wrapper >>> .swiper-pagination-bullet-active
        background #fff
    .wrapper
        width:100%
        height :0
        overflow :hidden
        background: #ddd
        padding-bottom 126%
        .swiper-img
            width:100%
      .swiper-pagination
        margin-bottom 20px
</style>
