import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
    name: 'Listing',
    data() {
        return {}
    },
    methods: {
        ...mapActions({ getNewJoke: 'setCurrentJoke' })

    },
    computed: {
        ...mapGetters({
            joke: 'getCurrentJoke',
            jokes: 'getAllJokes'
        })
        // joke() {
        //     return this.$store.getters.getCurrentJoke;
        // },
        // jokes() {
        //     return this.$store.getters.getAllJokes;
        // }
    }
}