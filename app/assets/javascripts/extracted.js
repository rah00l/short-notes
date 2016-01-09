// (function() { (function(){function c(a){this.t={};this.tick=function(a,c,b){var d=void 0!=b?b:(new Date).getTime();this.t[a]=[d,c];if(void 0==b)try{window.console.timeStamp("CSI/"+a)}catch(e){}};this.tick("start",null,a)}var a;window.performance&&(a=window.performance.timing);var h=a?new c(a.responseStart):new c;window.jstiming={Timer:c,load:h};if(a){var b=a.navigationStart,e=a.responseStart;0<b&&e>=b&&(window.jstiming.srt=e-b)}if(a){var d=window.jstiming.load;0<b&&e>=b&&(d.tick("_wtsrt",void 0,b),d.tick("wtsrt_",
// "_wtsrt",e),d.tick("tbsd_","wtsrt_"))}try{a=null,window.chrome&&window.chrome.csi&&(a=Math.floor(window.chrome.csi().pageT),d&&0<b&&(d.tick("_tbnd",void 0,window.chrome.csi().startE),d.tick("tbnd_","_tbnd",b))),null==a&&window.gtbExternal&&(a=window.gtbExternal.pageT()),null==a&&window.external&&(a=window.external.pageT,d&&0<b&&(d.tick("_tbnd",void 0,window.external.startE),d.tick("tbnd_","_tbnd",b))),a&&(window.jstiming.pt=a)}catch(k){}})();window.tickAboveFold=function(c){var a=0;if(c.offsetParent){do a+=c.offsetTop;while(c=c.offsetParent)}c=a;750>=c&&window.jstiming.load.tick("aft")};var f=!1;function g(){f||(f=!0,window.jstiming.load.tick("firstScrollTime"))}window.addEventListener?window.addEventListener("scroll",g,!1):window.attachEvent("onscroll",g);
//  })();

// /* 
//  * jQuery - Easy Ticker plugin - v1.0
//  * http://www.aakashweb.com/
//  * Copyright 2012, Aakash Chakravarthy
//  * Released under the MIT License.
//  */

// (function($){
// 	$.fn.easyTicker = function(options) {
	
// 	var defaults = {
// 		direction: 'up',
//    		easing: 'swing',
// 		speed: 'slow',
// 		interval: 2000,
// 		height: 'auto',
// 		visible: 0,
// 		mousePause: 1,
// 		controls:{
// 			up: '',
// 			down: '',
// 			toggle: ''
// 		}
// 	};
	
// 	// Initialize the variables
// 	var options = $.extend(defaults, options), 
// 		timer = 0,
// 		tClass = 'et-run',
// 		winFocus = 0,
// 		vBody = $('body'),
// 		cUp = $(options.controls.up),
// 		cDown = $(options.controls.down),
// 		cToggle = $(options.controls.toggle);
	
// 	// The initializing function
// 	var init = function(obj, target){
		
// 		target.children().css('margin', 0).children().css('margin', 0);
		
// 		obj.css({
// 			position : 'relative',
// 			height : (options.height == 'auto') ? objHeight(obj, target) : options.height,
// 			overflow : 'hidden'
// 		});
		
// 		target.css({
// 			'position' : 'absolute',
// 			'margin' : 0
// 		}).children().css('margin', 0);
		
// 		if(options.visible != 0 && options.height == 'auto'){
// 			adjHeight(obj, target);
// 		}

// 		// Set the class to the "toggle" control and set the timer.
// 		cToggle.addClass(tClass);
// 		setTimer(obj, target);
// 	}
	
// 	// Core function to move the element up and down.
// 	var move = function(obj, target, type){
		
// 		if(!obj.is(':visible')) return;
		
// 		if(type == 'up'){
// 			var sel = ':first-child',
// 				eq = '-=',
// 				appType = 'appendTo';
// 		}else{
// 			var sel = ':last-child',
// 				eq = '+=',
// 				appType = 'prependTo';
// 		}
	
// 		var selChild = $(target).children(sel);
// 		var height = selChild.outerHeight();
	
