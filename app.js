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
            if (this.todo!='') {
            this.toDoList.push({
                texte: this.todo,
                done: false,
            });
            this.todo = '';
        }
        },
        markallasdone() {
            this.toDoList.forEach(element => {
                element.done=true;
            });
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
