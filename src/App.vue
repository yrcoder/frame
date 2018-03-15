<template>
    <el-container>
        <el-header></el-header>
        <el-container>
            <el-aside width="300px">
                <el-menu :unique-opened="true"
                         default-active="home"
                         @select="pushRoute">
                    <el-submenu :index="submenu.name"
                                v-for="submenu in menu"
                                :key="submenu.name">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span>{{submenu.label}}</span>
                        </template>
                        <el-menu-item v-for="item in submenu.children"
                                      :key="item.name"
                                      :index="item.name">{{item.label}}</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            menu: [{
                name: 'home',
                label: '首页',
                children: [{
                    name: 'home',
                    label: 'home'
                }, {
                    name: 'home1',
                    label: 'home1'
                }]
            }, {
                name: 'member',
                label: '成员管理',
                children: [{
                    name: 'member',
                    label: 'member'
                }, {
                    name: 'member1',
                    label: 'member1'
                }]
            }]
        }
    },
    methods: {
        pushRoute(name, keyPath) {
            this.$router.push({
                name
            })
        }
    },
    created() {
        this.$router.push({
            name: 'home'
        })
    }
}
</script>

<style lang="less" scoped>
@import 'less/variables.less';

.el-container {
    height: 100%;
}

.el-header {
    border-bottom: 2px solid @border-color;
}

.el-aside {
    border-right: 2px solid @border-color;
}

.el-main {
    color: @text-color;
    line-height: 60px;
}
</style>
