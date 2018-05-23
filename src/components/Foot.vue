<template>
  <div id="footer">
    <div>
      <ul class="footer-items">
        <li class="footer-item">
          <a href="javascript:;" class="footer-item-title" @click="handleShowContent">
            <span>关于我们</span>
            <span class="footer-category-cross"></span>
          </a>
          <transition duration="300" appear appear-active-class="animated fadeIn" enter-active-class="animated fadeIn" leave-active-class="animated slideOut">
          <ul class="footer-item-content" v-show="seenItem">
            <li>
              <router-link class="footer-item-link" to="/company">公司信息</router-link>
            </li>
            <li>
              <router-link class="footer-item-link" to="/culture">企业文化</router-link>
            </li>
            <li>
              <router-link class="footer-item-link" to="/contact">联系我们</router-link>
            </li>
            <li class=""><a class="footer-item-link" href="https://www.infidea.cn/jobs/index.jhtml" target="_blank">招聘精英</a></li>
          </ul>
          </transition>
        </li>
        <li class="footer-item">
          <router-link to="/solution" class="footer-item-title">
            <span>解决方案</span>
            <span class="footer-category-cross"></span>
          </router-link>
        </li>
        <li class="footer-item">
          <router-link to="/investment" class="footer-item-title">
            <span>金融投资</span>
            <span class="footer-category-cross"></span>
          </router-link>
        </li>
        <li class="footer-item">
          <router-link to="/culture" class="footer-item-title">
            <span>社会责任</span>
            <span class="footer-category-cross"></span>
          </router-link>
        </li>
        <li class="footer-item">
          <router-link to="/contact" class="footer-item-title">
            <span>服务与支持</span>
            <span class="footer-category-cross"></span>
          </router-link>
        </li>
      </ul>
      <div class="footer-bottom m-wrapper">
        <ul class="footer-social-list">
          <li><a href="https://weibo.com/infidea">
             <img src="@/assets/weibo.png"></a>
          </li>
          <li><span @click="handleShowCode" class="footer-social-weixin">
             <img src="@/assets/weixin.png"></span>
             <div class="footer-social-qrcode" v-show="seen">
               <img src="@/assets/weixin-code.jpg" />
             </div>
          </li>
        </ul>
        <p class="footer-copyright">Copyright © 2018 Infidea 英飞创想 版权所有</p>
        <div class="footer-record">
          <a href="http://www.miitbeian.gov.cn/" target="_blank">京ICP备16017313号-3</a></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Foot',
  data () {
    return {
      seen: false,
      seenItem: false,
      seenItem2: false
    }
  },
  methods: {
    handleShowCode () {
      this.seen = !this.seen
    },
    handleShowContent () {
      this.seenItem = !this.seenItem
    },
    handleShowContent2 () {
      this.seenItem2 = !this.seenItem2
    }
  }
}
</script>

<style lang="stylus" scoped>
#footer
  position relative
  background rgba(0,0,0,0.8)
  color #ebeff2
  font-size 24px
  .footer-items
    padding 20px 0 40px
    .footer-item
      .footer-item-title
        color #ebeff2
        position relative
        display block
        font-size 24px
        line-height 40px
        padding 30px 40px
        .footer-category-cross
          position relative
          display block
          float right
          width 20px
          height 40px
          transition: all .4s
        .footer-category-cross:after, .footer-category-cross:before
          content ''
          display block
          position absolute
          width 20px
          height 2px
          background-color #ebeff2
          top 18px
          right 0
        .footer-category-cross:after
          transform rotate(90deg)
      .footer-item-title:after
        display block
        content ''
        position absolute
        bottom 0
        left: 34px;
        right 34px
        height: 1px
        width auto
        background-color #494b4d
        opacity: .8
    .footer-item-content
      position relative
      background-color #494b4d
      box-sizing border-box
      padding 0 60px
      overflow hidden
      transition all .6s
      .footer-item-link
        display block
        font-size 24px
        line-height 40px
        margin-top 32px
        margin-bottom 32px
        color #909699
  .footer-bottom
    padding-bottom: 40px
    .footer-social-list
      li
        margin-right 20px
        display inline-block
        vertical-align middle
        .footer-social-qrcode
          position absolute
          left 220px
          bottom 140px
          width 240px
          img
            width 100%
    .footer-copyright
      padding-top 34px
      color #606466
    .footer-record
      padding-top 24px
      a
        color #606466
</style>
