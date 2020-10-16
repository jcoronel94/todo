<template>
  <div v-if="!editMode" class="todo-item">
    <div class="todo-item-content-title">{{ title }}</div>
    <div class="todo-item-content-description">{{ description }}</div>

    <button @click="editMode = true;" class="app-button is-warning">Edit</button>
      <button @click="deleteTodo" class="app-button is-danger">Delete</button>
  </div>

  <div v-else class="todo-item">
    <form class="app-form">
      <div class="form-control">
        <label class="label">Title</label>
        <input :value="title" class="form-input" type="text" />
      </div>
      <div class="form-control">
        <label class="label">Description</label>
        <textarea  :value="description" cols="30" rows="5" class="form-input"> </textarea>
      </div>

      <button 
        @click.prevent="editTodo" 
        class="app-button is-warning">Update</button>
      <button 
        @click.prevent="editMode=false" 
        class="app-button is-danger">Cancel</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      editMode: false,
    };
  },
  methods: {
   editTodo(){

   },
    deleteTodo() {},
  },
};
</script>

<style lang="scss" scoped>
.app-button {
  font-size: 15px;
  &.is-warning {
    margin-right: 5px;
  }
}

.todo {
  &-item {
    background-color: gray;
    min-height: 70px;
    margin: 10px;
    color: white;
    border-radius: 5px;
    font-size: 23px;
    padding: 10px;
    &-content {
      margin-bottom: 10px;
      &-title {
        font-weight: bold;
      }
      &-description {
        font-size: 19px;
      }
    }
  }
}
</style>