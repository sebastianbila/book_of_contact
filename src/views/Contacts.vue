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
import ListContacts from '../components/contacts/ListContacts'
import AddContactDialog from '../components/dialogs/AddContactDialog'
import Button from '../components/ui/Button'
import { mapMutations } from 'vuex'

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
    ...mapMutations(['toggleOverlay']),
    openAddingDialog: function () {
      /* Show overlay */
      this.toggleOverlay()

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
