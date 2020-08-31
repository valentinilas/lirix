export default {
    name: 'Footer',
    computed: {
        siteName() {
            return this.$store.state.siteMeta.siteName;
        }
    }
}