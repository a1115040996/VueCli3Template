<template>
    <div class="container">
        <span @click="login">Click me to login!</span>
    </div>
</template>

<script>
    export default {
        name: "login",
        methods: {
            login: function (){
                console.log('登录操作');
                this.$router.push('/');
            }
        }
    }
</script>

<style scoped>

</style>