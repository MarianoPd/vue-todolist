const app = new Vue({
    el: '#app',
    data: {
        toDoElements:[
            {
                text: 'Quarterly Newsletter', 
                done: true,
            },
            {
                text: 'Recruiting blog post', 
                done: true,
            },
            {
                text: 'Mobile app launch', 
                done: true,
            },
            {
                text: 'Interview John H.', 
                done: false,
            },
            {
                text: 'Summit update to mobile storefronts', 
                done: true,
            }
        ],

        newToDo: '',
        
    },

    methods:{
        insertToDo(){
            console.log(this.newToDo);
            if(this.newToDo !== ''){
                const element = {
                    text: this.newToDo,
                    done: false,
                };   
                this.newToDo = '';
                this.toDoElements.push(element);
            }
        },

    },
})