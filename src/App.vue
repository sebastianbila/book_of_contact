<template>
  <div id="app">
    <div v-if="isOverlay" class="overlay"></div>
    <div class="container">
      <Alert/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Alert from './components/ui/Alert'

export default {
  components: {
    Alert
  },
  computed: mapGetters(['isOverlay'])
}
</script>
