<template>
  <div id="todoApp">
    <h1>{{ this.totalTodos }} Todos:</h1>
    <div>
      <TodoItem
        v-for="(todo, index) in todos"
        v-bind:key="todo['.key']"
        v-bind:todo="todo"
        v-bind:isFirst="index === 0"
        v-bind:isLast="index === totalTodos - 1"
        v-on:delete-todo="onDeleteTodo"
        v-on:move-todo-up="onMoveTodoUp"
        v-on:move-todo-down="onMoveTodoDown"
      />
    </div>
    <input
      type="text"
      v-model.trim="newTodo"
      style="margin-right: 10px;"
      v-on:keydown.enter="addNewTodo"
      v-on:keyup.ctrl.8.exact="onDeleteLastTodo"
    />
    <button v-on:click="addNewTodo">Add</button>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import { db } from "../data/db";

export default {
  data: function() {
    return {
      newTodo: "",
      todos: [],
    };
  },
  firebase: {
    // Exposed by vuefire plugin
    todos: db.ref("todos"),
  },
  computed: {
    totalTodos: function() {
      return this.todos.length;
    },
  },
  methods: {
    addNewTodo: function() {
      if (this.newTodo.length == 0) {
        return;
      }
      // this.todos.push(this.newTodo);
      this.$firebaseRefs.todos.push({
        title: this.newTodo,
      });
      this.newTodo = "";
    },
    onDeleteTodo: function(todo) {
      this.$firebaseRefs.todos.child(todo[".key"]).remove();
    },
    onMoveTodoUp: function(todo) {
      const currentIndex = this.todos.findIndex((t) => t.id === todo.id);
      if (currentIndex > 0) {
        const newIndex = currentIndex - 1;
        const toMove = this.todos.splice(currentIndex, 1)[0];
        this.todos.splice(newIndex, 0, toMove);
      }
    },
    onMoveTodoDown: function(todo) {
      const currentIndex = this.todos.findIndex((t) => t.id === todo.id);
      if (currentIndex < this.totalTodos - 1) {
        const newIndex = currentIndex + 1;
        const toMove = this.todos.splice(currentIndex, 1)[0];
        this.todos.splice(newIndex, 0, toMove);
      }
    },
    onDeleteLastTodo: function() {
      this.todos.pop();
    },
  },
  components: {
    TodoItem,
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
