<template>
  <div id="service">
    <div class="service-list" v-for="service of serviceList" :key="service.id">
      <router-link tag="div" :to="service.link" class="service-content">
        <h3 class="service-title">{{service.title}}</h3>
        <div class="service-desc">{{service.desc}}</div>
        <div class="service-img">
          <img src="@/assets/more_circle.png" />
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Service',
  props: {
    serviceList: Array
  }
}
</script>

<style lang="stylus" scoped>
#service
  margin 20px 0
  .service-list
    overflow hidden
    width 100%
    padding-bottom 30%
    height 0
    margin 10px 0
    .service-content
      position relative
      margin 60px
      color #ffffff
      .service-title
        display inline-block
        font-size 36px
        line-height 80px
        border-bottom 1px solid #ffffff
      .service-desc
        font-size 28px
        line-height 60px
      .service-img
        position absolute
        bottom 10px
        right 0
        width 100px
        height 100px
        img
          width 100%
  .service-list:nth-child(1)
    background gray
  .service-list:nth-child(2)
    background #FC433E
  .service-list:nth-child(3)
    background #2D2D58
</style>
