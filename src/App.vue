// html part
<template>
  <div id="app">
    <div class ="todo-wrapper">
      <div class="todo-container">
        <div class="todo-list">
          <div class="todo-item">
            <div class ="todo-item-content-title">
            Walk
            </div>
            <div class="todo-item-content-description">
            go there
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



// js part
<script>
import playground from "./playground";

export default {
  name: "App",
  data() {
    return {
      text: "string",
      number: 1,
      canDecide: true,
      list: [1, 2, 3],
      someObject: {
        a: 1,
        b: 2,
        c: [1, 2, 3, 4]
      },
      dataFunction() {
        console.log("hi");
      }
    };
  },
  methods: {
    testFunctionA() {
      console.log(this.text);
      console.log(this.someNumber);
      this.dataFunction();
    }
  },
  created() {
    playground();
  }
};
</script>



// styles part
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.todo-container {
  width: 400px;
  background-color: #ededed;
  min-height: 400px;
  margin:0 auto;
  border-radius: 5px;
}

.todo-wrapper{
  display: flex;
  justify-content: center;
  width: 100%;
}

.todo-item{
  background-color: gray;
  height:70px;
  margin: 10px;
  color:white;
  border-radius: 5px;
  font-size: 23px;
  padding: 10px;
}

.todo-item-content-title{
  font-weight: bold;

}

.todo-item-content-description{
  font-size: 19px;
}
</style>
