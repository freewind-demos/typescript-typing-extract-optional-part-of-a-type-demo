TypeScript Typing Extract Optional Part of a Type Demo
===========================

在React组件中，props中经常含有optional的属性。我们如果想给它定义一些默认值，怎么才能方便拿到所有optional的属性？

比如：

```
type Props = {
  names: string,
  email?: string
}
```

希望可以由它生成一个新的type: 

```
type DefaultProps = {
  email: string
}
```

```
npm install
npm run demo
```
