<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import RouterIntercept from './router/routerIntercept';
    export default {
        name: 'app',
        components: {},
        created() {
            RouterIntercept(this);
        }
    }
</script>

<style lang="scss">
    #app {
        width: 100%;
        height: 100%;
    }
</style>
