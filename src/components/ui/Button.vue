<template>
  <div
    :class="['btn', btnStyle]"
    @click="clickHandler"
  >{{ text || 'Default' }}
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: ['text', 'btnStyle'], // text for button, type of button
  methods: {
    clickHandler () {
      /* Emit new event for button click */
      this.$emit('clickHandler')
    }
  }
}
</script>

<style lang="scss">
  .btn {
    background-color: #57b846;
    height: 50px;
    border-radius: 25px;
    font-size: 15px;
    line-height: 1.5;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    transition: .3s ease-in-out background-color;

    &:hover {
      cursor: pointer;
      background-color: #333333;
    }
  }

  .save {
    background-color: #57b846;
  }

  .cancel {
    background-color: #a11717;
  }
</style>
