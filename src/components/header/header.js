import ThemeSwitcher from '../../components/theme-switcher/theme-switcher.vue'

export default {
    name: 'Header',
    computed: {
        siteName() {
            return this.$store.state.siteMeta.siteName;
        }
    },
    components: {

        'theme-switcher': ThemeSwitcher

    },

}