// 		$(target).stop(true, true).animate({
// 			'top': eq + height + "px"
// 		}, options.speed, options.easing, function(){
// 			selChild.hide()[appType](target).fadeIn();
// 			$(target).css('top', 0);
// 			if(options.visible != 0 && options.height == 'auto'){
// 				adjHeight(obj, target);
// 			}
// 		});
// 	}
	
// 	// Activates the timer.
// 	var setTimer = function(obj, target){
// 		if(cToggle.length == 0 || cToggle.hasClass(tClass)){
// 			timer = setInterval(function(){
// 				if (vBody.attr('data-focus') != 1){ return; }
// 				move(obj, target, options.direction);
// 			}, options.interval);
// 		}
// 	}
	
// 	// Stops the timer
// 	var stopTimer = function(obj){
// 		clearInterval(timer);
// 	}
	
// 	// Adjust the wrapper height and show the visible elements only.
// 	var adjHeight = function(obj, target){
// 		var wrapHeight = 0;
// 		$(target).children(':lt(' + options.visible + ')').each(function(){
// 			wrapHeight += $(this).outerHeight();
// 		});
		
// 		obj.stop(true, true).animate({height: wrapHeight}, options.speed);
// 	}
	
// 	// Get the maximum height of the children.
// 	var objHeight = function(obj, target){
// 		var height = 0;
		
// 		var tempDisp = obj.css('display');
// 		obj.css('display', 'block');
				
// 		$(target).children().each(function(){
// 			height += $(this).outerHeight();
// 		});
		
// 		obj.css('display', tempDisp);
// 		return height;
// 	}
	
// 	// Hack to check window status
// 	function onBlur(){ vBody.attr('data-focus', 0); };
// 	function onFocus(){ vBody.attr('data-focus', 1); };
	
// 	if (/*@cc_on!@*/false) { // check for Internet Explorer
// 		document.onfocusin = onFocus;
// 		document.onfocusout = onBlur;
// 	}else{
// 		$(window).bind('focus mouseover', onFocus);
// 		$(window).bind('blur', onBlur);
// 	}

// 	return this.each(function(){
// 		var obj = $(this);
// 		var tar = obj.children(':first-child');
		
// 		// Initialize the content
// 		init(obj, tar);
		
// 		// Bind the mousePause action
// 		if(options.mousePause == 1){
// 			obj.mouseover(function(){
// 				stopTimer(obj);
// 			}).mouseleave(function(){
// 				setTimer(obj, tar);
// 			});
// 		}
		
// 		// Controls action
// 		cToggle.live('click', function(){
// 			if($(this).hasClass(tClass)){
// 				stopTimer(obj);
// 				$(this).removeClass(tClass);
// 			}else{
// 				$(this).addClass(tClass);
// 				setTimer(obj, tar);
// 			}
// 		});
		
// 		cUp.live('click', function(){
// 			move(obj, tar, 'up');
// 		});
		
// 		cDown.live('click', function(){
// 			move(obj, tar, 'down');
// 		});
		
// 	});
// };
// })(jQuery);


// <script type="text/javascript">
// //<![CDATA[

