<template>
  <div class="dialog">
    <div class="dialog__toolbar">
      <h5>Add new field</h5>
      <p class="dialog__close" @click="closeHandler">X</p>
    </div>
    <div class="dialog__content">
      <div class="input__wrapper">
        <Input placeholder="Name" v-model="placeholder"/>
      </div>
      <div class="input__wrapper">
        <Input placeholder="Value" v-model="value"/>
      </div>
    </div>
    <div class="dialog__footer footer footer__align-center">
      <div class="footer__btn ">
        <Button text="Cancel" btnStyle="cancel" @clickHandler="closeHandler"/>
      </div>
      <div class="footer__btn">
        <Button text="Save" btnStyle="success" @clickHandler="addNewField"/>
      </div>
    </div>
  </div>
</template>

<script>
import Input from '../ui/Input'
import Button from '../ui/Button'
import { mapActions, mapMutations } from 'vuex'

export default {
  name: 'AddFieldDialog',
  components: {
    Button,
    Input
  },
  data () {
    return {
      placeholder: '',
      value: ''
    }
  },
  props: {
    closeHandler: Function // Function to close modal window
  },
  methods: {
    ...mapActions(['addField']),
    ...mapMutations(['showAlert']),
    addNewField () {
      if (this.placeholder && this.value) {
        const field = {
          placeholder: this.placeholder,
          value: this.value
        }
        this.addField({
          contactId: this.$route.params.uid,
          field
        })
        this.closeHandler()
      } else {
        this.showAlert({
          text: 'Please, fill in all field',
          type: 'warning'
        })
      }
    }
  }
}
</script>
