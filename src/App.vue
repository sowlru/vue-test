<template>
    <div class="app">
        <form>
            <h4>Мой чат</h4>
            <input class="input" type="text" placeholder="Name">
            <input class="input" type="text" placeholder="Description">
            <button class="btn">Create</button>
        </form>
        <div class="post" v-for="post in posts">
            <div><strong>Name: </strong>{{ post.title }}</div>
            <div><strong>Description: </strong>{{ post.body }}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: [
                {id: 1, title: 'Post 1', body: 'Text 1'},
                {id: 2, title: 'Post 2', body: 'Text 2'},
                {id: 3, title: 'Post 3', body: 'Text 3'},
                {id: 4, title: 'Post 4', body: 'Text 4'},
            ]
        }
    },
    methods: {

    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.app {
    padding: 20px;
}
.input {
    width: 100%;
    border: 2px solid teal;
    margin-top: 15px;
    border: 2px solid teal;
    padding: 10px 15px;
}
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
.post {
    margin-top: 15px;
    border: 2px solid teal;
    padding: 15px;
}
</style>

