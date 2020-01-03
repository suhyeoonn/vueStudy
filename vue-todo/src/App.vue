<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList :propsdata="todoItems" v-on:removeTodo="removeItem" @updateTodo="updateItem"></TodoList>
    <TodoFooter v-on:clearTodo="clearTodo"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';
export default {
  components: {
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter
  },
  data() {
    return {
      todoItems: []
    }
  },
  methods: {
    addTodo(todoItem) {
      localStorage.setItem(todoItem, todoItem)
      this.todoItems.push({key: todoItem, value: todoItem})
    },
    clearTodo() {
      localStorage.clear()
      this.todoItems = []
    },
    removeItem(todoItem, index) {
      localStorage.removeItem(todoItem)
      this.todoItems.splice(index, 1)
    },
    updateItem(index, value) {
      localStorage.setItem(localStorage.key(index), value)      
      this.todoItems[index].value = value
    }
  },
  created() {
    if (localStorage.length > 0) {
        for(var i = 0; i < localStorage.length; i++) {
            this.todoItems.push({
              key: localStorage.key(i),
              value: localStorage.getItem(localStorage.key(i))
            })
        }
    }
  }
}
</script>

<style>
  body {
    text-align: center;
    background-color: #f6f6f8;
  }
  input {
    border-style: groove;
    width: 200px;
  }
  button {
    border-style: grrove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0,0,0,0.03)
  }
</style>
