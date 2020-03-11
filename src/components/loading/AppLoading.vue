<template>
    <div class="loading-container"
         v-loading.fullscreen.lock="this.$store.state.ViewCtrl.isShowLoading"
         element-loading-background="rgba(0, 0, 0, 0.8)"
    >
    </div>
</template>

<script>
    export default {
        name: "app-loading",
        data() {
            return {
                loading: true
            }
        }
    }
</script>

<style scoped lang="less">
div.loading-container{
}
</style>