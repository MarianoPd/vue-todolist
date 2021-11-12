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

        newToDo: 'dabarbarbzdfbd',
    },

    methods:{
        insertToDo(){
            console.log(this.newToDO);
            const element = {
                text: this.newToDO,
                done: false,
            };
            console.log(this.newToDO);
            console.log(element);
            for(elementi of this.toDoElements) console.log(elementi);
            this.toDoElements.push(element);
        },

    },
})