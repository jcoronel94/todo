// html part
<template>
  <div id="app">
    <div class="todo-wrapper">
      <div class="todo-container">
        <todo-list :todos="todos" />
        <div class="todo-create-btn-container">
          <todoCreate @formSubmitted="createTodo" />
        </div>
      </div>
    </div>
  </div>
</template>



// js part
<script>
import playground from "./playground";
import TodoList from "@/components/TodoList";
import TodoCreate from "@/components/TodoCreate";

export default {
  name: "App",
  components: {
    TodoList,
    TodoCreate,
  },
  data() {
    return {
      todos: [
        {
          _id: "1",
          title: "walk the dog",
          description: "do it now",
        },
        {
          _id: "2",
          title: "walk the dog2",
          description: "do it now2",
        },
        {
          _id: "3",
          title: "walk the dog3",
          description: "do it now3",
        },
      ],
    };
  },
  created() {
    playground();
  },
  methods: {
    createTodo(todo) {
      this.todos.push(todo);
    },
  },
};
</script>



// styles part
<style lang ="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  margin-top: 60px;
}

.app-error {
  color: red;
}

.app-button {
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  background-color: #795899;
  color: white;
  font-weight: bold;
  &.is-primary {
    background-color: green;
  }
  &.is-warning {
    background-color: #ffa753;
  }
  &.is-danger {
     background-color: #ff5a5a;
  }
  &:hover {
    cursor: pointer;
  }
}

.app-form {
  text-align: left;
  label {
    display: block;
    font-size: 18px;
    font-weight: bold;
  }
  .form-input {
    font-size: 17px;
    padding: 10px;
  }
  .form-control {
    margin-bottom: 10px;
    &-last {
      margin-bottom: 0px;
    }
  }
}

.todo {
  &-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  &-create-btn-container {
    margin: 10px;
  }
  &-container {
    display: flex;
    flex-direction: column;
    width: 400px;
    background-color: #ededed;
    min-height: 400px;
    margin: 0 auto;
    border-radius: 5px;
  }
}
</style>
