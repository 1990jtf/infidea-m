<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide>
                <transition appear appear-active-class="animated slideInLeft" enter-active-class="animated slideInLeft">
                <img class="swiper-desc swiper-img" src="@/assets/banner/banner-desc.png"/>
                </transition>
                <img class="swiper-img" src="@/assets/banner/banner-m.jpg"/>
            </swiper-slide>
<!--            <swiper-slide>
                <img class="swiper-img" src="@/assets/banner/banner-m.jpg"/>
            </swiper-slide>-->
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
        position relative
        width:100%
        height :0
        overflow :hidden
        background: #ddd
        padding-bottom 120%
        .swiper-desc
            position absolute
            width 100%
            top 0
            left 0
            z-index 9999
        .swiper-img
            width:100%
      .swiper-pagination
        opacity 0.8
        margin-bottom 20px
</style>
