<template>
  <div id="company">
    <nav-bar></nav-bar>
    <banner></banner>
    <div class="company-content m-wrapper">
      <p>每当一个新技术到来时，我就特别兴奋，总想迫不及待想把它弄个明白。总是沉醉在每一次科技带来的改变。</p>
      <p>生活在这个时代的人，无法想象在那个没有电灯泡的时代，人们夜生活是怎样的。</p>
        <p>无法想象在没有汽车的年代，人们是怎么从一个城市到另一个城市的。</p>
        <p>无法想象在没有网络的年代，人们是怎么打发那些闲散时光的。</p>
        <p>人工智能，无人驾驶，新能源，AR，VR时代，就要来了。</p>
        <p>现在时代的我们，无法想象在未来人工智能到来的时代，我们去银行办业务，面对的是机器人，去餐厅吃饭，服务员也是机器人。</p>
        <p>现在时代的我们，无法想像在未来无人驾驶到来的时代，我们坐车没有驾驶室，没有方向盘新能源汽车上下班，坐在车里的我们可以读书看报。</p>
        <p>每当想到更幸福的未来，我就想活的再久一点，希望能看到更远的幸福！</p>
        <p>人们通常会低估一个新兴行业的发展前景，新事物的出现可能产生颠覆性的影响，我梦想着能够拥有一份事业，让人们的生活变得更幸福,英飞创想给了我这个机会。</p>
        <p>如果你志存高远、怀揣梦想，决心踏实做事、创造价值，却在扭曲的现实中自我怀疑、彷徨无奈，那就加入Infidea吧！ 在这里，与更多真知灼见者碰撞，与更多志同道合者同行！</p>
        <br/>
        <p>— 蒋腾飞</p>
    </div>
    <foot></foot>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar'
import Foot from '@/components/Foot'
import Banner from '@/components/Banner'
export default {
  name: 'Company',
  components: {
    NavBar,
    Foot,
    Banner
  }
}
</script>
<style lang="stylus" scoped>
.company-content
  margin 40px 0
  p
    font-size 28px
    line-height 40px
    color #707473
    text-indent 2em
</style>
