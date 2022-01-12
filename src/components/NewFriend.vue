<template>
    <form @submit.prevent="submitContact">
        <div>
            <label for="">Name</label>
            <input type="text" v-model="name">
        </div>
        <div>
            <label for="">Phone</label>
            <input type="tel" v-model="phone">
        </div>
        <div>
            <label for="">E-mail</label>
            <input type="email" v-model="email">
        </div>
        <div><button>Add Contact</button></div>
    </form>
</template>

<script>
export default {
    emits:['add-contact'],
    data() {
        return{
            name:'',
            phone:'',
            email:'',
        }
    },
    methods:{
        submitContact(){
            var data = {
                name : this.name,
                phone: this.phone,
                email: this.email
            };

            this.$emit(
                'add-contact',
                data
            );

        }
    },
};
</script>