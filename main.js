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
            // la funzione trim mi consente di non aggiungere spazzi
            addTodo(){
                if(this.newtodo.trim() == ''){
                    alert('Hai inserito un campo vuoto!')
                } else{

                    this.todos.push({
                        text: this.newtodo.trim(),
                     }) 

                }

                //resetta il campo dopo aggiunta
                this.newtodo = ''
            },

            //funzione per verificare se una voce è stata già fatta
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