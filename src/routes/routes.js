import AllLirixView from '../views/all-lirix/all-lirix.vue';
import SingleLiView from '../views/single-liric/single-liric.vue';
export default [{
        path: '/',
        component: AllLirixView
    },
    {
        path: '/li/:id',
        component: SingleLiView,
        props: true
    }
];