<template>
    <div class="post">
        <div>
            <div><strong># </strong>{{ post.id }}</div>
            <div><strong>Name: </strong>{{ post.title }}</div>
            <div><strong>Description: </strong>{{ post.body }}</div>
        </div>
        <div class="post__btns">
            <my-button @click="$router.push(`/posts/${post.id}`)" >Open</my-button>
            <!-- <my-button @click="$router.push( '{{ post.title }} ' )" >Open</my-button> -->
            <my-button @click="$emit('remove',post)">Delete</my-button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style scoped>
.post {
    margin-top: 15px;
    border: 2px solid teal;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.post__btns {
    display: flex;
}
</style>