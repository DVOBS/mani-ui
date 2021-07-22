<template>
  <div id="app">
    <div class="coordinates-space">
      <CoordinateSystem
        ref="CoordinateSystem"
        :textColor="textColor"
        :bgColor="bgColor"
        :boundary="boundary"
        :axisWidth="axisWidth"
        :tickLength="tickLength"
        :subTickLength="subTickLength"
        :textFontSize="textFontSize"
        :tickTextMargin="tickTextMargin"
        @click.native="handleCoordinateSystemClick"
      >
        <div class="page">
          <img alt="Vue logo" src="./assets/logo.png">
          <h1>{{string}}</h1>
        </div>
      </CoordinateSystem>
    </div>
    <div class="inspector">
      <div class="title">
        Test
      </div>
      <InspectorItem label="string">
        <InputString v-model="string"></InputString>
      </InspectorItem>
      <InspectorItem label="textColor">
        <InputColor v-model="textColor"></InputColor>
      </InspectorItem>
      <InspectorItem label="bgColor">
        <InputColor v-model="bgColor"></InputColor>
      </InspectorItem>
      <InspectorItem label="boundary">
        <InputNumber title="A" v-model="boundary[0]" :min="0"></InputNumber>
        <InputNumber title="B" v-model="boundary[1]" :min="0"></InputNumber>
        <InputNumber title="C" v-model="boundary[2]" :min="0"></InputNumber>
        <InputNumber title="D" v-model="boundary[3]" :min="0"></InputNumber>
      </InspectorItem>
      <InspectorItem label="axisWidth">
        <InputNumber v-model="axisWidth"></InputNumber>
      </InspectorItem>
      <InspectorItem label="tickLength">
        <InputNumber v-model="tickLength"></InputNumber>
      </InspectorItem>
      <InspectorItem label="subTickLength">
        <InputNumber v-model="subTickLength"></InputNumber>
      </InspectorItem>
      <InspectorItem label="textFontSize">
        <InputNumber v-model="textFontSize"></InputNumber>
      </InspectorItem>
      <InspectorItem label="tickTextMargin">
        <InputNumber v-model="tickTextMargin"></InputNumber>
      </InspectorItem>
      <InspectorItem label="clickPosition">
        <span>{{position}}</span>
      </InspectorItem>
      <!-- <textarea :value="json"></textarea> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator';
import InspectorItem from './components/inspector-item/InspectorItem.vue'
import InputString from './components/input-string/InputString.vue'
import InputNumber from './components/input-number/InputNumber.vue'
import InputColor from './components/input-color/InputColor.vue'
import CoordinateSystem from './components/coordinate-system/CoordinateSystem.vue'

@Component({
  components: {
    InspectorItem,
    InputString,
    InputNumber,
    InputColor,
    CoordinateSystem
  },
})
export default class App extends Vue {
  private string = 'VUE'
  private bgColor = '#003045'
  private textColor = '#ffffff'
  private boundary = [0, 0, 1920, 1080]

  private axisWidth = 25
  private tickLength = 5
  private subTickLength = 2
  private textFontSize = 12
  private tickTextMargin = 10

  private position = { x: 0, y: 0 }

  @Ref()
  private CoordinateSystem!: CoordinateSystem

  private get json() {
    return JSON.stringify(this.$data, null, 4)
  }

  private handleCoordinateSystemClick(event: MouseEvent) {
    const position = this.CoordinateSystem.getAxisPosition(event)
    this.position = position
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

.coordinates-space {
  flex-grow: 1;
  height: calc(100vh - 20px);
  margin: 10px;
}

.page {
  width: 1920px;
  height: 1080px;
  background: linear-gradient(to right, red , yellow);
}

.inspector {
  background: #364346;
  width: 380px;
  height: calc(100vh - 20px);
  margin: 10px;
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
  height: 600px;
  color: white;
  padding: 0 10px;
  line-height: 24px;
  box-sizing: border-box;
  outline: none;
}
</style>
