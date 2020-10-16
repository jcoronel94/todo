import Vue from 'vue';

const store = {
    state: {
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
        ]
    },
    actions: {
        createTodo(state,todo) {
            todo._id = Math.random.toString(36).substr(2, 7)
            state.todos.push(todo);
        },
        updateTodo(state,todoToUpdate){
            const index = state.todos.findIndex((todo)=>{
                return todo._id === todoToUpdate._id
            })

            Vue.set(state.todos, index,todoToUpdate)
            // state.todos[index] = todoToUpdate
        }
    }

}


store.dispatch = function (action, payload) {
    if (!this.actions[action]) throw new Error(`Action ${action} is not defined in store`);

    return this.actions[action](this.state, payload)
}

export default store;