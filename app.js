const vue = new Vue({
    el: '#app',
    data(){
        return {
            todo: '',
            toDoList: [],
        }
    },
    methods: {
        addTodo(){
            this.toDoList.push({
                texte: this.todo,
                done: false,
            });
            this.todo = '';
        },
        markAsDone(toDo){
            toDo.done = !toDo.done;
        },
        deleteItem(toDo){
            const index = this.toDoList.indexOf(toDo);
            this.toDoList.splice(index,1);
        }
    },
});
