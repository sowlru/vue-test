<template>
    <div class="post">
        <div>
            <div><strong>Name: </strong>{{ post.title }}</div>
            <div><strong>Description: </strong>{{ post.body }}</div>
        </div>
        <div class="post__btns">
            <my-button>Delete</my-button>
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
</style>