<template>
  <div class="wrapper">
    <div class="add-contact">
      <Button text="+ Create contact" @clickHandler="this.openAddingDialog"/>
    </div>
    <div class="list-contact">
      <ListContacts/>
    </div>
    <AddContactDialog
      v-if="isModal"
      :closeHandler="openAddingDialog"/>
  </div>
</template>

<script>
import ListContacts from './ListContacts'
import AddContactDialog from '../dialogs/AddContactDialog'
import Button from '../ui/Button'

export default {
  name: 'Contacts',
  components: {
    Button,
    ListContacts,
    AddContactDialog
  },
  data () {
    return {
      isModal: false
    }
  },
  methods: {
    openAddingDialog: function () {
      /* Show overlay */
      this.$store.dispatch('toggleOverlay')

      /* Toggle modal */
      this.isModal = !this.isModal
    }
  }
}
</script>

<style scoped lang="scss">
  .wrapper {
    margin: 50px 20px;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    padding: 90px 100px;
  }

  .add-contact {
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .list-contact {
    padding: 0 10px;
    margin-top: 20px;
  }

  .test {
    margin-top: 50px;
    display: flex;
    justify-content: center;
  }
</style>
