<template>
  <div id="navbar" :class="seen?'header-opened':''">
    <div class="navbar-container m-wrapper">
      <a class="navbar-control" @click="handleShowMore">
        <span class="control-icon"></span>
        <span class="control-icon"></span>
        <span class="control-icon"></span>
      </a>
      <div class="navbar-logo" @click="handleHideSlide">
        <router-link to="/" class="navbar-logo-icon"></router-link>
      </div>
    </div>
    <transition appear appear-active-class="anmiated slideInLeft" enter-active-class="anmiated slideInLeft" leave-active-class="animated slideOutLeft">
      <div class="navbar-content" v-show="seen">
          <ul class="navbar-content-items">
            <!-- <li class="navbar-content-item" v-for="item of navBarList" :key="item.id">
              <router-link :to='item.url'>{{item.name}}</router-link>
            </li> -->
            <li class="navbar-content-item"><router-link to='/company'>关于我们</router-link></li>
            <li class="navbar-content-item"><router-link to='/solution'>解决方案</router-link></li>
            <li class="navbar-content-item"><router-link to='/investment'>金融投资</router-link></li>
            <li class="navbar-content-item"><a href="http://feifei.infidea.cc" target="_blank">飞飞到家</a></li>
            <li class="navbar-content-item"><router-link to='/contact'>服务与支持</router-link></li>
            <li class="navbar-content-item"><router-link to='/company'>社会责任</router-link></li>
          </ul>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'NavBar',
  // props: {
  //   navBarList: Array
  // },
  data () {
    return {
      seen: false
    }
  },
  methods: {
    handleShowMore () {
      this.seen = !this.seen
    },
    // 当点击logo时候，隐藏侧边栏
    handleHideSlide () {
      if (this.seen) {
        this.seen = !this.seen
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
#navbar
  height 100px
  background rgba(0,0,0,0.8)
  transition: all 1s ease;
  .navbar-container
    position relative
    height 100px
    text-align center
    .navbar-control
      position absolute
      display inline-block
      margin-top 26px
      left 34px
      vertical-align middle
      .control-icon
        display block
        padding-top 6px
        padding-bottom 6px
        transition all .4s ease
      .control-icon:before
        content: '';
        display: block;
        height: 4px;
        width: 44px;
        border-top-right-radius: 4px;
        border-bottom-left-radius: 4px;
        background #ffffff
        transition:transform .4s ease .2s
        background-color .5s ease 0s
    .navbar-logo
        display inline-block
        width 200px
        padding 24px 0
        vertical-align middle
        // background #999999
        .navbar-logo-icon
          background-image url('~@/assets/infidea-logo-m.png')
          display: block;
          width 200px
          height 52px
          background-size: 200px 52px;
          background-position: center center;
  .navbar-content
    position absolute
    left 0
    top 100px
    right 0
    bottom 0
    background #000000
    z-index 9999
    .navbar-content-items
      margin 40px 100px
      .navbar-content-item
        font-size 28px
        padding 30px 0
        border-bottom 1px solid rgba(255,255,255,0.3)
        a
          color #ffffff
.header-opened
  background #000000 !important
  .control-icon:nth-child(1)
    transform: translateY(16px)
  .control-icon:nth-child(2)
    opacity: 0;
  .control-icon:nth-child(3)
    transform: translateY(-16px);
</style>
