<template>
<form @submit.prevent>
    <h4>Мой чат</h4>
    <my-input v-model="post.title" placeholder="Name"/>
    <my-input v-model="post.body" placeholder="Description"/>
    <my-button 
        style="align-self: flex-end; margin-top: 15px;"
        @click="createPost"
    >Create</my-button>
</form>    
</template>

<script>
export default {
    data() {
        return {
            post: {
                title: '',
                body: '',
            }
        }
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit('create', this.post);
            this.post = {
                title: '',
                body: '',
            }
            this.body = '';
        },
    }
}
</script>

<style>
form {
    display: flex;
    flex-direction: column;
}
</style>