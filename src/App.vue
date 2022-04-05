<template>
    <div class="app">
        <h1>Страница с постами</h1>
        <my-input 
            v-model="searchQuery"
            placeholder="Searching..."   
        />
        <div class="app__btns">
            <my-button @click="showDialog">
                Create post
            </my-button>
            <my-select 
                v-model="selectedSort" 
                :options="sortOptions"
            />
        </div>

        <my-dialog v-model:show="dialogVisible">
            <post-form @create="createPost"/>
        </my-dialog>
        <post-list 
            :posts="sortedAndSearchedPosts" 
            @remove="removePost"
            v-if="!isPostLoading"
        />
        <div v-else>Loading...</div>
    </div>
</template>

<script>
import PostForm from "@/component/PostForm";
import PostList from "@/component/PostList";
import axios from 'axios';
export default {
    components: {
        PostForm, PostList
    },
    data() {
        return {
            posts: [ ],
            dialogVisible: false,
            modificatorValue: '',
            isPostLoading: false,
            selectedSort: '',
            searchQuery: '',
            sortOptions: [
                {value: 'title', name: 'By name'},
                {value: 'body', name: 'By description'},
            ]
        }
    },
    methods: {
        createPost(post) { this.posts.push(post); this.dialogVisible = false; },
        removePost(post) { this.posts = this.posts.filter(p => p.id !== post.id); },
        showDialog() { this.dialogVisible = true; },
        async fetchPosts() { 
            try {
                this.isPostLoading = true;
                setTimeout( async () => {
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
                    this.posts = response.data;
                    this.isPostLoading = false;
                }, 1000)

            } catch(e) {
                alert('error in fetchUsers')
            }
        }
    },
    mounted() { this.fetchPosts(); },
    watch: { 

    },
    computed: {
        sortedPosts() { 
            return [...this.posts].sort( (post1, post2 ) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort] ))
        },
        sortedAndSearchedPosts() {
            return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
        }
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
    /* margin: 20px; */
    padding: 20px;
}
.app__btns {
    margin: 15px 0px;
    display: flex;
    justify-content: space-between;
}
</style>

