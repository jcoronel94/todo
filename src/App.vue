// html part
<template>
  <div id="app">
    <div class="todo-wrapper">
      <div class="todo-container">
        <todo-list :todos="todos" />
        <div class="todo-create-btn-container">
          <div class="app-button">create</div>
        </div>
      </div>
    </div>
    <modal />
  </div>
</template>



// js part
<script>
import playground from "./playground";
import TodoList from "@/components/TodoList";
import Modal from "@/components/Modal";

export default {
  name: "App",
  components: {
    TodoList,
    Modal,
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
  methods: {
    testFunctionA() {
      console.log(this.text);
      console.log(this.someNumber);
      this.dataFunction();
    },
  },
  created() {
    playground();
  },
};
</script>



// styles part
<style scoped lang ="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.app-button {
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  background-color: #795899;
  color: white;
  font-weight: bold;
  &:hover {
    cursor: pointer;
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
