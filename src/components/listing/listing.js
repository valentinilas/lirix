import { mapGetters } from 'vuex';

export default {
    name: 'Listing',

    computed: {
        ...mapGetters({
            allLirix: 'getAllLirix'
        })
    }
}