(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{CO6Q:function(e,t,a){"use strict";var n=a("TqRt"),r=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,d,i=n(a("lwsE")),o=n(a("W8MJ")),c=n(a("a1gu")),u=n(a("Nsbk")),s=n(a("7W2i")),f=r(a("q1tI")),m=a("MuoO"),p=n(a("Z7C9")),y=(l=(0,m.connect)(function(e){var t=e.tick,a=e.basicTradeForm,n=e.trade;return{tick:t,basicTradeForm:a,trade:n}}),l(d=function(e){function t(e){var a;return(0,i.default)(this,t),a=(0,c.default)(this,(0,u.default)(t).call(this,e)),a.onWindowResize=function(){a.setState({tableHeight:(window.innerHeight-320>520?window.innerHeight-320:520)||520})},a.componentDidMount=function(){var e=a.props.dispatch;e({type:"trade/fetchTrades",payload:{}}),window.addEventListener("resize",a.onWindowResize)},a.componentWillUnmount=function(){window.removeEventListener("resize",a.onWindowResize)},a.updateTradeForm=function(e){var t=e.symbol,n=a.props,r=n.tick,l=n.basicTradeForm,d=n.dispatch;d({type:"basicTradeForm/update",payload:{fuzzySymbol:t}}),null!=l.form&&void 0!==l.form&&l.form.setFieldsValue({fuzzySymbol:t}),d({type:"basicTradeForm/updateTick",payload:r.ticks})},a.state={tableHeight:(window.innerHeight-320>520?window.innerHeight-320:520)||520},a}return(0,s.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props.trade,t=this.state.tableHeight;return f.default.createElement(p.default,{updateTradeForm:this.updateTradeForm,scroll:{y:t},pagination:{pageSize:50},list:e.trades})}}]),t}(f.PureComponent))||d),v=y;t.default=v},Z7C9:function(e,t,a){"use strict";var n=a("284h"),r=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("g9YV");var l=r(a("wCAj")),d=r(a("MVZn")),i=r(a("lwsE")),o=r(a("W8MJ")),c=r(a("a1gu")),u=r(a("Nsbk")),s=r(a("7W2i")),f=n(a("q1tI")),m=r(a("xNx2")),p=a("P9HM"),y=a("uI15"),v={display:"inline-block",float:"left",color:"#AAA"},E=function(e){function t(){var e,a;(0,i.default)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return a=(0,c.default)(this,(e=(0,u.default)(t)).call.apply(e,[this].concat(r))),a.handleClick=function(e){var t=a.props.updateTradeForm;null!==t&&void 0!==t&&t({symbol:e.symbol})},a}return(0,s.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e,t,a,n=this,r=this.props,i=r.list,o=r.pagination,c=r.scroll,u=r.bordered;e=void 0!==o&&o,t=void 0===u||u,a=void 0===i?[]:i.sort(y.sortTradeByTimeAndID);var s={y:250,x:940};void 0!==c&&(s=(0,d.default)({},s,c));var E=new Set,h=new Set,w=new Set;a.forEach(function(e){E.add(e.rtSymbol),h.add("".concat(e.gatewayDisplayName,"(").concat(e.gatewayID,")")),w.add("\u59d4\u6258\u7f16\u53f7[".concat(e.orderID,"]"))});var T=[];Array.from(E).forEach(function(e){T.push({text:e,value:e})});var g=[];Array.from(h).forEach(function(e){g.push({text:e,value:e})});var b=[];Array.from(w).forEach(function(e){b.push({text:e,value:e})});var I=[{title:"\u4ea7\u54c1",dataIndex:"rtSymbol",width:150,key:"rtSymbol",sorter:function(e,t){return e.rtSymbol>t.rtSymbol},filters:T,onFilter:function(e,t){return t.rtSymbol===e},render:function(e,t){return f.default.createElement("div",{className:"".concat(m.default.cell," ").concat(m.default.cursorPointer)},f.default.createElement("div",{className:"".concat(m.default.colorYellow)},t.rtSymbol,f.default.createElement("br",null)),f.default.createElement("div",null,t.contractName))}},{title:"\u8d26\u6237",dataIndex:"gatewayDisplayName",width:180,align:"center",filters:g,onFilter:function(e,t){return"".concat(t.gatewayDisplayName,"(").concat(t.gatewayID,")")===e},render:function(e,t){return f.default.createElement("div",{className:" ".concat(m.default.displayRight)},f.default.createElement("div",null,t.accountID,f.default.createElement("br",null)),f.default.createElement("div",{style:{color:"#BBB"}},t.gatewayDisplayName))}},{title:"\u65b9\u5411",dataIndex:"direction",width:120,align:"center",render:function(e,t){return f.default.createElement("div",{className:"".concat(m.default.displayRight)},t.direction===p.DIRECTION_LONG&&f.default.createElement("div",{className:"".concat(m.default.colorBuy)},f.default.createElement("span",{style:v},"\u65b9\u5411\uff1a"),p.DIRECTION_TRANSLATER.get(t.direction),f.default.createElement("br",null)),t.direction===p.DIRECTION_SHORT&&f.default.createElement("div",{className:"".concat(m.default.colorSell)},f.default.createElement("span",{style:v},"\u65b9\u5411\uff1a"),p.DIRECTION_TRANSLATER.get(t.direction),f.default.createElement("br",null)),t.direction!==p.DIRECTION_LONG&&t.direction!==p.DIRECTION_SHORT&&f.default.createElement("div",null,f.default.createElement("span",{style:v},"\u65b9\u5411\uff1a"),p.DIRECTION_TRANSLATER.get(t.direction),f.default.createElement("br",null)),f.default.createElement("div",null,f.default.createElement("span",{style:v},"\u5f00\u5e73\uff1a"),p.OFFSET_TRANSLATER.get(t.offset)))}},{title:"\u4ef7\u683c",dataIndex:"price",width:120,align:"center",render:function(e,t){return f.default.createElement("div",{className:"".concat(m.default.displayRight)},(0,y.numberFormat)(t.price,4))}},{title:"\u6570\u91cf",dataIndex:"volume",align:"center",width:80,render:function(e,t){return f.default.createElement("div",{className:"".concat(m.default.displayRight," ").concat(m.default.colorCount)},t.volume)}},{title:"\u6210\u4ea4\u65f6\u95f4",dataIndex:"tradeTime",width:120,align:"center",key:"tradeTime",sorter:function(e,t){return e.tradeTime>t.tradeTime},render:function(e,t){return f.default.createElement("div",{className:"".concat(m.default.displayRight)},t.tradeTime)}},{title:"\u7f16\u53f7",dataIndex:"tradeID",align:"center",width:150,filters:b,onFilter:function(e,t){return"\u59d4\u6258\u7f16\u53f7[".concat(t.orderID,"]")===e},render:function(e,t){return f.default.createElement("div",{className:"".concat(m.default.displayRight)},f.default.createElement("div",null,f.default.createElement("span",{style:v},"\u6210\u4ea4\uff1a"),t.tradeID,f.default.createElement("br",null)),f.default.createElement("div",null,f.default.createElement("span",{style:v},"\u59d4\u6258\uff1a"),t.orderID))}}];return f.default.createElement(l.default,{onRow:function(e){return{onClick:function(){return n.handleClick(e)}}},rowKey:"rtTradeID",size:"small",columns:I,dataSource:a,pagination:e,scroll:s,bordered:t})}}]),t}(f.PureComponent),h=E;t.default=h}}]);