import Vue from 'vue';


const INITIAL_DATA = {
    todos: [
      
    ]
}
const store = {
    state: {
        todos: []
    },
    actions: {
        initStore(state) {
            const todos = localStorage().getItem('my_todos')

            if (!todos) {
                Vue.set(state,'todos',INITIAL_DATA)
            }
            return state.todos
        },
        createTodo(state, todo) {
            todo._id = Math.random.toString(36).substr(2, 7)
            state.todos.push(todo);
        },
        updateTodo(state, todoToUpdate) {
            const index = state.todos.findIndex((todo) => {
                return todo._id === todoToUpdate._id
            })

            Vue.set(state.todos, index, todoToUpdate)
            // state.todos[index] = todoToUpdate
        },
        deleteTodo(state, todoId) {
            const index = state.todos.findIndex((todo) => {
                return todo._id === todoId
            })
            state.todos.splice(index, 1)
        }
    }

}


store.dispatch = function (action, payload) {
    if (!this.actions[action]) throw new Error(`Action ${action} is not defined in store`);

    return this.actions[action](this.state, payload)
}

export default store;