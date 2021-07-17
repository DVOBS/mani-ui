<template>
  <div id="app">
    <div class="inspector">
      <div class="title">
        Test
      </div>
      <InspectorItem label="string">
        <InputString v-model="string"></InputString>
      </InspectorItem>
      <InspectorItem label="number">
        <InputNumber v-model="number"></InputNumber>
      </InspectorItem>
      <InspectorItem label="color">
        <InputColor v-model="color"></InputColor>
      </InspectorItem>
      <InspectorItem label="numberArray">
        <InputNumber title="A" v-model="numberArray[0]" :min="0"></InputNumber>
        <InputNumber title="B" v-model="numberArray[1]" :min="0"></InputNumber>
        <InputNumber title="C" v-model="numberArray[2]" :min="0"></InputNumber>
        <InputNumber title="D" v-model="numberArray[3]" :min="0"></InputNumber>
      </InspectorItem>
      <textarea :value="json"></textarea>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import InspectorItem from './components/inspector-item/InspectorItem.vue'
import InputString from './components/input-string/InputString.vue'
import InputNumber from './components/input-number/InputNumber.vue'
import InputColor from './components/input-color/InputColor.vue'

@Component({
  components: {
    InspectorItem,
    InputString,
    InputNumber,
    InputColor
  },
})
export default class App extends Vue {
  private string = '123'
  private number = 123
  private color = '#ff0000'
  private numberArray = [0, 0, 0, 0]

  private get json() {
    return JSON.stringify(this.$data, null, 4)
  }
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
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-family: inconsolatamedium, Monaco, Menlo, 'Ubuntu Mono', Consolas, source-code-pro, monospace;
}

.inspector {
  background: #364346;
  width: 380px;
  height: 800px
}

.inspector-json {
  @extend .inspector;
  left: 66.66%;
}

.title {
  height: 32px;
  line-height: 32px;
  background-color: #293538;
  padding: 0 10px;
  color: #fff;
}

textarea {
  resize: none;
  display: block;
  background: transparent;
  border: none;
  width: 100%;
  height: 300px;
  color: white;
  padding: 0 10px;
  line-height: 24px;
  box-sizing: border-box;
  outline: none;
}
</style>