// /*
//  * Superfish v1.4.8 - jQuery menu widget
//  * Copyright (c) 2008 Joel Birch
//  *
//  * Dual licensed under the MIT and GPL licenses:
//  * 	http://www.opensource.org/licenses/mit-license.php
//  * 	http://www.gnu.org/licenses/gpl.html
//  *
//  * CHANGELOG: http://users.tpg.com.au/j_birch/plugins/superfish/changelog.txt
//  */
// (function($){$.fn.superfish=function(op){var sf=$.fn.superfish,c=sf.c,$arrow=$(['<span class="',c.arrowClass,'"> &#xbb;</span>'].join("")),over=function(){var $$=$(this),menu=getMenu($$);clearTimeout(menu.sfTimer);$$.showSuperfishUl().siblings().hideSuperfishUl();},out=function(){var $$=$(this),menu=getMenu($$),o=sf.op;clearTimeout(menu.sfTimer);menu.sfTimer=setTimeout(function(){o.retainPath=($.inArray($$[0],o.$path)>-1);$$.hideSuperfishUl();if(o.$path.length&&$$.parents(["li.",o.hoverClass].join("")).length<1){over.call(o.$path);}},o.delay);},getMenu=function($menu){var menu=$menu.parents(["ul.",c.menuClass,":first"].join(""))[0];sf.op=sf.o[menu.serial];return menu;},addArrow=function($a){$a.addClass(c.anchorClass).append($arrow.clone());};return this.each(function(){var s=this.serial=sf.o.length;var o=$.extend({},sf.defaults,op);o.$path=$("li."+o.pathClass,this).slice(0,o.pathLevels).each(function(){$(this).addClass([o.hoverClass,c.bcClass].join(" ")).filter("li:has(ul)").removeClass(o.pathClass);});sf.o[s]=sf.op=o;$("li:has(ul)",this)[($.fn.hoverIntent&&!o.disableHI)?"hoverIntent":"hover"](over,out).each(function(){if(o.autoArrows){addArrow($(">a:first-child",this));}}).not("."+c.bcClass).hideSuperfishUl();var $a=$("a",this);$a.each(function(i){var $li=$a.eq(i).parents("li");$a.eq(i).focus(function(){over.call($li);}).blur(function(){out.call($li);});});o.onInit.call(this);}).each(function(){var menuClasses=[c.menuClass];if(sf.op.dropShadows&&!($.browser.msie&&$.browser.version<7)){menuClasses.push(c.shadowClass);}$(this).addClass(menuClasses.join(" "));});};var sf=$.fn.superfish;sf.o=[];sf.op={};sf.IE7fix=function(){var o=sf.op;if($.browser.msie&&$.browser.version>6&&o.dropShadows&&o.animation.opacity!=undefined){this.toggleClass(sf.c.shadowClass+"-off");}};sf.c={bcClass:"sf-breadcrumb",menuClass:"sf-js-enabled",anchorClass:"sf-with-ul",arrowClass:"sf-sub-indicator",shadowClass:"sf-shadow"};sf.defaults={hoverClass:"sfHover",pathClass:"overideThisToUse",pathLevels:1,delay:800,animation:{opacity:"show"},speed:"normal",autoArrows:true,dropShadows:true,disableHI:false,onInit:function(){},onBeforeShow:function(){},onShow:function(){},onHide:function(){}};$.fn.extend({hideSuperfishUl:function(){var o=sf.op,not=(o.retainPath===true)?o.$path:"";o.retainPath=false;var $ul=$(["li.",o.hoverClass].join(""),this).add(this).not(not).removeClass(o.hoverClass).find(">ul").hide().css("visibility","hidden");o.onHide.call($ul);return this;},showSuperfishUl:function(){var o=sf.op,sh=sf.c.shadowClass+"-off",$ul=this.addClass(o.hoverClass).find(">ul:hidden").css("visibility","visible");sf.IE7fix.call($ul);o.onBeforeShow.call($ul);$ul.animate(o.animation,o.speed,function(){sf.IE7fix.call($ul);o.onShow.call($ul);});return this;}});})(jQuery);

// //]]>
// </script>
// <script type="text/javascript">
// //<![CDATA[

// jQuery(document).ready(function() {
	
// /* Navigation */
// 	jQuery('#submenu ul.sfmenu').superfish({ 
// 		delay:       500,								// 0.1 second delay on mouseout 
// 		animation:   {opacity:'show',height:'show'},	// fade-in and slide-down animation 
// 		dropShadows: true								// disable drop shadows 
// 	});	

// 	jQuery('#topmenu ul.sfmenu').superfish({ 
// 		delay:       500,								// 0.1 second delay on mouseout 
// 		animation:   {opacity:'show',height:'show'},	// fade-in and slide-down animation 
// 		dropShadows: true								// disable drop shadows 
// 	});	


// 	jQuery('#ticker').easyTicker({
// 			visible: 1,
// 			interval: 3000
// 		});


// });

// //]]>
// </script>
// <script type="text/javascript">
// //<![CDATA[

