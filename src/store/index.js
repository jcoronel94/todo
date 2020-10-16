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
            const todos = localStorage.getItem('my_todos')

            console.log(todos)
            if (!todos) {
                Vue.set(state, 'todos', INITIAL_DATA.todos)
            }
            else {
                Vue.set(state, 'todos', JSON.parse(todos))
            }
            return state.todos
        },
        createTodo(state, todo) {
            todo._id = Math.random().toString(36).substr(2, 7)
            state.todos.push(todo);
            return state.todos
        },
        updateTodo(state, todoToUpdate) {
            const index = state.todos.findIndex((todo) => {
                return todo._id === todoToUpdate._id
            })

            Vue.set(state.todos, index, todoToUpdate)
            return state.todos

        },
        deleteTodo(state, todoId) {
            const index = state.todos.findIndex((todo) => {
                return todo._id === todoId
            })
            state.todos.splice(index, 1)
            return state.todos
        },
    }
}

function persistData(value) {
    const stringify = JSON.stringify(value)
    localStorage.setItem('my_todos',stringify)
}


store.dispatch = function (action, payload) {
    if (!this.actions[action]) throw new Error(`Action ${action} is not defined in store`);

    const result =  this.actions[action](this.state, payload)

    if(!result) return;

    persistData(result)
    return result
}

export default store;