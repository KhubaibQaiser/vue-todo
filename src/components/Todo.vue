<template>
  <div id="todoApp">
    <h1>{{this.totalTodos}} Todos:</h1>
    <div>
      <TodoItem
        v-for="todo in todos"
        v-bind:todo="todo"
        v-bind:key="todo"
        v-on:delete-todo="onDeleteTodo"
      />
    </div>
    <input type="text" v-model="newTodo" style="margin-right: 10px;" v-on:keypress="onKeyPress" />
    <button v-on:click="addNewTodo">Add</button>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  data: function() {
    return {
      newTodo: "",
      todos: ["Learn vue", "Start with the project"]
    };
  },
  computed: {
    totalTodos: function() {
      return this.todos.length;
    }
  },
  methods: {
    onKeyPress: function(e) {
      if (e.code == "Enter" || e.key == "Enter") {
        this.addNewTodo();
      }
    },
    addNewTodo: function() {
      if (this.newTodo.length == 0) {
        return;
      }
      this.todos.push(this.newTodo);
      this.newTodo = "";
    },
    onDeleteTodo: function(todo) {
      this.todos = this.todos.filter(t => t !== todo);
    }
  },
  components: {
    TodoItem
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
