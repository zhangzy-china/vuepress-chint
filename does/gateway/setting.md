网卡参数设置，用户匹配机型协议、上传间隔、设备地址等

### **协议下发**

配置设备数据解析规则
<img src="/assets/plant-gateway-setting.png">

**参数说明**

|   参数名称  |   说明  |
| --- | --- |
|   协议选择  |   选择该网卡下设备使用的解析协议，用户解析设备上传的数据  |
|   Modbus地址  |   设置协议运用网卡的解析地址 |

**操作说明**

1.<button>增加协议</button>:增加一组 协议地址 和 协议选择

2.<button class="login">提交设置</button>:提交网卡设置并重启（10s-20s）

3.<button class="login">智慧感知</button>:自动识别设备协议

### **上传间隔**

配置设备数据上传时间
<img src="/assets/plant-gateway-upload.png">


**参数说明**

|   参数名称  |   说明  |
| --- | --- |
|   上传间隔  |   设置设备数据上传时间间隔  |

**操作说明**
1. <button class="login">提交设置</button>: 提交网卡设置并重启（10s-20s）

### **波特率**

通讯数据上传速度。需要和设备波特率调成一致。
<img src="/assets/plant-gateway-baud.png">

**参数说明**

|   参数名称  |   说明  |
| --- | --- |
|   波特率  |   电子通讯数据传输速度，各机型波特率不同，网卡按需进行调整，保持一致  |

**操作说明**

1.<button class="login">提交设置</button>: 提交网卡设置并重启（10s-20s）

### **重启**

重启
<img src="/assets/plant-gateway-restart.png">





<style scoped>
    button{
          width:80px;
          border:1px solid #ccc;
        border-radius:6px;

    }
    .login{
        width:80px;
        color:#fff;
        background:#46a6ff;
        border-radius:6px;
    }
</style>
