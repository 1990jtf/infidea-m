<template>
  <div id="culture">
    <nav-bar></nav-bar>
    <!-- <h3 class="solution-title">解决方案</h3> -->
    <div class="solution-content m-wrapper">
      <ul class="plans clear-fix">
        <li class="hover-boxshadow">
          <a href="javasrcipt:;">
            <h3 class="title">聚合支付解决方案</h3>
            <div class="pic">
              <img class="plan-img" src="@/assets/plans/plan-juhe.jpg" alt="">
            </div>
          </a>
        </li>
        <li class="hover-boxshadow">
          <a href="javasrcipt:;">
            <h3 class="title">SDK解决方案</h3>
            <div class="pic">
              <img class="plan-img" src="@/assets/plans/plan-sdk.png" alt="">
            </div>
          </a>
        </li>
        <li class="hover-boxshadow">
          <a href="javasrcipt:;">
            <h3 class="title">在线考试系统</h3>
            <div class="pic">
              <img class="plan-img" src="@/assets/plans/plan-kaoshi.png" alt="">
            </div>
          </a>
        </li>
        <li class="hover-boxshadow">
          <a href="javasrcipt:;">
            <h3 class="title">微信小程序</h3>
            <div class="pic">
              <img class="plan-img" src="@/assets/plans/plan-wechat.png" alt="">
            </div>
          </a>
        </li>
        <li class="hover-boxshadow">
          <a href="javasrcipt:;">
            <h3 class="title">OA办公自动化系统</h3>
            <div class="pic">
              <img class="plan-img" src="@/assets/plans/plan-oa.png" alt="">
            </div>
          </a>
        </li>
        <li class="hover-boxshadow">
          <a href="javasrcipt:;">
            <h3 class="title">ERP企业资源管理系统</h3>
            <div class="pic">
              <img class="plan-img" src="@/assets/plans/plan-erp.png" alt="">
            </div>
          </a>
        </li>
        <li class="hover-boxshadow">
          <a href="javasrcipt:;">
            <h3 class="title">视频直播解决方案</h3>
            <div class="pic">
              <img class="plan-img" src="@/assets/plans/plan-zhibo.jpg" alt="">
            </div>
          </a>
        </li>
      </ul>
    </div>
    <foot></foot>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar'
import Foot from '@/components/Foot'
export default {
  name: 'Solution',
  components: {
    NavBar,
    Foot
  }
}
</script>
<style lang="stylus" scoped>
#culture
  background #fafafa
  // .solution-title
  //   color #33333
  //   font-size 48px
  //   padding-left 34px
  //   padding-top 40px
  .solution-content
    padding-top 30px
    .plans
      margin 40px 0
      .hover-boxshadow
        position relative
        float left
        width 100%
        height auto
        margin 20px 0 0 0
        text-align center
        background: #fff
        border-radius 4px
        overflow hidden
        box-shadow 0 2px 5px 0 rgba(0,0,0,0.05)
        text-align center
        .title
          width 400px
          height 112px
          color #333333
          margin 100px auto 0
          font-size 36px
          line-height 56px
          overflow hidden
          text-align center
          font-weight bold
        .pic
          height 366px
          overflow hidden
          .plan-img
            width 100%
</style>
