<template>
    <div class="container">
        <div class="title">
            <span>后台管理系统</span>
        </div>
        <div class="side-container">
            <el-menu
                    class="el-menu-vertical-demo"
                    :default-openeds="defaultOpeneds"
                    :default-active="NowSelectMenuId"
                    :collapse="$store.state.ViewCtrl.isToggleSidebar"
                    :router="true"
                    :show-timeout="100"
                    :hide-timeout="100"
            >
                <el-submenu :index="item.id" v-for="(item, idx) in menuList" v-bind:key="idx">
                    <template slot="title">
                        <i :class="item.icon"></i>
                        <span>{{item.name}}</span>
                    </template>
                    <el-menu-item-group>
                        <template class="nopadding" slot="title"></template>
                        <el-menu-item
                                v-for="(subItem, subIdx) in item.child"
                                v-bind:key="subIdx" :index="subItem.id"
                                :route="subItem.route"
                        >
                            <span>{{subItem.name}}</span>
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </div>
    </div>
</template>

<script>
    export default {
        name: "app-sidebar",
        data: function () {
            return {
                defaultOpeneds: ['1', '2'],
                NowSelectMenuId: '',
                menuList: Object.freeze([
                    {
                        name: '标题',
                        id: '1',
                        icon: 'el-icon-coin',
                        child: [
                            {id: '1-1', name: '子菜单', route: '/income/sub'},
                        ]
                    }
                ]),
                allRouteDatas: {}, //  所有的路由列表 将所有子路由转换为一维数据
            }
        },
        mounted() {
            this.allRouteDatas = this.reduceDimensionMenuList()
            if (this.allRouteDatas[this.$route['fullPath']]) {
                this.NowSelectMenuId = this.allRouteDatas[this.$route['fullPath']]
            }
        },
        methods: {
            // 二维数组转换为一维对象数据,方便快速匹配
            reduceDimensionMenuList() {
                const temp = {};
                for (let x in this.menuList) {
                    for (let y in this.menuList[x]['child']) {
                        temp[this.menuList[x]['child'][y]['route']] = this.menuList[x]['child'][y]['id']
                    }
                }
                return JSON.parse(JSON.stringify(temp));
            },
        },
        watch: {
            // 页面跳转 菜单跟随跳转
            '$store.state.RouteExtend.route.to': function (toPath, fromPath) {
                if (toPath !== fromPath) {
                    if (this.allRouteDatas[toPath]) {
                        this.NowSelectMenuId = this.allRouteDatas[toPath]
                    }
                }
            }
        },
    }
</script>

<style scoped lang="less">
    div.container {
        > div.title {
            width: 250px;
            height: 65px;
            padding-left: 80px;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            line-height: 65px;
            background: url("../../assets/logo.png") no-repeat 40px center, rgba(0, 40, 77, 1);
            -webkit-background-size: 30px;
            background-size: 30px;
            -webkit-transition: all 0.2s;
            -moz-transition: all 0.2s;
            -ms-transition: all 0.2s;
            -o-transition: all 0.2s;
            transition: all 0.2s;
            > span {
                color: #fff;
                -webkit-transition: all 0.2s;
                -moz-transition: all 0.2s;
                -ms-transition: all 0.2s;
                -o-transition: all 0.2s;
                transition: all 0.2s;
            }
        }
        > div.side-container {
            // 取消插槽占位
            /deep/ .el-menu-item-group {
                margin-top: -14px;
            }

            /deep/ .el-menu {
                border: none;
                -webkit-transition: all 0.2s;
                -moz-transition: all 0.2s;
                -ms-transition: all 0.2s;
                -o-transition: all 0.2s;
                transition: all 0.2s;
                background: transparent;
                > li.el-submenu {
                    // 大标题
                    > div.el-submenu__title {
                        &:hover {
                            background: rgba(24, 144, 255, 1)
                        }
                        // icon
                        > i {
                            color: #ffffff;
                        }
                        // font
                        > span {
                            color: #ffffff;
                        }
                    }
                    // 子列表
                    > ul.el-menu {
                        > li {
                            > ul {
                                > li {
                                    color: #ffffff;
                                    > a {
                                        display: inline-block;
                                        width: 100%;
                                        height: 100%;
                                        text-decoration: none;
                                        color: #ffffff;
                                    }
                                    &:hover {
                                        background: rgba(24, 144, 255, 1);
                                    }
                                }
                                > li.is-active {
                                    background: rgba(24, 144, 255, 1);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>