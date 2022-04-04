<template>
    <div class="post" v-for="post in posts">
        <div><strong>Name: </strong>{{ post.title }}</div>
        <div><strong>Description: </strong>{{ post.body }}</div>
    </div>
</template>

<script>
export default {
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
}
</script>

<style>
.post {
    margin-top: 15px;
    border: 2px solid teal;
    padding: 15px;
}   
</style>
