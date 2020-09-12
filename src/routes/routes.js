import AllLirixView from '../views/all-lirix/all-lirix.vue';
import SingleLiView from '../views/single-liric/single-liric.vue';
export default [{
        path: '/',
        component: AllLirixView
    },
    {
        path: '/lirix',
        component: AllLirixView
    },
    {
        path: '/lirix/li/:id',
        component: SingleLiView,
        props: true
    }
];