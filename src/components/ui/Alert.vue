<template>
  <transition name="fade">
    <div :class="['alert', type]"
         v-if="isAlert">
      <div class="alert__text">
        {{ text }}
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Alert',
  computed: mapGetters(['isAlert', 'text', 'type'])
}
</script>

<style scoped lang="scss">
  .alert {
    width: 450px;
    min-height: 50px;
    height: auto;
    background: rgba(102, 177, 241, 0.8);
    padding: 10px 30px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: fixed;
    top: calc(50% - 480px);
    left: calc(50% - 225px);
    z-index: 1000;

    &__text {
      color: #fff;
      font-weight: 700;
      overflow-wrap: break-word;
      width: 100%;
      text-align: center;
    }
  }

  .success {
    background-color: #57b846;
  }

  .info {
    background: rgba(102, 177, 241, 0.8);
  }

  .warning {
    background-color: #a11717;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
