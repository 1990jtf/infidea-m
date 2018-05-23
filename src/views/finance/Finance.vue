<template>
  <div id="finance">
    <nav-bar></nav-bar>
    <banner-finance></banner-finance>
    <div class="finance-content m-wrapper">
      <p>Q：为什么做金融投资？</p>
      <br>
      <p>A：人的一生时间是有限的，这也就意味着你全心全意做一件事情时，就很难再去做另一件事，这就是我们所说的机会成本。</p>
      <br>
      <p>尽管我们知道在未来的几年里，新能源汽车、生物科技、基因测序，AR/VR行业将迎来前所未有快速的发展，我们不可能有精力和时间每个行业都参与进去。</p>
      <br>
      <p>历史经验告诉我们，每六年就会诞生一个千亿美元级别的公司。</p>
      <br>
      <p>人生能有几个六年，当我们没有机会打造、参与这样的公司，我们就会义无反顾的投资它。</p>
      <br>
      <p>去投资那几个最有可能成为千亿美元的公司，能投资他们也是我们一生的荣幸！</p>
    </div>
    <foot></foot>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar'
import Foot from '@/components/Foot'
import BannerFinance from '@/components/BannerFinance'
export default {
  name: 'Finance',
  components: {
    BannerFinance,
    NavBar,
    Foot
  }
}
</script>
<style lang="stylus" scoped>
  .finance-content
    margin 40px 0
    p
      font-size 28px
      line-height 40px
      color #707473
      text-indent 2em
</style>
