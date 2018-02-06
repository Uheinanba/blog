### users
1. 用户创建
- 摘要

| url | method | 用途 |
|----|----|----|
|user/register|post|用户注册|

- request

| 名称 | 类型 | 是否必填 |
|----|----|----|
|email|string|是|
|password|string|是|
|name|string|是|

- response
```
{
  errCode: 0,
  errMsg: '成功',
  data: null
}
```

2. 用户登录

- 摘要

| url | method | 用途 |
|----|----|----|
|user/login|post|用户登录|

- request

| 名称 | 类型 | 是否必填 |
|----|----|----|
|name|string|是|


- response
```
{
  errCode: 0,
  errMsg: '成功',
  data: null
}
```

