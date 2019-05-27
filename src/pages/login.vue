<template>
  <div id="app">
    <div class="layui-nav layui-header">
          <ul class="layui-layout-left" >
            <li class="layui-nav-item layui-logo">薛亚龙博客</li>
            <li class="layui-nav-item" v-for="menu in menus"><a  v-on:click="goUrl(menu.url,1);">{{menu.title}}</a></li>
          </ul>
          <ul class="layui-layout-right">
              <li class="layui-nav-item"><a href="login">登陆</a></li>
              <li class="layui-nav-item"><a href="regist">注册</a></li>
          </ul>
    </div>
    <div class="layui-container">
      <div class="layui-row layui-col-space15">
        <div class="layui-col-md8 content detail">
          <div class="fly-panel detail-box">
            <h1>如何用layui实现悬浮导航</h1>
            <div class="fly-detail-info">
              <span class="layui-badge layui-bg-green fly-detail-column"> 提问 </span>
              <span class="layui-badge" style="background-color: #999;">未结</span>
              <span class="fly-list-nums"> <i class="iconfont" title="人气"></i> 2185 </span>
            </div> <div class="detail-about"> <a class="fly-avatar" href="/u/4858224/">
            <img src="//q.qlogo.cn/qqapp/101235792/044BCB0A23B931F461BFAB9AA2673D62/100" alt="?"> </a>
            <div class="fly-detail-user"> <a href="/u/4858224/" class="fly-link"> <cite>?</cite> </a> <span>2017-6-16 </span> </div>
            <div class="detail-hits"> <span style="padding-right: 10px; color: #FF7200">悬赏：5飞吻</span> </div>
          </div> <div class="detail-body layui-text photos"> 如何用layui实现悬浮导航<br><br> </div> </div>
          <div class="fly-panel detail-box" id="flyReply">
            <fieldset class="layui-elem-field layui-field-title" style="text-align: center;"> <legend>回帖</legend> </fieldset>
            <ul class="jieda" id="jieda"> </ul> <div style="text-align: center"> </div> <a name="comment"> </a>
            <blockquote class="layui-elem-quote layui-quote-nm layui-disabled" style="margin: 100px 0 20px; padding: 50px 20px; text-align: center; color: #999!important;">本帖已设置禁止回复</blockquote>
          </div>
        </div>
        <div class="layui-col-md4">
          <dl class="fly-panel">
            <dt class="fly-panel-title">本周热议</dt>
           <dd> <a href="/jie/52635/">layui 扩展组件 dtree 2.5.0 发布</a> <span><i class="iconfont icon-pinglun1"></i> 21</span> </dd>
            <dd> <a href="/jie/52768/">数据表格中加载的下拉框选中后点击外面会被还原到默认选中怎么解决</a> <span><i class="iconfont icon-pinglun1"></i> 19</span> </dd>
            <dd> <a href="/jie/52802/">数据表格接收到的数据后台接不到</a> <span><i class="iconfont icon-pinglun1"></i> 16</span> </dd>
            <dd> <a href="/jie/52682/">layui多文件上传,怎么在上传之前获得已经选择的文件数量</a> <span><i class="iconfont icon-pinglun1"></i> 14</span> </dd>
            <dd> <a href="/jie/52784/">table 动态列，显示异常</a> <span><i class="iconfont icon-pinglun1"></i> 13</span> </dd>
            <dd> <a href="/jie/52901/">table复杂表头时，多出很多列，这是怎么回事？ 请大神指点</a> <span><i class="iconfont icon-pinglun1"></i> 13</span> </dd>
            <dd> <a href="/jie/52692/">表单初始赋值失败</a> <span><i class="iconfont icon-pinglun1"></i> 13</span> </dd>
            <dd> <a href="/jie/52651/">单元格中设置了edit: 'text'，没有效果单元格不能编辑</a> <span><i class="iconfont icon-pinglun1"></i> 13</span> </dd>
            <dd> <a href="/jie/52670/">数据表格where动态传参问题</a> <span><i class="iconfont icon-pinglun1"></i> 12</span> </dd>
            <dd> <a href="/jie/52643/">为何layui怎么久不更新了？</a> <span><i class="iconfont icon-pinglun1"></i> 11</span> </dd>
          </dl>
          <div class="fly-panel">
            <div class="fly-panel-title"> 心级赞助商 <span style="padding: 0 3px;">-</span> <a href="/jie/15697/" class="fly-link fly-joinad    ">我要加入</a> </div>
            <div class="fly-panel-main"> <a href="https://coding.net/?utm_source=layui" target="_blank" rel="nofollow" class="fly-zanzhu fly-zanzhu-img" time-limit="2020-04-15 0:0:0" style="background: none;"> <img src="//cdn.layui.com/upload/2019_5/168_1557540349142_16350.png" alt="CODING"> </a> <a href="https://uniapp.dcloud.io/?hmsr=layui&amp;hmpl=&amp;hmcu=&amp;hmkw=&amp;hmci=" target="_blank" rel="nofollow" class="fly-zanzhu fly-zanzhu-img" time-limit="2019-06-09 0:0:0" style="background: none;"> <img src="//cdn.layui.com/upload/2019_5/168_1558600716581_5024.gif" alt="dcloud"> </a> <a href="https://www.renren.io/layui" target="_blank" rel="nofollow" class="fly-zanzhu" style="background-color: #4BAE4F;" time-limit="2019-09-08 0:0:0"> 人人开源 - 企业级后台脚手架框架 </a> <a href="http://www.xiegangd.com?hmsr=layui" target="_blank" rel="nofollow" class="fly-zanzhu fly-zanzhu-img" time-limit="2019-06-17 0:0:0" style="background: none;"> <img src="//cdn.layui.com/upload/2019_5/168_1557896293648_37816.png" alt="做一个会编程、懂设计的斜杠青年"> </a> </div></div> <div class="fly-panel"> <div class="fly-panel-title"> 官方产品 </div> <div class="fly-panel-main"> <a href="http://www.layui.com/admin/?from=fly" target="_blank" class="fly-zanzhu" time-limit="2017.09.25-2099.01.01" style="background-color: #20222A; background-image: linear-gradient(to right,#20222A,#3E4251);">layuiAdmin - layui 官方后台管理模板</a> <a href="http://layim.layui.com/?from=fly" target="_blank" class="fly-zanzhu" time-limit="2017.09.25-2099.01.01" style="background-color: #009688; background-image: linear-gradient(to right,#009688,#5FB878);">LayIM - layui 即时通讯旗舰之作</a> </div></div> <div class="fly-panel" style="padding: 20px 0; text-align: center;"> <img src="//cdn.layui.com/upload/2017_8/168_1501894831075_19619.jpg" style="max-width: 100%;" alt="layui"> <p style="position: relative; color: #666;">微信扫码关注 layui 公众号</p>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LoginPage',
  data: function () {
    return {
      menus: [
        {name: 'home', url: 'home', title: '首页'},
        {name: 'pic', url: 'pic', title: '照片'},
        {name: 'blog', url: 'blog', title: '博文'},
        {name: 'news', url: 'news', title: '新闻'},
        {name: 'about', url: 'about', title: '关于我'},
        {name: 'contact', url: 'contact', title: '联系'}
      ]
    }
  },
  methods: {
    goUrl: function (url, p) {
      console.log(url)
      this.$router.push({
        path: url + '?p=' + p
      })
    }
  }
}

</script>
