<template>
    <div class="container">
        <div class="sideToHide" @click="handleToggleSidebar">
            <i class="el-icon-s-fold"></i>
        </div>

        <div class="user-container">
            <div class="search-wrapper">
                <i class="el-icon-search"></i>
            </div>
            <div class="msg-wrapper">
                <i class="el-icon-bell"></i>
            </div>
            <div class="user-wrapper">
                <div class="logo-wrapper">
                    <img src="../../assets/logo.png" alt="">
                </div>
                <i>{{$store.state.isToggleSidebar}}</i>
                <span>Admin</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "app-header",
        methods: {
            // 是否切换侧边栏
            handleToggleSidebar: function () {
                this.$store.commit('handleToggleSidebar');
            }
        },
        mounted: function () {
        },
    }
</script>

<style scoped lang="less">
    div.container{
        height: 65px;
        border-bottom: 1px solid #ccc;
        line-height: 65px;
        position: relative;
        background: #ffffff;
        >div.sideToHide{
            display: inline-block;
            width: 20px;
            height: 15px;
            margin-left: 30px;
            height: 65px;
            cursor: pointer;
            vertical-align: top;
        }
        >div.user-container{
            display: inline-block;
            width: 200px;
            height: 16px;
            float: right;
            vertical-align: top;
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            >div{
                display: inline-block;
                margin-left: 20px;
                vertical-align: top;
                height: 16px;
                >i{
                    vertical-align: top;
                }
            }
            >div.search-wrapper{
            }
            >div.msg-wrapper{
            }
            >div.user-wrapper{
                vertical-align: top;
                >div.logo-wrapper{
                    -webkit-border-radius: 50%;
                    -moz-border-radius: 50%;
                    border-radius: 50%;
                    text-align: center;
                    display: inline-block;
                    >img{
                        width: 16px;
                        vertical-align: top;
                    }
                }
                >span{
                    font-size: 12px;
                    display: inline-block;
                    line-height: 12px;
                    float: right;
                    margin-left: 6px;
                }
            }
        }
    }
</style>