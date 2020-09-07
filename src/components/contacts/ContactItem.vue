<template>
  <div class="item">
    <div class="item__details">
      <div class="item__data">
        <div class="item__avatar">{{ firstName.charAt(0).toUpperCase() }}</div>
        <div class="item__name">{{ firstName }} {{ lastName }}</div>
      </div>
      <div class="item__phone">{{ phone }}</div>
    </div>
    <div class="item__controls">
      <div>Edit</div>
      <div>Info</div>
      <div @click="toggleModal">X</div>
    </div>
    <AcceptDialog
      v-if="isRemove"
      header="Delete contact"
      content="Are you sure you want to remove contact?"
      :acceptHandler="deleteContact"
      :closeHandler="toggleModal"/>
  </div>
</template>

<script>
import AcceptDialog from '../dialogs/AcceptDialog'

export default {
  components: { AcceptDialog },
  props: ['lastName', 'firstName', 'phone'],
  data () {
    return {
      isRemove: false // To show modal with accept remove item
    }
  },
  methods: {
    toggleModal () {
      this.isRemove = !this.isRemove
      this.$store.dispatch('toggleOverlay')
    },
    deleteContact () {

    }
  }
}
</script>

<style scoped lang="scss">
  .item {
    background-color: #e8e8e8;
    padding: 10px 20px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    overflow: hidden;
    min-height: 35px;
    transition: .3s ease-in-out background-color;

    &:hover {
      background-color: #d9d9d9;

      .item__controls {
        transform: translateX(0);
        opacity: 1;
      }
    }

    &:first-child {
      margin: 0;
    }

    &__details {
      display: flex;
      justify-content: space-between;
      width: 80%;
      align-items: center;
    }

    &__controls {
      display: flex;
      opacity: 0;
      align-items: center;
      width: 15%;
      transition: .1s linear all;

      > div {
        font-size: 16px;
        margin-right: 15px;
        border-radius: 10px;
        padding: 2px 5px;
        color: #fff;
        cursor: pointer;
        transition: .3s ease-in-out background;

        &:first-child {
          background: rgba(87, 184, 70, 0.8);

          &:hover {
            background: rgba(87, 184, 70, 1);
          }
        }

        &:nth-child(2) {
          background: rgba(70, 121, 184, 0.8);

          &:hover {
            background: rgba(70, 121, 184, 1);
          }
        }

        &:last-child {
          margin: 0;
          background: rgba(201, 7, 53, 0.8);

          &:hover {
            background: rgba(201, 7, 53, 1);
          }
        }
      }
    }

    &__avatar {
      height: 40px;
      width: 40px;
      background-color: #4a98b6;
      border-radius: 20px;
      color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      font-weight: 700;
    }

    &__name {
      font-family: 'Roboto', sans-serif;
      font-weight: 700;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-left: 20px;
      width: 95%;
    }

    &__phone {
      margin-left: 20px;
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      cursor: pointer;
    }

    &__data {
      display: flex;
      align-items: center;
      width: 75%;
    }
  }
</style>
