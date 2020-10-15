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
    <div class="modal">
      <div class="modal-content">Modal</div>
    </div>
  </div>
</template>



// js part
<script>
import playground from "./playground";
import TodoList from "@/components/TodoList";

export default {
  name: "App",
  components: {
    TodoList,
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
}

.modal {
  display: none;
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  &-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    width: 80%;
    border: 1px solid #888;
  }
}

.todo {
  &-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  &-container {
    width: 400px;
    background-color: #ededed;
    min-height: 400px;
    margin: 0 auto;
    border-radius: 5px;
  }
}
</style>
