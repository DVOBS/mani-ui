<template>
  <div class="InputColor">
    <input
      type="color"
      v-model="innerValue"
    >
  </div>
</template>
<script lang="ts">
import { Component, Vue, ModelSync } from 'vue-property-decorator'
@Component
export default class InputColor extends Vue {
  @ModelSync('value', 'input', { type: String })
  readonly innerValue!: string
}
</script>
<style scoped lang="scss">
.InputColor {
  position: relative;
  width: 45px;
  height: 24px;

  &::after {
    content: ' ';
    position:absolute;
    bottom: 0;
    left: 29px;
    width: 0;
    height: 0;
    background-color: transparent;
    border-bottom: 16px solid #293538;
    border-left: 16px solid transparent;
    pointer-events: none;
  }

  input {
    width: 45px;
    height: 24px;
    padding: 0;
    border: none;
    outline: none;
    -webkit-appearance: none;
    cursor: pointer;
  }

  input::-webkit-color-swatch-wrapper {
    padding: 0; 
  }
  input::-webkit-color-swatch {
    border: none;
  }
}
</style>
