import Main from "@/pages/Main";
import About from "@/pages/About";
import PostPages from "@/pages/PostPages";
import PostIdPage from "@/pages/PostIdPage";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: '/', component: Main },
    { path: '/about', component: About },
    { path: '/posts', component: PostPages },
    { path: '/posts/:id', component: PostIdPage },
]

const router = createRouter({
    routes, 
    history: createWebHistory(process.env.BASE_URL)
})

export default router;