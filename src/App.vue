<template>
  <div id="app">
    <Header></Header>
    <Navigation></Navigation>
    <router-view></router-view>
    <Footer v-show="$route.meta.isShow"></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header/header";
import Navigation from '@/components/Navigation/navigation'
import Footer from  "@/components/Footer/footer"
export default {
  name: 'App',
  components: {
    Navigation,
    Header,
    Footer
  }
}
</script>

<style>

</style>
