<template>
  <div class="d-flex f-justify-center" style="margin-bottom: 10px">
    <div class="todo-title">{{ todo.title }}</div>
    <button v-on:click="deleteTodo(todo)">Delete</button>
    <button v-if="!isFirst" v-on:click="moveUp(todo)">^</button>
    <button
      v-if="!isLast"
      v-on:click="moveDown(todo)"
      style="transform: rotateX(180deg);"
    >
      ^
    </button>
  </div>
</template>

<script>
export default {
  props: {
    todo: Object,
    isFirst: Boolean,
    isLast: Boolean,
  },
  methods: {
    deleteTodo: function(todo) {
      this.$emit("delete-todo", todo);
    },
    moveUp: function(todo) {
      this.$emit("move-todo-up", todo);
    },
    moveDown: function(todo) {
      this.$emit("move-todo-down", todo);
    },
  },
};
</script>

<style scoped>
.todo-title {
  margin-right: 10px;
}
</style>
