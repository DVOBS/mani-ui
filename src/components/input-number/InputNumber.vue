<template>
  <div
    class="mani-input-number"
    :class="{ focus, draging }"
  >
    <input
      type="number"
      ref="input"
      v-model="innerValue"
      :step="step"
      :max="max  || ''"
      :min="min || ''"
      @focus="focus = true"
      @blur="focus = false"
    />
    <span
      v-show="title"
      class="mani-input-number-title"
    >{{title}}</span>
    <font-awesome-icon
      class="mani-input-number-arrows"
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

  @Prop({type: String, required: false, default: ''})
  private title!: string

  @Prop({type: Number, required: false, default: 1})
  private step!: number

  @Prop({type: Number, required: false, default: null})
  private max!: number | null

  @Prop({type: Number, required: false, default: null})
  private min!: number | null

  @Ref()
  private input!: HTMLInputElement

  private focus = false
  private draging = false

  private get innerValue() {
    return this.value
  }

  private set innerValue(value) {
    let newVal = (~~(Number(value) / this.step)) * this.step

    if ((this.max || this.max === 0) && newVal >= this.max) {
      newVal = this.max
    }

    if ((this.min || this.min === 0) && newVal <= this.min) {
      newVal = this.min
    }

    this.$emit('input', newVal)
  }

  @Ref()
  private fontAwesomeIcon!: SVGElement

  private handleMousedown() {
    this.draging = true
    this.$el.requestPointerLock()
    document.addEventListener('mousemove', this.handleMousemove)
    document.addEventListener('mouseup', this.handleMouseup)
    this.input.focus()
  }

  private handleMousemove(event: MouseEvent) {
    this.innerValue += this.step *  event.movementX
    this.input.focus()
  }

  private handleMouseup() {
    this.draging = false
    document.exitPointerLock()
    document.removeEventListener('mousemove', this.handleMousemove)
    document.removeEventListener('mouseup', this.handleMouseup)
  }
}
</script>
<style lang="scss">
.mani-input-number {
  position: relative;
  min-height: 24px;
  border: 1px solid #293538;
  border-radius: 2px;
  box-sizing: border-box;
  background-color: #2c393c;

  &.focus input,
  &:hover input,
  &.draging input {
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
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    appearance: none;
  }

  input[ type= "number" ] {
    appearance: textfield;
  }

  .mani-input-number-arrows {
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

  &.focus .mani-input-number-arrows,
  &:hover .mani-input-number-arrows {
    display: block;
  }

  &.draging .mani-input-number-arrows {
    color: #7f7;
    opacity: 1;
  }

  .mani-input-number-title {
    display: block;
    position: absolute;
    right: 0px;
    top: 0px;
    bottom: 0px;
    padding: 0 5px;
    line-height: 22px;
    font-size: 12px;
    color: #829193;
    background-color: #2c393c;
  }

  &.focus .mani-input-number-title,
  &:hover .mani-input-number-title {
    display: none;
  }
}
</style>
