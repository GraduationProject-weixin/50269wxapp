(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/wenzhang/detail"],{"0dc5":function(e,t,n){"use strict";var a=n("5e23"),r=n.n(a);r.a},2212:function(e,t,n){"use strict";(function(e){n("b3ef");a(n("66fd"));var t=a(n("7af2"));function a(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n("543d")["createPage"])},"5e23":function(e,t,n){},6554:function(e,t,n){"use strict";n.r(t);var a=n("ec0e"),r=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=r.a},"7af2":function(e,t,n){"use strict";n.r(t);var a=n("ae87"),r=n("6554");for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n("0dc5");var u,c=n("f0c5"),s=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],u);t["default"]=s.exports},ae87:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return a}));var a={mescrollUni:function(){return Promise.all([n.e("common/vendor"),n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"44e7"))}},r=function(){var e=this,t=e.$createElement;e._self._c},i=[]},ec0e:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n,a,r,i,u){try{var c=e[i](u),s=c.value}catch(o){return void n(o)}c.done?t(s):Promise.resolve(s).then(a,r)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var u=e.apply(t,n);function c(e){i(u,a,r,c,s,"next",e)}function s(e){i(u,a,r,c,s,"throw",e)}c(void 0)}))}}var c={data:function(){return{autoplaySwiper:!1,intervalSwiper:5e3,btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},collectionFlag:0,thumbsupFlag:0,crazilyFlag:0}},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(e){var t=this;return u(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.id=e.id;case 1:case"end":return n.stop()}}),n)})))()},onShow:function(t){var n=this;return u(a.default.mark((function t(){var r,i,u;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n.init(),n.getwenzhangCollection(),r=e.getStorageSync("nowTable"),t.next=5,n.$api.session(r);case 5:i=t.sent,n.user=i.data,n.btnColor=n.btnColor.sort((function(){return.5-Math.random()})),n.getThumbsup(),u=e.getStorageSync("pingluenStateState"),u&&(e.removeStorageSync("pingluenStateState"),n.mescroll.num=1,n.upCallback(n.mescroll));case 11:case"end":return t.stop()}}),t)})))()},destroyed:function(){},methods:{download:function(t){var n=this;e.downloadFile({url:t,success:function(e){200===e.statusCode&&(n.$utils.msg("下载成功"),window.open(t))}})},init:function(){var e=this;return u(a.default.mark((function t(){var n;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$api.info("wenzhang",e.id);case 2:n=t.sent,e.detail=n.data,e.swiperList=e.detail.wenzhangPhoto?e.detail.wenzhangPhoto.split(","):[];case 5:case"end":return t.stop()}}),t)})))()},getwenzhangCollection:function(){var e=this;return u(a.default.mark((function t(){var n,r;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={page:1,limit:1,wenzhangId:e.id,yonghuId:e.user.id,wenzhangCollectionTypes:"1"},t.next=3,e.$api.list("wenzhangCollection",n);case 3:r=t.sent,e.collectionFlag=r.data.list.length;case 5:case"end":return t.stop()}}),t)})))()},shoucang:function(){var t=this;return u(a.default.mark((function n(){var r,i,c,s;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t,i={page:1,limit:1,wenzhangId:r.detail.id,yonghuId:r.user.id,wenzhangCollectionTypes:"1"},n.next=4,r.$api.list("wenzhangCollection",i);case 4:if(c=n.sent,1!=c.data.list.length){n.next=9;break}return s=c.data.list[0].id,e.showModal({title:"提示",content:"是否取消",success:function(){var e=u(a.default.mark((function e(t){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.confirm){e.next=5;break}return e.next=3,r.$api.del("wenzhangCollection",JSON.stringify([s]));case 3:r.$utils.msg("取消成功"),r.getwenzhangCollection();case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}),n.abrupt("return");case 9:e.showModal({title:"提示",content:"是否收藏",success:function(){var e=u(a.default.mark((function e(t){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.confirm){e.next=5;break}return e.next=3,r.$api.add("wenzhangCollection",{yonghuId:r.user.id,wenzhangId:r.detail.id,wenzhangCollectionTypes:1});case 3:r.$utils.msg("收藏成功"),r.getwenzhangCollection();case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()});case 10:case"end":return n.stop()}}),n)})))()},mescrollInit:function(e){this.mescroll=e},downCallback:function(e){this.hasNext=!0,e.resetUpScroll()},upCallback:function(e){var t=this;return u(a.default.mark((function n(){var r;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$api.list("wenzhangLiuyan",{page:e.num,limit:e.size,wenzhangId:t.id});case 2:r=n.sent,1==e.num&&(t.commentList=[]),t.commentList=t.commentList.concat(r.data.list),0==r.data.list.length&&(t.hasNext=!1),e.endSuccess(e.size,t.hasNext);case 7:case"end":return n.stop()}}),n)})))()},onCommentTap:function(){var e=this;return u(a.default.mark((function t(){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$utils.jump("../wenzhangLiuyan/add-or-update?wenzhangId=".concat(e.id));case 1:case"end":return t.stop()}}),t)})))()},getThumbsup:function(){var e=this;return u(a.default.mark((function t(){var n,r,i;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,r={page:1,limit:1,wenzhangId:n.detail.id,yonghuId:n.user.id},t.next=4,n.$api.list("wenzhangCollection",r);case 4:i=t.sent,i.data.list.length>0&&("2"==i.data.list[0].wenzhangCollectionTypes&&(n.thumbsupFlag=!0),"3"==i.data.list[0].wenzhangCollectionTypes&&(n.crazilyFlag=!0));case 6:case"end":return t.stop()}}),t)})))()},zan:function(){var t=this;return u(a.default.mark((function n(){var r,i,c,s;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t,i={page:1,limit:1,wenzhangId:r.detail.id,yonghuId:r.user.id,type:"2"},n.next=4,r.$api.list("wenzhangCollection",i);case 4:if(c=n.sent,!(c.data.list.length>0)){n.next=9;break}return s=c.data.list[0].id,e.showModal({title:"提示",content:"是否取消点赞",success:function(){var e=u(a.default.mark((function e(t){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.confirm){e.next=8;break}return e.next=3,r.$api.del("wenzhangCollection",JSON.stringify([s]));case 3:return r.detail.zanNumber=parseInt(r.detail.zanNumber)-1,e.next=6,r.$api.update("wenzhang",r.detail);case 6:r.$utils.msg("取消成功"),r.thumbsupFlag=!1;case 8:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}),n.abrupt("return");case 9:e.showModal({title:"提示",content:"是否点赞",success:function(){var e=u(a.default.mark((function e(t){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.confirm){e.next=8;break}return e.next=3,r.$api.add("wenzhangCollection",{yonghuId:r.user.id,wenzhangId:r.detail.id,type:"2"});case 3:return r.detail.zanNumber=parseInt(r.detail.zanNumber)+1,e.next=6,r.$api.update("wenzhang",r.detail);case 6:r.$utils.msg("点赞成功"),r.thumbsupFlag=!0;case 8:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()});case 10:case"end":return n.stop()}}),n)})))()},cai:function(){var t=this;return u(a.default.mark((function n(){var r,i,c,s;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t,i={page:1,limit:1,wenzhangId:r.detail.id,yonghuId:r.user.id,type:"3"},n.next=4,r.$api.list("wenzhangCollection",i);case 4:if(c=n.sent,!(c.data.list.length>0)){n.next=9;break}return s=c.data.list[0].id,e.showModal({title:"提示",content:"是否取消点踩",success:function(){var e=u(a.default.mark((function e(t){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.confirm){e.next=8;break}return e.next=3,r.$api.del("wenzhangCollection",JSON.stringify([s]));case 3:return r.detail.caiNumber=parseInt(r.detail.caiNumber)-1,e.next=6,r.$api.update("wenzhang",r.detail);case 6:r.$utils.msg("取消成功"),r.crazilyFlag=!1;case 8:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}),n.abrupt("return");case 9:e.showModal({title:"提示",content:"是否点踩",success:function(){var e=u(a.default.mark((function e(t){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.confirm){e.next=8;break}return e.next=3,r.$api.add("wenzhangCollection",{yonghuId:r.user.id,wenzhangId:r.detail.id,type:"3"});case 3:return r.detail.caiNumber=parseInt(r.detail.caiNumber)+1,e.next=6,r.$api.update("wenzhang",r.detail);case 6:r.$utils.msg("点踩成功"),r.crazilyFlag=!0;case 8:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()});case 10:case"end":return n.stop()}}),n)})))()}}};t.default=c}).call(this,n("543d")["default"])}},[["2212","common/runtime","common/vendor"]]]);