(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-265cf0e2"],{"0204":function(t,e,a){"use strict";a("ca91")},"0937":function(t,e,a){},"146d":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"recent-articles"},[a("base-subheader",[t._v("Recent Articles")]),t.lastArticles.length?a("base-cards-slider",{staticClass:"card",attrs:{cards:t.lastArticles,expanded:""}}):a("div",{staticClass:"no-articles"},[t._v("Sorry, the author don`t have articles")])],1)},i=[],n=a("5530"),o=(a("a9e3"),a("2f62")),c={props:{authorId:{type:Number,default:null}},computed:Object(n["a"])(Object(n["a"])({},Object(o["c"])("posts",["getArticlesByDate","getAuthorArticlesByDate"])),{},{lastArticles:function(){return null!==this.authorId?this.getAuthorArticlesByDate(this.authorId):this.getArticlesByDate}})},r=c,l=(a("4c15"),a("2877")),u=Object(l["a"])(r,s,i,!1,null,"e9025b50",null);e["a"]=u.exports},"20c6":function(t,e,a){},2301:function(t,e,a){"use strict";a("dc32")},"3fe5":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"advertisement"}},[a("h1",{staticClass:"header"},[t._v("looking for a partner in building a solution?")]),a("p",{staticClass:"text"},[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, iste. ")]),a("base-button",{attrs:{backgroundColor:"white",border:"2px solid #06B25F",color:"#06B25F"}},[t._v(" let`s talk ")])],1)},i=[],n=(a("73c6"),a("2877")),o={},c=Object(n["a"])(o,s,i,!1,null,"21e1ed3e",null);e["a"]=c.exports},"4c15":function(t,e,a){"use strict";a("ad15")},"5b46":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"footer"}},[s("div",{staticClass:"footer-information-group"},[s("div",{staticClass:"footer-logos"},[s("img",{staticClass:"logo",attrs:{src:a("01aa")}}),s("div",{staticClass:"social-icons"},t._l(t.iconsWithIds,(function(t){return s("font-awesome-icon",{key:t.id,staticClass:"icon",attrs:{icon:t.icon}})})),1)]),s("footer-section-navigation-default-list",{staticClass:"background-color plr-5",attrs:{tabs:t.servicesTabs,headerText:"Services"}}),s("footer-section-navigation-default-list",{staticClass:"background-color plr-5",attrs:{tabs:t.technologiesTabs,headerText:"Technologies"}}),s("div",{staticClass:"products-list background-color plr-5 plrm-30"},t._l(t.productTabs,(function(e){return s("footer-section-navigation-default-list-header",{key:e.name,staticClass:"active-header pb-16",nativeOn:{click:function(a){return t.changePage(e)}}},[t._v(" "+t._s(e.text)+" ")])})),1),s("footer-section-navigation-default-list",{staticClass:"background-color plr-5",attrs:{tabs:t.aboutUsTabs,headerText:"About us"}})],1),s("div",{staticClass:"footer-copyright-group"},[s("div",{staticClass:"footer-copyright"},[t._v(" © "+t._s(t.year)+" Stan`s Assets. All right reserved ")]),t._m(0)])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-policies"},[a("div",{staticClass:"privacy footer-policies-item"},[t._v("Privacy policy")]),a("div",{staticClass:"cookies footer-policies-item"},[t._v("Cookies policy")])])}],n=a("5530"),o=(a("d81d"),a("7db0"),a("b0c0"),a("4de4"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navigation-list plrm-30"},[a("footer-section-navigation-default-list-header",[t._v(t._s(t.headerText))]),a("ul",{staticClass:"tabs"},t._l(t.tabs,(function(e){return a("li",{key:e.name,staticClass:"tab",on:{click:function(a){return t.changePage(e)}}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)}),c=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h6",{staticClass:"header"},[t._t("default")],2)},l=[],u=(a("2301"),a("2877")),d={},f=Object(u["a"])(d,r,l,!1,null,"10f98daf",null),b=f.exports,h={components:{FooterSectionNavigationDefaultListHeader:b},props:{tabs:{type:Array,required:!0},headerText:{type:String,default:"Lorem"}},methods:{changePage:function(t){this.$router.push({name:t.parentName,params:{id:t.name}})}}},p=h,g=(a("0204"),Object(u["a"])(p,o,c,!1,null,"1bedce53",null)),v=g.exports,m=a("ec26"),C=a("2f62"),_={components:{FooterSectionNavigationDefaultList:v,FooterSectionNavigationDefaultListHeader:b},data:function(){return{icons:[["fab","facebook"],["fab","linkedin"],["fab","whatsapp"],["fab","skype"],["fab","github"]]}},computed:Object(n["a"])(Object(n["a"])({year:function(){return(new Date).getFullYear()},iconsWithIds:function(){return this.icons.map((function(t){return{id:Object(m["a"])(),icon:t}}))}},Object(C["d"])("pages",["all"])),{},{servicesTabs:function(){return this.all.find((function(t){return"Services"==t.name})).nestedTabs},technologiesTabs:function(){return this.all.find((function(t){return"Technologies"==t.name})).nestedTabs},productTabs:function(){return this.all.filter((function(t){return!t.nestedTabs}))},aboutUsTabs:function(){return this.all.find((function(t){return"About"==t.name})).nestedTabs}}),methods:{changePage:function(t){this.$router.push({name:t.name})}}},k=_,y=(a("c0a1"),Object(u["a"])(k,s,i,!1,null,"28307fd2",null));e["a"]=y.exports},"73c6":function(t,e,a){"use strict";a("bff1")},ad15:function(t,e,a){},bcb4:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("p",{staticClass:"name"},[t._v(t._s(t.authorFullName))]),a("div",{staticClass:"social-icons"},[a("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fab","facebook"]}}),a("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fab","linkedin"]}})],1)])},i=[],n={props:{authorFullName:{type:String,default:"Full Name"}}},o=n,c=(a("be3a"),a("2877")),r=Object(c["a"])(o,s,i,!1,null,"49df03e8",null);e["a"]=r.exports},be3a:function(t,e,a){"use strict";a("0937")},bff1:function(t,e,a){},c0a1:function(t,e,a){"use strict";a("dff1")},ca91:function(t,e,a){},d44c:function(t,e,a){"use strict";a("20c6")},dc32:function(t,e,a){},dff1:function(t,e,a){},f39b:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"menu menu-mobile",class:{light:t.light}},[s("div",{staticClass:"desktop"},[s("div",{staticClass:"logo",on:{click:t.toHomePage}},[s("img",{attrs:{src:a("1771")("./"+t.logo)}})]),s("base-navigation",{attrs:{light:t.light,tabs:t.all}}),s("base-button",{attrs:{color:t.light?"#06B25F":null,border:t.light?"2px solid #06B25F":null}},[t._v("Contact us")])],1),s("div",{staticClass:"mobile"},[s("div",{staticClass:"logo",on:{click:t.toHomePage}},[s("img",{attrs:{src:a("1771")("./"+t.logo)}})]),s("font-awesome-icon",{staticClass:"icon",class:{lightTheme:t.light},attrs:{icon:["fas","bars"]},on:{click:t.changeMobileBarStatus}})],1),s("div",{staticClass:"mobile-bar",class:{displayBlock:t.isMobileBarOpen}},[s("p",{staticClass:"close",on:{click:t.changeMobileBarStatus}},[t._v("close")]),s("base-navigation",{attrs:{tabs:t.all},on:{pageChanged:t.changeMobileBarStatus}}),s("base-button",{staticClass:"mobile-button",attrs:{color:"#06B25F",border:"2px solid #06B25F"}},[t._v(" Contact us ")])],1)])},i=[],n=a("5530"),o=a("2f62"),c=a("e06a"),r={props:{light:{type:Boolean,default:!1}},data:function(){return{isMobileBarOpen:!1}},computed:Object(n["a"])(Object(n["a"])({},Object(o["d"])("pages",["all"])),{},{logo:function(){return this.light?"logo_black.png":"logo.png"}}),methods:{changeMobileBarStatus:function(){this.isMobileBarOpen=!this.isMobileBarOpen},toHomePage:function(){this.$router.push({name:c["a"].index})}}},l=r,u=(a("d44c"),a("2877")),d=Object(u["a"])(l,s,i,!1,null,"0e192d7b",null);e["a"]=d.exports}}]);
//# sourceMappingURL=chunk-265cf0e2.5d3318a1.js.map