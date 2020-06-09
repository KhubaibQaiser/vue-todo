<template>
  <div id="app">
    <TodoApp />
  </div>
</template>

<script>
import TodoApp from "./components/Todo.vue";

export default {
  name: "App",
  components: {
    TodoApp
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

.d-flex {
  display: flex;
}

.f-row {
  flex-direction: row;
}

.f-col {
  flex-direction: column;
}

.f-justify-center {
  justify-content: center;
}

.f-align-center {
  align-items: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
