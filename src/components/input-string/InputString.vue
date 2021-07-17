<template>
  <div
    class="mani-input-string"
    :class="{ focus }"
  >
    <input
      type="text"
      v-model="innerValue"
      @focus="focus = true"
      @blur="focus = false"
    >
  </div>
</template>
<script lang="ts">
import { Component, Vue, ModelSync } from 'vue-property-decorator'
@Component
export default class InputString extends Vue {
  @ModelSync('value', 'input', { type: String })
  readonly innerValue!: string

  private focus = false
}
</script>
<style lang="scss">
.mani-input-string {
  min-height: 24px;
  border: 1px solid #293538;
  border-radius: 2px;
  box-sizing: border-box;
  background-color: #2c393c;

  &.focus input,
  &.focus input {
    background-color: #20292b;
    box-shadow: 0 0 0 1px rgb(255 102 0 / 30%);
  }

  input {
    display: block;
    width: 100%;
    height: 22px;
    line-height: 22px;
    border: none !important;
    background: transparent !important;
    outline: none !important;
    padding: 0 5px;
    box-sizing: border-box;
    color: #b1b8ba;
    font-size: 12px;
  }
}
</style>
