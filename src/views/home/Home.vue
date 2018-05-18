<template>
  <div>
      <nav-bar></nav-bar>
      <swiper></swiper>
      <service></service>
      <foot></foot>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar'
import Foot from '@/components/Foot'
import Swiper from './components/Swiper'
import Service from './components/Service'
export default {
  name: 'Home',
  components: {
    NavBar,
    Swiper,
    Service,
    Foot
  }
}
</script>

<style lang="stylus" scoped>
</style>
