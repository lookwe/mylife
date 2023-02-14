* .安装: npm install vue-router

* 被选中的路由加class ： linkActiveClass :'active'
* 路由模式： mode : 'history' | 'hash'
    * 默认hash模式，路由中会挈带#，兼容性高 利用url hash模式完整路径
    * history模式。利用h5 history API实现。根据美观，ie9以下不兼容，需要后端做配置配合。不然每次url更新都请求，已经url/id 挈带id参数无法识别404

2.引入项目中:
   import VueRouter from 'vue-router'

   Vue.use(VueRouter);

3.使用:
  
   var router = new VueRouter({
       routes:[
           {path:"/",component:组件名},
           {path:"/test",component:组件名},
       ]

  })

  new Vue({
    el:'#app'
    ....
    router,

  })

4.显示的位置: <router-view></router-view>
   当for循环渲染时。建议加上key  
   tag="li"  把router-link 渲染成你想要的标签
  访问路由:   <router-link to=“/login” tag="li">登录</router-link>
      或者：js代码 router.push({ name: 'user', params: { userId: 123 }})  路由则成 ID:8080/项目名/user/123
                   router.push({path: '/user', query: {userId: 123}})     路由则成 ID:8080/项目名/user?userId=123

5.路由嵌套：chilbren:
var router = new VueRouter({
       routes:[
           {path:"/",component:组件名1},

           {
             path:"/test",
             component:组件名2,
             //默认进来重定向到那个页面
             redirect:'/test/user'
             chilbren:[{
               path:'user',
               component:子组件名
             },...]
            },
       ]

  });

6.传递参数: name  可以多个。也可以复杂类型

routes:[
           {
		path:"/test/:name/:pars/:age",
                name:'标明'
                component:组件名
	   },
       ]
请求链接改成: :to='{name='标明'，params={ pars='123',age=14,...} }'
访问的页面接受值:   $route.params.age 

 







