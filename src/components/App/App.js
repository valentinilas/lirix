import Header from '../header/header.vue'
import MainMenu from '../main-menu/main-menu.vue'
import Footer from '../footer/footer.vue'
import AddItem from '../add-item/add-item.vue'
import Listing from '../listing/listing.vue'
import { mapActions } from 'vuex';
import types from '../../store/types'
export default {
    name: 'App',
    data() {
        return {

        }
    },
    components: {
        Header,
        MainMenu,
        Footer,
        AddItem,
        Listing

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