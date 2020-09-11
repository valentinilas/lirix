import ListItem from '../../components/list-item/list-item.vue'
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
import types from '../../store/types';

export default {
    name: 'SingleLiView',
    data() {
        return {

        }
    },
    components: {
        'list-item': ListItem

    },
    computed: {
        ...mapGetters({
            getSingleLiric: types.getSingleLiric
        })

    },
    methods: {
        ...mapActions([
            types.getDataSingle
        ])

    },
    created() {
        this.getDataSingle(this.$route.params.id);
    }
}