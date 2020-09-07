<template>
  <div class="field">
    <input class="input"
           :id="fieldId"
           :type="type || 'text'"
           :value="value" @input="$emit('input', $event.target.value)"
           :placeholder="placeholder || 'Placeholder'"
    />
    <label :for="fieldId">{{ placeholder }}</label>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: ['type', 'placeholder', 'value'],
  data () {
    return {
      fieldId: this.placeholder + Math.random()
    }
  }
}
</script>

<style scoped lang="scss">

  /* Setting up flex flow to field, to show placeholder on top */
  .field {
    display: flex;
    flex-flow: column-reverse;
    margin-top: 10px;
  }

  label, input {
    transition: all 0.3s;
    touch-action: manipulation;
  }

  /*  Styles for input  */
  .input {
    height: 50px;
    border-radius: 25px;
    background-color: #e6e6e6;
    color: #666;
    line-height: 1.5;
    font-size: 16px;
    font-weight: 700;
    border: 2px solid transparent;
    outline: none;
    transition: .3s linear border;
    width: 100%;
    padding-left: 30px;

    &:focus {
      border: 2px solid #57b846;
    }
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  label {
    text-transform: capitalize;
    letter-spacing: 0.05em;
  }

  /**
  * Translate down and scale the label up to cover the placeholder,
  * when following an input (with placeholder-shown support).
  * Also make sure the label is only on one row, at max 2/3rds of the
  * field—to make sure it scales properly and doesn't wrap.
  */
  input:placeholder-shown + label {
    cursor: text;
    max-width: 66.66%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transform-origin: left bottom;
    transform: translate(0, 2.7rem) scale(1.1);
    margin-left: 25px;
    padding-bottom: 0.5rem;
  }

  /**
  * By default, the placeholder should be transparent. Also, it should
  * inherit the transition.
  */
  ::-webkit-input-placeholder {
    opacity: 0;
    transition: inherit;
  }

  /**
  * Show the placeholder when the input is focused.
  */
  input:focus::-webkit-input-placeholder {
    opacity: 1;
  }

  /**
  * When the element is focused, remove the label transform.
  * Also, do this when the placeholder is _not_ shown, i.e. when
  * there's something in the input at all.
  */
  input:not(:placeholder-shown) + label,
  input:focus + label {
    transform: translate(0, 0) scale(1);
    cursor: pointer;
    margin-left: 25px;
    padding-bottom: 0.5rem;
  }
</style>
