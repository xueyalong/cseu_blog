<template>
  <div id="app">
    <div class="fly-header layui-bg-black">
      <div class="layui-container">
        <a class="fly-logo" href="/">
          <img src="/static/images/logo.png" alt="layui">
        </a>
        <ul class="layui-nav fly-nav layui-hide-xs">
          <li class="layui-nav-item layui-this" v-for="menu in menus">
            <a href="/"><i :class="menu.icon"></i>{{menu.title}}</a>
          </li>
        </ul>

        <ul class="layui-nav fly-nav-user">

          <!-- 未登入的状态 -->
          <li class="layui-nav-item">
            <a class="iconfont icon-touxiang layui-hide-xs" href="user/login.html"></a>
          </li>
          <li class="layui-nav-item">
            <a href="user/login.html">登入</a>
          </li>
          <li class="layui-nav-item">
            <a href="user/reg.html">注册</a>
          </li>
          <li class="layui-nav-item layui-hide-xs">
            <a href="/app/qq/" onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})" title="QQ登入"
               class="iconfont icon-qq"></a>
          </li>
          <li class="layui-nav-item layui-hide-xs">
            <a href="/app/weibo/" onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})" title="微博登入"
               class="iconfont icon-weibo"></a>
          </li>
        </ul>
      </div>
    </div>

    <div class="fly-panel fly-column">
      <div class="layui-container">
        <ul class="layui-clear">
          <li class="layui-hide-xs layui-this"><a href="/">首页</a></li>
          <li v-for="menu in menus"><a href="jie/index.html">{{menu.title}}</a></li>
          <li class="layui-hide-xs layui-hide-sm layui-show-md-inline-block"><span class="fly-mid"></span></li>

          <!-- 用户登入后显示 -->
          <li class="layui-hide-xs layui-hide-sm layui-show-md-inline-block"><a href="user/index.html">我发表的贴</a></li>
          <li class="layui-hide-xs layui-hide-sm layui-show-md-inline-block"><a
            href="user/index.html#collection">我收藏的贴</a></li>
        </ul>

        <div class="fly-column-right layui-hide-xs">
          <span class="fly-search"><i class="layui-icon"></i></span>
          <a href="jie/add.html" class="layui-btn">发表新帖</a>
        </div>
        <div class="layui-hide-sm layui-show-xs-block"
             style="margin-top: -10px; padding-bottom: 10px; text-align: center;">
          <a href="jie/add.html" class="layui-btn">发表新帖</a>
        </div>
      </div>
    </div>

    <div class="layui-container">
      <div class="layui-row layui-col-space15">
        <div class="layui-col-md8">
          <div class="fly-panel">
            <div class="fly-panel-title fly-filter">
              <a>置顶</a>
              <a href="#signin" class="layui-hide-sm layui-show-xs-block fly-right" id="LAY_goSignin"
                 style="color: #FF5722;">去签到</a>
            </div>
            <ul class="fly-list">
              <li>
                <a href="user/home.html" class="fly-avatar">
                  <img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg" alt="贤心">
                </a>
                <h2>
                  <a class="layui-badge">动态</a>
                  <a href="jie/detail.html">基于 layui 的极简社区页面模版</a>
                </h2>
                <div class="fly-list-info">
                  <a href="user/home.html" link>
                    <cite>贤心</cite>
                    <i class="iconfont icon-renzheng" title="认证信息：XXX"></i>
                    <i class="layui-badge fly-badge-vip">VIP3</i>
                  </a>
                  <span>刚刚</span>

                  <span class="fly-list-kiss layui-hide-xs" title="悬赏飞吻"><i class="iconfont icon-kiss"></i> 60</span>
                  <span class="layui-badge fly-badge-accept layui-hide-xs">已结</span>
                  <span class="fly-list-nums">
                <i class="iconfont icon-pinglun1" title="回答"></i> 66
              </span>
                </div>
                <div class="fly-list-badge">
                  <!--
                  <span class="layui-badge layui-bg-black">置顶</span>
                  <span class="layui-badge layui-bg-red">精帖</span>
                  -->
                </div>
              </li>
              <li>
                <a href="user/home.html" class="fly-avatar">
                  <img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg" alt="贤心">
                </a>
                <h2>
                  <a class="layui-badge">公告</a>
                  <a href="jie/detail.html">基于 layui 的极简社区页面模版</a>
                </h2>
                <div class="fly-list-info">
                  <a href="user/home.html" link>
                    <cite>贤心</cite>
                  </a>
                  <span>2017-11-30</span>

                  <span class="fly-list-kiss layui-hide-xs" title="悬赏飞吻"><i class="iconfont icon-kiss"></i> 60</span>
                  <!--<span class="layui-badge fly-badge-accept layui-hide-xs">已结</span>-->
                  <span class="fly-list-nums">
                <i class="iconfont icon-pinglun1" title="回答"></i> 66
              </span>
                </div>
                <div class="fly-list-badge">
                  <!--
                  <span class="layui-badge layui-bg-black">置顶</span>
                  <span class="layui-badge layui-bg-red">精帖</span>
                  -->
                </div>
              </li>
              <li>
                <a href="user/home.html" class="fly-avatar">
                  <img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg" alt="贤心">
                </a>
                <h2>
                  <a class="layui-badge">公告</a>
                  <a href="jie/detail.html">基于 layui 的极简社区页面模版</a>
                </h2>
                <div class="fly-list-info">
                  <a href="user/home.html" link>
                    <cite>贤心</cite>
                    <!--
                    <i class="iconfont icon-renzheng" title="认证信息：XXX"></i>
                    <i class="layui-badge fly-badge-vip">VIP3</i>
                    -->
                  </a>
                  <span>刚刚</span>

                  <span class="fly-list-kiss layui-hide-xs" title="悬赏飞吻"><i class="iconfont icon-kiss"></i> 60</span>
                  <!--<span class="layui-badge fly-badge-accept layui-hide-xs">已结</span>-->
                  <span class="fly-list-nums">
                <i class="iconfont icon-pinglun1" title="回答"></i> 66
              </span>
                </div>
                <div class="fly-list-badge">
                  <!--
                  <span class="layui-badge layui-bg-black">置顶</span>
                  <span class="layui-badge layui-bg-red">精帖</span>
                  -->
                </div>
              </li>
              <li>
                <a href="user/home.html" class="fly-avatar">
                  <img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg" alt="贤心">
                </a>
                <h2>
                  <a class="layui-badge">公告</a>
                  <a href="jie/detail.html">基于 layui 的极简社区页面模版</a>
                </h2>
                <div class="fly-list-info">
                  <a href="user/home.html" link>
                    <cite>贤心</cite>
                    <!--
                    <i class="iconfont icon-renzheng" title="认证信息：XXX"></i>
                    <i class="layui-badge fly-badge-vip">VIP3</i>
                    -->
                  </a>
                  <span>刚刚</span>

                  <span class="fly-list-kiss layui-hide-xs" title="悬赏飞吻"><i class="iconfont icon-kiss"></i> 60</span>
                  <!--<span class="layui-badge fly-badge-accept layui-hide-xs">已结</span>-->
                  <span class="fly-list-nums">
                <i class="iconfont icon-pinglun1" title="回答"></i> 66
              </span>
                </div>
                <div class="fly-list-badge">
                  <!--
                  <span class="layui-badge layui-bg-black">置顶</span>
                  <span class="layui-badge layui-bg-red">精帖</span>
                  -->
                </div>
              </li>
            </ul>
          </div>

          <div class="fly-panel" style="margin-bottom: 0;">

            <div class="fly-panel-title fly-filter">
              <a href="" class="layui-this">综合</a>
              <span class="fly-mid"></span>
              <a href="">未结</a>
              <span class="fly-mid"></span>
              <a href="">已结</a>
              <span class="fly-mid"></span>
              <a href="">精华</a>
              <span class="fly-filter-right layui-hide-xs">
            <a href="" class="layui-this">按最新</a>
            <span class="fly-mid"></span>
            <a href="">按热议</a>
          </span>
            </div>

            <ul class="fly-list">
              <li>
                <a href="user/home.html" class="fly-avatar">
                  <img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg" alt="贤心">
                </a>
                <h2>
                  <a class="layui-badge">分享</a>
                  <a href="jie/detail.html">基于 layui 的极简社区页面模版</a>
                </h2>
                <div class="fly-list-info">
                  <a href="user/home.html" link>
                    <cite>贤心</cite>
                    <!--
                    <i class="iconfont icon-renzheng" title="认证信息：XXX"></i>
                    <i class="layui-badge fly-badge-vip">VIP3</i>
                    -->
                  </a>
                  <span>刚刚</span>

                  <span class="fly-list-kiss layui-hide-xs" title="悬赏飞吻"><i class="iconfont icon-kiss"></i> 60</span>
                  <!--<span class="layui-badge fly-badge-accept layui-hide-xs">已结</span>-->
                  <span class="fly-list-nums">
                <i class="iconfont icon-pinglun1" title="回答"></i> 66
              </span>
                </div>
                <div class="fly-list-badge">
                  <!--<span class="layui-badge layui-bg-red">精帖</span>-->
                </div>
              </li>
              <li>
                <a href="user/home.html" class="fly-avatar">
                  <img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg" alt="贤心">
                </a>
                <h2>
                  <a class="layui-badge">动态</a>
                  <a href="jie/detail.html">基于 layui 的极简社区页面模版</a>
                </h2>
                <div class="fly-list-info">
                  <a href="user/home.html" link>
                    <cite>贤心</cite>
                    <!--<i class="iconfont icon-renzheng" title="认证信息：XXX"></i>-->
                    <i class="layui-badge fly-badge-vip">VIP3</i>
                  </a>
                  <span>刚刚</span>

                  <span class="fly-list-kiss layui-hide-xs" title="悬赏飞吻"><i class="iconfont icon-kiss"></i> 60</span>
                  <span class="layui-badge fly-badge-accept layui-hide-xs">已结</span>
                  <span class="fly-list-nums">
                <i class="iconfont icon-pinglun1" title="回答"></i> 66
              </span>
                </div>
                <div class="fly-list-badge">
                  <span class="layui-badge layui-bg-red">精帖</span>
                </div>
              </li>
              <li>
                <a href="user/home.html" class="fly-avatar">
                  <img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg" alt="贤心">
                </a>
                <h2>
                  <a class="layui-badge">动态</a>
                  <a href="jie/detail.html">基于 layui 的极简社区页面模版</a>
                </h2>
                <div class="fly-list-info">
                  <a href="user/home.html" link>
                    <cite>贤心</cite>
                    <!--
                    <i class="iconfont icon-renzheng" title="认证信息：XXX"></i>
                    <i class="layui-badge fly-badge-vip">VIP3</i>
                    -->
                  </a>
                  <span>刚刚</span>

                  <span class="fly-list-kiss layui-hide-xs" title="悬赏飞吻"><i class="iconfont icon-kiss"></i> 60</span>
                  <!--<span class="layui-badge fly-badge-accept layui-hide-xs">已结</span>-->
                  <span class="fly-list-nums">
                <i class="iconfont icon-pinglun1" title="回答"></i> 66
              </span>
                </div>
                <div class="fly-list-badge">
                  <!--<span class="layui-badge layui-bg-red">精帖</span>-->
                </div>
              </li>
              <li>
                <a href="user/home.html" class="fly-avatar">
                  <img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg" alt="贤心">
                </a>
                <h2>
                  <a class="layui-badge">动态</a>
                  <a href="jie/detail.html">基于 layui 的极简社区页面模版</a>
                </h2>
                <div class="fly-list-info">
                  <a href="user/home.html" link>
                    <cite>贤心</cite>
                    <!--
                    <i class="iconfont icon-renzheng" title="认证信息：XXX"></i>
                    <i class="layui-badge fly-badge-vip">VIP3</i>
                    -->
                  </a>
                  <span>刚刚</span>

                  <span class="fly-list-kiss layui-hide-xs" title="悬赏飞吻"><i class="iconfont icon-kiss"></i> 60</span>
                  <!--<span class="layui-badge fly-badge-accept layui-hide-xs">已结</span>-->
                  <span class="fly-list-nums">
                <i class="iconfont icon-pinglun1" title="回答"></i> 66
              </span>
                </div>
                <div class="fly-list-badge">
                  <!--<span class="layui-badge layui-bg-red">精帖</span>-->
                </div>
              </li>
              <li>
                <a href="user/home.html" class="fly-avatar">
                  <img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg" alt="贤心">
                </a>
                <h2>
                  <a class="layui-badge">动态</a>
                  <a href="jie/detail.html">基于 layui 的极简社区页面模版</a>
                </h2>
                <div class="fly-list-info">
                  <a href="user/home.html" link>
                    <cite>贤心</cite>
                    <!--
                    <i class="iconfont icon-renzheng" title="认证信息：XXX"></i>
                    <i class="layui-badge fly-badge-vip">VIP3</i>
                    -->
                  </a>
                  <span>刚刚</span>

                  <span class="fly-list-kiss layui-hide-xs" title="悬赏飞吻"><i class="iconfont icon-kiss"></i> 60</span>
                  <!--<span class="layui-badge fly-badge-accept layui-hide-xs">已结</span>-->
                  <span class="fly-list-nums">
                <i class="iconfont icon-pinglun1" title="回答"></i> 66
              </span>
                </div>
                <div class="fly-list-badge">
                  <!--<span class="layui-badge layui-bg-red">精帖</span>-->
                </div>
              </li>
              <li>
                <a href="user/home.html" class="fly-avatar">
                  <img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg" alt="贤心">
                </a>
                <h2>
                  <a class="layui-badge">动态</a>
                  <a href="jie/detail.html">基于 layui 的极简社区页面模版</a>
                </h2>
                <div class="fly-list-info">
                  <a href="user/home.html" link>
                    <cite>贤心</cite>
                    <!--
                    <i class="iconfont icon-renzheng" title="认证信息：XXX"></i>
                    <i class="layui-badge fly-badge-vip">VIP3</i>
                    -->
                  </a>
                  <span>刚刚</span>

                  <span class="fly-list-kiss layui-hide-xs" title="悬赏飞吻"><i class="iconfont icon-kiss"></i> 60</span>
                  <!--<span class="layui-badge fly-badge-accept layui-hide-xs">已结</span>-->
                  <span class="fly-list-nums">
                <i class="iconfont icon-pinglun1" title="回答"></i> 66
              </span>
                </div>
                <div class="fly-list-badge">
                  <!--<span class="layui-badge layui-bg-red">精帖</span>-->
                </div>
              </li>
              <li>
                <a href="user/home.html" class="fly-avatar">
                  <img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg" alt="贤心">
                </a>
                <h2>
                  <a class="layui-badge">动态</a>
                  <a href="jie/detail.html">基于 layui 的极简社区页面模版</a>
                </h2>
                <div class="fly-list-info">
                  <a href="user/home.html" link>
                    <cite>贤心</cite>
                    <!--
                    <i class="iconfont icon-renzheng" title="认证信息：XXX"></i>
                    <i class="layui-badge fly-badge-vip">VIP3</i>
                    -->
                  </a>
                  <span>刚刚</span>

                  <span class="fly-list-kiss layui-hide-xs" title="悬赏飞吻"><i class="iconfont icon-kiss"></i> 60</span>
                  <!--<span class="layui-badge fly-badge-accept layui-hide-xs">已结</span>-->
                  <span class="fly-list-nums">
                <i class="iconfont icon-pinglun1" title="回答"></i> 66
              </span>
                </div>
                <div class="fly-list-badge">
                  <!--<span class="layui-badge layui-bg-red">精帖</span>-->
                </div>
              </li>
              <li>
                <a href="user/home.html" class="fly-avatar">
                  <img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg" alt="贤心">
                </a>
                <h2>
                  <a class="layui-badge">动态</a>
                  <a href="jie/detail.html">基于 layui 的极简社区页面模版</a>
                </h2>
                <div class="fly-list-info">
                  <a href="user/home.html" link>
                    <cite>贤心</cite>
                    <!--
                    <i class="iconfont icon-renzheng" title="认证信息：XXX"></i>
                    <i class="layui-badge fly-badge-vip">VIP3</i>
                    -->
                  </a>
                  <span>刚刚</span>

                  <span class="fly-list-kiss layui-hide-xs" title="悬赏飞吻"><i class="iconfont icon-kiss"></i> 60</span>
                  <!--<span class="layui-badge fly-badge-accept layui-hide-xs">已结</span>-->
                  <span class="fly-list-nums">
                <i class="iconfont icon-pinglun1" title="回答"></i> 66
              </span>
                </div>
                <div class="fly-list-badge">
                  <!--<span class="layui-badge layui-bg-red">精帖</span>-->
                </div>
              </li>
              <li>
                <a href="user/home.html" class="fly-avatar">
                  <img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg" alt="贤心">
                </a>
                <h2>
                  <a class="layui-badge">动态</a>
                  <a href="jie/detail.html">基于 layui 的极简社区页面模版</a>
                </h2>
                <div class="fly-list-info">
                  <a href="user/home.html" link>
                    <cite>贤心</cite>
                    <!--
                    <i class="iconfont icon-renzheng" title="认证信息：XXX"></i>
                    <i class="layui-badge fly-badge-vip">VIP3</i>
                    -->
                  </a>
                  <span>刚刚</span>

                  <span class="fly-list-kiss layui-hide-xs" title="悬赏飞吻"><i class="iconfont icon-kiss"></i> 60</span>
                  <!--<span class="layui-badge fly-badge-accept layui-hide-xs">已结</span>-->
                  <span class="fly-list-nums">
                <i class="iconfont icon-pinglun1" title="回答"></i> 66
              </span>
                </div>
                <div class="fly-list-badge">
                  <!--<span class="layui-badge layui-bg-red">精帖</span>-->
                </div>
              </li>
              <li>
                <a href="user/home.html" class="fly-avatar">
                  <img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg" alt="贤心">
                </a>
                <h2>
                  <a class="layui-badge">动态</a>
                  <a href="jie/detail.html">基于 layui 的极简社区页面模版</a>
                </h2>
                <div class="fly-list-info">
                  <a href="user/home.html" link>
                    <cite>贤心</cite>
                    <!--
                    <i class="iconfont icon-renzheng" title="认证信息：XXX"></i>
                    <i class="layui-badge fly-badge-vip">VIP3</i>
                    -->
                  </a>
                  <span>刚刚</span>

                  <span class="fly-list-kiss layui-hide-xs" title="悬赏飞吻"><i class="iconfont icon-kiss"></i> 60</span>
                  <!--<span class="layui-badge fly-badge-accept layui-hide-xs">已结</span>-->
                  <span class="fly-list-nums">
                <i class="iconfont icon-pinglun1" title="回答"></i> 66
              </span>
                </div>
                <div class="fly-list-badge">
                  <!--<span class="layui-badge layui-bg-red">精帖</span>-->
                </div>
              </li>
              <li>
                <a href="user/home.html" class="fly-avatar">
                  <img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg" alt="贤心">
                </a>
                <h2>
                  <a class="layui-badge">动态</a>
                  <a href="jie/detail.html">基于 layui 的极简社区页面模版</a>
                </h2>
                <div class="fly-list-info">
                  <a href="user/home.html" link>
                    <cite>贤心</cite>
                    <!--
                    <i class="iconfont icon-renzheng" title="认证信息：XXX"></i>
                    <i class="layui-badge fly-badge-vip">VIP3</i>
                    -->
                  </a>
                  <span>刚刚</span>

                  <span class="fly-list-kiss layui-hide-xs" title="悬赏飞吻"><i class="iconfont icon-kiss"></i> 60</span>
                  <!--<span class="layui-badge fly-badge-accept layui-hide-xs">已结</span>-->
                  <span class="fly-list-nums">
                <i class="iconfont icon-pinglun1" title="回答"></i> 66
              </span>
                </div>
                <div class="fly-list-badge">
                  <!--<span class="layui-badge layui-bg-red">精帖</span>-->
                </div>
              </li>
              <li>
                <a href="user/home.html" class="fly-avatar">
                  <img src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg" alt="贤心">
                </a>
                <h2>
                  <a class="layui-badge">动态</a>
                  <a href="jie/detail.html">基于 layui 的极简社区页面模版</a>
                </h2>
                <div class="fly-list-info">
                  <a href="user/home.html" link>
                    <cite>贤心</cite>
                    <!--
                    <i class="iconfont icon-renzheng" title="认证信息：XXX"></i>
                    <i class="layui-badge fly-badge-vip">VIP3</i>
                    -->
                  </a>
                  <span>刚刚</span>

                  <span class="fly-list-kiss layui-hide-xs" title="悬赏飞吻"><i class="iconfont icon-kiss"></i> 60</span>
                  <!--<span class="layui-badge fly-badge-accept layui-hide-xs">已结</span>-->
                  <span class="fly-list-nums">
                <i class="iconfont icon-pinglun1" title="回答"></i> 66
              </span>
                </div>
                <div class="fly-list-badge">
                  <!--<span class="layui-badge layui-bg-red">精帖</span>-->
                </div>
              </li>
            </ul>
            <div style="text-align: center">
              <div class="laypage-main">
                <a href="jie/index.html" class="laypage-next">更多求解</a>
              </div>
            </div>

          </div>
        </div>
        <div class="layui-col-md4">

          <div class="fly-panel">
            <h3 class="fly-panel-title">温馨通道</h3>
            <ul class="fly-panel-main fly-list-static">
              <li>
                <a href="http://fly.layui.com/jie/4281/" target="_blank">layui 的 GitHub 及 Gitee (码云) 仓库，欢迎Star</a>
              </li>
              <li>
                <a href="http://fly.layui.com/jie/5366/" target="_blank">
                  layui 常见问题的处理和实用干货集锦
                </a>
              </li>
              <li>
                <a href="http://fly.layui.com/jie/4281/" target="_blank">layui 的 GitHub 及 Gitee (码云) 仓库，欢迎Star</a>
              </li>
              <li>
                <a href="http://fly.layui.com/jie/5366/" target="_blank">
                  layui 常见问题的处理和实用干货集锦
                </a>
              </li>
              <li>
                <a href="http://fly.layui.com/jie/4281/" target="_blank">layui 的 GitHub 及 Gitee (码云) 仓库，欢迎Star</a>
              </li>
            </ul>
          </div>

          <div class="fly-panel fly-signin">
            <div class="fly-panel-title">
              签到
              <i class="fly-mid"></i>
              <a href="javascript:;" class="fly-link" id="LAY_signinHelp">说明</a>
              <i class="fly-mid"></i>
              <a href="javascript:;" class="fly-link" id="LAY_signinTop">活跃榜<span class="layui-badge-dot"></span></a>
              <span class="fly-signin-days">已连续签到<cite>16</cite>天</span>
            </div>
            <div class="fly-panel-main fly-signin-main">
              <button class="layui-btn layui-btn-danger" id="LAY_signin">今日签到</button>
              <span>可获得<cite>5</cite>飞吻</span>

              <!-- 已签到状态 -->
              <!--
              <button class="layui-btn layui-btn-disabled">今日已签到</button>
              <span>获得了<cite>20</cite>飞吻</span>
              -->
            </div>
          </div>

          <div class="fly-panel fly-rank fly-rank-reply" id="LAY_replyRank">
            <h3 class="fly-panel-title">回贴周榜</h3>
            <dl>
              <!--<i class="layui-icon fly-loading">&#xe63d;</i>-->
              <dd>
                <a href="user/home.html">
                  <img
                    src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>
                </a>
              </dd>
              <dd>
                <a href="user/home.html">
                  <img
                    src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>
                </a>
              </dd>
              <dd>
                <a href="user/home.html">
                  <img
                    src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>
                </a>
              </dd>
              <dd>
                <a href="user/home.html">
                  <img
                    src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>
                </a>
              </dd>
              <dd>
                <a href="user/home.html">
                  <img
                    src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>
                </a>
              </dd>
              <dd>
                <a href="user/home.html">
                  <img
                    src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>
                </a>
              </dd>
              <dd>
                <a href="user/home.html">
                  <img
                    src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>
                </a>
              </dd>
              <dd>
                <a href="user/home.html">
                  <img
                    src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>
                </a>
              </dd>
              <dd>
                <a href="user/home.html">
                  <img
                    src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>
                </a>
              </dd>
              <dd>
                <a href="user/home.html">
                  <img
                    src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>
                </a>
              </dd>
              <dd>
                <a href="user/home.html">
                  <img
                    src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>
                </a>
              </dd>
              <dd>
                <a href="user/home.html">
                  <img
                    src="https://tva1.sinaimg.cn/crop.0.0.118.118.180/5db11ff4gw1e77d3nqrv8j203b03cweg.jpg"><cite>贤心</cite><i>106次回答</i>
                </a>
              </dd>
            </dl>
          </div>

          <dl class="fly-panel fly-list-one">
            <dt class="fly-panel-title">本周热议</dt>
            <dd>
              <a href="jie/detail.html">基于 layui 的极简社区页面模版</a>
              <span><i class="iconfont icon-pinglun1"></i> 16</span>
            </dd>
            <dd>
              <a href="jie/detail.html">基于 layui 的极简社区页面模版</a>
              <span><i class="iconfont icon-pinglun1"></i> 16</span>
            </dd>
            <dd>
              <a href="jie/detail.html">基于 layui 的极简社区页面模版</a>
              <span><i class="iconfont icon-pinglun1"></i> 16</span>
            </dd>
            <dd>
              <a href="jie/detail.html">基于 layui 的极简社区页面模版</a>
              <span><i class="iconfont icon-pinglun1"></i> 16</span>
            </dd>
            <dd>
              <a href="jie/detail.html">基于 layui 的极简社区页面模版</a>
              <span><i class="iconfont icon-pinglun1"></i> 16</span>
            </dd>
            <dd>
              <a href="jie/detail.html">基于 layui 的极简社区页面模版</a>
              <span><i class="iconfont icon-pinglun1"></i> 16</span>
            </dd>
            <dd>
              <a href="jie/detail.html">基于 layui 的极简社区页面模版</a>
              <span><i class="iconfont icon-pinglun1"></i> 16</span>
            </dd>
            <dd>
              <a href="jie/detail.html">基于 layui 的极简社区页面模版</a>
              <span><i class="iconfont icon-pinglun1"></i> 16</span>
            </dd>
            <dd>
              <a href="jie/detail.html">基于 layui 的极简社区页面模版</a>
              <span><i class="iconfont icon-pinglun1"></i> 16</span>
            </dd>
            <dd>
              <a href="jie/detail.html">基于 layui 的极简社区页面模版</a>
              <span><i class="iconfont icon-pinglun1"></i> 16</span>
            </dd>
          </dl>

          <div class="fly-panel">
            <div class="fly-panel-title">
              这里可作为广告区域
            </div>
            <div class="fly-panel-main">
              <a href="http://layim.layui.com/?from=fly" target="_blank" class="fly-zanzhu"
                 time-limit="2017.09.25-2099.01.01" style="background-color: #5FB878;">LayIM 3.0 - layui 旗舰之作</a>
            </div>
          </div>

          <div class="fly-panel fly-link">
            <h3 class="fly-panel-title">友情链接</h3>
            <dl class="fly-panel-main">
              <dd><a href="http://www.layui.com/" target="_blank">layui</a>
              </dd>
              <dd><a href="http://layim.layui.com/" target="_blank">WebIM</a>
              </dd>
              <dd><a href="http://layer.layui.com/" target="_blank">layer</a>
              </dd>
              <dd><a href="http://www.layui.com/laydate/" target="_blank">layDate</a>
              </dd>
              <dd><a
                href="mailto:xianxin@layui-inc.com?subject=%E7%94%B3%E8%AF%B7Fly%E7%A4%BE%E5%8C%BA%E5%8F%8B%E9%93%BE"
                class="fly-link">申请友链</a>
              </dd>
            </dl>
          </div>

        </div>
      </div>
    </div>

    <div class="fly-footer">
      <p><a href="http://fly.layui.com/" target="_blank">Fly社区</a> 2017 &copy; <a href="http://www.layui.com/"
                                                                                  target="_blank">layui.com 出品</a></p>
      <p>
        <a href="http://fly.layui.com/jie/3147/" target="_blank">付费计划</a>
        <a href="http://www.layui.com/template/fly/" target="_blank">获取Fly社区模版</a>
        <a href="http://fly.layui.com/jie/2461/" target="_blank">微信公众号</a>
      </p>
    </div>
  </div>
</template>
<script>
// eslint-disable-next-line no-undef
layui.use('carousel', function () {
  var carousel = layui.carousel
  carousel.render({
    elem: '#test1',
    width: '100%',
    arrow: 'hover',
    anim: 'default'
  })
})
export default {
  name: 'LoginPage',
  data: function () {
    return {
      menus: [
        {name: 'home', url: 'home', title: '首页', icon: 'iconfont icon-top'},
        {name: 'pic', url: 'pic', title: '照片', icon: 'iconfont icon-zuichun'},
        {name: 'blog', url: 'blog', title: '博文', icon: 'iconfont icon-shui'},
        {name: 'news', url: 'news', title: '新闻', icon: 'iconfont icon-daima'},
        {name: 'about', url: 'about', title: '关于我', icon: 'iconfont icon-nan'},
        {name: 'contact', url: 'contact', title: '联系', icon: 'iconfont icon-quitquanping'}
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
