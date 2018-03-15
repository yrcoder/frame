<template>
    <h1 v-if="routeName === 'member'">member</h1>
    <router-view v-else></router-view>
</template>
<script>
export default {
    computed: {
        routeName() {
            return this.$route.name
        }
    }
}
</script>
<style lang='less'>
</style>
