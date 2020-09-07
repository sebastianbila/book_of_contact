<template>
  <div class="dialog">
    <div class="dialog__toolbar">
      <h5>{{ header }}</h5>
      <p class="dialog__close" @click="closeHandler">X</p>
    </div>
    <div class="dialog__content">
      <h3> {{ content }}</h3>
    </div>
    <div class="dialog_footer footer footer__align-end">
      <div class="footer__btn">
        <Button text="Cancel" btnStyle="cancel" @clickHandler="closeHandler"/>
      </div>
      <div class="footer__btn">
        <Button text="Yes" btnStyle="success" @clickHandler="acceptHandler"/>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../ui/Button'
export default {
  name: 'AcceptDialog',
  components: { Button },
  props: {
    header: String, // Text in toolbar
    content: String, // Context of dialog
    closeHandler: Function, // Function to close modal window
    acceptHandler: Function // Function to remove selected contact
  }
}
</script>
