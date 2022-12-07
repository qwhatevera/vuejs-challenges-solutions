import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/hello-world'
    },
    {
        path: '/hello-world',
        name: 'HelloWorld',
        component: () => import('@/views/warm-up/hello-world/HelloWorld.vue')
    },
    {
        path: '/lifecycle-hooks',
        name: 'LifecycleHooks',
        component: () => import('@/views/easy/lifecycle-hooks/LifecycleHooks.vue')
    },
    {
        path: '/next-dom-update-flush',
        name: 'NextDOMUpdateFlush',
        component: () => import('@/views/easy/next-dom-update/NextDOMUpdateFlush.vue')
    },
    {
        path: '/dom-portal',
        name: 'DOMPortal',
        component: () => import('@/views/easy/dom-portal/DOMPortal.vue')
    },
    {
        path: '/dynamic-css-values',
        name: 'DynamicCSSValues',
        component: () => import('@/views/easy/dynamic-css-values/DynamicCSSValues.vue')
    },
    {
        path: '/ref-family',
        name: 'RefFamily',
        component: () => import('@/views/easy/ref-family/RefFamily.vue')
    },
    {
        path: '/prevent-event-propagation',
        name: 'PreventEventPropagation',
        component: () => import('@/views/easy/prevent-event-propagation/PreventEventPropagation.vue')
    },
    {
        path: '/losing-reactivity',
        name: 'LosingReactivity',
        component: () => import('@/views/easy/losing-reactivity/LosingReactivity.vue')
    },
    {
        path: '/capitalize',
        name: 'Capitalize',
        component: () => import('@/views/easy/capitalize/Capitalize.vue')
    },
    {
        path: '/prop-validation',
        name: 'PropValidation',
        component: () => import('@/views/easy/prop-validation/PropValidation.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
