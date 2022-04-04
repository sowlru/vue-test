<template>
    <div>
        <h1>Список постов:</h1>
        <post-item :post="post" v-for="post in posts" />
    </div>
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