// function showrecentcomments(json){for(var i=0;i<a_rc;i++){var b_rc=json.feed.entry[i];var c_rc;if(i==json.feed.entry.length)break;for(var k=0;k<b_rc.link.length;k++){if(b_rc.link[k].rel=='alternate'){c_rc=b_rc.link[k].href;break;}}c_rc=c_rc.replace("#","#comment-");var d_rc=c_rc.split("#");d_rc=d_rc[0];var e_rc=d_rc.split("/");e_rc=e_rc[5];e_rc=e_rc.split(".html");e_rc=e_rc[0];var f_rc=e_rc.replace(/-/g," ");f_rc=f_rc.link(d_rc);var g_rc=b_rc.published.$t;var h_rc=g_rc.substring(0,4);var i_rc=g_rc.substring(5,7);var j_rc=g_rc.substring(8,10);var k_rc=new Array();k_rc[1]="Jan";k_rc[2]="Feb";k_rc[3]="Mar";k_rc[4]="Apr";k_rc[5]="May";k_rc[6]="Jun";k_rc[7]="Jul";k_rc[8]="Aug";k_rc[9]="Sep";k_rc[10]="Oct";k_rc[11]="Nov";k_rc[12]="Dec";if("content" in b_rc){var l_rc=b_rc.content.$t;}else if("summary" in b_rc){var l_rc=b_rc.summary.$t;}else var l_rc="";var re=/<\S[^>]*>/g;l_rc=l_rc.replace(re,"");if(m_rc==true)document.write('On '+k_rc[parseInt(i_rc,10)]+' '+j_rc+' ');document.write('<a href="'+c_rc+'">'+b_rc.author[0].name.$t+'</a> commented');if(n_rc==true)document.write(' on '+f_rc);document.write(': ');if(l_rc.length<o_rc){document.write('<i>&#8220;');document.write(l_rc);document.write('&#8221;</i><br/><br/>');}else{document.write('<i>&#8220;');l_rc=l_rc.substring(0,o_rc);var p_rc=l_rc.lastIndexOf(" ");l_rc=l_rc.substring(0,p_rc);document.write(l_rc+'&hellip;&#8221;</i>');document.write('<br/><br/>');}}}

// function rp(json){document.write('<ul>');for(var i=0;i<numposts;i++){document.write('<li>');var entry=json.feed.entry[i];var posttitle=entry.title.$t;var posturl;if(i==json.feed.entry.length)break;for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='alternate'){posturl=entry.link[k].href;break}}posttitle=posttitle.link(posturl);var readmorelink="(more)";readmorelink=readmorelink.link(posturl);var postdate=entry.published.$t;var cdyear=postdate.substring(0,4);var cdmonth=postdate.substring(5,7);var cdday=postdate.substring(8,10);var monthnames=new Array();monthnames[1]="Jan";monthnames[2]="Feb";monthnames[3]="Mar";monthnames[4]="Apr";monthnames[5]="May";monthnames[6]="Jun";monthnames[7]="Jul";monthnames[8]="Aug";monthnames[9]="Sep";monthnames[10]="Oct";monthnames[11]="Nov";monthnames[12]="Dec";if("content"in entry){var postcontent=entry.content.$t}else if("summary"in entry){var postcontent=entry.summary.$t}else var postcontent="";var re=/<\S[^>]*>/g;postcontent=postcontent.replace(re,"");document.write(posttitle);if(showpostdate==true)document.write(' - '+monthnames[parseInt(cdmonth,10)]+' '+cdday);if(showpostsummary==true){if(postcontent.length<numchars){document.write(postcontent)}else{postcontent=postcontent.substring(0,numchars);var quoteEnd=postcontent.lastIndexOf(" ");postcontent=postcontent.substring(0,quoteEnd);document.write(postcontent+'...'+readmorelink)}}document.write('</li>')}document.write('</ul>')}

// //]]>
// </script>
// <script type="text/javascript">
// summary_noimg = 150;
// img_thumb_height = 140;
// img_thumb_width = 180; 
// </script>
// <script type="text/javascript">
// //<![CDATA[

