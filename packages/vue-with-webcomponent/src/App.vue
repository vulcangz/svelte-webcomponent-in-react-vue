<template>
    <ul class="list-group">
      <li>
        Vue counter
        <span class="badge">{{ count }}</span>
      </li>
      <li>
        <my-counter
          :title="myTitle"
          v-on:click="handleClick"
          @customOnClick="handleCustomClick"
        ></my-counter>
      </li>
    </ul>
</template>

<script>
import "MyCounter";
import "./App.css";

export default {
  name: "App",
  data() {
    return {
      count: 0,
      myTitle: `咣`,
    };
  },
  methods: {
    handleClick: function (event) {
      console.log(event);
    },
    handleCustomClick: function (event) {
      this.count++;
      console.log(event.detail.text);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
