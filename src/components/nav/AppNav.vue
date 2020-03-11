<template>
    <div class="container">
        <div class="nav-route-container">
            <el-breadcrumb separator="/">
                <template v-for="(item, idx) in routerList">
                    <el-breadcrumb-item
                            :key="idx"
                            v-if="(!item.isTitle)"
                            :to="(idx!==0)?{ path: item.path +'?timespace='+(new Date()).getTime()}:''"
                    >
                        {{item.name}}
                    </el-breadcrumb-item>
                </template>
            </el-breadcrumb>
        </div>

        <div class="nav-title">
            {{routerList.slice(-1)[0]['name']}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "app-nav",
        props: {
            routerList: Array
        },
        data: function () {
            return {}
        },
        methods: {},
    }
</script>

<style scoped lang="less">
    div.container {
        height: 98px;
        background: #ffffff;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding-left: 32px;
        > div.nav-route-container {
            padding-top: 16px;
            /deep/ .el-breadcrumb {
                line-height: 1;
                > span {
                    font-style: normal;
                    font-size: 14px;
                    color: rgba(0, 0, 0, 0.4);
                    > span {
                        font-weight: 400;
                        font-style: normal;
                        font-size: 14px;
                        color: rgba(0, 0, 0, 0.4);
                        cursor: pointer;
                    }
                }
            }
        }
        > div.nav-title {
            font-weight: 600;
            font-style: normal;
            font-size: 20px;
            color: rgba(0, 0, 0, 0.84);
            line-height: 1;
            padding-top: 20px;
        }
    }
</style>