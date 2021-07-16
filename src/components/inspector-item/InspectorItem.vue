<template>
  <div class="InspectorItem">
    <span class="label">{{label}}</span>
    <div class="content">
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
<style scoped lang="scss">
.InspectorItem {
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 3px 10px;
  min-height: 24px;
  .label {
    width: 30%;
    flex-grow: 0;
    flex-shrink: 0;
    font-size: 12px;
    color: #b1b8ba;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .content {
    flex: 1;
    min-height: 24px;
    padding-left: 10px;
  }
}
</style>
