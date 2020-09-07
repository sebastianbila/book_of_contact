<template>
  <div id="app">
    <div v-if="isOverlay" class="overlay"></div>
    <div class="container">
      <Navbar/>
            <Contacts/>
        <Alert/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Contacts from '@/components/contacts/Contacts'
import { mapGetters } from 'vuex'
import Alert from './components/ui/Alert'

export default {
  components: {
    Alert,
    Navbar,
    Contacts
  },
  computed: mapGetters(['isOverlay'])
}
</script>
