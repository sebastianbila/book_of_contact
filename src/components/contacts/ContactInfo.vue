<template>
  <div class="wrapper">
    <div class="header">
    </div>
    <div class="contact">
      <div class="contact__avatar">S</div>
      <div class="contact__data">
        <div class="contact__header">
          <div class="input__wrapper">
            <Input placeholder="First name"/>
          </div>
          <div class="input__wrapper">
            <Input placeholder="Last name"/>
          </div>
        </div>
        <div class="contact__content content">
          <div class="content__phone">
            <Input placeholder="Phone"/>
          </div>
          <div class="content__btn">
            <Button text="+" type="success" @clickHandler="toggleFieldDialog"/>
          </div>
        </div>
        <Field/>
        <Field/>
      </div>
    </div>
    <AddFieldDialog v-if="isAddFieldDialog"
                    :closeHandler="toggleFieldDialog"/>
  </div>
</template>

<script>
import Input from '../ui/Input'
import Button from '../ui/Button'
import AddFieldDialog from '../dialogs/AddFieldDialog'
import Field from '../ui/Field'

export default {
  name: 'ContactInfo',
  components: {
    Field,
    AddFieldDialog,
    Button,
    Input
  },
  data () {
    return {
      isAddFieldDialog: false
    }
  },
  methods: {
    toggleFieldDialog () {
      /* Open modal with adding field functional */
      this.isAddFieldDialog = !this.isAddFieldDialog

      /* Toggle overlay */
      this.$store.dispatch('toggleOverlay')
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

  .header {
    display: flex;
    justify-content: flex-end;
  }

  .contact {
    display: flex;
    align-items: flex-start;
    width: 100%;
    margin-top: 20px;

    &__avatar {
      height: 120px;
      width: 120px;
      background-color: #4a98b6;
      border-radius: 70px;
      color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 36px;
      font-weight: 700;
    }

    &__data {
      width: 80%;
      margin-left: 50px;
    }

    &__header {
      display: flex;
      width: 100%;
    }

    &__content {
      display: flex;
      align-items: flex-end;
    }
  }

  .content {
    &__phone {
      flex-grow: 1;
    }

    &__btn {
      margin-left: 20px;
    }
  }

</style>
