module.exports = [
    // {
    //         name: '基础',
    //         id: 'basic',
    //         sub: [{
    //             name: 'Layout 布局',
    //             componentName: 'BasicLayout'
    //         }, {
    //             name: 'Container 布局容器',
    //             componentName: 'BasicContainer'
    //         }]
    //     }, {
    //         name: 'Form',
    //         id: 'form',
    //         sub: [{
    //             name: 'Radio 单选框',
    //             componentName: 'FormRadio'
    //         }, {
    //             name: 'Checkbox 多选框',
    //             componentName: 'FormCheckbox'
    //         }]
    //     },
    //     {
    //         name: '目录',
    //         id: 'ccontent',
    //         sub: [{
    //             name: '首页',
    //             componentName: 'FirstIndex'
    //         }, {
    //             name: '游戏',
    //             componentName: 'Game'
    //         }]
    //     },
    {
        name: '工具箱',
        id: 'toolbox',
        sub: [{
            name: '文本反转',
            componentName: 'TextReverse'
        },
        {
            name: '日历',
            componentName: 'Calendar'
        }]
    },
    {
        name: '娱乐',
        id: 'game',
        sub: [{
            name: '八数码',
            componentName: 'EightDigital'
        },

        {
            name: '说笑话',
            componentName: 'SpeakJokes'
        }
        ]
    },
    {
        name: '测试',
        id: 'test',
        sub: [{
            name: '测试页',
            componentName: 'Test'
        },
        {
            name: '测试页2',
            componentName: 'Test2'
        },
        {
            name: '二级页面',
            components: 'Test3'
        }]
    }


]
    //外层的数组代表一级菜单，内层sub数组代表二级菜单。