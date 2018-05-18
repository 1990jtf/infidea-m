<template>
  <div id="service">
    <div class="service-list">
      <div class="service-content">
        <h3 class="service-title">公司产品</h3>
        <div class="service-desc">成熟产品解决方案</div>
        <div class="service-img">
          <img src="@/assets/more_circle.png" />
        </div>
      </div>
    </div>
    <div class="service-list">
      <div class="service-content">
        <h3 class="service-title">解决方案</h3>
        <div class="service-desc">细分行业解决方案</div>
        <div class="service-img">
          <img src="@/assets/more_circle.png" />
        </div>
      </div>
    </div>
    <div class="service-list">
      <div class="service-content">
        <h3 class="service-title">英飞公益</h3>
        <div class="service-desc">让世界变得更美好</div>
        <div class="service-img">
          <img src="@/assets/more_circle.png" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Service'
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
