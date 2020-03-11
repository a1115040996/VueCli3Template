<template>
    <div class="income-container">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "income"
    }
</script>

<style scoped lang="less">
    div.income-container{
        background: orange;
        /deep/ .container{
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            border-radius: 4px;
        }
    }

</style>