webpackJsonp([2,6],Array(66).concat([function(t,e,o){var i,a;o(67),i=o(69),a=o(153),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},function(t,e,o){var i=o(68);"string"==typeof i&&(i=[[t.id,i,""]]);o(7)(i,{});i.locals&&(t.exports=i.locals)},function(t,e,o){e=t.exports=o(6)(),e.push([t.id,".fade-transition{-webkit-transition:opacity .3s ease;transition:opacity .3s ease}.fade-enter,.fade-leave{opacity:0}",""])},function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=o(70),r=i(a),s=o(78),n=i(s),l=o(84),d=o(85),c=i(d),p=o(137),f=i(p),u=o(142),h=i(u);e["default"]={data:function(){return{opacity:1,liOpacity:0,shopheaderH:110,showShopActivity:!1,currentView:"FoodsList"}},components:{ShopHeader:r["default"],ShopTip:n["default"],FoodsList:c["default"],ShopInfo:f["default"],NoFood:h["default"],ShopActivity:function(t){o.e(3,function(e){var o=[e(148)];t.apply(null,o)})}},route:{},created:function(){},ready:function(){l.Throttle.bindEvents(this.handlePageScroll,this,".page")},methods:{handlePageScroll:function(){var t=this.$els.page.scrollTop;this.opacity=1-t/110},handlePagePandown:function(t){t.deltaY<=110?(this.shopheaderH=110+t.deltaY,this.liOpacity=t.deltaY/110):(this.shopheaderH=110,this.liOpacity=0)},handlePagePanend:function(){this.shopheaderH=110,this.liOpacity=0},handleFoodsExInfo:function(t){this.currentView="foods"===t?"FoodsList":"ShopInfo"},handlOpenShopActivity:function(t){this.showShopActivity="close"!==t}}}},function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var a=o(71),r=i(a);e["default"]=r["default"]},function(t,e,o){var i,a;i=o(72),a=o(77),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),o(73);var a=o(76),r=i(a);e["default"]={props:["opacity","li-opacity","shopheaderH"],data:function(){return{shoplogo:r["default"]}},computed:{panHeaderStyle:function(){return this.shopheaderH>110?{height:this.shopheaderH+"px"}:{height:"110px",transition:"height .2s ease-in"}}},methods:{handleOpenShopActivity:function(){this.$dispatch("open-shop-activity")}}}},function(t,e,o){var i=o(74);"string"==typeof i&&(i=[[t.id,i,""]]);o(11)(i,{});i.locals&&(t.exports=i.locals)},function(t,e,o){e=t.exports=o(6)(),e.push([t.id,".shopheader{position:relative;height:110px;color:#fff;font-size:.293333rem}.shopheader .activity-icon{margin-right:.1rem;font-size:1.1rem;font-style:normal;line-height:1rem;height:1.3rem;padding:.1rem 0;display:inline-block;box-sizing:border-box;text-align:center;border:1px solid;border-radius:.18rem}.shopheader .activity-wrap{line-height:1.426667rem;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:1.1rem}.shopheader .activity-wrap.wrap .activity-icon{margin-top:.04rem}.shopheader-background{position:fixed;width:100%;height:220px;background-image:url("+o(75)+");background-color:#3190e8;background-size:cover;background-repeat:no-repeat}.shopheader-background:before{content:'';position:absolute;left:0;right:0;top:0;bottom:0;background-color:rgba(119,103,137,.43)}.shopheader-main{display:-webkit-box;display:-ms-flexbox;display:flex;height:100px;position:fixed;top:10px;width:100%;will-change:opacity}.shopheader-logo{width:60px;height:60px;border:1px solid #fff;border-radius:6px;margin:0 1.266667rem 0 1.466667rem}.shopheader-name{margin:0;font-size:1.8rem;line-height:1.8rem;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.shopheader-content{-webkit-box-flex:1;-ms-flex:1;flex:1;display:block;width:0;height:100%;padding-right:.133333rem}.shopheader-servercontent{white-space:nowrap;height:1.666667rem;line-height:2rem;font-size:1.2rem}.shopheader-server{line-height:1.32rem}.shopheader-server:not(:last-child):after{content:' / ';opacity:.5}.shopheader-activities{position:relative;padding-right:1.6rem;padding-top:.5rem}.shopheader-activities li{margin-bottom:1.2rem;-webkit-transition:opacity .2s;transition:opacity .2s}.shopheader-notice{position:absolute;bottom:0;left:0;right:0;padding:0 .533333rem 0 .266667rem;height:2rem;line-height:2rem;background-color:rgba(0,0,0,.15);color:hsla(0,0%,100%,.8);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:1.2rem;padding-right:2rem}.shopheader-notice:before{content:'\\516C\\544A';display:inline-block;padding:0 .053333rem;height:1.5rem;line-height:1.5rem;background-color:hsla(0,0%,100%,.8);color:#666;border-radius:.053333rem;margin-right:1.133333rem}.shopheader-activity-count{position:absolute;top:4px;right:0;height:1.6rem;line-height:1.6rem;padding:0 .333333rem 0 .5rem;background-color:rgba(0,0,0,.15);border-radius:.5rem;font-size:1rem}.shopheader-activity-count .weui_cell_ft:after{width:5px;height:5px}.shopheader-notice .weui_cell_ft{position:absolute;top:0;right:5px}.shopheader-notice .weui_cell_ft:after{width:5px;height:5px}",""])},function(t,e){t.exports="data:image/png;base64,UklGRlQAAABXRUJQVlA4IEgAAACwAwCdASo0ADQAPm02mEkkIqKhIggAgA2JaQDTnAWa6wAV4hcTgAD+9bh+Jj0aa/uztFpiz5Dp7A57KGsTm9F6nwtzD8AAAAA="},function(t,e,o){t.exports=o.p+"/buildImg/shoplogo.png"},function(t,e){t.exports=' <div class=shopheader v-bind:style=panHeaderStyle> <div class=shopheader-background> </div> <div class=shopheader-main v-bind:style="{opacity: opacity}"> <img class=shopheader-logo :src=shoplogo /> <div class=shopheader-content> <h2 class=shopheader-name>麻辣工坊（香锅）</h2> <p class=shopheader-servercontent> <span class=shopheader-server>蜂鸟专送</span> <span class=shopheader-server>34分钟送达</span> <span class=shopheader-server>配送费¥4</span> </p> <div class=shopheader-activities> <ul> <li style="opacity: 1"> <div class="activity-wrap wrap"> <i class=activity-icon style="color: rgb(255, 255, 255); border-color: rgb(240, 115, 115); background-color: rgb(240, 115, 115)"> 减 </i> <span class=activity-description> 在线支付满25减11，满50减15，满80减20 </span> </div> </li> <li v-bind:style="{opacity: liOpacity}"> <div class="activity-wrap wrap"> <i class=activity-icon style="color: rgb(255, 255, 255); border-color: rgb(112, 188, 70); background-color: rgb(112, 188, 70)"> 新 </i> <span class=activity-description> (不与其他活动同享)新用户下单立减12.0元 </span> </div> </li> </ul> <div class=shopheader-activity-count v-touch:tap=handleOpenShopActivity> 2个活动 <span class=weui_cell_ft></span> </div> </div> </div> </div> <div class=shopheader-notice v-touch:tap=handleOpenShopActivity> <span>本店菜品味美价廉，欢迎亲们光临本店，谢谢。本店另加了骨汤麻辣烫点餐时不点骨汤麻辣烫的就默认是香锅哦！</span> <span class=weui_cell_ft></span> </div> </div>'},function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var a=o(79),r=i(a);e["default"]=r["default"]},function(t,e,o){var i,a;i=o(80),a=o(83),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),o(81),e["default"]={data:function(){return{isFoods:!0}},methods:{handleShopNavOnTap:function(t){this.isFoods="foods"===t,this.$dispatch("foods-ex-info",t)}}}},function(t,e,o){var i=o(82);"string"==typeof i&&(i=[[t.id,i,""]]);o(11)(i,{});i.locals&&(t.exports=i.locals)},function(t,e,o){e=t.exports=o(6)(),e.push([t.id,'.shopnav{line-height:4rem;display:-webkit-box;display:-ms-flexbox;display:flex;background-color:#fff;position:relative;z-index:9}.shopnav-tab{position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;display:block;width:0;text-align:center;font-size:1.6rem;color:#666;text-decoration:none;border-bottom:1px solid #ddd;line-height:4.7rem}.shopnav-tab.active{color:#3190e8}.shopnav-tab.active .shopnav-title{position:relative}.shopnav-tab.active .shopnav-title:after{content:"";position:absolute;bottom:-.16rem;left:-.066667rem;right:-.066667rem;height:.153333rem;background-color:#3190e8;border-radius:.04rem}',""])},function(t,e){t.exports=' <div class=shopnav> <a class=shopnav-tab :class="{active: isFoods}" v-touch:tap="handleShopNavOnTap(\'foods\')"> <span class=shopnav-title>商品</span> </a> <a class=shopnav-tab :class="{active: !isFoods}" v-touch:tap="handleShopNavOnTap(\'info\')"> <span class=shopnav-title>商家</span> </a> </div> '},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.Throttle={throttle:function(t,e,o){var i,a=null;return function(){var r=this,s=arguments,n=+new Date;clearTimeout(a),i||(i=n),n-i>=o?(t.apply(r,s),i=n):a=setTimeout(function(){t.apply(r,s)},e)}},bindEvents:function(t,e,o){var i=document.querySelector(o);i&&i.addEventListener("scroll",this.throttle(t,10).bind(e))}}},function(t,e,o){var i,a;i=o(86),a=o(136),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),o(87);var a=o(89),r=i(a),s=o(96),n=i(s),l=o(118),d=i(l),c=o(112);e["default"]={data:function(){return{cartShaking:!1,maskIsShow:!1}},components:{MenuNav:r["default"],MenuList:n["default"],CartFooter:d["default"]},route:{},created:function(){this.pageInit()},methods:{handleChangeCartNums:function(t){var e=this;return!this.cartShaking&&(this.cartShaking=!0,void setTimeout(function(){e.cartShaking=!1},500))}},vuex:{actions:{pageInit:c.pageInit}}}},function(t,e,o){var i=o(88);"string"==typeof i&&(i=[[t.id,i,""]]);o(11)(i,{});i.locals&&(t.exports=i.locals)},function(t,e,o){e=t.exports=o(6)(),e.push([t.id,".shopbody{position:relative;height:calc(100% - 48px);min-height:calc(100% - 48px);width:100%;background-color:hsla(0,0%,100%,.5);top:0;z-index:11}.menuview{height:100%}.menuview-main{height:100%;padding-bottom:2.28rem;background-color:#fff}.main-content{display:-webkit-box;display:-ms-flexbox;display:flex;height:100%}",""])},function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var a=o(90),r=i(a);e["default"]=r["default"]},function(t,e,o){var i,a;i=o(91),a=o(95),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),o(92);var a=o(94),r=i(a);e["default"]={data:function(){return{activeIndex:0,saleHot:r["default"],menuList:[{title:"餐盒必点谢谢！"},{title:"麻辣烫"},{title:"口味"},{title:"主食"},{title:"套餐锅底"},{title:"豆制品"},{title:"蔬菜类"},{title:"菌菇类"},{title:"荤菜类"},{title:"饮料酒水"},{title:"饮料酒水"},{title:"饮料酒水"},{title:"饮料酒水"},{title:"饮料酒水"},{title:"饮料酒水"}]}},methods:{handlOntap:function(t){this.activeIndex=t}}}},function(t,e,o){var i=o(93);"string"==typeof i&&(i=[[t.id,i,""]]);o(11)(i,{});i.locals&&(t.exports=i.locals)},function(t,e,o){e=t.exports=o(6)(),e.push([t.id,'.menu-nav{width:8rem;height:100%;overflow-y:auto;background-color:#f8f8f8;padding-bottom:50px;min-height:100%}.menu-nav li{position:relative;padding:2rem .6rem;border-bottom:1px solid #ededed;font-size:1.4rem;color:#666}.menu-nav li.active{background-color:#fff;border-right-color:#fff;font-weight:bolder}.menu-nav li.noicon .category-name{line-height:1.2em;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical}.menu-nav li.active:after{content:"";position:absolute;left:0;top:0;bottom:0;width:2px;background-color:#3190e8}.menuview img{max-width:100%}.category-icon{width:1.24rem;height:1.333333rem}',""])},function(t,e,o){t.exports=o.p+"/buildImg/sale-hot.jpeg"},function(t,e){t.exports=' <ul class=menu-nav> <li> <img class=category-icon :src=saleHot> <span class=category-name>热销榜</span> </li> <li class=noicon v-for="menu in menuList" v-bind:class="{active: activeIndex === $index}" v-touch:tap=handlOntap($index)> <span class=category-name>{{menu.title}}</span> </li> </ul> '},function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var a=o(97),r=i(a);e["default"]=r["default"]},function(t,e,o){var i,a;i=o(98),a=o(117),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),o(99);var a=o(102),r=i(a),s=o(105),n=i(s),l=o(116);e["default"]={props:[],components:{DtComponent:r["default"],DdComponent:n["default"]},vuex:{getters:{foodsData:l.getPageData},actions:{}}}},function(t,e,o){var i=o(100);"string"==typeof i&&(i=[[t.id,i,""]]);o(11)(i,{});i.locals&&(t.exports=i.locals)},function(t,e,o){e=t.exports=o(6)(),e.push([t.id,".menu-list{-webkit-box-flex:1;-ms-flex:1;flex:1;display:block;width:0;height:100%;padding-bottom:30px}.scroller{height:100%;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;min-height:100%}.scroller dt{position:relative;padding:1.2rem 1.266667rem;background-color:#f1f1f1}.scroller dd{position:relative;background-color:#fff;margin:0;padding:1.4rem 1.266667rem;margin-bottom:1px;display:-webkit-box;display:-ms-flexbox;display:flex;min-height:10rem}.scroller dd:not(:last-child){box-shadow:.4rem 1px 0 0 #ddd}.scroller .foodimg{margin-right:4%;-webkit-box-flex:2;-ms-flex:2;flex:2;display:block;width:0;vertical-align:top}.scroller .foodimg img{width:100%;border-radius:.553333rem;max-width:100%}.category-title{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;overflow:hidden}.category-title strong{margin-right:1.133333rem;font-weight:700;font-size:1.5rem;color:#666;-webkit-box-flex:0;-ms-flex:none;flex:none}.category-title span{-webkit-box-flex:1;-ms-flex:1;flex:1;display:block;width:0;color:#999;font-size:1.266667rem;white-space:nowrap;overflow:hidden}.category-more .icon{position:absolute;right:0;top:0;bottom:0;width:4rem;background:#f1f1f1 url("+o(101)+') 50% no-repeat;background-size:1.5rem auto}.category-more .popup{position:absolute;background-color:#39373a;opacity:.97;width:63%;right:1rem;z-index:3;color:#eee;font-size:1.2rem;border-radius:.5rem;padding:.6rem .8rem;cursor:pointer}.popupin-transition{-webkit-transform-origin:top right;transform-origin:top right;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:scale(1);transform:scale(1)}.popupin-enter,.popupin-leave{-webkit-transform:scale(.1);transform:scale(.1);opacity:0}.category-more .popup:before{content:"";position:absolute;top:0;-webkit-transform:translateY(-100%);transform:translateY(-100%);right:1.266667rem;border:.6rem solid transparent;border-bottom-color:#39373a}.category-more .popup span:first-child{color:#fff}.category-more:after{content:"";position:absolute}.foodinfo{position:relative;-webkit-box-flex:8;-ms-flex:8;flex:8;display:block;width:0;padding-bottom:1.666667rem}.foodtitle{font-size:1.4rem;font-weight:700;line-height:1.1;overflow:hidden;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.foodtitle span{vertical-align:middle}.foodsales{margin:1.173333rem 0;color:#666;font-size:1.293333rem;line-height:1}.foodsales span{vertical-align:middle}.foodsales>span:not(:first-child){margin-left:1.106667rem;vertical-align:middle}.foodprice{position:absolute;left:0;bottom:0;font-weight:700;font-size:1.5rem;line-height:1.426667rem;color:#f60}.foodprice:before{font-weight:400;content:\'\\A5\';font-size:1.293333rem;display:inline-block}',""])},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAUCAYAAACXtf2DAAAAAXNSR0IArs4c6QAAAFhJREFUOBFjYBgFoyEwGgKMs2bN8gQGwyxoUKQBwXZswUKuOhaQ4f///5cBGcrIyAiySBbExgLIUseExSCqCoEsSAO6/AkIg9h4TKe2OjxWjUqNhsDwCgEACvMiGUpibN4AAAAASUVORK5CYII="},function(t,e,o){var i,a;i=o(103),a=o(104),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:["foodMenu"],data:function(){return{popupShow:!1}},methods:{handleIconOnTap:function(){console.log(this.popupShow),this.popupShow=!this.popupShow}}}},function(t,e){t.exports=" <dt> <div class=category-title> <strong class=category-name>{{foodMenu}}</strong> <span class=category-description>大家喜欢吃，才叫真好吃。</span> </div> <div class=category-more> <span class=icon v-touch:tap=handleIconOnTap></span> <p class=popup v-show=popupShow transition=popupin v-touch:tap=handleIconOnTap> <span>热销榜</span> <span>大家喜欢吃，才叫真好吃。</span> </p> </div> </dt> "},function(t,e,o){var i,a;i=o(106),a=o(115),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=o(107),r=i(a);e["default"]={props:["food","foodMenu"],components:{CartAddSub:r["default"]}}},function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var a=o(108),r=i(a);e["default"]=r["default"]},function(t,e,o){var i,a;i=o(109),a=o(114),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),o(110);var i=o(112);e["default"]={props:["food","foodMenu","entitycartbutton"],computed:{cartNums:function(){return this.food&&this.food.cartNums}},methods:{handleAddCart:function(){var t=this;this.incCart(t.foodMenu,this.food.foodId),t.$dispatch("change-cart",1)},handleSubCart:function(){this.food.cartNums>0&&(this.decCart(this.foodMenu,this.food.foodId),this.$dispatch("change-cart",-1))}},vuex:{actions:{incCart:i.incCart,decCart:i.decCart}}}},function(t,e,o){var i=o(111);"string"==typeof i&&(i=[[t.id,i,""]]);o(11)(i,{});i.locals&&(t.exports=i.locals)},function(t,e,o){e=t.exports=o(6)(),e.push([t.id,".cartbutton{position:absolute;right:0;bottom:-.166667rem;padding-right:2px;height:21px;overflow:hidden}.entitybutton{display:inline-block;width:21px;height:21px;line-height:19px;text-align:center;background-color:#3190e8;color:#fff;font-size:2rem;border-radius:50%}.entitybutton.sub{border:1px solid #3190e8;background-color:#fff;color:#3190e8;font-size:1.5rem}.entityquantity{display:inline-block;text-align:center;color:#666;vertical-align:middle;font-size:1.4rem;line-height:19px;width:21px;height:21px;position:relative;top:-2px}",""])},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.decCart=e.incCart=e.pageInit=void 0;var i=o(35);e.pageInit=function(t){var e=t.dispatch,a=o(113);setTimeout(function(){e(i.PAGE_INIT,a)},1e3)},e.incCart=function(t,e,o){var a=t.dispatch;a(i.INC_CART,e,o)},e.decCart=function(t,e,o){var a=t.dispatch;a(i.DEC_CART,e,o)}},function(t,e){"use strict";t.exports={rexiaobang:[{foodId:1,foodName:"香辣土豆丝",monthSales:200,favComment:98,foodPrice:25,cartNums:20},{foodId:5,foodName:"老油条",monthSales:1e3,favComment:100,foodPrice:3,cartNums:0},{foodId:9,foodName:"吃死你",monthSales:10,favComment:90,foodPrice:5,cartNums:2}],kouwei:[{foodId:2,foodName:"香辣土豆丝",monthSales:200,favComment:98,foodPrice:25,cartNums:20},{foodId:4,foodName:"老油条",monthSales:1e3,favComment:100,foodPrice:3,cartNums:0},{foodId:6,foodName:"吃死你",monthSales:10,favComment:90,foodPrice:5,cartNums:2}],douzhiping:[{foodId:8,foodName:"香辣土豆丝",monthSales:200,favComment:98,foodPrice:25,cartNums:20},{foodId:12,foodName:"老油条",monthSales:1e3,favComment:100,foodPrice:3,cartNums:0},{foodId:20,foodName:"吃死你",monthSales:10,favComment:90,foodPrice:5,cartNums:2}]}},function(t,e){t.exports=' <div class="cartbutton {{entitycartbutton}}"> <span class="entitybutton sub" v-show=!!cartNums v-touch:tap=handleSubCart> — </span> <span class=entityquantity v-show=!!cartNums>{{cartNums}}</span> <span class="entitybutton add" v-touch:tap=handleAddCart> + </span> </div> '},function(t,e){t.exports=" <dd> <span class=foodimg> <img src=//fuss10.elemecdn.com/4/af/0ab6c999802247262576a49b80484png.png?imageMogr/thumbnail/140x140/format/webp/quality/85> </span> <section class=foodinfo> <header class=foodtitle> <span>{{food.foodName}}</span> </header> <p class=foodsales> <span>月售{{food.monthSales}}份</span> <span>好评率{{food.favComment}}%</span> </p> <strong class=foodprice> <span>{{food.foodPrice}}</span> </strong> <cart-add-sub :food=food :food-menu=foodMenu></cart-add-sub> </section> </dd> "},function(t,e){"use strict";function o(t){return t.foodsListStore.foodsData}function i(t){var e=t.foodsListStore.foodsData,o={};for(var i in e)o[i]=e[i].filter(function(t){return t.cartNums>0});return o}function a(t){var e=t.foodsListStore.foodsData,o=0,i=0;for(var a in e){var r=e[a];r.forEach(function(t){t.cartNums>0&&(o+=t.cartNums,i+=t.cartNums*t.foodPrice)})}return{cartNums:o,totalPrice:i}}Object.defineProperty(e,"__esModule",{value:!0}),e.getPageData=o,e.getCartsData=i,e.getTotalData=a},function(t,e){t.exports=' <section class=menu-list> <div class=scroller> <dl v-for="(key, value) in foodsData"> <dt-component :food-menu=key></dt-component> <dd-component v-for="food in value" :food=food :food-menu=key> </dd-component> </dl> </div> </section> '},function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var a=o(119),r=i(a);e["default"]=r["default"]},function(t,e,o){var i,a;i=o(120),a=o(135),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),o(121);var a=o(124),r=i(a),s=o(129),n=i(s),l=o(116);e["default"]={props:["cartShaking"],data:function(){return{maskShow:!1}},methods:{handleCartShow:function(){this.maskShow=!0,document.querySelector(".page").style.overflowY="hidden"},handleCloseCallback:function(){this.maskShow=!1,document.querySelector(".page").style.overflowY="auto"}},components:{Mask:r["default"],CartBody:n["default"]},vuex:{getters:{totalData:l.getTotalData},actions:{}}}},function(t,e,o){var i=o(122);"string"==typeof i&&(i=[[t.id,i,""]]);o(11)(i,{});i.locals&&(t.exports=i.locals)},function(t,e,o){e=t.exports=o(6)(),e.push([t.id,".cartfooter{position:fixed;bottom:0;left:0;padding-left:8.5rem;background-color:#3d3d3f;height:5rem;z-index:99;width:100%}.carticon{position:absolute;left:1.328767rem;bottom:1.136986rem;width:5.5rem;height:5.5rem;box-sizing:border-box;border-radius:100%;background-color:#3190e8;border:.4rem solid #444;box-shadow:0 -.18219rem .15479rem 0 rgba(0,0,0,.1);will-change:transform}.carticon:before{position:absolute;top:0;right:0;bottom:0;left:0;background:url("+o(123)+') 50% no-repeat;background-size:4.753425rem;content:""}.carticon:after{position:absolute;right:-.8rem;top:-.8rem;line-height:1;background-color:#ff461d;color:#fff;border-radius:.6rem;padding:.2rem .5rem;content:attr(attr-quantity);font-size:1.1rem}.cartprice span{display:block}.cartprice .carttotal{font-size:1.6rem;color:#fff}.cartprice .cartdelivery{margin-top:.168493rem;color:#f5f5f5;font-size:1.2rem}.submitbutton{position:absolute;top:0;right:0;bottom:0;width:10rem;background-color:#4cd964;color:#fff;text-align:center;text-decoration:none;font-size:1.6rem;font-weight:700;line-height:5rem}.cartprice{padding-top:.6rem}.shake{-webkit-animation:shaking .5s ease-out;animation:shaking .5s ease-out}@-webkit-keyframes shaking{0%{transform:scale(.7)}30%{transform:scale(1.1)}50%{transform:scale(.9)}70%{transform:scale(1.1)}to{transform:scale(1)}}@keyframes shaking{0%{transform:scale(.7)}30%{transform:scale(1.1)}50%{transform:scale(.9)}70%{transform:scale(1.1)}to{transform:scale(1)}}',""])},function(t,e,o){t.exports=o.p+"/buildImg/cart.png"},function(t,e,o){var i,a;o(125),i=o(127),a=o(128),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},function(t,e,o){var i=o(126);"string"==typeof i&&(i=[[t.id,i,""]]);o(7)(i,{});i.locals&&(t.exports=i.locals)},function(t,e,o){e=t.exports=o(6)(),e.push([t.id,".mask-wrap{position:fixed;top:0;left:0;width:100%;height:100%;-webkit-transition:background .35s ease;transition:background .35s ease}.mask-wrap,.maskts{background:rgba(0,0,0,.5)}.maskts-enter,.maskts-leave{background:transparent}",""])},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{maskShow:{type:Boolean,"default":!1}},methods:{close:function(){this.$dispatch("close-callback")}}}},function(t,e){t.exports=" <div class=mask-wrap transition=maskts v-show=maskShow @click=close> </div> "},function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=void 0;var a=o(130),r=i(a);e["default"]=r["default"]},function(t,e,o){var i,a;i=o(131),a=o(134),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),o(132);var a=o(107),r=i(a),s=o(116);e["default"]={components:{CartAddSub:r["default"]},vuex:{getters:{cartsData:s.getCartsData}}}},function(t,e,o){var i=o(133);"string"==typeof i&&(i=[[t.id,i,""]]);o(11)(i,{});i.locals&&(t.exports=i.locals)},function(t,e,o){e=t.exports=o(6)(),e.push([t.id,".cartbody{position:fixed;left:0;bottom:0;padding-bottom:80px;width:100%;background-color:#fff;-webkit-transition:all .35s ease;transition:all .35s ease}.cartbodyts{transform:translate3d(0,-100%,0);-webkit-transform:translate3d(0,-100%,0)}.cartbodyts-enter,.cartbodyts-leave{transform:translate3d(0,100%,0);-webkit-transform:translate3d(0,100%,0)}.cartheader{padding:0 1rem;border-bottom:1px solid #ddd;background-color:#eceff1;color:#666;line-height:3rem}.cartheader-text{padding-left:.5rem;border-left:2px solid #3190e8;font-size:1.6rem}.cartheader-remove{float:right;padding-left:1rem;background-size:1rem;color:#666;text-decoration:none;font-size:1.4rem}.cartbody-scroller{overflow:auto;-webkit-overflow-scrolling:touch;max-height:20rem}.piecewise-tips{padding:.5rem 0;margin-left:1rem;font-size:1.1rem;color:#999;border-bottom:1px solid #eee}.piecewise-tips b{display:inline-block;margin-right:1rem;padding:.1rem .12rem;font-weight:200;color:#ff461d;border:1px solid #ff461d;border-radius:2px}.cartlist{margin:0;padding:0}.entityrow{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-right:1rem;margin-left:1rem;height:4.5rem;font-size:1.4rem}.entityname{-webkit-box-flex:7;-ms-flex:7;flex:7;display:block;width:0;line-height:normal}.entitytotal{-webkit-box-flex:1.6;-ms-flex:1.6;flex:1.6;color:#f60}.entitycartbutton,.entitytotal{display:block;width:0;text-align:right}.entitycartbutton{-webkit-box-flex:3.4;-ms-flex:3.4;flex:3.4;position:static}.entitytotal:before{content:'\\A5'}.entityname .name{display:inline-block;font-style:normal;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;vertical-align:middle;max-width:100%}.entityrow:not(:last-child){border-bottom:1px solid #eee}",""])},function(t,e){t.exports=' <div class=cartbody style="z-index: 11"> <div class=cartheader> <span class=cartheader-text>购物车</span> <a href=javascript: class=cartheader-remove> <span>清空</span> </a> </div> <div class=cartbody-scroller> <div class=piecewise-tips> <b>阶梯配送费</b> 满100免配送费 </div> <ul class=cartlist> <template v-for="(foodMenu, foodMenuDatas) in cartsData"> <li class=entityrow v-for="food in foodMenuDatas"> <span class=entityname> <em class=name>{{food.foodName}}</em> </span> <span class=entitytotal>{{food.foodPrice * food.cartNums}}</span> <cart-add-sub entitycartbutton=entitycartbutton :food=food :food-menu=foodMenu> </cart-add-sub> </li> </template> </ul> </div> </div> '},function(t,e){t.exports=" <footer> <mask :mask-show=maskShow @close-callback=handleCloseCallback></mask> <cart-body v-show=maskShow transition=cartbodyts> </cart-body> <div class=cartfooter> <span class=carticon v-bind:class=\"{'shake': cartShaking}\" attr-quantity={{totalData.cartNums}} @click=handleCartShow></span> <div class=cartprice> <span class=carttotal>¥{{totalData.totalPrice}}</span> <span class=cartdelivery>配送费¥8</span> </div> <a href=javascript: class=submitbutton>去结算</a> </div> </footer> "},function(t,e){t.exports=" <div class=shopbody> <div class=menuview> <div class=menuview-main> <div class=main-content> <menu-nav></menu-nav> <menu-list @change-cart=handleChangeCartNums> </menu-list> </div> </div> </div> <cart-footer :cart-shaking=cartShaking @change-cart=handleChangeCartNums> </cart-footer> </div> "},function(t,e,o){var i,a;i=o(138),a=o(141),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),o(139),e["default"]={data:function(){return{showShopRated:!1}},route:{},created:function(){},vuex:{actions:{}}}},function(t,e,o){var i=o(140);"string"==typeof i&&(i=[[t.id,i,""]]);o(11)(i,{});i.locals&&(t.exports=i.locals)},function(t,e,o){e=t.exports=o(6)(),e.push([t.id,".shop-info{padding-top:1rem;background-color:#eee;font-size:1.4rem;position:relative;z-index:11;height:calc(100% - 48px);min-height:calc(100% - 48px);width:100%;overflow:auto;top:0}.shop-info .activity-wrap{line-height:1.426667rem;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:1.3rem}.shop-info .activity-icon{margin-right:.5rem;font-size:1.2rem;font-style:normal;line-height:1;height:1.5rem;padding:.1rem;display:inline-block;box-sizing:border-box;text-align:center;border:1px solid;border-radius:2px}.shop-info .activity-wrap.wrap .activity-icon{margin-top:0}.shop-info>section{margin-bottom:1rem;padding:0 1.5rem 1rem;font-size:1.4rem;background-color:#fff;color:#666}.shop-info>section>h3,.shop-info>section>header{margin:0 -1rem;padding:.5rem 1rem;border-bottom:1px solid #eee;color:#333;font-weight:400;font-size:1.6rem;line-height:3.6rem}.overall{color:#ff6000;font-size:1.8rem;font-weight:700}.compare{font-size:1.6rem;color:#333}.rating-count{float:right;font-size:1.4rem;color:#999}.tag-list{margin:0;padding:0;list-style:none}.tag-list li{display:inline-block;padding:1rem;margin:.3rem .4rem;border-radius:4px;color:#6d7885;background-color:#ebf5ff}.shopinfo-rating section{padding:1.5rem 0}.shopinfo-rating section:not(:last-child){border-bottom:1px solid #eee}.rate{position:relative;padding-left:5rem}.rate-time{position:absolute;top:.4rem;right:0;font-size:1.2rem;color:#999}.rate-avatar{position:absolute;top:0;left:0;width:4rem;height:4rem;border-radius:50%}.rate-content,.rate-username{font-size:1.4rem}.rate-username{margin-top:0;margin-bottom:1rem;color:#666}.rate-text{color:#333;font-size:1.6rem;margin:.5rem 0}.show-all-ratings{font-size:1.6rem;color:#999;text-align:center}.activity:not(:last-child){margin:1rem 0}.activity-description{-webkit-box-flex:1;-ms-flex:1;flex:1;display:block;width:0;line-height:1.5rem}.shop-info-tip li{padding:1rem 0;margin-right:-1.4rem;font-size:1.5rem}.shop-info-tip li .weui_cell_ft{float:right;margin-right:1rem}.shop-info-tip li a{width:100%;display:block}.shop-info-tip li:not(:first-child){border-top:1px solid #ddd}",""]);
},function(t,e){t.exports=' <div class=shop-info> <section class=shopinfo-rating> <header> <a href=# v-link="{path:\'/shoprated\'}"> <span class=overall>4.8分</span> <span class=compare>高于周边商家67.6%</span> <span class="rating-count weui_cell_ft"> 601条评价 </span> </a> </header> <section> <ul class=tag-list> <li> 送货快(46) </li> <li> 味道好(37) </li> <li> 服务不错(24) </li> <li> 分量足(21) </li> <li> 干净卫生(17) </li> <li> 食材新鲜(12) </li> <li> 物美价廉(11) </li> </ul> </section> <section> <div class=rate> <small class=rate-time>2016-10-09 12:06</small> <img class=rate-avatar src=https://fuss10.elemecdn.com/0/0d/ddd77424658a712f6ac59491e9f8ejpeg.jpeg?imageMogr/quality/80/format/webp/ > <div class=rate-content> <h3 class=rate-username>4*******6</h3> <div> </div> <span class=rate-rating></span> <div class=rate-text> 明明是鸡条套餐，给了我薯片，也不电话说明一下。。。懒得换了。。。但是印象不好了 </div> <div> </div> </div> </div> </section> <section class="show-all-ratings weui_cell_ft"> 查看全部评价 </section> </section> <section> <h3>活动与属性</h3> <div> <div class="activity-wrap activity wrap"> <i class=activity-icon style="color: rgb(255, 255, 255); border-color: rgb(240, 115, 115); background-color: rgb(240, 115, 115)"> 减 </i> <span class=activity-description> 在线支付满35减4，满68减10 </span> </div> <div class="activity-wrap activity wrap"> <i class=activity-icon style="color: rgb(255, 255, 255); border-color: rgb(241, 136, 79); background-color: rgb(241, 136, 79)"> 红 </i> <span class=activity-description> 汉堡王红火十足双人餐，红到年底！每份订单只享受一份优惠价格 </span> </div> <div class="activity-wrap activity wrap"> <i class=activity-icon style="color: rgb(255, 255, 255); border-color: rgb(75, 154, 24); background-color: rgb(75, 154, 24)"> 保 </i> <span class=activity-description> 已加入“外卖保”计划，食品安全有保障 </span> </div> <div class="activity-wrap activity wrap"> <i class=activity-icon style="color: rgb(255, 255, 255); border-color: rgb(87, 169, 255); background-color: rgb(87, 169, 255)"> 准 </i> <span class=activity-description> 准时必达，超时秒赔 </span> </div> </div> </section> <section> <h3>商家信息</h3> <ul class=shop-info-tip> <li>汉堡王（兆丰店）</li> <li>地址：江苏省昆山市花桥镇花安路99号一楼118、119、145、146号商铺</li> <li>营业时间：11:00-20:30</li> <li><a href=# v-link="{path:\'/licences/营业执照/imgsrc\'}"> 营业执照 <span class=weui_cell_ft>&nbsp;</span></a></li> <li><a href=# v-link="{path:\'/licences/餐饮服务许可证/imgsrc\'}"> 餐饮服务许可证 <span class=weui_cell_ft>&nbsp;</span></a></li> </ul> <div> </div> </section> </div> '},function(t,e,o){var i,a;i=o(143),a=o(147),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=a)},function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),o(144);var a=o(146),r=i(a);e["default"]={data:function(){return{nofood:{host:"http://static.twolun.com/m-static/main/dist"}.host+r["default"]}}}},function(t,e,o){var i=o(145);"string"==typeof i&&(i=[[t.id,i,""]]);o(11)(i,{});i.locals&&(t.exports=i.locals)},function(t,e,o){e=t.exports=o(6)(),e.push([t.id,".menuview-nodata{padding:2rem 0;text-align:center;font-size:1.6rem;color:#333;background-color:#eee;position:relative;z-index:99}.menuview-nodata img{width:40%}.menuview-nodata p{padding:0;margin:0;line-height:3rem}",""])},function(t,e,o){t.exports=o.p+"/buildImg/no-food.png"},function(t,e){t.exports=" <div class=menuview-nodata> <img :src=nofood> <p>没有商品</p> <p>该商家还未上传商品</p> </div> "},,,,,,function(t,e){t.exports=' <div class="page shop-page" v-touch:pandown=handlePagePandown($event) v-touch:panend=handlePagePanend v-el:page> <shop-header :opacity=opacity :li-opacity=liOpacity :shopheader-h=shopheaderH @open-shop-activity=handlOpenShopActivity> </shop-header> <shop-tip @foods-ex-info=handleFoodsExInfo></shop-tip> <component :is=currentView keep-alive> ></component> <shop-activity v-show=showShopActivity transition=fade @close-shop-activity=handlOpenShopActivity></shop-activity> </div> '}]));