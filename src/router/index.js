// [router > index.js 설명]
// 1. router : 라우터는 웹 페이지 간의 이동하는 방법 및 경로를 설정해주는 파일입니다
// 2. router 사용 시 App.js 파일에서는 <router-view /> 를 사용해서 로드합니다
// 3. 사용 예시 : http://localhost:8080/main

// [라우터 import 수행 실시]
import { createWebHistory, createRouter } from 'vue-router';





// [라우터 path 접속 경로 설정]
const routes = [
    {
        path: "/hello", // [경로]
        name: "hello", // [이름]
        component: () => import('@/components/HelloWorld.vue') // [로드 파일]
    },
    {
        path: "/myCalculator", // [경로]
        name: "myCalculator", // [이름]
        component: () => import('@/components/MyCalculator.vue') // [로드 파일]
    }
];





// [라우터 설정 실시]
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;