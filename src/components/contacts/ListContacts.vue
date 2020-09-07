<template>
  <div class="list">
    <ContactItem
      v-for="item in getContacts"
      :key="item.id"
      :firstName="item.firstName"
      :lastName="item.lastName"
      :phone="item.phone"/>
  </div>
</template>

<script>
import ContactItem from './ContactItem'
import { mapGetters } from 'vuex'

export default {
  components: {
    ContactItem
  },
  computed: mapGetters(['getContacts'])
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
