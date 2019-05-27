<template>
  <ul class="layui-nav" lay-filter="" >
    <li class="layui-nav-item" v-for="menu in menus"><a  v-on:click="goUrl(menu.url,1);">{{menu.title}}</a></li>
    <li class="layui-nav-item layui-m-anim-right"><a href="login">登陆</a></li>
    <li class="layui-nav-item layui-m-anim-right"><a href="regist">注册</a></li>
  </ul>
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
