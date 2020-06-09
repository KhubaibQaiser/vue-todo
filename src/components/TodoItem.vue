<template>
  <div class="d-flex f-justify-center" style="margin-bottom: 10px">
    <div class="todo-title">{{todo}}</div>
    <button v-on:click="deleteTodo(todo)">Delete</button>
  </div>
</template>

<script>
export default {
  props: {
    todo: String
  },
  methods: {
    deleteTodo: function(todo) {
      this.$emit("delete-todo", todo);
    }
  }
};
</script>

<style scoped>
.todo-title {
  margin-right: 10px;
}
</style>
