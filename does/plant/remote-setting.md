远程控制/读取逆变器运行参数以及状态，支持远程进行设备参数控制（仅对运维角色开放）。
<img src="/assets/plant-station-remote-setting.png">

#### **操作方式**

1.下拉选取寄存器所在组（可按名称搜索）
<img src="/assets/plant-station-remote-input.png">

2.输入寄存器名称搜索
<br>
<input  placeholder="请输入">

3.刷新当前页面的寄存器数值
<br>
<button class="login">刷新</button>

4.<a>写入</a> ：点击弹出修改窗口，可修改保持寄存器值。修改值必须在指定的范围内。
<img src="/assets/plant-station-remote-dialog.png">

 5. <a>读取</a>：点击读取寄存器当前值



<style  scoped>
img{
  width:100%;
}
input{
    border:1px solid #ccc;
    border-radius:5px;
}
 .login{
        width:80px;
        color:#fff;
        background:#46a6ff;
        border-radius:6px;
    }
  </style>