// function removeHtmlTag(strx,chop){ 
// 	if(strx.indexOf("<")!=-1)
// 	{
// 		var s = strx.split("<"); 
// 		for(var i=0;i<s.length;i++){ 
// 			if(s[i].indexOf(">")!=-1){ 
// 				s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length); 
// 			} 
// 		} 
// 		strx =  s.join(""); 
// 	}
// 	chop = (chop < strx.length-1) ? chop : strx.length-2; 
// 	while(strx.charAt(chop-1)!=' ' && strx.indexOf(' ',chop)!=-1) chop++; 
// 	strx = strx.substring(0,chop-1); 
// 	return strx+' [...]'; 
// }
// function createSummaryAndThumb(pID){
// 	var div = document.getElementById(pID);
// 	var summ = summary_noimg;
// 	var summary = '<div>' + removeHtmlTag(div.innerHTML,summ) + '</div>';
// 	div.innerHTML = summary;
// }
// function createSummaryAndThumb2(pID){
// 	var div = document.getElementById(pID);
// 	var imgtag = "";
// 	var img = div.getElementsByTagName("img");
// 	if(img.length>=1) {	
// 		imgtag = '<img class="postimg" src="'+img[0].src+'" width="'+img_thumb_width+'px" height="'+img_thumb_height+'px"/>';
// 	}
// 	var summary = imgtag;
// 	div.innerHTML = summary;
// }

// //]]>
// </script>
// <style type="text/css">
// .cover{float:right;width:380px;}
// </style>
// <script type="text/javascript">var a="&m=1",d="(^|&)m=",e="?",f="?m=1";function g(){var b=window.location.href,c=b.split(e);switch(c.length){case 1:return b+f;case 2:return 0<=c[1].search(d)?null:b+a;default:return null}}var h=navigator.userAgent;if(-1!=h.indexOf("Mobile")&&-1!=h.indexOf("WebKit")&&-1==h.indexOf("iPad")||-1!=h.indexOf("Opera Mini")||-1!=h.indexOf("IEMobile")){var k=g();k&&window.location.replace(k)};
// </script><script type="text/javascript">
// if (window.jstiming) window.jstiming.load.tick('headEnd');
// </script>
// <script src="Newspress_files/button.js" async="" charset="utf-8" type="text/javascript">
// </script>

// var mydate=new Date()
// var year=mydate.getYear()
// if (year < 1000)
// 	year+=1900
// var day=mydate.getDay()
// var month=mydate.getMonth()
// var daym=mydate.getDate()
// if (daym<10)
// 	daym="0"+daym
// var dayarray=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday")
// var montharray=new Array("January","February","March","April","May","June","July","August","September","October","November","December")
// document.write(dayarray[day]+", "+montharray[month]+" "+daym+", "+year)

// //]]>
// </script>Sunday, January 10, 2016


