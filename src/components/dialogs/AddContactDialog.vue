<template>
  <div class="dialog">
    <div class="dialog__toolbar">
      <h5>Create new contact</h5>
      <p class="dialog__close" @click="closeHandler">X</p>
    </div>
    <div class="dialog__content">
      <div class="input__wrapper">
        <Input placeholder="First name" v-model="firstName"/>
      </div>
      <div class="input__wrapper">
        <Input placeholder="Last name" v-model="lastName"/>
      </div>
      <div class="input__wrapper">
        <Input type="number" placeholder="Phone number" v-model="phone"/>
      </div>
    </div>
    <div class="dialog__footer footer footer__align-center">
      <div class="footer__btn">
        <Button text="Cancel" btnStyle="cancel" @clickHandler="closeHandler"/>
      </div>
      <div class="footer__btn">
        <Button text="Save" btnStyle="success" @clickHandler="addContact"/>
      </div>
    </div>
  </div>
</template>

<script>
import Input from '../ui/Input'
import Button from '../ui/Button'
import { mapMutations } from 'vuex'

export default {
  name: 'AddContact',
  components: {
    Button,
    Input
  },
  data () {
    return {
      firstName: '',
      lastName: '',
      phone: ''
    }
  },
  props: {
    closeHandler: Function // Function to close modal window
  },
  methods: {
    ...mapMutations(['createContact']),
    addContact () {
      this.createContact({
        id: Date.now(),
        firstName: this.firstName,
        lastName: this.lastName,
        phone: this.phone
      })

      this.firstName = ''
      this.lastName = ''
      this.phone = ''

      this.closeHandler()
    }
  }
}
</script>
