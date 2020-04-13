#### 二、Git 安装

Git 各平台安装包下载地址为：http://git-scm.com/downloads

下载安装即可，安装好之后，输入指令，查看 git 安装位置及其版本。

```js
$ which git
/usr/local/bin/git
$ git --version
git version 2.23.0
```

提示：windows 下需将 which 替换成 where。

**1、配置用户信息**

配置个人的用户名称和电子邮件地址：

```
$ git config --global user.name  "Your Name"
$ git config --global user.email "email@example.com"
```

**2、查看配置信息**

输入指令

```
$ git config --list
```

**3、Git 工作流**

你的本地仓库由 git 维护的三棵“树”组成。第一个是你的 工作目录，它持有实际文件；第二个是 缓存区（Index），它像个缓存区域，临时保存你的改动；最后是 HEAD，指向你最近一次提交后的结果。

**4、Git 基本操作**

- `git init`：创建版本库
- `git add .`：提交至缓存区
- `git commit -m "说明信息"`：提交至版本库
- `git status`：查看工作区状态
- `git diff`：查看修改
- `git checkout -- `：撤销修改
- `git reset HEAD `：撤销暂存
- `git log --pretty=oneline --abbrev-commit` ：查看历史版本
- `git reset --hard `：版本回退
- `git reflog`：查看命令历史
- `git rm <文件>`：删除文件
- `git gui`：可视化界面

提示：显示隐藏文件

- macOS：cmd + shift + .
- Windows：我的电脑 -> 查看 -> 隐藏的项目

**5、远程仓库**

https://github.com/

由于你的本地Git仓库和GitHub仓库之间的传输是通过SSH加密的，所以，需要一点设置：

**第1步：**创建SSH Key。在用户主目录下，看看有没有.ssh目录，如果有，再看看这个目录下有没有 ”id_rsa“ 和 ”id_rsa.pub“ 这两个文件，如果已经有了，可直接跳到下一步。如果没有，打开Shell（Windows下打开Git Bash），创建SSH Key：

```
$ ssh-keygen -t rsa -C "youremail@example.com"
```

你需要把邮件地址换成你自己的邮件地址，然后一路回车，使用默认值即可，由于这个Key也不是用于军事目的，所以也无需设置密码。

如果一切顺利的话，可以在用户主目录里找到 ”.ssh“ 目录，里面有 ”id_rsa“ 和 ”id_rsa.pub” 两个文件，这两个就是SSH Key的秘钥对， ”id_rsa“ 是私钥，不能泄露出去， ”id_rsa.pub” 是公钥，可以放心地告诉任何人。

```
提示：

1、在windows系统下，如果出现 “ssh-keygen” 不是内部或外部命令，解决的办法是：

2、首先找到 “ssh-keygen” 的安装目录，一般位于 “C:\Program Files\Git\usr\bin” 下。
将该路径添加环境变量的Path字段中。
```

**第2步：**

登陆Github -> 点击右上角个人头像 -> 点击Settings进入设置页面 ->

点击SSH and GPG keys选项 -> 点击右上角New SSH key ->

在添加面板中，

Title：设置SSH key 标题，可任意填写

Key：将 *”id_rsa.pub”* 文件内容拷贝至此

然后点击 Add SSH Key 就可以看到你创建的SSH Key了

* 为什么GitHub需要SSH Key呢？因为GitHub需要识别出你推送的提交确实是你推送的，而不是别人冒充的，而Git支持SSH协议，所以，GitHub只要知道了你的公钥，就可以确认只有你自己才能推送。

* 当然，GitHub允许你添加多个Key。假定你有若干电脑，你一会儿在公司提交，一会儿在家里提交，只要 把每台电脑的Key都添加到GitHub，就可以在每台电脑上往GitHub推送了。

* 最后友情提示，在GitHub上免费托管的Git仓库，任何人都可以看到喔（但只有你自己才能改）。所以，不要把敏感信息放进去。

* 如果你不想让别人看到Git库，有两个办法，一个是交点保护费，让GitHub把公开的仓库变成私有的，这样别人就看不见了（不可读更不可写）。另一个办法是自己动手，搭一个Git服务器，因为是你自己的Git服务器，所以别人也是看不见的。这个方法我们后面会讲到的，相当简单，公司内部开发必备。

