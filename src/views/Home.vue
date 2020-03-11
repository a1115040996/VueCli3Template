<template>
    <div class="home">
        <div :class="'container '+ (($store.state.ViewCtrl.isToggleSidebar)?'hideSidebar':'')">
            <div class="side-container">
                <AppSidebar></AppSidebar>
            </div>


            <div class="body-container">
                <div class="header-container">
                    <AppHeader></AppHeader>
                </div>

                <div class="nav-conatiner">
                </div>

                <div class="center-container">
                    <router-view></router-view>
                </div>

                <div class="footer-container">
                    <AppFooter></AppFooter>
                </div>

                <AppLoading>
                </AppLoading>
            </div>
        </div>
    </div>
</template>

<script>
    import AppHeader from '../components/header/AppHeader';
    import AppSidebar from '../components/sidebar/AppSidebar';
    import AppFooter from '../components/footer/AppFooter';
    import AppLoading from '../components/loading/AppLoading';

    export default {
        name: 'home',
        data() {
            return {
            }
        },
        components: {
            AppHeader,
            AppSidebar,
            AppFooter,
            AppLoading
        },
        mounted: function () {
        }
    }
</script>

<style lang="less" scoped>
    div.home {
        width: 100%;
        height: 100%;
        background: #ffffff;
        > div.container {
            width: 100%;
            height: 100%;
            padding-left: 250px;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            transition: all 0.4s;
            > div.side-container {
                width: 250px;
                height: 100%;
                background: rgba(0, 21, 41, 1);
                display: inline-block;
                float: left;
                vertical-align: top;
                position: relative;
                margin-left: -250px;
            }

            > div.body-container {
                vertical-align: top;
                width: 100%;
                display: inline-block;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                > div.header-container {

                }

                > div.center-container {

                }

                > div.footer-container {

                }
            }
        }
        > div.hideSidebar {
            padding-left: 64px;
            >div.side-container{
                >div.container{
                    /deep/ div.title{
                        background: url(../assets/logo.png) no-repeat center center, #00284d;
                        -webkit-background-size: 40px;
                        background-size: 40px;
                        margin-left: 186px;
                        width: 64px;
                        padding: 0;
                        >span{
                            opacity: 0;
                        }
                    }
                    /deep/ ul.el-menu{
                        padding-left: 186px;
                    }
                }
            }
        }
    }
</style>
