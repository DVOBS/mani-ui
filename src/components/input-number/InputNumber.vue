<template>
  <div
    class="InputNumber"
    :class="{ focus, draging }"
  >
    <input
      type="number"
      v-model="innerValue"
      @focus="focus = true"
      @blur="focus = false"
    />
    <font-awesome-icon
      class="arrows"
      ref="fontAwesomeIcon"
      :icon="['fas', 'arrows-alt-h']"
      @mousedown="handleMousedown"
    />
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Ref } from 'vue-property-decorator'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowsAltH } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faArrowsAltH)

@Component({
  components: { FontAwesomeIcon }
})
export default class InputNumber extends Vue {
  @Prop({type: Number, required: true, default: 0})
  private value!: number

  private focus = false
  private draging = false

  private get innerValue() {
    return this.value
  }

  private set innerValue(value) {
    this.$emit('input', Number(value))
  }

  @Ref()
  private fontAwesomeIcon!: SVGElement

  private handleMousedown() {
    this.draging = true
    this.$el.requestPointerLock()
    document.addEventListener('mousemove', this.handleMousemove)
    document.addEventListener('mouseup', this.handleMouseup)
  }

  private handleMousemove(event: MouseEvent) {
    this.innerValue += event.movementX
  }

  private handleMouseup() {
    this.draging = false
    document.exitPointerLock()
    document.removeEventListener('mousemove', this.handleMousemove)
    document.removeEventListener('mouseup', this.handleMouseup)
  }
}
</script>
<style scoped lang="scss">
.InputNumber {
  position: relative;
  min-height: 24px;
  border: 1px solid #293538;
  border-radius: 2px;
  box-sizing: border-box;
  background-color: #2c393c;
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

  &.focus input,
  &:hover input,
  &.draging input {
    background-color: #20292b;
    box-shadow: 0 0 0 1px rgb(255 102 0 / 30%);
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    appearance: none;
  }

  input[ type= "number" ] {
    appearance: textfield;
  }

  .arrows {
    display: none;
    position: absolute;
    right: 5px;
    top: 5px;
    width: 15px;
    height: 10px;
    color: #b1b8ba;
    border: 1px solid;
    cursor: pointer;
    opacity: 0.5;
  }

  &.focus .arrows,
  &:hover .arrows {
    display: block;
  }

  &.draging .arrows {
    color: #7f7;
    opacity: 1;
  }
}
</style>
