import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
export default {
    name: 'ThemeSwitcher',
    data() {
        return {
            checked: false
        }
    },
    computed: {
        ...mapGetters({
            getTheme: 'getTheme'
        })

    },
    methods: {
        ...mapActions({
            setTheme: 'setTheme'
        }),

        changeTheme(value) {
            if (value) {
                this.setTheme('dark');
            } else {
                this.setTheme('light')
            }
        }
    },
    mounted() {
        this.checked = (this.getTheme === 'dark' ? true : false);
    }
}