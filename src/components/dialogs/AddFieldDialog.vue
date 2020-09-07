<template>
  <div class="dialog">
    <div class="dialog__toolbar">
      <h5>Add new field</h5>
      <p class="dialog__close" @click="closeHandler">X</p>
    </div>
    <div class="dialog__content">
      <div class="input__wrapper">
        <Input placeholder="Name" v-model="fieldName"/>
      </div>
      <div class="input__wrapper">
        <Input placeholder="Value" v-model="fieldValue"/>
      </div>
    </div>
    <div class="dialog__footer footer footer__align-center">
      <div class="footer__btn ">
        <Button text="Cancel" btnStyle="cancel" @clickHandler="closeHandler"/>
      </div>
      <div class="footer__btn">
        <Button text="Save" btnStyle="success" @clickHandler="() => l"/>
      </div>
    </div>
  </div>
</template>

<script>
import Input from '../ui/Input'
import Button from '../ui/Button'

export default {
  name: 'AddFieldDialog',
  components: {
    Button,
    Input
  },
  data () {
    return {
      fieldName: '',
      fieldValue: ''
    }
  },
  props: {
    closeHandler: Function // Function to close modal window
  }
}
</script>
