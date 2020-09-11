import AddItem from '../../components/add-item/add-item.vue'
import Listing from '../../components/listing/listing.vue'
import ActionBar from '../../components/action-bar/action-bar.vue'
import { mapActions } from 'vuex';
import types from '../../store/types'
export default {
    name: 'AllLirixView',
    data() {
        return {

        }
    },
    components: {
        'app-add-item': AddItem,
        'app-listing': Listing,
        'app-action-bar': ActionBar

    },
    methods: {
        ...mapActions([
            types.getData
        ])
    },
    mounted() {
        this.getData();
    }
}