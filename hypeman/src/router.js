import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('./components/index.vue'),
    },
    {
        path: '/rating',
        name: 'Rating',
        component: () => import('./components/rating.vue'),
    },
    {
        path: '/programpreview',
        name: 'ProgramPreview',
        component: () => import('./components/programPreview.vue'),
    },
    {
        path: '/programchoices',
        name: 'ProgramChoices',
        component: () => import('./components/programChoices.vue'),
    },
    {
        path: '/program',
        name: 'Program',
        component: () => import('./components/program.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;