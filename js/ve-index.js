var vueElementUI = new Vue({
    el:'#vueElementUI',
    data : {
        userList:{ 机构:'上海米校教育科技', 您好:'18616168688'},
        imgUrl :'login_logo.png',
        menuList :['首页','招生方案','微信推广','个人中心'],
        menuIntro :{
            aboutUs:['关于我们','关于米校','产品介绍','服务条款'],
            help:['帮助中心','操作指南','常见问题','意见反馈'],
            tese:['平台特色','海量场景','轻松实现','极易传播']
        },
        contactUs:{服务电话:'400-666-666',服务邮箱:'market@mixiao.com',公司地址:'上海市徐汇区英雄大厦1804'},
        operateList :['预览','保存','发布'],
        numList :[1,2],
        footerMesg:'COPYRIGHT © 2012-2016 ALL RIGHTS RESERVED 上海米校教育科技有限公司版权所有京ICP备15041841号-2业务支持与合作：MARKET@XIAOHE.COM',
    },
    
})
//console.log(vueElementUI.operateList.index);