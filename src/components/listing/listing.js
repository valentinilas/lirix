import ListItem from '../list-item/list-item.vue'
import { mapGetters } from 'vuex';
import types from '../../store/types';

export default {
    name: 'Listing',

    components: {
        'list-item': ListItem

    },

    computed: {
        ...mapGetters({
            filteredLirix: types.filteredLirix
        })

    }
}