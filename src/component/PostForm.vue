<template>
<form @submit.prevent>
    <h4>Мой чат</h4>
    <input 
        v-model="post.title"
        class="input" type="text" 
        placeholder="Name"
    >
    <input 
        v-bind:value="post.body"
        @input="post.body=$event.target.value"
        class="input" type="text" 
        placeholder="Description"
    >
    <button class="btn" @click="createPost">Create</button>
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
.btn {
    margin-top: 15px;
    border: 2px solid teal;
    padding: 10px 15px;
    align-self: flex-end;
    background: none;
    color: teal;
}
</style>