<template>
  <div>
      <nav-bar></nav-bar>
      <swiper></swiper>
      <foot></foot>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar'
import Foot from '@/components/Foot'
import Swiper from './components/Swiper'
export default {
  name: 'Home',
  components: {
    NavBar,
    Swiper,
    Foot
  }
}
</script>

<style lang="stylus" scoped>

</style>
