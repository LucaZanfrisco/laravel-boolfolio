import { createRouter , createMemoryHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import ProjectsList from './pages/ProjectsList.vue';
import SingleProject from './pages/SingleProject.vue';

const router = createRouter ({
    history: createMemoryHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsList
        },
        {
            path: '/projects/:slug',
            name: 'project',
            component: SingleProject,
        },
    ]
});

export { router };