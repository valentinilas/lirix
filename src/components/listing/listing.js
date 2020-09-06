import ListItem from '../list-item/list-item.vue'
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
import types from '../../store/types';

export default {
    name: 'Listing',

    components: {
        'list-item': ListItem

    },

    computed: {
        ...mapGetters({
            allLirix: types.getAllLirix,
            filteredLirix: 'filteredLirix'
        })

    },
    methods: {
        ...mapActions([
            types.postData,
            types.deleteData
        ]),
        deleteItemfromDatabase(postId) {
            this.deleteData(postId);
        }

    }
}