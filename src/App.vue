<template>
    <div class="app">
        <post-form @create="createPost"/>
        <post-list :posts="posts" @remove="removePost"/>
    </div>
</template>

<script>
import PostForm from "@/component/PostForm";
import PostList from "@/component/PostList";
export default {
    components: {
        PostForm, PostList
    },
    data() {
        return {
            posts: [
                {id: 1, title: 'Post 1', body: 'Text 1'},
                {id: 2, title: 'Post 2', body: 'Text 2'},
                {id: 3, title: 'Post 3', body: 'Text 3'},
                {id: 4, title: 'Post 4', body: 'Text 4'},
            ],
        }
    },
    methods: {
        createPost(post) { this.posts.push(post); },
        removePost(post) { this.posts = this.posts.filter(p => p.id !== post.id); },
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
</style>

