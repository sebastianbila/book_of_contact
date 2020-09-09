<template>
  <div class="list">
    <ContactItem
      v-for="item in getContacts"
      :key="item.id"
      :contact="item"/>
  </div>
</template>

<script>
import ContactItem from './ContactItem'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    ContactItem
  },
  computed: mapGetters(['getContacts']),
  methods: mapActions(['retrieveContacts']),
  async mounted () {
    this.retrieveContacts()
  }
}
</script>

<style scoped>
  .list {
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    max-height: 600px;
  }
</style>
