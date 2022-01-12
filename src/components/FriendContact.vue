<template>
    <li>
        <h2 class="name" @mouseenter="nameHover" @mouseleave="nameHover">
            {{name}} 
            <fa 
                v-if="isFavorite"
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
        <li>phone: {{phoneNumber}}</li>
        <li>Email: {{emailAddress}}</li>
    </ul>
    </li>
</template>

<script>
export default {
    props: {
        id:{
            type: String,
            required : true,
        },
        name : {
            type : String,
            required : true,
        },
        phoneNumber : {
            type : String,
            required : true,
        },
        emailAddress : {
            type : String,
            required : true,
        },
        isFavorite : {
            type : Boolean,
            required : false,
            default : false,
            validator : function(value){
                return value === true || value === false;
            }
        }
    },
    data(){
        return {
            // friend:{
            //     id:'alif',
            //         dataName: 'alif raher',
            //         phone: '0891234567890',
            //         email: 'alif@gmail.com',
            // },
            detailVisible:false,
            starVisible:this.isFavorite,
        };
    },
    watch:{
        isFavorite(){
            this.isFavorite ?
                this.starVisible = true :
                this.starVisible = false;
        }
    },
    computed: {
        visibilityStatus(){
            return this.detailVisible ? "Hide" : "Show";
        },
        // favorite(){
        //     return this.isFavorite ? true : false;
        // },
    },
    methods:{
        toggleDetails(){
            this.detailVisible = !this.detailVisible;
        },
        nameHover(){
            !this.isFavorite ?
                this.starVisible = !this.starVisible:
                this.starVisible = true;
        },
        toggleFavorite(){
            this.$emit('favorite-toggled',this.id);
            this.starVisible = true;
        },
    }
};
</script>

<style scoped>
.name{
    text-transform: capitalize;
}
</style>