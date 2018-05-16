<template>
  <div id="culture">
    <nav-bar></nav-bar>
    <banner></banner>
    <div class="culture-content m-wrapper">
      <h4>使命：</h4>
      <p>通过技术方式为人们节省时间，让他们有更多时间做想做的事。</p>
      <br/>
      <h4>价值观：</h4>
      <p>客户第一、团队合作、诚实正直，创新。</p>
    </div>
    <foot></foot>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar'
import Foot from '@/components/Foot'
import Banner from '@/components/Banner'
export default {
  name: 'Culture',
  components: {
    NavBar,
    Foot,
    Banner
  }
}
</script>
<style lang="stylus" scoped>
.culture-content
  margin 40px 0
  p
    font-size 28px
    line-height 40px
    color #707473
</style>
