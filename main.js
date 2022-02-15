const vue = new Vue(
    {
        el: "#app",
        data : {
            newtodo: '',
            todos : [
                {
                    text : 'dormire',
                    done : 'true'
                },
                {
                    text : 'mangiare',
                    done : 'false',
                },
                {
                    text : 'programmare',
                    done : 'true'
                },
                {
                    text : 'giocare',
                    done : 'false'
                },
                {
                    text : 'allenarsi',
                    done : 'true'
                },
            ]
        },

        methods : {

            // funzione per aggiungere una nuova voce 
            addTodo(){
                this.todos.push(this.newtodo);
            },

            //funzione per verificare se un voce è stata già fatta
            check(index){
                this.todos[index].done = !this.todos[index].done
            },

            //funzione per rimuovere un eventuale voce
            remove(index){
                this.todos.splice(index, 1);
            }
        },
    }
)