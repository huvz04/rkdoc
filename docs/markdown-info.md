# 关于文档
本文档是为了适配软件开发工作室的网络环境所编写

目的在于向工作室用户描述网络的大体食用方法。

::: tip 小提示
:warning:如果您只是想使用 Wifi /网口 那么不需要查看此文档<br>
:warning:由于没有转发UDP和ICMP。 所以游戏和ping指令都不会太好使
:::


## :page_with_curl:工作室网络组成

工作室网络主要有以下几个设备组成

|     名称       | 数量 |  备注    |
| :----:|:----:| :----:|
|24口学院交换机|1|来自总院的馈赠，给工作室提供了理论上万兆的带宽|
|R4S路由器|1|来自22届负责人，现已转入工作室名下，主要承担内网的网关功能。|
|TP-BE6500路由器|1|全2.5G&Wifi7，是工作室主路由|
|TP-BE5100路由器|2|双2.5G&Wifi7，可易展WIFI也可作为备赛没有VLAN的方案|
|TP-5口交换机|1|提供2.5G口的中转和集线|
|腾达路由器|1|商用路由器，功能限制略大，目前作为子路由使用|
|TP-300M路由器|1|白嫖自陆老师，性能凑合用，转入退役|

## :bulb:如何配置Wifi

在采购设备之初便考虑到了设备的拓展性。

**非训练时间段:** 
<br>可以使用TP-LINK的[易展](https://smb.tp-link.com.cn/service/detail_article_4734.html)（MESH）功能。<br>
此功能目的旨在合并两个路由器为同一个Wifi，一般同品牌的兼容性是最好的。 <br>
按下路由器的易展按钮，由于使用的是主路由的DHCP所以得进入子路由器页面关闭DHCP功能。<br>
具体步骤详见官方教程和文档。
<br>

**竞赛训练期间:**
<br> 在没有交换机配置VLAN的情况下，只能使用两个路由器分出两个 Wifi。<br>不需要配置网关，WAN口设为DHCP自动从主路由器获取即可<br>要注意的一点是子路由要配置DHCP<br>每台训练机的IP可手动配置为192.168.1.100-104


**Input**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
