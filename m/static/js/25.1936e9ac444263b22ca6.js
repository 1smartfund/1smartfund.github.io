webpackJsonp([25],{TFc9:function(t,e){},gejy:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,r=s("bOdI"),n=s.n(r),i=s("Xxa5"),c=s.n(i),u=s("exGp"),o=s.n(u),l=s("yoxC"),p=s("HPD8"),h=s("ldx2"),d=s.n(h),m=s("M4fF"),f=s.n(m),_=s("Du/2"),g=(a={name:"Reward",data:function(){return{address:this.$route.params.address,list:[],page:1,per_page:99999}},created:function(){this.getDate()},computed:{},filters:{date:function(t){return d.a.format(t,"YYYY/MM/DD HH:mm:ss")},fee_format:function(t){return f.a.floor(p.a.getInstance().formatWei(t),8)},short_address:function(t){return t.slice(0,8)+"..."+t.slice(t.length-8,t.length)}}},n()(a,"computed",{}),n()(a,"methods",{pageChange:function(t){this.page=t,VueScrollTo.scrollTo("body",300)},getTxUrl:function(t){return"https://etherscan.io/tx/"+t},getDate:function(){var t=o()(c.a.mark(function t(){var e,s=this;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=!1,t.prev=1,this.$store.commit(_.z,!0),setTimeout(function(){e||(e=!0,s.$toast(s.$t("TOAST.CONENCT_ERROR")),setTimeout(function(){s.$store.commit(_.z,!1)},3e3))},12e4),t.next=6,l.a.getInstance().getRecommendReWard(this.address);case 6:this.list=t.sent,e=!0,this.$store.commit(_.z,!1),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0),e||(e=!0,this.$toast(this.$t("TOAST.CONENCT_ERROR")),setTimeout(function(){s.$store.commit(_.z,!1)},3e3));case 15:case"end":return t.stop()}},t,this,[[1,11]])}));return function(){return t.apply(this,arguments)}}()}),a),v=s("XyMi");var b=function(t){s("TFc9")},x=Object(v.a)(g,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"reward"}},[a("div",{staticClass:"title"},[a("h3",[t._v(t._s(t.$t("REWARD.TITLE0")))])]),a("div",{staticClass:"subtitle"},[a("span",[t._v(t._s(t.$t("REWARD.TIME")))]),a("span",[t._v(t._s(t.$t("REWARD.NUMBER")))])]),a("div",{staticClass:"items"},t._l(t.list.slice((t.page-1)*t.per_page,t.page*t.per_page),function(e,r){return a("div",{key:r,staticClass:"item"},[a("p",[a("span",{staticClass:"left"},[t._v(t._s(t._f("date")(e.timestamp)))]),a("span",{staticClass:"right"},[t._v(t._s(t._f("fee_format")(e.reward)))])]),a("p",["candy"==e.cause?a("span",{staticClass:"left row2"},[t._v(t._s(t.$t("REWARD.CAUSE_CANDY_RECOMMEND",{amount:e.era})))]):a("span",{staticClass:"left row2",attrs:{title:e.rel_address}},[t._v(t._s(t._f("short_address")(e.rel_address)))]),"$FP"==e.cause&&"2"==e.era?a("span",{staticClass:"right row2"},[t._v(t._s(t.$t("REWARD.CAUSE_"+e.cause.toUpperCase()+e.era+"_"+(e.reward==t.address).toString().toUpperCase())))]):"candy"==e.cause?a("span",{staticClass:"right row2"},[t._v(t._s(t.$t("REWARD.CAUSE_CANDY")))]):a("span",{staticClass:"right row2"},[t._v(t._s(t.$t("REWARD.CAUSE_"+e.cause.toUpperCase()+e.era)))])]),a("a",{staticClass:"details",attrs:{href:t.getTxUrl(e.hash),target:"_blank"}},[a("img",{attrs:{src:s("PS0s")}})])])}),0),a("div",{directives:[{name:"show",rawName:"v-show",value:t.list.length<=0,expression:"list.length <= 0"}],staticClass:"null"},["zh-CN"==t.$i18n.locale?a("img",{staticClass:"null-img",attrs:{src:s("QYA3")}}):a("img",{staticClass:"null-img",attrs:{src:s("huvA")}})])])},[],!1,b,"data-v-05fc529c",null);e.default=x.exports},yoxC:function(t,e,s){"use strict";var a=s("Xxa5"),r=s.n(a),n=s("exGp"),i=s.n(n),c=s("Zrlr"),u=s.n(c),o=s("wxAW"),l=s.n(o),p=s("M4fF"),h=s.n(p),d=s("HPD8"),m=(s("IcnI"),s("iGna")),f=s("k7rT"),_=(s("Du/2"),function(){function t(){u()(this,t),this.instance=null,this.web3=d.a.getInstance().web3}return l()(t,[{key:"getRecommendReWard",value:function(){var t=i()(r.a.mark(function t(e){var s,a,n,i,c,u,o,l,p,_,g,v,b,x;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=e.replace("0x","0x000000000000000000000000"),t.next=3,m.a.eventList(d.a.getInstance().getContractAddress(f.c),0,f.v,e);case 3:s=t.sent,a=s.data.result,n=[],i=f.b[f.g],delete(c=h.a.find(i.abi,{type:"event",name:"RecommendReward"})).inputs[0],delete c.inputs[1],u=0;case 11:if(!(u<a.length)){t.next=26;break}if(o=this.web3.eth.abi.decodeLog(c.inputs,a[u].data),l=d.a.getInstance().trim(this.web3.utils.hexToAscii(o._cause)),p=this.web3.utils.hexToNumberString(o._era),0!=(_=this.web3.utils.hexToNumberString(o._reward))){t.next=18;break}return t.abrupt("continue",23);case 18:g=this.web3.utils.hexToNumberString(o._total),v=1e3*this.web3.utils.hexToNumber(a[u].timeStamp),b=a[u].transactionHash,x=a[u].topics[2].replace("0x000000000000000000000000","0x"),n.push({cause:l,era:p,reward:_,total:g,hash:b,timestamp:v,rel_address:x});case 23:u++,t.next=11;break;case 26:return t.abrupt("return",n.reverse());case 27:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"getRecommendPerformance",value:function(){var t=i()(r.a.mark(function t(e){var s,a,n,i,c,u,o,l,p,_,g,v,b;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=e.replace("0x","0x000000000000000000000000"),t.next=3,m.a.eventList(d.a.getInstance().getContractAddress(f.c),0,f.u,e);case 3:s=t.sent,a=s.data.result,n=[],i=f.b[f.g],delete(c=h.a.find(i.abi,{type:"event",name:"RecommendPerformance"})).inputs[0],delete c.inputs[1],u=0;case 11:if(!(u<a.length)){t.next=25;break}if(o=this.web3.eth.abi.decodeLog(c.inputs,a[u].data),l=d.a.getInstance().trim(this.web3.utils.hexToAscii(o._cause)),0!=(p=this.web3.utils.hexToNumberString(o._performance))){t.next=17;break}return t.abrupt("continue",22);case 17:_=this.web3.utils.hexToNumberString(o._total),g=1e3*this.web3.utils.hexToNumber(a[u].timeStamp),v=a[u].transactionHash,b=a[u].topics[2].replace("0x000000000000000000000000","0x"),n.push({cause:l,performance:p,total:_,timestamp:g,hash:v,rel_address:b});case 22:u++,t.next=11;break;case 25:return t.abrupt("return",n.reverse());case 26:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}],[{key:"getInstance",value:function(){return this.instance||(this.instance=new t),this.instance}}]),t}());e.a=_}});