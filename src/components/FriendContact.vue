<template>
    <li>
        <h2 class="name" @mouseenter="nameHover" @mouseleave="nameHover">
            {{name ? name : friend.dataName}} 
            <fa 
                v-if="favoriteFriend"
                @click="toggleFavorite" 
                v-show="starVisible" 
                :icon="['fas','star']">
            </fa>
            <fa 
                v-else
                @click="toggleFavorite" 
                v-show="starVisible" 
                :icon="['far','star']">
            </fa>
        </h2>
        <button @click="toggleDetails">{{visibilityStatus}} Detail</button>
    <ul v-show="detailVisible">
        <li>phone: {{friend.phone}}</li>
        <li>Email: {{friend.email}}</li>
    </ul>
    </li>
</template>

<script>
export default {
    props:[
        'name',
        'phoneNumber',
        'emailAddress',
        'isFavorite',
    ],
    data(){
        return {
            friend:{
                id:'alif',
                    dataName: 'alif raher',
                    phone: '0891234567890',
                    email: 'alif@gmail.com',
            },
            detailVisible:false,
            starVisible:this.isFavorite,
            favoriteFriend:this.isFavorite,
        };
    },
    watch:{
        favoriteFriend(){
            this.favoriteFriend ? 
                this.starVisible = true :
                this.starVisible = false;
        },

    },
    computed: {
        visibilityStatus(){
            return this.detailVisible ? "Hide" : "Show";
        },
        favorite(){
            return this.isFavorite ? true : false;
        },
    },
    methods:{
        toggleDetails(){
            this.detailVisible = !this.detailVisible;
        },
        nameHover(){
            // console.log("a");
            // if(!this.favoriteFriend){
            //     this.starVisible = !this.starVisible;
            // }else{
            //     this.starVisible = true;
            // }
            !this.favoriteFriend ?
                this.starVisible = !this.starVisible:
                this.starVisible = true;
        },
        toggleFavorite(){
            this.favoriteFriend = !this.favoriteFriend;
            this.starVisible = true;
        }
    }
};
</script>

<style scoped>
.name{
    text-transform: capitalize;
}
</style>