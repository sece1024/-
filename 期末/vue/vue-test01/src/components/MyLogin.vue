<template>
<!-- <img src="./assets/logo.png"> -->
    
    <div id="Login">
        <!-- VueLogo图片 -->
         <Logo />
  <el-form :rules="rules" class="login-container" label-position="left"
           label-width="0px" v-loading="loading">
           
    <h3 class="login_title">用户登录</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox class="login_remember" v-model="checked" label-position="left">记住密码</el-checkbox>
    <el-form-item style="width: 100%">
      <el-button type="primary" @click.native.prevent="submitClick" style="width: 100%">登录</el-button>
    </el-form-item>
  </el-form>
    </div>

</template>

<script>
//   import {postRequest} from '../utils/api'
//   import {putRequest} from '../utils/api'
import Logo from './VueLogo.vue'
  export default{
    name: 'Login',
    components:{
        Logo
    },
    data(){
      return {
        rules: {
          account: [{required: true, message: '用户名错误', trigger: 'blur'}],
          checkPass: [{required: true, message: '请输入密码', trigger: 'blur'}]
        },
        checked: true,
       
        loginForm: {
          username: 'none',
          password: '123'
          
        },
        loading: false,
       
      }
    },
    // methods: {
    //   submitClick: function () {
    //     var _this = this;
    //     this.loading = true;
    //     postRequest('/login', {
    //       username: this.loginForm.username,
    //       password: this.loginForm.password
    //     }).then(resp=> {
    //       _this.loading = false;
    //       if (resp.status == 200) {
    //         //成功
    //         var json = resp.data;
    //         if (json.status == 'success') {
    //           _this.$router.replace({path: '/home'});
    //         } else {
    //           _this.$alert('登录失败!', '失败!');
    //         }
    //       } else {
    //         //失败
    //         _this.$alert('登录失败!', '失败!');
    //       }
    //     }, resp=> {
    //       _this.loading = false;
    //       _this.$alert('找不到服务器⊙﹏⊙∥!', '失败!');
    //     });
    //   }
    // }

    //我的
    methods:{
        submitClick: function(){
            
            let m_name = this.loginForm.username;
            let m_psw = this.loginForm.password;
            // 默认用户名，密码： none， 123
            if(m_name == 'none' && m_psw == '123'){
                this.$router.push('home')    //跳转到新页面
            }
            // 在Web Storage中查询
            else{
                if (localStorage.getItem(m_name) == m_psw) {
                    console.log("登陆成功!");
                    this.$router.push('home')    //跳转到新页面

            }
                else {
                    alert("用户名或密码错误!");
                    console.log(account);
                    console.log('account[m_name]: ' + account[m_name]);
                    // console.log("用户名或密码错误!");
                }
            }
        }
    }
    
  }
</script>
<style>
  .login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #a4d495;
  }

  .login_remember {
    margin: 0px 0px 35px 0px;
    text-align: left;
  }
</style>
