import { createRouter , createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import ProjectsList from './pages/ProjectsList.vue';
import SingleProject from './pages/SingleProject.vue';
import NotFound from './pages/NotFound.vue';
import TechsPage from './pages/TechsPage.vue';
import SingleTech from './pages/SingleTech.vue';
import TypesPage from './pages/TypesPage.vue';
import SingleType from './pages/SingleType.vue';

const router = createRouter ({
    history: createWebHistory(),
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
        {
            path: '/technologies',
            name: 'techs',
            component: TechsPage,
        },
        {
            path: '/technologies/:slug',
            name: 'tech',
            component: SingleTech,
        },
        {
            path: '/types',
            name: 'types',
            component: TypesPage,
        },
        {
            path: '/types/:slug',
            name: 'type',
            component: SingleType,
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound
        }
    ]
});

export { router };