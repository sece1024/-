if(typeof(Storage) !== "undefined"){

}else{
    alert("当前浏览器不支持Web Storage!");
}
var userName = document.getElementById("username");
var psw = document.getElementById("password");

// 保存账户
function saveAccount(){
    let m_name = userName.value;
    let m_psw = psw.value;
    if(m_name == "" || m_psw == ""){
        alert("用户名或密码为空！");
    }else{
        if(localStorage.getItem(m_name) !== null){
            alert("当前用户名已被使用");
        }else{
            localStorage.setItem(m_name,m_psw)
            // 回到主页
            window.location.href = "index.html";
        }
        
        // console.log("m_name: "+m_name);
        // console.log(localStorage.getItem(m_name));
        // console.log(localStorage);
        
    }
}