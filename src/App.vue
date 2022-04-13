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
        <div ref="observer" class="observer"></div>   
        <!-- <div class="page__wrapper">
            <div v-for="pageNum in totalPages" 
                :key="pageNum" 
                class="page"
                :class="{'current-page': page === pageNum}"
                @click="changePage(pageNum)"
            >{{ pageNum }}</div>
        </div> -->
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
            page: 1,
            limit: 10,
            totalPages: 0,
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
        // changePage(p) { this.page = p;  },
        async fetchPosts() { 
            try {
                this.isPostLoading = true;
                setTimeout( async () => {
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?', {
                        params: {
                            _page: this.page,
                            _limit: this.limit
                        }
                    });
                    this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
                    this.posts = response.data;
                    this.isPostLoading = false;
                }, 100)

            } catch(e) {
                alert('error in fetchUsers')
            }
        },
        async loadMorePosts() { 
            try {
                this.page += 1;
                setTimeout( async () => {
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?', {
                        params: {
                            _page: this.page,
                            _limit: this.limit
                        }
                    });
                    this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
                    this.posts = [...this.posts, ...response.data];
                    this.isPostLoading = false;
                }, 1000)

            } catch(e) {
                alert('error in fetchUsers')
            }
        }
    },
    mounted() { 
        this.fetchPosts();
        // this.$refs.observer,
        const options = {
            rootMargin: '0px',
            threshold: 1.0
        }
        const callback = (entries, observer) => {
            if(entries[0].isIntersecting && this.page < this.totalPages) {
                this.loadMorePosts()
            }
        };

        let observer = new IntersectionObserver(callback, options);
        observer.observe(this.$refs.observer)
    },
    watch: { 
        // page() { this.fetchPosts() }
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
.page__wrapper {
    display: flex;
    margin-top: 15px;
}
.page {
    border: 1px solid black;
    padding: 10px;
}
.current-page {
    border: 5px solid teal;
}
.observer {
    height: 30px;
    /* background: green; */
}
</style>

