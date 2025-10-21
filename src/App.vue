<template>
  <div>
    <Header v-if="showHeader" />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    Header
  },
  computed: {
    showHeader() {
      const hideHeaderRoutes = ['/login', '/cadastro', '/esqueci-senha']
      return !hideHeaderRoutes.includes(this.$route.path)
    }
  }
}
</script>
