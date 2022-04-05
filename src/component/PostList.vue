<template>
    <div v-if="posts.length > 0">
        <h3>Список постов:</h3>
        <transition-group name="post-list">
            <post-item 
                :key="post.id"
                :post="post" 
                v-for="post in posts"
                @remove="$emit('remove',post)"
            />
        </transition-group>

    </div>
    <h3 v-else style="color: red">Список постов пуст</h3>
</template>

<script>
import PostItem from './PostItem.vue'
export default {
  components: { PostItem },
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.post-list-item {
    display: inline-block;
    margin-right: 10px;
}
.post-list-enter-active, .post-list-leave-active {
    transition: all 0.5s ease;
}
.post-list-enter-from, .post-list-leave-to {
    opacity: 0;
    transform: translateX(130px);
}
.post-list-move {
    transition: transform 0.4s ease;
}
</style>
