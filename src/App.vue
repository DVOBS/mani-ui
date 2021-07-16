<template>
  <div id="app">
    <div class="main">
      <div class="title">
        Test
      </div>
      <InspectorItem label="Name">
        <InputString v-model="a"></InputString>
      </InspectorItem>
      <InspectorItem label="Position">
        <InputNumber v-model="b"></InputNumber>
      </InspectorItem>
      <InspectorItem label="Scale"></InspectorItem>
      <InspectorItem label="Speed"></InspectorItem>
      {{a}}
      {{b}}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import InspectorItem from './components/inspector-item/InspectorItem.vue'
import InputString from './components/input-string/InputString.vue'
import InputNumber from './components/input-number/InputNumber.vue'

@Component({
  components: {
    InspectorItem,
    InputString,
    InputNumber
  },
})
export default class App extends Vue {
  private a = '123'
  private b = 123
}
</script>

<style lang="scss">
html,
body {
  height: 100%;
  margin: 0;
}

#app {
  height: 100%;
  background: #1e2433;
}

.main {
  background: #364346;
  width: 280px;
  position: absolute;
  top: 125px;
  bottom: 125px;
  left: 50%;
  margin-left: -140px;
}

.title {
  height: 32px;
  line-height: 32px;
  background-color: #293538;
  padding: 0 10px;
  color: #fff;
}
</style>
