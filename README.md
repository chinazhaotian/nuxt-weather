# 说明
> 样式借鉴 Quiet Weather 小程序 如侵删

# 数据来源
> 地理编码、天气数据均来自百度地图开放平台。个人开发完全免费，有对应的小程序 sdk，加入即可，但是返回的天气数据较少。

# 静态应用部署

 >  Nuxt.js 可依据路由配置将应用静态化，使得我们可以将应用部署至任何一个静态站点主机服务商。
 >  可利用下面的命令生成应用的静态目录和文件：
 >  npm run generate
 >  这个命令会创建一个 dist 文件夹，所有静态化后的资源文件均在其中。
# 服务端部署(阿里云)
``` bash
    
  # 开始安装Node.js，先进入/root文件夹(安装在/root目录下,也可以指定到自定义目录下)，这个文件夹通常用来存放软件源代码:
  
  $ cd /root
  
  # 从 Node.js的站点 中获取压缩档源代码, 我选择的版本为v9.10.0(可以直接复制下面代码,修改自己需要的版本就可以)：
  
  $ wget https://nodejs.org/dist/v9.10.0/node-v9.10.0-linux-x64.tar.xz
  
  # 解压缩源文件，并且进入到压缩后的文件夹中:
  
  $ tar xvf node-v9.10.0-linux-x64.tar.xz
  
  # 创建软连接,全局才可以使用node和npm:
  
  $ ln -s /root/node-v9.10.0-linux-x64/bin/node /usr/local/bin/node
  
  $ ln -s /root/node-v9.10.0-linux-x64/bin/npm /usr/local/bin/npm
  
  # 现在已经安装了Node.js, 可以开始部署应用程序, 首先要使用Node.js的模块管理器npm安装pm2.
  
  $ npm install pm2 -g
  
  # 创建pm2的软连接
  
  $ ln -s /root/node-v9.10.0-linux-x64/bin/pm2 /usr/local/bin/pm2
```
  # 上传项目代码
  ``` bash
    # 在本地执行命令:npm run build 生成 .nuxt目录
    # 配置package.json文件新增
    "config": {
         "nuxt": {
          "host": "0.0.0.0",
          "port": 80
        }
    }
    # 上传 .nuxt package.json package-lock.json 等文件
  ```
  # 启动项目
  ``` bash
  # 1.npm install 安装依赖包文件
  # 2.nuxt start
  # 3.pm2 start npm -- start  pm2 守护进程
  ```
