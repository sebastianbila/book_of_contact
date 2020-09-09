<template>
  <div class="wrapper">
    <div class="header">
      <router-link to="/"><h5 class="header__btn">Go Back</h5></router-link>
    </div>
    <div class="contact">
      <div class="contact__avatar">S</div>
      <div class="contact__data">
        <div class="contact__header">
          <div class="input__wrapper">
            <Input placeholder="First name" v-model="firstName"/>
          </div>
          <div class="input__wrapper">
            <Input placeholder="Last name" v-model="lastName "/>
          </div>
        </div>
        <div class="contact__content content">
          <div class="content__phone">
            <Input placeholder="Phone" v-model="phone"/>
          </div>
          <div class="content__btn">
            <Button text="+" btnStyle="info" @clickHandler="toggleFieldDialog"/>
          </div>
        </div>
        <Field v-for="item in getFields" :key="item.key" :uid="uid" :field="item"/>
        <div class="contact__save">
          <Button text="Save" type="success" @clickHandler="saveContactInfo"/>
        </div>
      </div>
    </div>
    <AddFieldDialog v-if="isAddFieldDialog"
                    :closeHandler="toggleFieldDialog"/>
  </div>
</template>

<script>
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import AddFieldDialog from '../components/dialogs/AddFieldDialog'
import Field from '../components/ui/Field'
import { mapActions, mapGetters, mapMutations } from 'vuex'

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
      isAddFieldDialog: false,
      uid: '',
      firstName: '',
      lastName: '',
      phone: ''
    }
  },
  computed: mapGetters(['getContacts', 'getFields']),
  async mounted () {
    await this.retrieveContacts()
    this.uid = this.$route.params.uid

    this.getContacts.forEach(o => {
      if (o.uid === this.uid) {
        this.firstName = o.firstName
        this.lastName = o.lastName
        this.phone = o.phone

        if (o.fields) {
          const data = []

          /* Adding id to each field */
          Object.keys(o.fields).forEach(key => {
            o.fields[key].id = key
            data.push(o.fields[key])
          })

          this.updateFields(data)
        }
      }
    })
  },
  methods: {
    ...mapMutations(['toggleOverlay', 'updateFields']),
    ...mapActions(['retrieveContacts', 'updateContact']),
    toggleFieldDialog () {
      /* Open modal with adding field functional */
      this.isAddFieldDialog = !this.isAddFieldDialog

      /* Toggle overlay */
      this.toggleOverlay()
    },
    saveContactInfo () {
      const contact = {
        firstName: this.firstName,
        lastName: this.lastName,
        phone: this.phone,
        fields: this.getFields
      }
      this.updateContact({
        contact,
        uid: this.uid
      })
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
    padding: 30px 0 30px 100px;
  }

  .header {
    display: flex;
    justify-content: flex-start;

    &__btn {
      color: black;
      text-decoration: underline;

      &:hover {
        color: #333333;
      }
    }
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

    &__save {
      display: flex;
      margin-top: 50px;
      justify-content: flex-end;
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
