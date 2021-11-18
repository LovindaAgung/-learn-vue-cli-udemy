<template>
    <li>
        <header><h1>{{friend.name}}</h1></header>
        <button @click="toggleDetails">{{visibilityStatus}} Detail</button>
    </li>
    <ul v-show="detailVisible">
        <li>phone: {{friend.phone}}</li>
        <li>Email: {{friend.email}}</li>
    </ul>
</template>

<script>
export default {
    data(){
        return {
            friend:{
                    id:'alif',
                    name: 'alif raher',
                    phone: '0891234567890',
                    email: 'alif@gmail.com',
            },
            detailVisible:false,
        };
    },
    computed: {
        visibilityStatus(){
            return this.detailVisible ? "Hide" : "Show";
        }
    },
    methods:{
        toggleDetails(){
            this.detailVisible = !this.detailVisible;
        }
    }
};
</script>