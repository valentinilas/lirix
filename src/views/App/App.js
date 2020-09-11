import Header from '../../components/header/header.vue'
import Footer from '../../components/footer/footer.vue'
import { mapGetters } from 'vuex';

export default {
    name: 'App',
    data() {
        return {

        }
    },
    components: {
        'app-header': Header,
        'app-footer': Footer
    },
    computed: {
        ...mapGetters({
            getTheme: 'getTheme'
        })

    },

}