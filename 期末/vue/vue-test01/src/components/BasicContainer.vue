<template>
    <div id="BasicContainer">
        {{msg}}
    </div>
</template>
<script>
export default {
    name: 'BasicContainer',
    data(){
        return{
            msg: '这是： Container 布局容器'
        }
    }
}
</script>
<style scoped>
div{
    background: red;
}
</style>