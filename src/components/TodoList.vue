<template>
  <div class="todo-list">
    <div v-if="todoes && todos.length > 0">
      <todo-item
        v-for="todo in todos"
        :key="todo._id"
        :_id="todo._id"
        :description="todo.description"
        :title="todo.title"
      />
    </div>
    <div v-else class="no-todos">
        No Todos :() Create one !
    </div>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";

export default {
  name: "TodoList",
  components: {
    TodoItem,
  },
  props: {
    todos: {
      required: true,
      type: Array,
    },
  },
};
</script>



<style lang="scss" scoped>
.todo-list {
  flex: 1;
}

.no-todos{
    padding:20px;
    font-size:23px;
    font-weight: bold;
    text-align:center;
}
</style>