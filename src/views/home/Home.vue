<template>
  <div>
      <nav-bar></nav-bar>
      <swiper></swiper>
      <service :serviceList="indexData.serviceList"></service>
      <foot></foot>
  </div>
</template>
<script>
import axios from 'axios'
import NavBar from '@/components/NavBar'
import Foot from '@/components/Foot'
import Swiper from './components/Swiper'
import Service from './components/Service'
export default {
  name: 'Home',
  data () {
    const indexData = {}
    return {
      indexData
    }
  },
  components: {
    NavBar,
    Swiper,
    Service,
    Foot
  },
  methods: {
    getIndexData () {
      axios.get('./static/mock/index.json').then((res) => {
        this.indexData = res.data.data
        // console.log(res.data.data)
      })
    }
  },
  created () {
    this.getIndexData()
  }
}
</script>

<style lang="stylus" scoped>
</style>