// <script type="text/javascript">
// 	if (window.jstiming) window.jstiming.load.tick('widgetJsBefore');
// </script><script type="text/javascript" src="Newspress_files/278981662-widgets.js"></script>
// <script gapi_processed="true" type="text/javascript" src="Newspress_files/plusone.js"></script>
// <script type="text/javascript">
// 	if (typeof(BLOG_attachCsiOnload) != 'undefined' && BLOG_attachCsiOnload != null) { window['blogger_templates_experiment_id'] = "templatesV1";window['blogger_blog_id'] = '4285083475741806618';BLOG_attachCsiOnload(''); }_WidgetManager._Init('//www.blogger.com/rearrange?blogID\x3d4285083475741806618','//newspress2-btemplates.blogspot.in/','4285083475741806618');
// 	_WidgetManager._SetDataContext([{'name': 'blog', 'data': {'blogId': '4285083475741806618', 'bloggerUrl': 'https://www.blogger.com', 'title': 'Newspress', 'pageType': 'index', 'url': 'http://newspress2-btemplates.blogspot.in/', 'canonicalUrl': 'http://newspress2-btemplates.blogspot.com/', 'homepageUrl': 'http://newspress2-btemplates.blogspot.in/', 'canonicalHomepageUrl': 'http://newspress2-btemplates.blogspot.com/', 'blogspotFaviconUrl': 'http://newspress2-btemplates.blogspot.in/favicon.ico', 'enabledCommentProfileImages': true, 'adultContent': false, 'analyticsAccountNumber': '', 'useUniversalAnalytics': false, 'pageName': '', 'pageTitle': 'Newspress', 'encoding': 'UTF-8', 'locale': 'en', 'localeUnderscoreDelimited': 'en', 'isPrivate': false, 'isMobile': false, 'isMobileRequest': false, 'mobileClass': '', 'isPrivateBlog': false, 'languageDirection': 'ltr', 'feedLinks': '\74link rel\75\42alternate\42 type\75\42application/atom+xml\42 title\75\42Newspress - Atom\42 href\75\42http://newspress2-btemplates.blogspot.com/feeds/posts/default\42 /\76\n\74link rel\75\42alternate\42 type\75\42application/rss+xml\42 title\75\42Newspress - RSS\42 href\75\42http://newspress2-btemplates.blogspot.com/feeds/posts/default?alt\75rss\42 /\76\n\74link rel\75\42service.post\42 type\75\42application/atom+xml\42 title\75\42Newspress - Atom\42 href\75\42https://www.blogger.com/feeds/4285083475741806618/posts/default\42 /\76\n', 'meTag': '\74link rel\75\42me\42 href\75\42https://www.blogger.com/profile/04752887254250043082\42 /\76\n', 'openIdOpTag': '\74link rel\75\42openid.server\42 href\75\42https://www.blogger.com/openid-server.g\42 /\76\n\74link rel\75\42openid.delegate\42 href\75\42http://newspress2-btemplates.blogspot.com/\42 /\76\n', 'latencyHeadScript': '\74script type\75\42text/javascript\42\76(function() { (function(){function c(a){this.t\75{};this.tick\75function(a,c,b){var d\75void 0!\75b?b:(new Date).getTime();this.t[a]\75[d,c];if(void 0\75\75b)try{window.console.timeStamp(\42CSI/\42+a)}catch(e){}};this.tick(\42start\42,null,a)}var a;window.performance\46\46(a\75window.performance.timing);var h\75a?new c(a.responseStart):new c;window.jstiming\75{Timer:c,load:h};if(a){var b\75a.navigationStart,e\75a.responseStart;0\74b\46\46e\76\75b\46\46(window.jstiming.srt\75e-b)}if(a){var d\75window.jstiming.load;0\74b\46\46e\76\75b\46\46(d.tick(\42_wtsrt\42,void 0,b),d.tick(\42wtsrt_\42,\n\42_wtsrt\42,e),d.tick(\42tbsd_\42,\42wtsrt_\42))}try{a\75null,window.chrome\46\46window.chrome.csi\46\46(a\75Math.floor(window.chrome.csi().pageT),d\46\0460\74b\46\46(d.tick(\42_tbnd\42,void 0,window.chrome.csi().startE),d.tick(\42tbnd_\42,\42_tbnd\42,b))),null\75\75a\46\46window.gtbExternal\46\46(a\75window.gtbExternal.pageT()),null\75\75a\46\46window.external\46\46(a\75window.external.pageT,d\46\0460\74b\46\46(d.tick(\42_tbnd\42,void 0,window.external.startE),d.tick(\42tbnd_\42,\42_tbnd\42,b))),a\46\46(window.jstiming.pt\75a)}catch(k){}})();window.tickAboveFold\75function(c){var a\0750;if(c.offsetParent){do a+\75c.offsetTop;while(c\75c.offsetParent)}c\75a;750\76\75c\46\46window.jstiming.load.tick(\42aft\42)};var f\75!1;function g(){f||(f\75!0,window.jstiming.load.tick(\42firstScrollTime\42))}window.addEventListener?window.addEventListener(\42scroll\42,g,!1):window.attachEvent(\42onscroll\42,g);\n })();\74/script\076', 'mobileHeadScript': '', 'view': '', 'dynamicViewsCommentsSrc': '//www.blogblog.com/dynamicviews/4224c15c4e7c9321/js/comments.js', 'dynamicViewsScriptSrc': '//www.blogblog.com/dynamicviews/433c1c2e1ace5832', 'plusOneApiSrc': 'https://apis.google.com/js/plusone.js', 'sf': 'n'}}, {'name': 'messages', 'data': {'archive': 'Archive', 'deleteBacklink': 'Delete Backlink', 'deleteComment': 'Delete Comment', 'emailAddress': 'Email Address', 'getEmailNotifications': 'Get email notifications', 'keepReading': 'Keep reading', 'labels': 'Labels', 'loadMorePosts': 'Load more posts', 'loading': 'Loading...', 'myBlogList': 'My Blog List', 'myFavoriteSites': 'My favorite sites', 'newer': 'Newer', 'newerPosts': 'Newer Posts', 'newest': 'Newest', 'noResultsFound': 'No results found', 'noTitle': 'No title', 'older': 'Older', 'olderPosts': 'Older Posts', 'oldest': 'Oldest', 'onlyTeamMembersCanComment': 'Note: Only a member of this blog may post a comment.', 'popularPosts': 'Popular Posts', 'popularPostsFromThisBlog': 'Popular posts from this blog', 'postAComment': 'Post a Comment', 'reportAbuse': 'Report Abuse', 'search': 'Search', 'share': 'Share', 'showAll': 'Show all', 'subscribe': 'Subscribe', 'subscribeToThisBlog': 'Subscribe to this blog', 'theresNothingHere': 'There\47s nothing here!'}}, {'name': 'skin', 'data': {'vars': {}, 'override': ''}}, {'name': 'view', 'data': {'classic': {'name': 'classic', 'url': '?view\75classic'}, 'flipcard': {'name': 'flipcard', 'url': '?view\75flipcard'}, 'magazine': {'name': 'magazine', 'url': '?view\75magazine'}, 'mosaic': {'name': 'mosaic', 'url': '?view\75mosaic'}, 'sidebar': {'name': 'sidebar', 'url': '?view\75sidebar'}, 'snapshot': {'name': 'snapshot', 'url': '?view\75snapshot'}, 'timeslide': {'name': 'timeslide', 'url': '?view\75timeslide'}}}]);
// 	_WidgetManager._RegisterWidget('_HeaderView', new _WidgetInfo('Header1', 'header', null, document.getElementById('Header1'), {}, 'displayModeFull'));
// 	_WidgetManager._RegisterWidget('_PageListView', new _WidgetInfo('PageList8', 'nbttopmenu', null, document.getElementById('PageList8'), {'title': 'Pages - Menu', 'links': [{'href': 'http://newspress2-btemplates.blogspot.in/', 'title': 'Home', 'isCurrentPage': true}, {'href': 'http://newspress2-btemplates.blogspot.in/p/about.html', 'title': 'About', 'isCurrentPage': false, 'id': '2657473706639615515'}, {'href': 'http://newspress2-btemplates.blogspot.in/p/contact.html', 'title': 'Contact', 'isCurrentPage': false, 'id': '7112893669244648336'}], 'mobile': false}, 'displayModeFull'));
// 	_WidgetManager._RegisterWidget('_BlogView', new _WidgetInfo('Blog1', 'mainsec', null, document.getElementById('Blog1'), {'cmtInteractionsEnabled': false, 'lightboxEnabled': true, 'lightboxModuleUrl': 'https://www.blogger.com/static/v1/jsbin/4156661259-lbx.js', 'lightboxCssUrl': 'https://www.blogger.com/static/v1/v-css/1185134592-lightbox_bundle.css'}, 'displayModeFull'));
// 	_WidgetManager._RegisterWidget('_PopularPostsView', new _WidgetInfo('PopularPosts1', 'sidebartop', null, document.getElementById('PopularPosts1'), {}, 'displayModeFull'));
// 	_WidgetManager._RegisterWidget('_HTMLView', new _WidgetInfo('HTML5', 'sidebartop', null, document.getElementById('HTML5'), {}, 'displayModeFull'));
// 	_WidgetManager._RegisterWidget('_HTMLView', new _WidgetInfo('HTML4', 'sidebartop', null, document.getElementById('HTML4'), {}, 'displayModeFull'));
// 	_WidgetManager._RegisterWidget('_LabelView', new _WidgetInfo('Label2', 'sidebartop', null, document.getElementById('Label2'), {}, 'displayModeFull'));
// 	_WidgetManager._RegisterWidget('_HTMLView', new _WidgetInfo('HTML1', 'footersec1', null, document.getElementById('HTML1'), {}, 'displayModeFull'));
// 	_WidgetManager._RegisterWidget('_HTMLView', new _WidgetInfo('HTML3', 'footersec2', null, document.getElementById('HTML3'), {}, 'displayModeFull'));
// 	_WidgetManager._RegisterWidget('_HTMLView', new _WidgetInfo('HTML2', 'footersec3', null, document.getElementById('HTML2'), {}, 'displayModeFull'));
// </script>

