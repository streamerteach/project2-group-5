import { createRouter, createWebHistory } from 'vue-router';
import index from './components/index.vue';
import rating from './components/rating.vue';
import programpreview from './components/programPreview.vue';
import programChoices from './components/programChoices.vue';
import program from './components/program.vue';

const routes = [
    {
        path: '/',
        name: 'index',
        component: index,
    },
    {
        path: '/rating',
        name: 'Rating',
        component: rating,
    },
    {
        path: '/programpreview',
        name: 'ProgramPreview',
        component: programpreview,
    },
    {
        path: '/programchoices',
        name: 'ProgramChoices',
        component: programChoices,
    },
    {
        path: '/program',
        name: 'Program',
        component: program,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;