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
        component: () => import('./components/Rating.vue'),
    },
    {
        path: '/programpreview',
        name: 'ProgramPreview',
        component: () => import('./components/ProgramPreview.vue'),
    },
    {
        path: '/programchoices',
        name: 'ProgramChoices',
        component: () => import('./components/ProgramChoices.vue'),
    },
    {
        path: '/program',
        name: 'Program',
        component: () => import('./components/Program.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;