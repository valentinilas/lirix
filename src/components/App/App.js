import Header from '../header/header.vue'
import Footer from '../footer/footer.vue'
import AddItem from '../add-item/add-item.vue'
import Listing from '../listing/listing.vue'
import ActionBar from '../action-bar/action-bar.vue'
import { mapActions } from 'vuex';
import types from '../../store/types'
export default {
    name: 'App',
    data() {
        return {

        }
    },
    components: {
        'app-header': Header,
        'app-footer': Footer,
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