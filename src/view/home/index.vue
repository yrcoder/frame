<template>
    <div v-if="routeName === 'home'">
        <h1>测试从store里获取数据：</h1>
        <ul v-if="storeDate">
            <li v-for="(item, i) in storeDate"
                :key="i">{{item.name}}</li>
        </ul>
        <hr />
        <h1>测试从组件中获取数据：</h1>
        <div>{{apiTest}}</div>
    </div>
    <router-view v-else></router-view>
</template>
<script>

export default {
    name: 'home',
    data() {
        return {
            apiTest: ''
        }
    },
    computed: {
        storeDate() {
            return this.$store.state.home.list
        },
        routeName() {
            return this.$route.name
        }
    },
    methods: {
        // 从组件中获取数据
        testAPI() {
            this.$http.get('/home/str/1').then(r => {
                this.apiTest = r.data
            })
        },
        // 从组件中获取数据
        getStoreDate() {
            this.$store.dispatch('getHomeList')
        }
    },
    created() {
        this.testAPI()
        this.getStoreDate()
    }
}
</script>
<style lang='less'>

</style>
