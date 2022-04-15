<template>
    <div class="navbar">
        <div @click="$router.push('/')">Vue 3</div>
        <div class="navbar__btns">
            <my-button @click="$router.push('/posts')">Posts</my-button>
            <my-button @click="$router.push('/about')" style="margin-left: 20px">About</my-button>
        </div>
        <!-- <router-link to="/posts">Posts</router-link>
        <router-link to="/about">About</router-link> -->
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.navbar {
    height: 50px;
    background-color: lightgray;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 0 15px;
}
.navbar__btns {
    margin-left: auto;
}
</style>