方案一：

在任意位置右键打开Git Bash Here，输入

```
git config --global credential.helper store
```

回车后，它会自动在文件中写入：

[credential]

helper = store