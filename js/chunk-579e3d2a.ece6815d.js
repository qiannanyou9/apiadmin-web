(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-579e3d2a"],{"1a4d":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",{staticStyle:{height:"100%"}},[n("Menu",{attrs:{mode:"horizontal",theme:"dark","active-name":"calculation"}},[n("div",{staticClass:"wiki-logo"}),n("div",{staticClass:"wiki-nav"},[n("MenuItem",{attrs:{name:"list",to:"/wiki/list"}},[n("Icon",{attrs:{type:"md-list-box"}}),t._v("\n          接口列表\n        ")],1),n("MenuItem",{attrs:{name:"error",to:"/wiki/error"}},[n("Icon",{attrs:{type:"logo-markdown"}}),t._v("\n          错误码\n        ")],1),n("MenuItem",{attrs:{name:"calculation",to:"/wiki/calculation"}},[n("Icon",{attrs:{type:"ios-analytics"}}),t._v("\n          算法详解\n        ")],1),n("Submenu",{attrs:{name:"4"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"ios-contact"}}),t._v("\n            "+t._s(t.app_id)+"\n          ")],1),n("MenuItem",{attrs:{name:"4-1"},nativeOn:{click:function(e){return t.logout(e)}}},[n("Icon",{attrs:{type:"md-exit"}}),t._v("\n            用户登出\n          ")],1)],2)],1)]),n("Content",{staticClass:"wiki-content-con"},[n("Alert",{staticClass:"margin-top-15",staticStyle:{"line-height":"30px","font-size":"16px"},attrs:{type:"warning","show-icon":""}},[t._v("特别说明： 此算法文档会根据业务发展需求发生变更，为了服务的稳定运行，请及时关注此文档！")]),n("div",{staticClass:"wiki-layout-con"},[n("Card",[n("Divider",{attrs:{orientation:"left"}},[t._v("简介")]),n("p",[t._v("当前算法主要服务于获取身份令牌（AccessToken）所进行的身份认证秘钥（signature）的计算。在请求高级接口的时候，系统会验证应用的合法性，也就是验证AccessToken。所以AccessToken是请求API的必要参数。")]),n("p",[t._v("在请求获取AccessToken的接口时候，服务器会对用户合法性（signature）进行核验，具体的接口请求字段，请参看具体的接口文档。")]),n("Divider",{attrs:{orientation:"left"}},[t._v("一、获取app_id和app_secret")]),n("p",[t._v("目前获取应用ID和应用秘钥是由系统管理员发放，如果你还没有请联系管理员。"),n("b",[t._v("请注意：app_secret非常重要请妥善保管")])]),n("Divider",{attrs:{orientation:"left"}},[t._v("二、准备加密对象，并且根据字段名降序排序")]),n("pre",[t._v('//排序好后应当是如下所示的数据\n{\n    "app_id":"服务器颁发的应用ID",\n    "app_secret":"服务器颁发的应用秘钥",   //请注意，此字段只是在计算加密串的时候在被加入，API请求请勿传递此字段值\n    "device_id":"设备唯一ID",\n    "rand_str":"随机字符串",\n    "timestamp":当前系统时间戳\n}')]),n("Divider",{attrs:{orientation:"left"}},[t._v("三、生成原始串")]),n("p",[t._v("将上面的数据构建成HTTP查询字符串，如下所示:")]),n("p",[t._v("app_id=服务器颁发的应用ID&app_secret=服务器颁发的应用秘钥&device_id=设备唯一ID&rand_str=随机字符串&timestamp=当前系统时间戳")]),n("Divider",{attrs:{orientation:"left"}},[t._v("四、计算秘钥")]),n("p",[t._v("将第三步生成的字符串进行哈希计算（md5）获得最终身份认证秘钥。")])],1),n("ABackTop",{attrs:{height:100,bottom:80,right:60,container:".wiki-layout-con"}})],1)],1),n("Footer",{staticClass:"wiki-footer-center"},[t._v("© Powered  By "),n("Tag",{attrs:{color:"primary"}},[t._v(t._s(t.co))])],1)],1)},r=[],a=(n("9b7d"),n("b5ba")),o=n("c276"),s=n("5869"),c={name:"wiki_calculation",components:{ABackTop:s["a"]},created:function(){var t=this;Object(a["c"])().then((function(e){t.co=e.data.data.co}))},data:function(){return{app_id:sessionStorage.getItem("ApiAdmin_AppInfo"),co:""}},methods:{logout:function(){var t=this;Object(a["e"])().then((function(e){t.$Message.success(e.data.msg),Object(o["q"])(""),sessionStorage.removeItem("ApiAdmin_AppInfo"),t.$router.push({name:"wiki_login"})}))}}},u=c,p=(n("c298"),n("2877")),d=Object(p["a"])(u,i,r,!1,null,"0a30b19c",null);e["default"]=d.exports},"9b7d":function(t,e,n){},b5ba:function(t,e,n){"use strict";n.d(e,"c",(function(){return _})),n.d(e,"a",(function(){return h})),n.d(e,"b",(function(){return b})),n.d(e,"d",(function(){return g})),n.d(e,"e",(function(){return k}));var i=n("d4ec"),r=n("bee2"),a=n("f121"),o=n("bc3a"),s=n.n(o),c=n("f825"),u=n.n(c),p=n("c276"),d=n("a18c"),l=a["a"].baseUrl.pro+"wiki/",m=function(){function t(e){Object(i["a"])(this,t),this.baseUrl=e}return Object(r["a"])(t,[{key:"interceptors",value:function(t){t.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),t.interceptors.response.use((function(t){var e=t.data,n=t.status;if(1!==e.code)throw-14===e.code?(Object(p["q"])(""),d["a"].push({name:"wiki_login"})):u.a.Message.error(e.msg),new Error(e.msg);return{data:e,status:n}}),(function(t){return Promise.reject(t)}))}},{key:"request",value:function(t){var e=s.a.create(),n=Object(p["i"])();return t=!1===n?Object.assign({baseURL:this.baseUrl,headers:{}},t):Object.assign({baseURL:this.baseUrl,headers:{apiAuth:n}},t),this.interceptors(e),e(t)}}]),t}(),v=new m(l),f=v,_=function(){return f.request({url:"Api/errorCode",method:"get"})},h=function(){return f.request({url:"Api/groupList",method:"get"})},b=function(t){return f.request({url:"Api/detail",method:"get",params:t})},g=function(t){return f.request({url:"Api/login",method:"post",data:t})},k=function(){return f.request({url:"Api/logout",method:"get"})}},c298:function(t,e,n){"use strict";var i=n("dc21"),r=n.n(i);r.a},dc21:function(t,e,n){}}]);