<template>
  <div class="mani-inspector-item">
    <span class="mani-inspector-item-label">{{label}}</span>
    <div class="mani-inspector-item-content">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class InspectorItem extends Vue {
  @Prop({ type: String, required: true, default: '' })
  private label!: string
}
</script>
<style lang="scss">
.mani-inspector-item {
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 6px 10px;
  min-height: 24px;
  .mani-inspector-item-label {
    width: 30%;
    flex-grow: 0;
    flex-shrink: 0;
    font-size: 12px;
    color: #b1b8ba;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .mani-inspector-item-content {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex: 1;
    min-height: 24px;
    padding-left: 10px;
    &>* {
      flex-grow: 1;
      margin-right: 5px;
    }
    &>*:last-child {
      margin-right: 0;
    }
  }
}
</style>
