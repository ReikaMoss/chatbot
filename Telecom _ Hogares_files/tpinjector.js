function _tpi_getAjax(){var a=null;return window.ActiveXObject?a=new ActiveXObject("Microsoft.XMLHTTP"):window.XMLHttpRequest&&(a=new XMLHttpRequest),a}function _tpi_addEvent(a,b,c,d){return a.attachEvent?(a.attachEvent("on"+b,c),!0):!!a.addEventListener&&(a.addEventListener(b,c,d),!0)}function _tpi_addRemoveClass(a,b,c){a&&(a.classList?c?a.classList.add(b):a.classList.remove(b):c?a.className+=" "+b:a.className=a.className.replace(new RegExp("(^|\\b)"+b.split(" ").join("|")+"(\\b|$)","gi")," "))}function _tpi_hasClass(a,b){if(a)return a.className.match(new RegExp("(\\s|^)"+b+"(\\s|$)"))}function _tpi_insertAfter(a,b){b.parentNode.insertBefore(a,b.nextSibling)}function _tpi_funcTraverseChilds(a){function b(a){for(var b=0;b<a.length;b++)d.push(a[b])}var c=[],d=[];for(d.push(a);d.length>0;){var a=d.pop();c.push(a),b(a.children)}return c}function _tpi_funcStampUrl(a){return a+(a.indexOf("?")!=-1?"&v=":"?v=")+String(_tpi_stamp).substring(String(_tpi_stamp).length,String(_tpi_stamp).length-6)}function _tpi_funcHasStorage(){try{return"localStorage"in window&&null!==window.localStorage}catch(a){return!1}}function _tpi_funcCapitalise(a){return a.toLowerCase().replace(/^(.)|\s(.)/g,function(a){return a.toUpperCase()})}function _tpi_statsComScore(a){var b,c,d,e,f="http"+("s"==_tpi_location.href.charAt(4)?"s://sb":"://b")+".scorecardresearch.com/p?c1=2&c2=6906383&ns_site=personal&name="+a,g="comScore",h=document,i=_tpi_location,j="",k="undefined",l=2048,m="characterSet",n="defaultCharset",o=typeof encodeURIComponent!=k?encodeURIComponent:escape;if(h.cookie.indexOf(g+"=")!=-1)for(d=h.cookie.split(";"),e=0,i=d.length;e<i;e++){var p=d[e].indexOf(g+"=");p!=-1&&(j="&"+unescape(d[e].substring(p+g.length+1)))}f=f+"&ns__t="+(new Date).getTime(),f=f+"&ns_c="+(h[m]?h[m]:h[n]?h[n]:"")+"&c8="+o(h.title)+j+"&c7="+o(i&&i.href?i.href:h.URL)+"&c9="+o(h.referrer),f.length>l&&f.indexOf("&")>0&&(b=f.substr(0,l-8).lastIndexOf("&"),f=(f.substring(0,b)+"&ns_cut="+o(f.substring(b+1))).substr(0,l)),h.images?(c=new Image,typeof ns_p==k&&(ns_p=c),c.src=f):h.write('<p><img src="'+f+'" height="1" width="1" alt="*"></p>')}function _tpi_statsGTM(a,b,c,d,e){a[d]=a[d]||[],a[d].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var f=b.getElementsByTagName(c)[0],g=b.createElement(c),h="dataLayer"!=d?"&l="+d:"";g.async=!0,g.src="//www.googletagmanager.com/gtm.js?id="+e+h,f.parentNode.insertBefore(g,f)}function _tpi_getCookie(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "==e.charAt(0);)e=e.substring(1);if(0==e.indexOf(b))return e.substring(b.length,e.length)}return""}function _tpi_checkSSOAndInit(){function a(){b&&(d&&d.abort(),_tpi_loadConfig(null))}var b=!0;setTimeout(function(){a()},2e3);var c="sesion.telecom.com.ar"==_tpi_location.host?"micuenta.telecom.com.ar":_tpi_location.host,d=jQuery.getJSON(oTPInjector.env.ssoTecoLoginUrl+"SSO.header?partner="+c+"&callback=?",function(a){b=!1,_tpi_loadConfig(a)})}function _tpi_loadConfig(sTecoSSO){var oElement=document.getElementById("_injector_config"),oLocalAjax=_tpi_getAjax(),oLocalAjaxData="clReferrer="+encodeURIComponent(oTPInjector.env.referrer)+"&tpi-segmento="+encodeURIComponent(oTPInjector.getUrlVar("tpi-segmento"))+"&sTecoSSO="+encodeURIComponent(sTecoSSO);oLocalAjax.open("POST",_tpi_funcStampUrl(oTPInjector.env.urlWebResources+"/components/tpinjector/v1/tpinjector_config.aspx"),!0),oLocalAjax.setRequestHeader("Content-type","application/x-www-form-urlencoded"),void 0!==oLocalAjax.withCredentials&&(oLocalAjax.withCredentials=!0),oLocalAjax.onreadystatechange=function(){4==oLocalAjax.readyState&&(oElement.innerHTML=oLocalAjax.responseText,$(oElement).find("script").each(function(i){eval($(this).text())}),oTPInjector.user.login?$("body").removeClass("tpi-state-usersession-off").addClass("tpi-state-usersession-on"):$("body").removeClass("tpi-state-usersession-on").addClass("tpi-state-usersession-off"),oTPInjector.config.isHeaderNeutro?(oTPInjector.config.marginTopDesktop=oTPInjector.config.marginTopMobile,$("body").removeClass("tpi-state-neutro-off").addClass("tpi-state-neutro-on")):$("body").removeClass("tpi-state-neutro-on").addClass("tpi-state-neutro-off"),_tpi_isScrolled=window.scrollY||window.pageYOffset>=oTPInjector.config.scrollTrigger,_tpi_isScrolled?$("body").removeClass("tpi-state-scrolled-off").addClass("tpi-state-scrolled-on"):$("body").removeClass("tpi-state-scrolled-on").addClass("tpi-state-scrolled-off"),oTPInjector.config.hasHeader&&("developer"==oTPInjector.config.company&&(oTPInjector.config.marginTopDesktop="0px"),"oficinacomercial"==oTPInjector.config.company&&(oTPInjector.config.marginTopDesktop="72px",oTPInjector.config.oficina=_tpi_getCookie("tpinjector_oficina")),document.body.style.marginTop=oTPInjector.config.marginTopDesktop),oElementCss=document.createElement("link"),oElementCss.type="text/css",oElementCss.href=oTPInjector.config.siteStyle(oTPInjector.env.urlWebResources),oElementCss.rel="stylesheet",document.body.appendChild(oElementCss),$("#_injector_header").html($(oElement).find("#_injector_header_content").html()),$("#_injector_footer").html($(oElement).find("#_injector_footer_content").html()),$("#_injector_header_content").remove(),$("#_injector_footer_content").remove(),_tpi_initEventListeners(),_tpi_responsiveCallback())},oLocalAjax.send(oLocalAjaxData)}function _tpi_initEventListeners(){if(oTPInjector.env.angular="undefined"!=typeof angular,_tpi_initTPBanner(),_tpi_initTPChat(),_tpi_initTPModal(),_tpi_initTFormTag(),_tpi_addEvent(window,"scroll",_tpi_scrollCallback,!1),_tpi_addEvent(document.body,"click",_tpi_bodyCallback,!1),oTPInjector.config.hasHeader){if("developer"!==oTPInjector.config.company){_tpi_togglePreheaderMenu("tpi-preheader-mobile-label"),_tpi_toggleUserMenu();var a=document.getElementById("tpi-company-menu-trigger");a&&(a.onclick=function(){_tpi_toggleChannelMenuXs()});var b=document.getElementById("tpi-menu-btn");if(b&&(b.onclick=function(){_tpi_toggleMenu()}),oTPInjector.env.angular&&oTPInjector.config.hasLogin&&!oTPInjector.user.login,oTPInjector.config.hasLoggedin||"oficinacomercial"==oTPInjector.config.company){var c=document.getElementById("tpi-form-logoff");c&&_tpi_addEvent(c,"click",_tpi_form_logoff,!1);var d=document.getElementById("tpi-user-btn-sx");d&&(d.onclick=function(){_tpi_toggleUserInfo()});var e=document.getElementById("tpi-morelines-show");e&&(e.onclick=function(){_tpi_toggleMoreLinesModal(!0)})}if(oTPInjector.config.hasHeader&&oTPInjector.config.hasSearch){var f=document.getElementById("searchable1");if(f){_tpi_loadTypeahead(),2!=oTPInjector.config.menuItem&&(f.onfocus=function(){this.placeholder=""},f.onblur=function(){this.placeholder="¿Qué queres hacer?"});var g=document.getElementById("tpi-search-btn");g.onclick=function(){_tpi_toggleSearch()}}}if(!_tpi_hasjq)for(var h=document.querySelectorAll(".tpi-navbar-item"),i=0;i<h.length;i++)_tpi_hasClass(h[i],"tpi-navbar-empty")||(h[i].onmouseover=function(){_tpi_isSuperMenuOpen||(document.querySelectorAll,_tpi_timeoutMenu=window.setTimeout("_tpi_toggleSuperMenu('"+this.id+"', true)",350))},_tpi_addEvent(h[i],"mouseout",_tpi_HookSuperMenu(h[i]),!0));oTPInjector.config.menuItem>0&&_tpi_addRemoveClass(document.getElementById("tpi-navbar-item"+oTPInjector.config.menuItem),"tpi-navbar-item-active",!0),$(".tpi-relogin-link").on("click",function(){_tpi_form_relogin(this.innerText)})}}else $("#_injector_header").remove();oTPInjector.config.hasFooter?$(".tpi-redes-sociales").bind("click",_tpi_pushSocial):$("#_injector_footer").remove(),_tpi_showMsg(oTPInjector.getUrlVar("tpi-msgtext")),_tpi_initTimeoutLogin("oficinacomercial"==oTPInjector.config.company),_tpi_chanchullos(!1)}function _tpi_bodyCallback(event){if(_tpi_timeoutCountdownActive||_tpi_resetIdleTime(),"developer"==oTPInjector.config.company||oTPInjector.config.isHeaderNeutro)return!0;if(oTPInjector.config.hasHeader){event=event||window.event;var a=event.target||event.srcElement,b=a.id;"tpi-user"!==b&&_tpi_isUserInfoOpen&&(document.getElementById("tpi-user-info").style.display="none",document.getElementById("tpi-icon-deco-user").style.display="none",_tpi_toggleUserInfo(!1))}}function _tpi_scrollCallback(){if(_tpi_isScrolled=window.scrollY||window.pageYOffset>=oTPInjector.config.scrollTrigger,_tpi_isScrolled?$("body").removeClass("tpi-state-scrolled-off").addClass("tpi-state-scrolled-on"):$("body").removeClass("tpi-state-scrolled-on").addClass("tpi-state-scrolled-off"),_tpi_timeoutCountdownActive||_tpi_resetIdleTime(),"developer"==oTPInjector.config.company)return!0;if(oTPInjector.config.hasHeader){var a=document.getElementById("tpi-header"),b=document.getElementById("tpi-search-sx");_tpi_isResponsive?(a&&(a.style.position="fixed"),oTPInjector.config.hasSearch&&b&&(b.style.position="fixed")):(_tpi_isScrolled||oTPInjector.config.hasSearch&&b&&(b.style.position="absolute",b.style.top=oTPInjector.config.marginTopDesktop),_tpi_isScrolled&&oTPInjector.config.hasSearch&&b&&(b.style.position="fixed",b.style.top=oTPInjector.config.marginTopMobile))}}function _tpi_responsiveCallback(){if(_tpi_isResponsive=window.innerWidth<=oTPInjector.config.responsiveWidth,_tpi_isResponsive?$("body").removeClass("tpi-state-responsive-off").addClass("tpi-state-responsive-on"):$("body").removeClass("tpi-state-responsive-on").addClass("tpi-state-responsive-off"),"developer"==oTPInjector.config.company)return!0;if(oTPInjector.config.hasHeader){var a=document.getElementById("tpi-user-context"),b=document.getElementById("tpi-header");_tpi_isResponsive?b&&(b.style.position="fixed",document.body.style.marginTop=oTPInjector.config.marginTopMobile,_tpi_isResponsiveMenuOpen||(document.getElementById("tpi-header").style.left=oTPInjector.config.responsiveMenuWidth+"px"),(oTPInjector.config.hasLogin||oTPInjector.config.hasLoggedin)&&"tpi-user-sx"!=a.parentNode.id&&document.getElementById("tpi-user-sx").appendChild(a),_tpi_hasjq&&($(".tpi-navbar-item").unbind("mouseenter").unbind("mouseleave"),$(".tpi-navbar-item").removeProp("hoverIntent_t"),$(".tpi-navbar-item").removeProp("hoverIntent_s"),$(".tpi-navbar-inner-new").show())):(document.body.style.marginTop=oTPInjector.config.marginTopDesktop,_tpi_scrollCallback(),_tpi_isResponsiveMenuOpen&&_tpi_toggleMenu(!1),_tpi_isSearchOpen&&_tpi_toggleSearch(!1),_tpi_isSearchMdOpen&&_tpi_toggleSearchMd(!1),_tpi_isUserInfoOpen&&_tpi_toggleUserInfo(!1),b&&(b.style.left=0,(oTPInjector.config.hasLogin||oTPInjector.config.hasLoggedin)&&"tpi-user"!=a.parentNode.id&&document.getElementById("tpi-user").appendChild(a)),_tpi_hasjq&&($(".tpi-navbar-inner").hide(),$(".tpi-navbar-inner-new").hide(),$(".tpi-navbar-item").hoverIntent({over:_tpi_toggleSuperMenuJQ,out:_tpi_toggleSuperMenuJQ,timeout:oTPInjector.config.superMenuWait})))}}function _tpi_initTPBanner(){var a=document.getElementById("tpi-banner");if(null!=a){var b=document.createElement("script");b.type="text/javascript",b.src=oTPInjector.env.urlWebResources+"/components/tpbanner/tpbanner.js",document.body.appendChild(b)}}function _tpi_initTPChat(){var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=oTPInjector.env.urlWebResources+"/components/tpchat/tpchat.js",document.body.appendChild(a)}function _tpi_initTPModal(){var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=oTPInjector.env.urlWebResources+"/components/tpmodal/tpmodal.js",document.body.appendChild(a)}function _tpi_initTFormTag(){var a=document.getElementById("tformtag");if(null!=a){var b=document.createElement("script");b.type="text/javascript",b.src=oTPInjector.env.urlWebResources+"/components/tformtag/tformtag.js",document.body.appendChild(b)}}function _tpi_loadTypeahead(){var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=oTPInjector.env.urlWebResources+"/components/typeahead/typeahead.js",document.body.appendChild(a)}function _tpi_togglePreheaderMenu(a){var b=document.getElementById(a);b&&(b.onclick=function(){var a=document.getElementById("tpi-preheader-section-links");a.style.display="block"==a.style.display?"none":"block"})}function _tpi_toggleChannelMenuXs(a){var b=document.getElementById("tpi-company-menu-dropdown"),c="block"==b.style.display,d=void 0!==a?!a:c;b.style.display=d?"none":"block",d||$("#tpi-header").scrollTop($("#tpi-header").height())}function _tpi_toggleSuperMenuJQ(event){event=event||window.event;var a=this;if(!$(a).hasClass("tpi-navbar-empty")){var b="."+a.id+"-bg",c=a.id.replace("tpi-navbar-item");"mouseenter"==event.type&&("personal"==oTPInjector.config.company&&"individuos"==oTPInjector.config.headerType&&c&&$(b).addClass("tpi-navbar-bg-small"),$(b).fadeIn(oTPInjector.config.superMenuShowDelay,function(){$(a).find("ul.tpi-navbar-inner").fadeIn(oTPInjector.config.superMenuShowDelay)})),"mouseleave"==event.type&&$(a).find("ul.tpi-navbar-inner").fadeOut(oTPInjector.config.superMenuHideDelay,function(){$(b).fadeOut(oTPInjector.config.superMenuHideDelay),"personal"==oTPInjector.config.company&&"individuos"==oTPInjector.config.headerType&&c&&$(b).addClass("tpi-navbar-bg-small")})}}function _tpi_toggleSuperMenu(a,b){if(!_tpi_isResponsive){for(var c=document.getElementById("tpi-navbar-inner-bg"),d=document.querySelectorAll(".tpi-navbar-item"),e=0;e<d.length;e++)_tpi_hasClass(d[e],"tpi-navbar-empty")||(document.getElementById(d[e].id+"-content").style.display="none",c.style.display="none",_tpi_isSuperMenuOpen=!1);b&&(document.getElementById(a+"-content").style.display="block",c.style.display="block",_tpi_isSuperMenuOpen=!0)}}function _tpi_HookSuperMenu(a){var b=_tpi_funcTraverseChilds(a);return function(event){event=event||window.event;var c=event.toElement||event.relatedTarget;~b.indexOf(c)||(window.clearTimeout(_tpi_timeoutMenu),_tpi_toggleSuperMenu(a.id,!1))}}function _tpi_toggleMenu(a){var b=document.body,c=document.getElementById("tpi-header"),d=document.getElementById("tpi-background"),e=void 0!==a?a:"0px"!=c.style.left||""==c.style.left;e?(oTPInjector.config.hasSearch&&_tpi_isSearchOpen&&_tpi_toggleSearch(!1),oTPInjector.config.hasLoggedin&&_tpi_isUserInfoOpen&&_tpi_toggleUserInfo(!1),_tpi_isResponsiveMenuOpen=!0,move(c,circEaseOut,oTPInjector.config.responsiveMenuDelay,oTPInjector.config.responsiveMenuWidth),d.style.backgroundColor="rgba(0, 0, 0, 0.7)",d.style.display="block",d.onclick=function(){_tpi_toggleMenu()},b.style.overflow="hidden",d.addEventListener("touchmove",function(event){return event.preventDefault(),!1},!1)):(_tpi_isResponsiveMenuOpen=!1,_tpi_isResponsive?move(c,circInvEaseOut,oTPInjector.config.responsiveMenuDelay,oTPInjector.config.responsiveMenuWidth):c.style.left=0,d.style.display="none",b.style.overflow="auto"),_tpi_addRemoveClass(document.getElementById("tpi-menu-btn"),"tpi-menu-open",_tpi_isResponsiveMenuOpen)}function _tpi_toggleSearch(a){if(oTPInjector.config.hasSearch){var b=document.getElementById("tpi-search-sx"),c=document.getElementById("searchable-sx"),d=document.getElementById("tpi-icon-search"),e=void 0!==a?a:"none"==b.style.display||""==b.style.display;e?(_tpi_isResponsiveMenuOpen&&_tpi_toggleMenu(!1),_tpi_isUserInfoOpen&&_tpi_toggleUserInfo(!1),_tpi_isSearchOpen=!0,b.style.top="48px",b.style.display="block",c.focus(),d.style.display="block"):(_tpi_isSearchOpen=!1,b.style.display="none",d.style.display="none")}}function _tpi_toggleSearchMd(a){if(oTPInjector.config.hasSearch){var b=document.getElementById("tpi-search-sx"),c=document.getElementById("searchable-sx"),d=document.getElementById("tpi-icon-search2"),e=void 0!==a?a:"none"==b.style.display||""==b.style.display;e?(_tpi_isSearchMdOpen=!0,b.style.display="block",c.focus(),d.style.display="block"):(_tpi_isSearchMdOpen=!1,b.style.display="none",d.style.display="none")}}function _tpi_toggleUserInfo(a){if(oTPInjector.config.hasLoggedin){var b=document.getElementById("tpi-user-info"),c=document.getElementById("tpi-background"),d=void 0!==a?a:"none"==b.style.display||""==b.style.display;d?(_tpi_isResponsiveMenuOpen&&_tpi_toggleMenu(!1),_tpi_isSearchOpen&&_tpi_toggleSearch(!1),_tpi_isUserInfoOpen=!0,c&&(c.style.backgroundColor="#ffffff",c.style.display="block",c.onclick=function(){_tpi_toggleUserInfo()}),b.style.display="block",document.body.style.overflow="hidden"):(_tpi_isUserInfoOpen=!1,b.style.display="",c&&(c.style.display="none"),document.body.style.overflow="auto");var e=event||window.event;e.cancelBubble=!0,e.stopPropagation&&e.stopPropagation()}}function _tpi_toggleUserMenu(){var a=document.getElementById("tpi-user"),b=document.getElementById("tpi-user-info");if(null!=b){var c=document.getElementById("tpi-icon-deco-user");a.onclick=function(){"none"==b.style.display?(b.style.display="block",c.style.display="block",_tpi_isUserInfoOpen=!0):(b.style.display="none",c.style.display="none",_tpi_isUserInfoOpen=!1)}}}function _tpi_toggleMoreLinesModal(a){a?$("#tpi-morelines-modal").show():$("#tpi-morelines-modal").hide()}function _tpi_toggleTimeoutModal(a){_tpi_timeoutCountdownActive=a,a?$("#tpi-timeout-modal").show():$("#tpi-timeout-modal").hide()}function _tpi_form_logoff(event){if(event=event||window.event,event.preventDefault(),"arnet"!=oTPInjector.config.company&&"telecom"!=oTPInjector.config.company||(document.location.href=oTPInjector.env.ssoTecoLogoutUrl),"personal"==oTPInjector.config.company||"oficinacomercial"==oTPInjector.config.company||"developer"==oTPInjector.config.company){var a=document.getElementById("tpi-logout-form");a[0].value=""==oTPInjector.config.urlLogout?_tpi_location.href:oTPInjector.config.urlLogout,a.submit()}}function _tpi_form_relogin(a){if(oTPInjector.user.login){var b=document.getElementById("tpi-relogin-form");b[0].value=void 0!==a?a:oTPInjector.user.line,b[1].value=""==oTPInjector.config.urlRelogin?_tpi_location.href:oTPInjector.config.urlRelogin,b[2].value=_tpi_location.href,b.submit()}}function _tpi_showMsg(a,b,c){var d=""!=a&&"undefined"!=typeof a;if(d){c=c||oTPInjector.getUrlVar("tpi-msglink");var e=""!=c&&"undefined"!=typeof c;b=b||parseInt(oTPInjector.getUrlVar("tpi-msgtype"));var f=""!=b&&"undefined"!=typeof b&&!isNaN(b),g="tpi-msg-info";if(f)switch(b){case 1:g="tpi-msg-success";break;case 2:g="tpi-msg-error";break;case 3:g="tpi-msg-warning";break;default:g="tpi-msg-info"}_tpi_resetMsg(),e?$(".tpi-msg-text").html(decodeURIComponent(a)+'&nbsp;<a href="'+decodeURIComponent(c)+'">Click aqu&iacute;</a>'):$(".tpi-msg-text").html(decodeURIComponent(a)),$(".tpi-msg").addClass(g).show(),$(".tpi-msg-close").on("click",function(){_tpi_resetMsg()})}}function _tpi_resetMsg(){$(".tpi-msg-text").html(""),$(".tpi-msg").removeClass().addClass("tpi-msg").hide()}function _tpi_initTimeoutLogin(a){oTPInjector.user.login&&a&&(_tpi_timeoutLogin=6e4,_tpi_timeoutCountdownMax=30,_tpi_isIdleTimerActive=!0,_tpi_idleTimer=setInterval(_tpi_checkIdleTime,1e3))}function _tpi_checkIdleTime(){"oficinacomercial"==oTPInjector.config.company&&(_tpi_idleTime+=1e3,_tpi_idleTime>=_tpi_timeoutLogin&&(_tpi_toggleTimeoutModal(!0),_tpi_countdownHandler(),_tpi_timeoutCountdown>=_tpi_timeoutCountdownMax&&_tpi_timeoutHandler(!1)))}function _tpi_resetIdleTime(){_tpi_isIdleTimerActive&&(_tpi_timeoutCountdown=0,_tpi_idleTime=0)}function _tpi_timeoutHandler(a){a?(_tpi_resetIdleTime(),_tpi_toggleTimeoutModal(!1)):(clearInterval(_tpi_idleTimer),_tpi_isIdleTimerActive=!1,_tpi_toggleTimeoutModal(!1),_tpi_form_logoff())}function _tpi_countdownHandler(){_tpi_timeoutCountdown++;var a=_tpi_timeoutCountdownMax-_tpi_timeoutCountdown;$("#tpi-timeout-modal-countdown").html(a)}function _tpi_setUserName(a){oTPInjector.user.login&&""!=a&&(oTPInjector.user.customname=a,$(".tpi-user").text(a),$(".tpi-username strong").text(a))}function _tpi_resetUserName(){oTPInjector.user.customname="",$(".tpi-user").text(oTPInjector.user.name),$(".tpi-username strong").text(oTPInjector.user.name)}function _tpi_setPuntosClub(a){oTPInjector.user.login&&a>=0&&(oTPInjector.user.customPuntos=a,$(".tpi-puntosclub").text(a))}function _tpi_resetPuntosClub(){oTPInjector.user.customPuntos=-1,$(".tpi-puntosclub").text(oTPInjector.user.puntos)}function _tpi_pushSocial(){event.preventDefault(),"undefined"!=typeof dataLayer&&dataLayer.push({event:"trackEvent",eventCategory:"Btn Acc",eventAction:"Home_Footer_Redes",eventLabel:$(this).children("span").attr("class").split("-").pop()}),window.open($(this).attr("href"))}function _tpi_chanchullos(a){if(a){if("personal.andreani.com"==_tpi_location.hostname&&(_tpi_statsComScore("tienda.seguimiento_andreani"),_tpi_statsGTM(window,document,"script","dataLayer","GTM-KX5M")),_tpi_location.hostname.startsWith("club")){$("#contenedor").css("padding-top","10px"),$("#panelRight_i").css("margin-top","10px");var b=document.getElementById("panelRight_i");b&&(b.innerHTML="");var c=document.getElementById("panelRight_login");if(c){var d=_tpi_funcCapitalise($("#panelRight_login h2").eq(0).text());$("#panelRight_login h1 span").remove(),$(".tpi-user").text(d),$(".tpi-username strong").text(d),$("#panelRight_login h2").eq(0).remove(),$("#panelRight_login div.tel_user h2").remove()}}}else{if("PROD"==oTPInjector.env.name&&"developer"!==oTPInjector.config.company&&(oElement=document.createElement("script"),oElement.type="text/javascript",oElement.src=oTPInjector.env.urlWebResources+"/components/tpstats/tpstats.js",document.body.appendChild(oElement)),"undefined"!=typeof dataLayer&&dataLayer.push({event:"TPLoaded"}),oTPInjector.user.login&&("personal"==oTPInjector.config.company||"oficinacomercial"==oTPInjector.config.company)&&""!=oTPInjector.user.line){var e="&active_service="+oTPInjector.user.line+"&segmento="+oTPInjector.user.segmento+"&subsegmento="+oTPInjector.user.subsegmento;if("oficinacomercial"==oTPInjector.config.company&&(e+="&totem="+oTPInjector.config.oficina),"function"==typeof g_comScore)g_comScore(e);else if("function"==typeof comScore){var f="http"+("s"==_tpi_location.href.charAt(4)?"s://sb":"://b")+".scorecardresearch.com/p?c1=2&c2=6906383&ns_site=personal&name=";comScore(f+e)}else _tpi_statsComScore(e)}_tpi_location.hostname.startsWith("club")&&"PROD"!=oTPInjector.env.name&&_tpi_setUserName($("#nameHidden").val());var g=_tpi_location.pathname.split("/");if(("individuos"==g[1]||"Individuos"==g[1])&&"ConfiguracionTerminales.aspx"==g[2]){var h=$("#DM").next();h&&h.html('<div style="text-align: center; color: #aaa; font-size: 16px">¿Querés configurar tu equipo 4G?&nbsp;<a href="http://www.personal.com.ar/4g/#configuracion">Hacelo ahora &gt;</a></div>')}"MICUENTA"==oTPInjector.config.appName&&$(".tpi-fix-micuenta").on("click",function(){"undefined"!=typeof gestorModulos&&gestorModulos.cargaModuloCustom()}),_tpi_stamp_end=(new Date).getTime(),oTPInjector.env.loadtime=_tpi_stamp_end-_tpi_stamp,$(document).trigger("oTPInjector.Loaded")}}function _tpi_winloadCallback(){}function animate(a){var b=new Date,c=setInterval(function(){var d=new Date-b,e=d/a.duration;e>1&&(e=1);var f=a.delta(e);a.step(f),1==e&&clearInterval(c)},a.delay||10)}function move(a,b,c,d){animate({delay:10,duration:c||1e3,delta:b,step:function(b){a.style.left=d*b+"px"}})}function linear(a){return a}function circ(a){return 1-Math.asin(Math.asin(a))}function circInv(a){return Math.sin(a)}function back(a,b){return Math.pow(a,2)*((b+1)*a-b)}function makeEaseOut(a){return function(b){return 1-a(1-b)}}function _tpi_getInternetExplorerVersion(){var a=-1;if("Microsoft Internet Explorer"==navigator.appName){var b=navigator.userAgent,c=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");null!=c.exec(b)&&(a=parseFloat(RegExp.$1))}return a}function _tpi_checkIEVersion(){var a="You're not using Windows Internet Explorer.",b=_tpi_getInternetExplorerVersion();if(b>-1)return b>=9?(a="You're using a recent copy of Windows Internet Explorer.",!1):(a="You should upgrade your copy of Windows Internet Explorer.",!0)}function linksCuenta(){setTimeout(function(){location.reload()},1e3)}var _tpi_stamp=(new Date).getTime(),_tpi_stamp_end,_tpi_location=document.location,_tpi_oAjax,_tpi_hasjq=!1,_tpi_isResponsive=!1,_tpi_isScrolled=!1,_tpi_isResponsiveMenuOpen=!1,_tpi_isSuperMenuOpen=!1,_tpi_isSearchOpen=!1,_tpi_isSearchMdOpen=!1,_tpi_isUserInfoOpen=!1,_tpi_idleTime=0,_tpi_idleTimer,_tpi_isIdleTimerActive=!1,_tpi_timeoutIdle=0,_tpi_timeoutCountdown=0,_tpi_timeoutCountdownMax=0,_tpi_timeoutCountdownActive=!1,_tpi_timeoutMenu;"undefined"!=typeof jQuery&&!function(a){function b(b){return a.map(b.split("."),function(a){return parseInt(a,10)})}a.versioncompare=function(c,d){if("undefined"==typeof c)throw new Error("$.versioncompare needs at least one parameter.");if(d=d||a.fn.jquery,c==d)return 0;for(var e=b(c),f=b(d),g=Math.max(e.length,f.length),h=0;h<g;h++)if(e[h]=e[h]||0,f[h]=f[h]||0,e[h]!=f[h])return e[h]>f[h]?1:-1;return 0};var c=a.versioncompare(a.fn.jquery,"1.7.0");_tpi_hasjq=c>=0,_tpi_hasjq&&"undefined"==typeof a.fn.hoverIntent&&(a.fn.hoverIntent=function(b,c,d){var e={interval:100,sensitivity:6,timeout:0};e="object"==typeof b?a.extend(e,b):a.isFunction(c)?a.extend(e,{over:b,out:c,selector:d}):a.extend(e,{over:b,out:b,selector:c});var f,g,h,i,j=function(a){f=a.pageX,g=a.pageY},k=function(b,c){return c.hoverIntent_t=clearTimeout(c.hoverIntent_t),Math.sqrt((h-f)*(h-f)+(i-g)*(i-g))<e.sensitivity?(a(c).off("mousemove.hoverIntent",j),c.hoverIntent_s=!0,e.over.apply(c,[b])):(h=f,i=g,c.hoverIntent_t=setTimeout(function(){k(b,c)},e.interval),void 0)},l=function(a,b){return b.hoverIntent_t=clearTimeout(b.hoverIntent_t),b.hoverIntent_s=!1,e.out.apply(b,[a])},m=function(b){var c=a.extend({},b),d=this;d.hoverIntent_t&&(d.hoverIntent_t=clearTimeout(d.hoverIntent_t)),"mouseenter"===b.type?(h=c.pageX,i=c.pageY,a(d).on("mousemove.hoverIntent",j),d.hoverIntent_s||(d.hoverIntent_t=setTimeout(function(){k(c,d)},e.interval))):(a(d).off("mousemove.hoverIntent",j),d.hoverIntent_s&&(d.hoverIntent_t=setTimeout(function(){l(c,d)},e.timeout)))};return this.on({"mouseenter.hoverIntent":m,"mouseleave.hoverIntent":m},e.selector)})}(jQuery),Array.prototype.indexOf||(Array.prototype.indexOf=function(a){var b=this.length>>>0,c=Number(arguments[1])||0;for(c=c<0?Math.ceil(c):Math.floor(c),c<0&&(c+=b);c<b;c++)if(c in this&&this[c]===a)return c;return-1}),String.prototype.startsWith||(String.prototype.startsWith=function(a){return!this.indexOf(a)}),String.prototype.contains||(String.prototype.contains=function(a){return this.indexOf(a)!=-1}),$.fn.center=function(){return this.css({position:"fixed",left:"50%",top:"50%"}),this.css({"margin-left":-this.outerWidth()/2+"px","margin-top":-this.outerHeight()/2+"px"}),this};var oTPInjector={getUrlVars:function(){for(var a,b=[],c=window.location.href.slice(window.location.href.indexOf("?")+1).split("&"),d=0;d<c.length;d++)a=c[d].split("="),b.push(a[0]),b[a[0]]=a[1];return b},getUrlVar:function(a){return oTPInjector.getUrlVars()[a]},user:{login:!0,name:"",customname:"",email:"",doc:"",tipoDoc:"",line:"",club:!1,puntos:0,plan:"",segmento:"",subsegmento:"",mercado:0,isFactura:!1,isAbonoFijo:!1,isTarjeta:!0,siebelID:"",girafeID:"",categoryCode:""},env:{name:"DEV",server:"",urlWebResources:"//resources.personal.com.ar",ssoTecoLoginUrl:"https://sesion.telecom.com.ar/",ssoTecoLogoutUrl:"",loadtime:null,urlhash:_tpi_location.hash,angular:!1,referrer:document.referrer||"",date:new Date},config:{logospos:[0,-43,-86,-129,-172,-215,-258,-301,-344],scrollTrigger:32,marginTopDesktop:"77px",marginTopMobile:"48px",superMenuWait:300,superMenuShowDelay:200,superMenuHideDelay:200,responsiveWidth:942,responsiveMenuWidth:-300,responsiveMenuDelay:200,hasHeader:!0,hasFooter:!0,hasLogin:!0,hasLoggedin:!0,hasSearch:!0,appName:"",appSection:"",id:function(){return this.company+"."+this.headerType},company:"personal",headerType:"individuos",isHeaderNeutro:!1,theme:"default",menuItem:0,urlParams:function(a){return"header"==a?"?hasHeader="+this.hasHeader+"&headerType="+this.headerType+"&hasLogin="+this.hasLogin+"&hasLoggedin="+this.hasLoggedin+"&hasSearch="+this.hasSearch:"?hasFooter="+this.hasFooter+"&footerType="+this.headerType},siteStyle:function(){return _tpi_funcStampUrl("developer"==oTPInjector.config.company?oTPInjector.env.urlWebResources+"/components/tpinjector/v1/theme_developer.css":oTPInjector.env.urlWebResources+"/components/tpinjector/v1/theme_"+oTPInjector.config.company+"_"+oTPInjector.config.headerType+"_"+oTPInjector.config.theme+".css")},oficina:"",urlLogout:"",urlRelogin:""}};!function(){if(_tpi_chanchullos(!0),_tpi_funcHasStorage())for(var a=0,b=localStorage.length;a<b;a++){var c=localStorage.key(a);c&&c.indexOf("typeahead")>-1&&localStorage.removeItem(c)}var d;if(d=document.createElement("link"),d.type="text/css",d.href=_tpi_funcStampUrl(oTPInjector.env.urlWebResources+"/components/tpinjector/v1/tpinjector.css"),d.rel="stylesheet",document.body.appendChild(d),d=document.createElement("div"),d.id="_injector_header",d.innerHTML='<div id="_injector_header_loader"><img id="_injector_header_loading" src="'+oTPInjector.env.urlWebResources+'/images/gif/ajax-loader.gif"></div>',document.body.insertBefore(d,document.body.firstChild),_tpi_checkIEVersion()){var d=document.createElement("div");d.id="_injector_msj",d.innerHTML='<div class="tpi-browser-warning"><div class="tpi-browser-warning-msg"><strong>Tu navegador no est&aacute; actualizado.</strong> Descarg&aacute; gratis la nueva versi&oacute;n</div><a href="http://windows.microsoft.com/es-es/internet-explorer/download-ie" target="_blank" class="icon-ie">Internet Explorer</a><a href="http://www.google.com.ar/intl/es-419/chrome/" target="_blank" class="icon-chrome">Chrome</a><a href="https://www.mozilla.org/es-AR/firefox/new/" target="_blank" class="icon-firefox">Firefox</a><a href="http://www.opera.com/es-419" target="_blank" class="icon-opera">Opera</a><a href="http://support.apple.com/kb/dl1531" target="_blank" class="icon-safari">Safari</a></div>',document.body.insertBefore(d,document.body.firstChild)}d=document.createElement("div"),d.id="_injector_footer",document.body.insertBefore(d,null),d=document.createElement("div"),d.id="_injector_config",document.body.insertBefore(d,document.body.firstChild),_tpi_addEvent(window,"load",_tpi_winloadCallback,!1),_tpi_addEvent(window,"resize",_tpi_responsiveCallback,!1),_tpi_location.host.contains("telecom")||_tpi_location.host.contains("arnet")?_tpi_checkSSOAndInit():_tpi_loadConfig(null)}();var circEaseOut=makeEaseOut(circ),circInvEaseOut=makeEaseOut(circInv);setTimeout(function(){$(".tpi-search a").on("click",function(){$("#modal-buscador-button").click()}),$("#container-search, #tpi-preheader").click(function(){$("#modal-buscador .modal-dialog .modal-content button").click()}),$(".tpi-search a, input.searchable").click(function(event){event.stopPropagation()})},1e3),setTimeout(function(){function a(){b=!0}if($("div#tpi-banner").length>0&&$("#tpi-banner .swiper-slide").on("click",function(){if($("#tpi-banner .swiper-slide-active a").length>0){var a=$("#tpi-banner .swiper-slide-active a").attr("href");window.location.href=a}}),$(".owl-item span.tpicon").length>0&&($(".owl-item span.tpicon-").parent().css("padding-left","0px"),$(".owl-item span.tpicon, .well-badge p").css("color","#ffffff")),_tpi_isResponsive){$("#tpi-header.personal .tpi-navbar-item-link").attr("href","javascript:void(0)"),$("a.tpi-navbar-item-link").not($("#tpi-navbar-item3 a.tpi-navbar-item-link")).on("click",function(){$(".tpi-navbar-item-link").not(this).removeClass("activo"),$(this).toggleClass("activo"),$("a.tpi-navbar-item-link").not(this).next().slideUp();var a=$(this).next(),b=$(this).next().children();$(a,b).slideToggle()});var b=!1,c=document.getElementById("tpi-navbar-item3");c.addEventListener("click",a),$("#tpi-navbar-item3 a.tpi-navbar-item-link").on("click",function(){if(0==b&&0==oTPInjector.user.login)window.location.href="https://autogestion.personal.com.ar";else{$(".tpi-navbar-item-link").not(this).removeClass("activo"),$(this).toggleClass("activo"),$("a.tpi-navbar-item-link").not(this).next().children().slideUp();var a=$(this).next().children();$(a).slideToggle()}})}},2e3),_tpi_isResponsive&&$("#tpi-user-sx #tpi-login").html("");