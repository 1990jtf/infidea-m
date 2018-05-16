<template>
  <div id="contact">
    <nav-bar></nav-bar>
    <banner></banner>
    <div class="contact-content m-wrapper">
      <p>市场合作: marketing@infidea.cn</p>
      <br/>
      <p>媒体联系: pr@infidea.cn</p>
      <br/>
      <p>CEO邮箱: pony@infidea.cn</p>
      <br/>
      <p>联系电话: 010-86463003/88608008</p>
      <br/>
      <p>地址: 北京市朝阳区广渠路28号院401号楼</p>
    </div>
    <foot></foot>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar'
import Foot from '@/components/Foot'
import Banner from '@/components/Banner'
export default {
  name: 'Contact',
  components: {
    NavBar,
    Foot,
    Banner
  }
}
</script>
<style lang="stylus" scoped>
.contact-content
  margin 40px 0
  p
    font-size 28px
    line-height 40px
    color #707473
</style>
