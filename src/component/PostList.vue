<template>
    <div v-if="posts.length > 0">
        <h3>Список постов:</h3>
        <post-item 
            :key="post.id"
            :post="post" 
            v-for="post in posts"
            @remove="$emit('remove',post)"
        />
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

<style>

</style>
