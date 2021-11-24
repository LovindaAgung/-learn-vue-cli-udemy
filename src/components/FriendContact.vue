<template>
    <li>
        <h2>{{friend.name}}</h2>
        <button @click="toggleDetails">{{visibilityStatus}} Detail</button>
    <ul v-show="detailVisible">
        <li>phone: {{friend.phone}}</li>
        <li>Email: {{friend.email}}</li>
    </ul>
    </li>
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