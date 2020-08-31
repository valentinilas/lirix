export default {
    name: 'Header',
    computed: {
        siteName() {
            return this.$store.state.siteMeta.siteName;
        }
    }

}