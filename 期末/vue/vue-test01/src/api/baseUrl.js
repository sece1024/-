// https://blog.csdn.net/xiaojinlai123/article/details/90699565
let baseUrl = "";
switch (process.env.NODE_ENV) {
    case 'dev':
        baseUrl = "http://localhost:8088/" //开发环境url
        break
    case 'serve':
        baseUrl = "http://localhost:8089/" //生产环境url
        break
}

export default baseUrl;

/*
使用 nmp:serve 运行项目，即可加载 dev 的 baseUrl，
如果需要加载 serve 的 baseUrl 修改 .env.development 
环境变量配置文件中的值如下即可：
*/