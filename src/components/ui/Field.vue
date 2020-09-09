<template>
  <div class="field">
    <div class="field__self">
      <Input :placeholder="field.placeholder" v-model="field.value"/>
    </div>
    <div class="field__remove">
      <Button text="X"
              btnStyle="cancel"
              @clickHandler="toggleModal"/>
    </div>
    <AcceptDialog
      v-if="isModalOpen"
      header="Delete field"
      content="Are you sure you want to delete field?"
      :acceptHandler="removeField"
      :closeHandler="toggleModal"/>
  </div>
</template>

<script>
import Button from './Button'
import Input from './Input'
import AcceptDialog from '../dialogs/AcceptDialog'
import { mapActions, mapMutations } from 'vuex'

export default {
  name: 'Field',
  components: {
    AcceptDialog,
    Input,
    Button
  },
  props: ['field', 'uid'],
  data: () => ({
    isModalOpen: false
  }),
  methods: {
    ...mapActions(['deleteField']),
    ...mapMutations(['toggleOverlay']),
    toggleModal () {
      this.isModalOpen = !this.isModalOpen
      this.toggleOverlay()
    },
    removeField () {
      this.deleteField({
        contactId: this.uid,
        fieldId: this.field.id
      })
      this.toggleModal()
    }
  }
}
</script>

<style scoped lang="scss">
  .field {
    display: flex;

    &__self {
      flex-grow: 1;
    }

    &__remove {
      display: flex;
      align-items: flex-end;
      margin-left: 20px;
    }
  }
</style>
