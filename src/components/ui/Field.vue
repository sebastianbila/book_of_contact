<template>
  <div class="field">
    <div class="field__self">
      <Input placeholder="Phone"/>
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
      :acceptHandler="() => l"
      :closeHandler="toggleModal"/>
  </div>
</template>

<script>
import Button from './Button'
import Input from './Input'
import AcceptDialog from '../dialogs/AcceptDialog'

export default {
  name: 'Field',
  components: {
    AcceptDialog,
    Input,
    Button
  },
  data: () => ({
    isModalOpen: false
  }),
  methods: {
    toggleModal () {
      this.isModalOpen = !this.isModalOpen
      this.$store.dispatch('toggleOverlay')
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
