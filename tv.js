"use strict";!function(){if(!window.TradingView||!window.TradingView.host||window.TradingView.reoloadTvjs){var e,t,o,i,n,r,s,a={"color-brand":"#2962FF","color-gull-gray":"#9db2bd","color-scooter":"#38acdb","color-curious-blue":"#299dcd"},d={host:null==window.location.host.match(/tradingview\.com|pyrrosinvestment\.com/i)?"https://s.tradingview.com":"https://www.tradingview.com",ideasHost:"https://www.tradingview.com",chatHost:"https://www.tradingview.com",widgetHost:"https://www.tradingview-widget.com",getHost:function(e){return e.useWidgetHost?d.widgetHost:d.host},embedStylesForCopyright:function(){var e=document.createElement("style");return e.innerHTML=".tradingview-widget-copyright {font-size: 13px !important; line-height: 32px !important; text-align: center !important; vertical-align: middle !important; font-family: 'Trebuchet MS', Arial, sans-serif !important; color: "+a["color-gull-gray"]+" !important;} .tradingview-widget-copyright .blue-text {color: "+a["color-brand"]+" !important;} .tradingview-widget-copyright a {text-decoration: none !important; color: "+a["color-gull-gray"]+" !important;} .tradingview-widget-copyright a:visited {color: "+a["color-gull-gray"]+" !important;} .tradingview-widget-copyright a:hover .blue-text {color: "+a["color-scooter"]+" !important;} .tradingview-widget-copyright a:active .blue-text {color: "+a["color-curious-blue"]+" !important;} .tradingview-widget-copyright a:visited .blue-text {color: "+a["color-brand"]+" !important;}",e},embedStylesForFullHeight:function(e,t,o){var i=t?"calc("+e+" - 32px)":e,n=document.querySelector("#"+o);n.parentElement.style.height=i,n.style.height="100%"},gId:function(){return"tradingview_"+(1048576*(1+Math.random())|0).toString(16).substring(1)},isPersentHeight:function(e){return"%"===e},getSuffix:function(e){var t=e.toString().match(/(%|px|em|ex)/);return t?t[0]:"px"},hasCopyright:function(e){var t=document.getElementById(e),o=t&&t.parentElement;return!!o&&!!o.querySelector(".tradingview-widget-copyright")},calculateWidgetHeight:function(e,t){var o=parseInt(e),i=this.getSuffix(e),n=this.isPersentHeight(i),r=t&&this.hasCopyright(t);return n&&t&&(this.embedStylesForFullHeight(o+i,r,t),r)?100+i:r?"calc("+o+i+" - 32px)":o+i},onready:function(e){window.addEventListener?window.addEventListener("DOMContentLoaded",e,!1):window.attachEvent("onload",e)},css:function(e){var t,o=document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",i.styleSheet?i.styleSheet.cssText=e:(t=document.createTextNode(e),i.appendChild(t)),o.appendChild(i)},bindEvent:function(e,t,o){e.addEventListener?e.addEventListener(t,o,!1):e.attachEvent&&e.attachEvent("on"+t,o)},unbindEvent:function(e,t,o){e.removeEventListener?e.removeEventListener(t,o,!1):e.detachEvent&&e.detachEvent("on"+t,o)},cloneSimpleObject:function(e){if(null==e||"object"!=typeof e)return e;var t=e.constructor();for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);return t},isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},isMobileDevice:(e={Android:/Android/i.test(navigator.userAgent),BlackBerry:/BlackBerry/i.test(navigator.userAgent),iOS:/iPhone|iPad|iPod/i.test(navigator.userAgent),Opera:/Opera Mini/i.test(navigator.userAgent)},e.any=e.Android||e.BlackBerry||e.iOS||e.Opera,e),generateUtmForUrlParams:function(e){return"utm_source="+encodeURI(window.location.hostname)+"&utm_medium="+(d.hasCopyright(e.container)?"widget_new":"widget")+(e.type?"&utm_campaign="+e.type:"")+(e.type&&"chart"===e.type?"&utm_term="+encodeURIComponent(e.symbol):"")},WidgetAbstract:function(){},MiniWidget:function(e){this.id=d.gId(),this.options={whitelabel:e.whitelabel||"",width:d.WidgetAbstract.prototype.fixSize(e.width)||300,height:d.WidgetAbstract.prototype.fixSize(e.height)||400,symbols:e.symbols,tabs:e.tabs||"",symbols_description:e.symbols_description||"",customer:e.customer||"",container:e.container_id||"",greyText:e.greyText||"",large_chart_url:e.large_chart_url||"",large_chart_target:e.large_chart_target||"",gridLineColor:e.gridLineColor||"",fontColor:e.fontColor||"",underLineColor:e.underLineColor||"",underLineBottomColor:e.underLineBottomColor||"",trendLineColor:e.trendLineColor||"",timeAxisBackgroundColor:e.timeAxisBackgroundColor||"",activeTickerBackgroundColor:e.activeTickerBackgroundColor||"",noGraph:e.noGraph||!1,locale:e.locale,styleTickerActiveBg:e.styleTickerActiveBg||"",styleTabActiveBorderColor:e.styleTabActiveBorderColor||"",styleTickerBodyFontSize:e.styleTickerBodyFontSize||"",styleTickerBodyFontWeight:e.styleTickerBodyFontWeight||"",styleTickerHeadFontSize:e.styleTickerHeadFontSize||"",styleTickerHeadFontWeight:e.styleTickerHeadFontWeight||"",styleTickerChangeDownColor:e.styleTickerChangeDownColor||"",styleTickerChangeUpColor:e.styleTickerChangeUpColor||"",styleTickerLastDownBg:e.styleTickerLastDownBg||"",styleTickerLastUpBg:e.styleTickerLastUpBg||"",styleTickerSymbolColor:e.styleTickerSymbolColor||"",styleTickerSymbolHoverTextDecoration:e.styleTickerSymbolHoverTextDecoration||"",styleTickerActiveSymbolTextDecoration:e.styleTickerActiveSymbolTextDecoration||"",styleTabsActiveBorderColor:e.styleTabsActiveBorderColor||"",styleTabsNoBorder:e.styleTabsNoBorder||"",styleWidgetNoBorder:e.styleWidgetNoBorder||"",useWidgetHost:Boolean(e.useWidgetHost)},this.createWidget()},MediumWidget:function(e){this.id=d.gId();var t=d.calculateWidgetHeight(e.height||400,e.container_id);this.options={container:e.container_id||"",width:d.WidgetAbstract.prototype.fixSize(e.width)||"",height:d.WidgetAbstract.prototype.fixSize(t)||"",symbols:e.symbols,greyText:e.greyText||"",symbols_description:e.symbols_description||"",large_chart_url:e.large_chart_url||"",customer:e.customer||"",gridLineColor:e.gridLineColor||"",fontColor:e.fontColor||"",underLineColor:e.underLineColor||"",underLineBottomColor:e.underLineBottomColor||"",trendLineColor:e.trendLineColor||"",timeAxisBackgroundColor:e.timeAxisBackgroundColor||"",chartOnly:!!e.chartOnly,locale:e.locale,whitelabel:!!e.whitelabel||"",colorTheme:e.colorTheme,isTransparent:e.isTransparent,useWidgetHost:Boolean(e.useWidgetHost)},this.createWidget()},widget:function(e){this.id=e.id||d.gId();var t=d.getUrlParams(),o=e.tvwidgetsymbol||t.tvwidgetsymbol||t.symbol||e.symbol||"NASDAQ:AAPL",i=e.logo||"";i.src&&(i=i.src),i&&i.replace(".png","");var n=d.calculateWidgetHeight(e.height||500,e.container_id);this.options={whitelabel:e.whitelabel||"",width:e.width||800,height:n,symbol:o,interval:e.interval||"1",range:e.range||"",timezone:e.timezone||"",autosize:e.autosize,hide_top_toolbar:e.hide_top_toolbar,hide_side_toolbar:e.hide_side_toolbar,hide_legend:e.hide_legend,allow_symbol_change:e.allow_symbol_change,save_image:void 0===e.save_image||e.save_image,container:e.container_id||"",toolbar_bg:e.toolbar_bg||"f4f7f9",watchlist:e.watchlist||[],editablewatchlist:!!e.editablewatchlist,studies:e.studies||[],theme:e.theme||"",style:e.style||"",extended_hours:void 0===e.extended_hours?void 0:+e.extended_hours,details:!!e.details,calendar:!!e.calendar,hotlist:!!e.hotlist,hideideas:!!e.hideideas,hideideasbutton:!!e.hideideasbutton,widgetbar_width:+e.widgetbar_width||void 0,withdateranges:e.withdateranges||"",customer:e.customer||i||"",venue:e.venue,symbology:e.symbology,logo:i,show_popup_button:!!e.show_popup_button,popup_height:e.popup_height||"",popup_width:e.popup_width||"",studies_overrides:e.studies_overrides,overrides:e.overrides,enabled_features:e.enabled_features,disabled_features:e.disabled_features,publish_source:e.publish_source||"",enable_publishing:e.enable_publishing,whotrades:e.whotrades||void 0,locale:e.locale,referral_id:e.referral_id,no_referral_id:e.no_referral_id,fundamental:e.fundamental,percentage:e.percentage,hidevolume:e.hidevolume,padding:e.padding,greyText:e.greyText||"",horztouchdrag:e.horztouchdrag,verttouchdrag:e.verttouchdrag,useWidgetHost:Boolean(e.useWidgetHost)},e.cme&&(this.options.customer="cme"),isFinite(e.widgetbar_width)&&e.widgetbar_width>0&&(this.options.widgetbar_width=e.widgetbar_width),this._ready_handlers=[],this.create()},chart:function(e){this.id=d.gId(),this.options={width:e.width||640,height:e.height||500,container:e.container_id||"",realtime:e.realtime,chart:e.chart,locale:e.locale,type:"chart",autosize:e.autosize,mobileStatic:e.mobileStatic},this._ready_handlers=[],this.create()},stream:function(e){this.id=d.gId(),this.options={width:e.width||640,height:e.height||500,container:e.container_id||"",stream:e.stream,locale:e.locale,autosize:e.autosize},this.create()},EventsWidget:function(e){this.id=d.gId(),this.options={container:e.container_id||"",width:e.width||486,height:e.height||670,currency:e.currencyFilter||"",importance:e.importanceFilter||"",type:"economic-calendar"},this.createWidget(e)},IdeasStreamWidget:function(e){this.id=d.gId(),this.options={container:e.container_id||"",width:e.width||486,height:e.height||670,symbol:e.symbol||"",username:e.username||"",mode:e.mode||"",publishSource:e.publishSource||"",sort:e.sort||"trending",stream:e.stream,interval:e.interval,time:e.time,waitSymbol:e.waitSymbol,hideDescription:e.hideDescription,startingCount:e.startingCount,bgColor:e.bgColor||"",headerColor:e.headerColor||"",borderColor:e.borderColor||"",locale:e.locale,type:"ideas-stream",useWidgetHost:Boolean(e.useWidgetHost)},this._ready_handlers=[],this.createWidget(e)},IdeaWidget:function(e){this.id=d.gId(),this.options={container:e.container_id||"",width:e.width||486,height:e.height||670,idea:e.idea||"",chartUrl:e.chartUrl||"",whotrades:e.whotrades||void 0,locale:e.locale,type:"idea"},this.createWidget(e)},ChatWidgetEmbed:function(e){this.id=d.gId(),this.options={container:e.container_id||"",width:e.width||400,height:e.height||500,room:e.room||"",whotrades:e.whotrades||void 0,locale:e.locale,type:"chat-embed"},this.createWidget(e)},UserInfoWidget:function(e){this.options={container:e.container_id||"",width:e.width||1040,height:e.height||340,username:e.username||"",locale:e.locale,type:"user-info"},this.createWidget(e)},QuotesProvider:function(e){var t,o,i=d.gId(),n=(e={container:e.container_id,symbols:e.symbols||[],type:"quotes-provider",useWidgetHost:e.useWidgetHost},d.getHost(e)+"/embed-quotes-provider/?"+d.generateUtmForUrlParams(e));function r(e){var i=e.symbol,n=e.success,r=e.error;i&&n&&r&&(o.post(t.contentWindow,"resolveSymbol",{symbol:i}),n&&o.on("success"+i,(function(e){n(e)})),r&&o.on("error"+i,(function(e){r(e)})))}l('<iframe id="'+i+'" src="'+n+'" width="0" height="0" frameborder="0" allowTransparency="true" scrolling="no"></iframe>',e.container),t=document.getElementById(i),o=d.postMessageWrapper(t.contentWindow,i),d.bindEvent(t,"load",(function(){e.symbols.forEach(r)}))}};d.DependenciesManager=function(){},d.DependenciesManager.prototype.scripts={},d.DependenciesManager.prototype._loaded=function(e){for(var t in this.scripts[e].callbacks)this.scripts[e].callbacks[t]();this.scripts[e].status=!0,this.scripts[e].callbacks={}},d.DependenciesManager.prototype.depends=function(e,t,o){for(var i=0;i<e.length;i++)this.scripts[e[i]]&&!0===this.scripts[e[i]].status?o():this.scripts[e[i]]&&!1===this.scripts[e[i]].status?this.scripts[e[i]].callbacks[t]=o:(this.scripts[e[i]]={status:!1,script:document.createElement("script"),callbacks:{}},this.scripts[e[i]].callbacks[t]=o,this.scripts[e[i]].script.onload=this._loaded.bind(this,e[i]),this.scripts[e[i]].script.src=d.host+e[i],document.body.appendChild(this.scripts[e[i]].script))},d.dependenciesManager=new d.DependenciesManager,d.WidgetAbstract.prototype={fixSize:function(e){return/^[0-9]+(\.|,[0-9])*$/.test(e)?e+"px":e},width:function(){return this.options.autosize?"100%":d.WidgetAbstract.prototype.fixSize(this.options.width)},height:function(){return this.options.autosize?"100%":d.WidgetAbstract.prototype.fixSize(this.options.height)},addWrapperFrame:function(e,t,o){var i=d.WidgetAbstract.prototype.height.call(this),n=d.WidgetAbstract.prototype.width.call(this);o=o||"transparent";return'<div id="'+this.id+'-wrapper" style="position: relative;box-sizing: content-box;width: '+n+";height: "+i+';margin: 0 auto !important;padding: 0 !important;font-family:Arial,sans-serif;"><div style="width: '+n+";height: "+i+";background: "+o+';padding: 0 !important;">'+e+"</div>"+(t||"")+"</div>"},addFooterLogo:function(e,t){var o=(t||{}).greyText||"powered by",i=(t||{}).linkText||"tradingview.com",n=(t||{}).href||"https://www.tradingview.com/";return d.WidgetAbstract.prototype.addWrapperFrame.call(this,e,'<div style="position:absolute;display: block;box-sizing: content-box;height: 24px;width: '+d.WidgetAbstract.prototype.width.call(this)+';bottom: 0;left: 0;margin: 0;padding: 0;font-family: Arial,sans-serif;"><div style="display: block;margin: 0 1px 1px 1px;line-height: 7px;box-sizing: content-box;height: 11px;padding: 6px 10px;text-align: right;background: #fff;"><a href="'+n+"?"+d.generateUtmForUrlParams(this.options)+'" target="_blank" style="color: #0099d4;text-decoration: none;font-size: 11px;"><span style="color: #b4b4b4;font-size: 11px;">'+o+"</span> "+i+"</a></div></div>","#fff")}},d.UserInfoWidget.prototype={createWidget:function(){var e=this.widgetCode();l(e,this.options.container)},widgetCode:function(){var e=d.createUrlParams({username:this.options.username,locale:this.options.locale});this.options.type="user-info";var t="&"+d.generateUtmForUrlParams(this.options,{type:"UserInfoWidget"});return'<iframe src="'+(d.ideasHost+"/user-info-widget/?"+e+t)+'"'+(this.options.width?' width="'+this.options.width+'"':"")+(this.options.height?' height="'+this.options.height+'"':"")+' frameborder="0" allowTransparency="true" scrolling="no"></iframe>'}},d.ChatWidgetEmbed.prototype={createWidget:function(){var e=this.widgetCode();e=d.WidgetAbstract.prototype.addFooterLogo.call(this,e),l(e,this.options.container)},widgetCode:function(){var e=this.options.room?"#"+encodeURIComponent(this.options.room):"",t="&"+d.createUrlParams({whotrades:this.options.whotrades,locale:this.options.locale}),o=d.generateUtmForUrlParams(this.options,{type:"UserInfoWidget"});return'<iframe src="'+(d.chatHost+"/chatwidgetembed/?"+o+t+e)+'"'+(this.options.width?' width="'+this.options.width+'"':"")+(this.options.height?' height="'+this.options.height+'"':"")+' frameborder="0" allowTransparency="true" scrolling="no"></iframe>'}},d.IdeaWidget.prototype={createWidget:function(){var e=this.widgetCode();l(e,this.options.container);var t=this,o=document.getElementById(this.id);this.postMessage=d.postMessageWrapper(o.contentWindow,this.id),this.postMessage.on("resize",(function(e){e.id===t.id&&(o.style.height=e.height+"px")}),!0)},widgetCode:function(){var e=d.createUrlParams({id:this.id,width:this.options.width,height:this.options.height,idea:this.options.idea,chart_url:this.options.chartUrl,whotrades:this.options.whotrades,locale:this.options.locale});this.options.type="idea";var t="&"+d.generateUtmForUrlParams(this.options),o=d.ideasHost+"/idea-popup/?"+e+t;return'<iframe id="'+this.id+'" src="'+o+'" width="'+this.options.width+'"'+(this.options.height?' height="'+this.options.height+'"':"")+' frameborder="0" allowTransparency="true" scrolling="no"></iframe>'},getSymbol:function(e){this.postMessage.on("symbolInfo",e)}},d.EventsWidget.prototype={createWidget:function(){var e=this.widgetCode();l(e,this.options.container)},widgetCode:function(){var e=d.createUrlParams({currency:this.options.currency,importance:this.options.importance});this.options.type="events";var t="&"+d.generateUtmForUrlParams(this.options);return'<iframe src="'+(d.getHost(this.options)+"/eventswidgetembed/?"+e+t)+'" width="'+this.options.width+'"'+(this.options.height?' height="'+this.options.height+'"':"")+' frameborder="0" scrolling="no"></iframe>'}},d.IdeasStreamWidget.prototype={createWidget:function(){var e=this.widgetCode();l(e,this.options.container);var t=this,o=document.getElementById(this.id);this.postMessage=d.postMessageWrapper(o.contentWindow,this.id),d.bindEvent(o,"load",(function(){t._ready=!0;for(var e=t._ready_handlers.length;e--;)t._ready_handlers[e].call(t)})),t.postMessage.on("resize",(function(e){if(e.id===t.id){var i=Math.max(e.height,450);o.style.height=i+"px"}}),!0)},widgetCode:function(){var e=this.options,t=d.createUrlParams({id:this.id,width:e.width,height:e.height,symbol:e.symbol,username:e.username,mode:e.mode,publish_source:e.publishSource,sort:e.sort,stream:e.stream,interval:e.interval,time:e.time,wait_symbol:e.waitSymbol,hide_desc:e.hideDescription,s_count:e.startingCount,bg_color:e.bgColor,h_color:e.headerColor,borderColor:e.borderColor,locale:e.locale,useWidgetHost:Boolean(e.useWidgetHost)}),o=d.generateUtmForUrlParams(this.options)+"&",i=d.getHost(e)+"/ideaswidgetembed/?"+o+t;return'<iframe id="'+this.id+'" src="'+i+'" width="'+e.width+'"'+(e.height?' height="'+e.height+'"':"")+' frameborder="0" allowTransparency="true" scrolling="no"></iframe>'},setSymbol:function(e){var t=document.getElementById(this.id);this.postMessage.post(t.contentWindow,"setSymbol",e)},ready:function(e){this._ready?e.call(this):this._ready_handlers.push(e)}},d.MiniWidget.prototype={createWidget:function(){var e=this.widgetCode(),t=this.options;if(!t.noLogoOverlay&&!t.whitelabel){var o=this.options.greyText||"Quotes by";e=d.WidgetAbstract.prototype.addFooterLogo.call(this,e,{greyText:o,linkText:"TradingView"})}l(e,t.container)},widgetCode:function(){var e="",t="",o="",i="/miniwidgetembed/",n=this.options.width?"&width="+encodeURIComponent(this.options.width):"",r=this.options.height?"&height="+encodeURIComponent(this.options.height):"",s=this.options.noGraph?"&noGraph="+encodeURIComponent(this.options.noGraph):"",a=this.options.locale?"&locale="+encodeURIComponent(this.options.locale):"",l=this.options.whitelabel?"&whitelabel=1":"";this.options.type="market-overview";for(var h="&"+d.generateUtmForUrlParams(this.options),c=["large_chart_url","large_chart_target","gridLineColor","fontColor","underLineColor","underLineBottomColor","trendLineColor","activeTickerBackgroundColor","timeAxisBackgroundColor","locale","styleTickerActiveBg","styleTabActiveBorderColor","styleTickerBodyFontSize","styleTickerBodyFontWeight","styleTickerHeadFontSize","styleTickerHeadFontWeight","styleTickerChangeDownColor","styleTickerChangeUpColor","styleTickerLastDownBg","styleTickerLastUpBg","styleTickerSymbolColor","styleTickerSymbolHoverTextDecoration","styleTickerActiveSymbolTextDecoration","styleTabsActiveBorderColor","styleTabsNoBorder","styleWidgetNoBorder"],p="",g=c.length-1;g>=0;g--){var m=c[g],u=this.options[m];p+=u?"&"+m+"="+encodeURIComponent(u):""}var y=function(e){for(var t=[],i=0;i<e.length;i++){var n=e[i];if(d.isArray(n)){var r=encodeURIComponent(n[0]),s=encodeURIComponent(n[1]);t.push(r),o+="&"+r+"="+s}else"string"==typeof n&&t.push(encodeURIComponent(n))}return t.join(",")};if(this.options.tabs){g=0;for(var w=this.options.tabs.length;g<w;g++){var f=this.options.tabs[g];this.options.symbols[f]&&(e+=(e?"&":"")+encodeURIComponent(f)+"="+y(this.options.symbols[f]))}t="&tabs="+encodeURIComponent(this.options.tabs.join(","))}else this.options.symbols&&(e="symbols="+y(this.options.symbols));if(this.options.symbols_description)for(var b in this.options.symbols_description)o+="&"+encodeURIComponent(b)+"="+encodeURIComponent(this.options.symbols_description[b]);this.options.customer&&(i="/"+this.options.customer+i);var v=d.getHost(this.options)+i+"?"+e+t+o+p+n+r+s+a+l+h;return'<iframe id="'+this.id+'" src="'+v+'" width="'+this.options.width+'"'+(this.options.height?' height="'+this.options.height+'"':"")+' frameborder="0" allowTransparency="true" scrolling="no" style="margin: 0 !important; padding: 0 !important;"></iframe>'},remove:function(){var e=document.getElementById("tradingview_widget");e.parentNode.removeChild(e)}},d.MediumWidget.prototype={createWidget:function(){var e=this.widgetCode();l(e,this.options.container)},widgetCode:function(){var e="",t="symbols="+function(t){for(var o=[],i=0;i<t.length;i++){var n=t[i];if(d.isArray(n)){var r=encodeURIComponent(n[0]),s=encodeURIComponent(n[1]);o.push(r),2===n.length&&(e+="&"+r+"="+s)}else"string"==typeof n&&o.push(encodeURIComponent(n))}return o.join(",")}(this.options.symbols),o="&width="+encodeURIComponent(this.options.width),i="&height="+encodeURIComponent(this.options.height),n="&colorTheme="+encodeURIComponent(this.options.colorTheme);this.options.type="symbol-overview";var r="&"+d.generateUtmForUrlParams(this.options);for(var s=["gridLineColor","fontColor","underLineColor","underLineBottomColor","trendLineColor","activeTickerBackgroundColor","timeAxisBackgroundColor","locale"],a="",l=s.length-1;l>=0;l--){var h=s[l],c=this.options[h];a+=c?"&"+h+"="+encodeURIComponent(c):""}var p=this.options.chartOnly?"&chartOnly=1":"",g=this.options.whitelabel?"&whitelabel=1":"",m=this.options.isTransparent?"&isTransparent=1":"",u="/mediumwidgetembed/";this.options.customer&&(u="/"+this.options.customer+u);var y=d.getHost(this.options)+u+"?"+t+e+a+p+g+o+i+n+m+r;return'<iframe id="'+this.id+'" src="'+y+'" style="margin: 0 !important; padding: 0 !important; '+(this.options.width?"width: "+this.options.width+"; ":"")+(this.options.height?"height: "+this.options.height+";":"")+'" frameborder="0" allowTransparency="true" scrolling="no"></iframe>'},remove:function(){var e=document.getElementById("tradingview_widget");e.parentNode.removeChild(e)}},d.widget.prototype={create:function(){this.options.type=this.options.fundamental?"fundamental":"chart";var e=this.render(),t=this;this.options.noLogoOverlay||(e=d.WidgetAbstract.prototype.addWrapperFrame.call(this,e)),l(e,this.options.container);var o=document.getElementById("tradingview-copyright");o&&o.parentElement&&o.parentElement.removeChild(o),this.iframe=document.getElementById(this.id),this.postMessage=d.postMessageWrapper(this.iframe.contentWindow,this.id),d.bindEvent(this.iframe,"load",(function(){t.postMessage.get("widgetReady",{},(function(){var e;for(t._ready=!0,e=t._ready_handlers.length;e--;)t._ready_handlers[e].call(t)}))})),t.postMessage.on("logoCreated",(function(e){if(e.left&&e.bottom&&e.width&&e.height&&e.href){t._logoOverlay&&(t._logoOverlay.parentNode.removeChild(t._logoOverlay),delete t._logoOverlay);var o=document.createElement("a");e.text&&(o.textContent=e.text,o.style.color="transparent"),o.style.position="absolute",o.style.display="inline-block",o.style.left=e.left,o.style.bottom=e.bottom,o.style.width=e.width,o.style.height=e.height,o.style.backgroundColor="transparent",o.style.pointerEvents="none",o.href=e.href,o.setAttribute("target","_blank"),t._logoOverlay=o,document.getElementById(t.id+"-wrapper").appendChild(o)}})),t.postMessage.on("setLogoOverlayVisibility",(function(e){t._logoOverlay&&e&&"boolean"==typeof e.visible&&(t._logoOverlay.style.display=e.visible?"inline-block":"none")})),t.postMessage.on("openChartInPopup",(function(e){for(var o=d.cloneSimpleObject(t.options),i=["symbol","interval"],n=i.length-1;n>=0;n--){var r=i[n],s=e[r];s&&(o[r]=s)}o.show_popup_button=!1;var a=t.options.popup_width||900,l=t.options.popup_height||600,h=(screen.width-a)/2,c=(screen.height-l)/2,p=window.open(t.generateUrl(o),"_blank","resizable=yes, top="+c+", left="+h+", width="+a+", height="+l);p&&(p.opener=null)}))},ready:function(e){this._ready?e.call(this):this._ready_handlers.push(e)},render:function(){var e=this.generateUrl();return'<iframe id="'+this.id+'" src="'+e+'" style="width: 100%; height: 100%; margin: 0 !important; padding: 0 !important;" frameborder="0" allowTransparency="true" scrolling="no" allowfullscreen></iframe>'},generateUrl:function(e){var t;function o(t,o){return o=o||t,void 0===e[t]?"":"&"+encodeURIComponent(o)+"="+(e[t]?"1":"0")}function i(t,o,i){return i=i||t,e[t]?"&"+i+"="+o:""}function n(t,o,i){return i=i||{},"&"+t+"="+(e[t]?encodeURIComponent(JSON.stringify(o)):encodeURIComponent(JSON.stringify(i)))}return t="cme"===(e=e||this.options).customer?"/cmewidgetembed/":e.customer?"/"+e.customer+"/widgetembed/":"/widgetembed/",(e.enable_publishing?d.ideasHost:d.getHost(e))+t+"?frameElementId="+this.id+"&symbol="+encodeURIComponent(e.symbol)+"&interval="+encodeURIComponent(e.interval)+(e.range?"&range="+encodeURIComponent(e.range):"")+(e.whitelabel?"&whitelabel=1":"")+(e.hide_top_toolbar?"&hidetoptoolbar=1":"")+(e.hide_legend?"&hidelegend=1":"")+o("hide_side_toolbar","hidesidetoolbar")+o("allow_symbol_change","symboledit")+o("save_image","saveimage")+"&toolbarbg="+e.toolbar_bg.replace("#","")+(e.watchlist&&e.watchlist.length&&e.watchlist.join?"&watchlist="+encodeURIComponent(e.watchlist.join("")):"")+i("editablewatchlist","1")+i("details","1")+i("calendar","1")+i("hotlist","1")+(e.studies&&d.isArray(e.studies)?"string"==typeof e.studies[0]?i("studies",encodeURIComponent(e.studies.join(""))):n("studies",e.studies):"")+o("horztouchdrag")+o("verttouchdrag")+i("widgetbar_width",e.widgetbar_width,"widgetbarwidth")+i("hideideas","1")+i("theme",encodeURIComponent(e.theme))+i("style",encodeURIComponent(e.style))+(void 0===e.extended_hours?"":"&extended_hours="+e.extended_hours)+i("timezone",encodeURIComponent(e.timezone))+i("hideideasbutton","1")+i("withdateranges","1")+i("hidevolume","1")+(void 0===e.padding?"":"&padding="+e.padding)+i("show_popup_button","1","showpopupbutton")+n("studies_overrides",e.studies_overrides,{})+n("overrides",e.overrides,{})+n("enabled_features",e.enabled_features,[])+n("disabled_features",e.disabled_features,[])+(e.show_popup_button?"&showpopupbutton=1":"")+(e.publish_source?"&publishsource="+encodeURIComponent(e.publish_source):"")+(e.enable_publishing?"&enablepublishing="+encodeURIComponent(e.enable_publishing):"")+(e.venue?"&venue="+encodeURIComponent(e.venue):"")+(e.symbology?"&symbology="+encodeURIComponent(e.symbology):"")+(e.whotrades?"&whotrades="+encodeURIComponent(e.whotrades):"")+(e.locale?"&locale="+e.locale:"")+(e.referral_id?"&referral_id="+e.referral_id:"")+(e.no_referral_id?"&no_referral_id=1":"")+(e.fundamental?"&fundamental="+encodeURIComponent(e.fundamental):"")+(e.percentage?"&percentage="+encodeURIComponent(e.percentage):"")+"&utm_source="+encodeURI(window.location.hostname)+"&utm_medium="+(d.hasCopyright(e.container)?"widget_new":"widget")+(e.type?"&utm_campaign="+e.type:"")+(e.type&&"chart"===e.type?"&utm_term="+encodeURIComponent(e.symbol):"")},image:function(e){this.postMessage.get("imageURL",{},(function(t){var o=d.host+"/x/"+t+"/";e(o)}))},subscribeToQuote:function(e){var t=document.getElementById(this.id);this.postMessage.post(t.contentWindow,"quoteSubscribe"),this.postMessage.on("quoteUpdate",e)},getSymbolInfo:function(e){this.postMessage.get("symbolInfo",{},e)},remove:function(){var e=document.getElementById(this.id);e.parentNode.removeChild(e)},reload:function(){var e=document.getElementById(this.id),t=e.parentNode;t.removeChild(e),t.innerHTML=this.render()}},d.chart.prototype={create:function(){this.isMobile=d.isMobileDevice.any;var e,t=this.render(),o=this;d.chartCssAttached||(d.css(this.renderCss()),d.chartCssAttached=!0),l(t,this.options.container),e=document.getElementById(this.id),d.bindEvent(e,"load",(function(){var e;for(o._ready=!0,e=o._ready_handlers.length;e--;)o._ready_handlers[e].call(o)})),d.onready((function(){var t=!1;if(document.querySelector&&document.querySelector('a[href$="/v/'+o.options.chart+'/"]')&&(t=!0),!t)for(var i=document.getElementsByTagName("a"),n=new RegExp("/v/"+o.options.chart+"/$"),r=new RegExp("/chart/([0-9a-zA-Z:+*-/()]+)/"+o.options.chart),s=0;s<i.length;s++)if(n.test(i[s].href)||r.test(i[s].href)){t=!0;break}t&&(e.src+="#nolinks",e.name="nolinks")})),this.postMessage=d.postMessageWrapper(e.contentWindow,this.id),this.postMessage.on("toggleFullscreen",(function(t){e.contentWindow===this.source&&o.toggleFullscreen(t.value)}),!0)},ready:d.widget.prototype.ready,renderCss:function(){return".tradingview-widget {position: relative;}"},render:function(){var e=this.options.mobileStatic&&this.isMobile?d.host+"/embed-static/":d.host+"/embed/",t="?method=script"+(this.options.locale?"&locale="+encodeURIComponent(this.options.locale):"");return this.options.type="chart",'<div class="tradingview-widget" '+(this.options.autosize?' style="width: 100%; height: 100%; margin: 0 !important; padding: 0 !important;"':' style="width:'+this.options.width+"px; height:"+this.options.height+'px;"')+'><iframe id="'+this.id+'" src="'+e+this.options.chart+"/"+t+"&"+d.generateUtmForUrlParams(this.options)+'"'+(this.options.autosize?' style="width: 100%; height: 100%; margin: 0 !important; padding: 0 !important;"':' width="'+this.options.width+'" height="'+this.options.height+'"')+' frameborder="0" allowTransparency="true" scrolling="no"></iframe></div>'},toggleFullscreen:function(e){var t=document.getElementById(this.id);e?(t.style.position="fixed",t.style.width="100vw",t.style.maxWidth="100%",t.style.height="100vh",t.style.maxHeight="100%",t.style.left="0px",t.style.top="0px",t.style.zIndex="1000000",t.style.backgroundColor="#fff"):(t.style.position="static",this.options.autosize?(t.style.width="100%",t.style.height="100%"):(t.style.width=this.options.width+"px",t.style.height=this.options.height+"px"),t.style.maxWidth="none",t.style.maxHeight="none",t.style.zIndex="auto",t.style.backgroundColor="transparent")},getSymbolInfo:function(e){this.postMessage.get("symbolInfo",{},e)}},d.stream.prototype={create:function(){this.isMobile=d.isMobileDevice.any;var e=this.render();l(e,this.options.container)},render:function(){var e="?"+(this.options.locale?"&locale="+encodeURIComponent(this.options.locale):"");return this.options.type="chart",'<div class="tradingview-widget" '+(this.options.autosize?' style="width: 100%; height: 100%; margin: 0 !important; padding: 0 !important;"':' style="width:'+this.options.width+"px; height:"+this.options.height+'px;"')+'><iframe id="'+this.id+'" src="'+d.host+this.options.stream+"/embed/"+e+"&"+d.generateUtmForUrlParams(this.options)+'"'+(this.options.autosize?' style="width: 100%; height: 100%; margin: 0 !important; padding: 0 !important;"':' width="'+this.options.width+'" height="'+this.options.height+'"')+' frameborder="0" allowTransparency="true" scrolling="no"></iframe></div>'}},d.showSignIn=function(e,t){d.dependenciesManager.depends(["/static/bundles/spinner.js"],"authWidget",(function(){var o=document.createElement("div"),i=document.createElement("div");o.appendChild(i),(new window.Spinner).setStyle({color:"#00A2E2",opacity:"0"}).spin(i),o.style.cssText="position: fixed;left: 0;top: 0;width: 100%;height: 100%;background: rgba(0, 0, 0, 0.5);z-index: 120;-webkit-transform: translate3d(0, 0, 0);",o.addEventListener("click",(function(){document.body.removeChild(o)})),document.body.appendChild(o);var n=d.gId(),r=d.createUrlParams({id:n,utmSourceOverride:e.utmSourceOverride}),s=d.getHost(e)+"/authwidget/?"+r,a="650px",l='<iframe id="'+n+'" src="'+s+'" width="'+"470px"+'"'+(a?' height="'+a+'"':"")+' frameborder="0" allowTransparency="true" scrolling="no"></iframe>',h=document.createElement("div");h.innerHTML=l,h.style.cssText="position: absolute;left: 50%;top: 50%;margin-top: -325px;margin-left: -235px;",o.appendChild(h);var c=document.getElementById(n),p=d.postMessageWrapper(c.contentWindow,n),g=function(e){e.id===n&&(document.body.removeChild(o),e.user&&t(e.user),p.off("close",g))};p.on("close",g,!0),p.on("widgetLoad",(function(){i.style.display="none"}))}))},d.isSignedIn=function(e,t){var o=d.gId(),i=d.createUrlParams({id:o}),n=d.ideasHost+"/isauthwidget/?"+i,r='<iframe id="'+o+'" src="'+n+'" frameborder="0" allowTransparency="true" scrolling="no"></iframe>',s=document.createElement("div");s.innerHTML=r,document.body.appendChild(s);var a=document.getElementById(o),l=d.postMessageWrapper(a.contentWindow,o),h=function(e){e.id===o&&(document.body.removeChild(s),t(e.user),l.off("close",h))};l.on("close",h,!0)},d.onLoginStateChange=function(e,t){var o=d.gId(),i=d.createUrlParams({id:o}),n=d.ideasHost+"/loginstatewidget/?"+i,r='<iframe id="'+o+'" src="'+n+'" frameborder="0" allowTransparency="true" scrolling="no"></iframe>',s=document.createElement("div");s.innerHTML=r,document.body.appendChild(s);var a=document.getElementById(o);d.postMessageWrapper(a.contentWindow,o).on("loginStateChange",(function(e){e.id===o&&t(e.user)}),!0)},d.postMessageWrapper=(o={},i={},n={},r=0,s=0,window.addEventListener&&window.addEventListener("message",(function(e){var n;try{n=JSON.parse(e.data)}catch(e){return}if(n&&n.provider&&"TradingView"===n.provider)if(n.source=e.source,"get"===n.type){if(!i[n.name])return;i[n.name].forEach((function(e){"function"==typeof e&&e.call(n,n.data,(function(e){var o={id:n.id,type:"on",name:n.name,client_id:n.client_id,data:e,provider:"TradingView"};t.postMessage(JSON.stringify(o),"*")}))}))}else if("on"===n.type)o[n.client_id]&&o[n.client_id][n.id]&&(o[n.client_id][n.id].call(n,n.data),delete o[n.client_id][n.id]);else if("post"===n.type){if(!i[n.name])return;i[n.name].forEach((function(e){"function"==typeof e&&e.call(n,n.data,(function(){}))}))}})),function(e,a){return o[a]={},n[a]=e,t=e,{on:function(e,t,o){i[e]&&o||(i[e]=[]),i[e].push(t)},off:function(e,t){if(!i[e])return!1;var o=i[e].indexOf(t);o>-1&&i[e].splice(o,1)},get:function(e,t,i){var s={id:r++,type:"get",name:e,client_id:a,data:t,provider:"TradingView"};o[a][s.id]=i,n[a].postMessage(JSON.stringify(s),"*")},post:function(e,t,o){var i={id:s++,type:"post",name:t,data:o,provider:"TradingView"};e&&"function"==typeof e.postMessage&&e.postMessage(JSON.stringify(i),"*")}}}),d.getUrlParams=function(){for(var e=/\+/g,t=/([^&=]+)=?([^&]*)/g,o=window.location.search.substring(1),i=t.exec(o),n=function(t){return decodeURIComponent(t.replace(e," "))},r={};i;)r[n(i[1])]=n(i[2]),i=t.exec(o);return r},d.createUrlParams=function(e){var t=[];for(var o in e)e.hasOwnProperty(o)&&null!=e[o]&&t.push(encodeURIComponent(o)+"="+encodeURIComponent(e[o]));return t.join("&")};var l=function(e,t){var o=document.getElementById(t);if(o){o.innerHTML=e;var i=o.parentElement&&o.parentElement.querySelector(".tradingview-widget-copyright");i&&(i.style.width=o.querySelector("iframe").style.width)}else document.write(e);document.body.appendChild(d.embedStylesForCopyright())},h=function(e,t){for(var o in t)"object"==typeof t[o]&&e.hasOwnProperty(o)?h(e[o],t[o]):e[o]=t[o];return e};window.TradingView?h(window.TradingView,d):window.TradingView=d}}();