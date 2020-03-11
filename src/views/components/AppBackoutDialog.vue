<template>
    <div class="backout-settle-container">
        <el-dialog
                :visible="showDialog"
                :show-close="true"
                @close="close"
        >
            <template slot="title">
                <div class="dialog-title">
                    <i class="el-icon-warning"></i>
                    {{title}}
                </div>
            </template>
            <div>{{desc}}</div>
            <div v-if="code">{{code}}</div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="close">取消</el-button>
                <el-button type="primary" @click="confirm">确定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "app-backout-settle-dialog",
        props: {
            showDialog: Boolean,
            title: String,
            desc: String,
            code: String,
            handleConfirm: Function
        },
        methods: {
            // 关闭
            close(){
                this.$emit('update:showDialog', false);
            },
            confirm() {
                 this.$emit('handleConfirm');
                 this.close();
            }
        }
    }
</script>

<style scoped lang="less">
div.backout-settle-container{
    /deep/ .el-dialog{
        width: 500px;
        .el-dialog__body{
            padding: 5px 20px;
        }
        .el-icon-warning{
            font-size: 20px;
            color: orange !important;
            vertical-align: middle;
            margin-right: 8px;
        }
    }
}
</style>