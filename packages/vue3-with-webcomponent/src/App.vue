<script>
import HelloWorld from './components/HelloWorld.vue'
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

<template>
  <main>
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
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
