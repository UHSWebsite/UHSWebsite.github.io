function include(scriptUrl) {
    document.write('<script src="' + scriptUrl + '"></script>');
}

function isIE() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
};

/* cookie.JS
 ========================================================*/
include('js/jquery.cookie.js');

/* Easing library
 ========================================================*/
include('js/jquery.easing.1.3.js');

/* Stick up menus
 ========================================================*/
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop')) {
        include('js/tmstickup.js');

        $(document).ready(function () {
            $('#stuck_container').TMStickUp({})
        });
    }
})(jQuery);

/* ToTop
 ========================================================*/
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop')) {
        include('js/jquery.ui.totop.js');

        $(document).ready(function () {
            $().UItoTop({
                easingType: 'easeOutQuart',
                containerClass: 'toTop fa fa-chevron-up'
            });
        });
    }
})(jQuery);

/* EqualHeights
 ========================================================*/
;
(function ($) {
    var o = $('[data-equal-group]');
    if (o.length > 0) {
        include('js/jquery.equalheights.js');
    }
})(jQuery);

/* SMOOTH SCROLLIG
 ========================================================*/
;
(function ($) {
    var o = $('html');
    if (o.hasClass('desktop')) {
        include('js/jquery.mousewheel.min.js');
        include('js/jquery.simplr.smoothscroll.min.js');

        $(document).ready(function () {
            $.srSmoothscroll({
                step: 150,
                speed: 800
            });
        });
    }
})(jQuery);

/* Copyright Year
 ========================================================*/
;
(function ($) {
    var currentYear = (new Date).getFullYear();
    $(document).ready(function () {
        $("#copyright-year").text((new Date).getFullYear());
    });
})(jQuery);


/* Superfish menus
 ========================================================*/
;
(function ($) {
    include('js/superfish.js');
})(jQuery);

/* Navbar
 ========================================================*/
;
(function ($) {
    include('js/jquery.rd-navbar.js');
})(jQuery);


/* Google Map
 ========================================================*/
;
(function ($) {
    var o = document.getElementById("google-map");
    if (o) {
        include('//maps.google.com/maps/api/js?sensor=false');
        include('js/jquery.rd-google-map.js');

        $(document).ready(function () {
            var o = $('#google-map');
            if (o.length > 0) {
                o.googleMap({
                    styles:[{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-100},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-100},{"lightness":40}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-10},{"lightness":30}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":-60},{"lightness":10}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":-60},{"lightness":60}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"},{"saturation":-100},{"lightness":60}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"},{"saturation":-100},{"lightness":60}]}]
                });
            }
        });
    }
})
(jQuery);

/* WOW
 ========================================================*/
;
(function ($) {
    var o = $('html');

    if ((navigator.userAgent.toLowerCase().indexOf('msie') == -1 ) || (isIE() && isIE() > 9)) {
        if (o.hasClass('desktop')) {
            include('js/wow.js');

            $(document).ready(function () {
                new WOW().init();
            });
        }
    }
})(jQuery);

/* Contact Form
 ========================================================*/
;
(function ($) {
    var o = $('#contact-form');
    if (o.length > 0) {
        include('js/modal.js');
        include('js/TMForm.js');

        if($('#contact-form .recaptcha').length > 0){
        	include('//www.google.com/recaptcha/api/js/recaptcha_ajax.js');
        }
    }
})(jQuery);

/* Orientation tablet fix
 ========================================================*/
$(function () {
    // IPad/IPhone
    var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
        ua = navigator.userAgent,

        gestureStart = function () {
            viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6, initial-scale=1.0";
        },

        scaleFix = function () {
            if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
                viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
                document.addEventListener("gesturestart", gestureStart, false);
            }
        };

    scaleFix();
    // Menu Android
    if (window.orientation != undefined) {
        var regM = /ipod|ipad|iphone/gi,
            result = ua.match(regM);
        if (!result) {
            $('.sf-menus li').each(function () {
                if ($(">ul", this)[0]) {
                    $(">a", this).toggle(
                        function () {
                            return false;
                        },
                        function () {
                            window.location.href = $(this).attr("href");
                        }
                    );
                }
            })
        }
    }
});
var ua = navigator.userAgent.toLocaleLowerCase(),
    regV = /ipod|ipad|iphone/gi,
    result = ua.match(regV),
    userScale = "";
if (!result) {
    userScale = ",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0' + userScale + '">');

/* Parallax
=============================================*/
;(function ($) {
    include('js/jquery.rd-parallax.js');
})(jQuery);

/* Subscribe Form
 ========================================================*/
;
(function ($) {
    var o = $('#subscribe-form');
    if (o.length > 0) {
        include('js/sForm.js');
    }
})(jQuery);


/* Timetable dynamic dots
 ========================================================*/
;
(function ($) {
    var clone = [];
    $('#timetable').find('tr').each(function(){
        clone.push($(this).find('td').eq(0).text());
    });
    var isDotted = false;
    $(window).resize(function(){
        var o = $('#timetable');
        if (o.length > 0) {
            if( $(window).width() > 1199 && !isDotted){
                var maxLine = 24;
                o.find('tr').each(function(){
                    var text = '';
                    if(text.length < maxLine){
                        for(var i = text.length; i < maxLine; i+=2){
                            text += '. ';
                        }
                        $(this).find('td').eq(0).append($("<span>").css({'position':'absolute','overflow':'hidden'}).text(text));
                    }
                });
                isDotted = true;
            }
            else
            if($(window).width() < 1199){
                isDotted = false;
                var j = 0;
                o.find('tr').each(function(){
                    $(this).find('td').eq(0).html(clone[j]);
                    j++;
                });
            }
        }
    });
})(jQuery);

// SpryAccordion.js - version 0.17 - Spry Pre-Release 1.6.1
//
// Copyright (c) 2006. Adobe Systems Incorporated.
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//   * Redistributions of source code must retain the above copyright notice,
//     this list of conditions and the following disclaimer.
//   * Redistributions in binary form must reproduce the above copyright notice,
//     this list of conditions and the following disclaimer in the documentation
//     and/or other materials provided with the distribution.
//   * Neither the name of Adobe Systems Incorporated nor the names of its
//     contributors may be used to endorse or promote products derived from this
//     software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.
;
(function() { // BeginSpryComponent

if (typeof Spry == "undefined") window.Spry = {}; if (!Spry.Widget) Spry.Widget = {};

Spry.Widget.Accordion = function(element, opts)
{
	this.element = this.getElement(element);
	this.defaultPanel = 0;
	this.hoverClass = "AccordionPanelTabHover";
	this.openClass = "AccordionPanelOpen";
	this.closedClass = "AccordionPanelClosed";
	this.focusedClass = "AccordionFocused";
	this.enableAnimation = true;
	this.enableKeyboardNavigation = true;
	this.currentPanel = null;
	this.animator = null;
	this.hasFocus = null;

	this.previousPanelKeyCode = Spry.Widget.Accordion.KEY_UP;
	this.nextPanelKeyCode = Spry.Widget.Accordion.KEY_DOWN;

	this.useFixedPanelHeights = true;
	this.fixedPanelHeight = 0;

	Spry.Widget.Accordion.setOptions(this, opts, true);

	if (this.element)
		this.attachBehaviors();
};

Spry.Widget.Accordion.prototype.getElement = function(ele)
{
	if (ele && typeof ele == "string")
		return document.getElementById(ele);
	return ele;
};

Spry.Widget.Accordion.prototype.addClassName = function(ele, className)
{
	if (!ele || !className || (ele.className && ele.className.search(new RegExp("\\b" + className + "\\b")) != -1))
		return;
	ele.className += (ele.className ? " " : "") + className;
};

Spry.Widget.Accordion.prototype.removeClassName = function(ele, className)
{
	if (!ele || !className || (ele.className && ele.className.search(new RegExp("\\b" + className + "\\b")) == -1))
		return;
	ele.className = ele.className.replace(new RegExp("\\s*\\b" + className + "\\b", "g"), "");
};

Spry.Widget.Accordion.setOptions = function(obj, optionsObj, ignoreUndefinedProps)
{
	if (!optionsObj)
		return;
	for (var optionName in optionsObj)
	{
		if (ignoreUndefinedProps && optionsObj[optionName] == undefined)
			continue;
		obj[optionName] = optionsObj[optionName];
	}
};

Spry.Widget.Accordion.prototype.onPanelTabMouseOver = function(e, panel)
{
	if (panel)
		this.addClassName(this.getPanelTab(panel), this.hoverClass);
	return false;
};

Spry.Widget.Accordion.prototype.onPanelTabMouseOut = function(e, panel)
{
	if (panel)
		this.removeClassName(this.getPanelTab(panel), this.hoverClass);
	return false;
};

Spry.Widget.Accordion.prototype.openPanel = function(elementOrIndex)
{
	var panelA = this.currentPanel;
	var panelB;

	if (typeof elementOrIndex == "number")
		panelB = this.getPanels()[elementOrIndex];
	else
		panelB = this.getElement(elementOrIndex);

	if (!panelB || panelA == panelB)
		return null;

	var contentA = panelA ? this.getPanelContent(panelA) : null;
	var contentB = this.getPanelContent(panelB);

	if (!contentB)
		return null;

	if (this.useFixedPanelHeights && !this.fixedPanelHeight)
		this.fixedPanelHeight = (contentA.offsetHeight) ? contentA.offsetHeight : contentA.scrollHeight;

	if (this.enableAnimation)
	{
		if (this.animator)
			this.animator.stop();
		this.animator = new Spry.Widget.Accordion.PanelAnimator(this, panelB, { duration: this.duration, fps: this.fps, transition: this.transition });
		this.animator.start();
	}
	else
	{
		if(contentA)
		{
			contentA.style.display = "none";
			contentA.style.height = "0px";
		}
		contentB.style.display = "block";
		contentB.style.height = this.useFixedPanelHeights ? this.fixedPanelHeight + "px" : "auto";
	}

	if(panelA)
	{
		this.removeClassName(panelA, this.openClass);
		this.addClassName(panelA, this.closedClass);
	}

	this.removeClassName(panelB, this.closedClass);
	this.addClassName(panelB, this.openClass);

	this.currentPanel = panelB;

	return panelB;
};

Spry.Widget.Accordion.prototype.closePanel = function()
{
	// The accordion can only ever have one panel open at any
	// give time, so this method only closes the current panel.
	// If the accordion is in fixed panel heights mode, this
	// method does nothing.

	if (!this.useFixedPanelHeights && this.currentPanel)
	{
		var panel = this.currentPanel;
		var content = this.getPanelContent(panel);
		if (content)
		{
			if (this.enableAnimation)
			{
				if (this.animator)
					this.animator.stop();
				this.animator = new Spry.Widget.Accordion.PanelAnimator(this, null, { duration: this.duration, fps: this.fps, transition: this.transition });
				this.animator.start();
			}
			else
			{
				content.style.display = "none";
				content.style.height = "0px";
			}
		}
		this.removeClassName(panel, this.openClass);
		this.addClassName(panel, this.closedClass);
		this.currentPanel = null;
	}
};

Spry.Widget.Accordion.prototype.openNextPanel = function()
{
	return this.openPanel(this.getCurrentPanelIndex() + 1);
};

Spry.Widget.Accordion.prototype.openPreviousPanel = function()
{
	return this.openPanel(this.getCurrentPanelIndex() - 1);
};

Spry.Widget.Accordion.prototype.openFirstPanel = function()
{
	return this.openPanel(0);
};

Spry.Widget.Accordion.prototype.openLastPanel = function()
{
	var panels = this.getPanels();
	return this.openPanel(panels[panels.length - 1]);
};

Spry.Widget.Accordion.prototype.onPanelTabClick = function(e, panel)
{
	if (panel != this.currentPanel)
		this.openPanel(panel);
	else
		this.closePanel();

	if (this.enableKeyboardNavigation)
		this.focus();

	if (e.preventDefault) e.preventDefault();
	else e.returnValue = false;
	if (e.stopPropagation) e.stopPropagation();
	else e.cancelBubble = true;

	return false;
};

Spry.Widget.Accordion.prototype.onFocus = function(e)
{
	this.hasFocus = true;
	this.addClassName(this.element, this.focusedClass);
	return false;
};

Spry.Widget.Accordion.prototype.onBlur = function(e)
{
	this.hasFocus = false;
	this.removeClassName(this.element, this.focusedClass);
	return false;
};

Spry.Widget.Accordion.KEY_UP = 38;
Spry.Widget.Accordion.KEY_DOWN = 40;

Spry.Widget.Accordion.prototype.onKeyDown = function(e)
{
	var key = e.keyCode;
	if (!this.hasFocus || (key != this.previousPanelKeyCode && key != this.nextPanelKeyCode))
		return true;

	var panels = this.getPanels();
	if (!panels || panels.length < 1)
		return false;
	var currentPanel = this.currentPanel ? this.currentPanel : panels[0];
	var nextPanel = (key == this.nextPanelKeyCode) ? currentPanel.nextSibling : currentPanel.previousSibling;

	while (nextPanel)
	{
		if (nextPanel.nodeType == 1 /* Node.ELEMENT_NODE */)
			break;
		nextPanel = (key == this.nextPanelKeyCode) ? nextPanel.nextSibling : nextPanel.previousSibling;
	}

	if (nextPanel && currentPanel != nextPanel)
		this.openPanel(nextPanel);

	if (e.preventDefault) e.preventDefault();
	else e.returnValue = false;
	if (e.stopPropagation) e.stopPropagation();
	else e.cancelBubble = true;

	return false;
};

Spry.Widget.Accordion.prototype.attachPanelHandlers = function(panel)
{
	if (!panel)
		return;

	var tab = this.getPanelTab(panel);

	if (tab)
	{
		var self = this;
		Spry.Widget.Accordion.addEventListener(tab, "click", function(e) { return self.onPanelTabClick(e, panel); }, false);
		Spry.Widget.Accordion.addEventListener(tab, "mouseover", function(e) { return self.onPanelTabMouseOver(e, panel); }, false);
		Spry.Widget.Accordion.addEventListener(tab, "mouseout", function(e) { return self.onPanelTabMouseOut(e, panel); }, false);
	}
};

Spry.Widget.Accordion.addEventListener = function(element, eventType, handler, capture)
{
	try
	{
		if (element.addEventListener)
			element.addEventListener(eventType, handler, capture);
		else if (element.attachEvent)
			element.attachEvent("on" + eventType, handler);
	}
	catch (e) {}
};

Spry.Widget.Accordion.prototype.initPanel = function(panel, isDefault)
{
	var content = this.getPanelContent(panel);
	if (isDefault)
	{
		this.currentPanel = panel;
		this.removeClassName(panel, this.closedClass);
		this.addClassName(panel, this.openClass);

		// Attempt to set up the height of the default panel. We don't want to
		// do any dynamic panel height calculations here because our accordion
		// or one of its parent containers may be display:none.

		if (content)
		{
			if (this.useFixedPanelHeights)
			{
				// We are in fixed panel height mode and the user passed in
				// a panel height for us to use.

				if (this.fixedPanelHeight)
					content.style.height = this.fixedPanelHeight + "px";
			}
			else
			{
				// We are in variable panel height mode, but since we can't
				// calculate the panel height here, we just set the height to
				// auto so that it expands to show all of its content.

				content.style.height = "auto";
			}
		}
	}
	else
	{
		this.removeClassName(panel, this.openClass);
		this.addClassName(panel, this.closedClass);

		if (content)
		{
			content.style.height = "0px";
			content.style.display = "none";
		}
	}

	this.attachPanelHandlers(panel);
};

Spry.Widget.Accordion.prototype.attachBehaviors = function()
{
	var panels = this.getPanels();
	for (var i = 0; i < panels.length; i++)
		this.initPanel(panels[i], i == this.defaultPanel);

	// Advanced keyboard navigation requires the tabindex attribute
	// on the top-level element.

	this.enableKeyboardNavigation = (this.enableKeyboardNavigation && this.element.attributes.getNamedItem("tabindex"));
	if (this.enableKeyboardNavigation)
	{
		var self = this;
		Spry.Widget.Accordion.addEventListener(this.element, "focus", function(e) { return self.onFocus(e); }, false);
		Spry.Widget.Accordion.addEventListener(this.element, "blur", function(e) { return self.onBlur(e); }, false);
		Spry.Widget.Accordion.addEventListener(this.element, "keydown", function(e) { return self.onKeyDown(e); }, false);
	}
};

Spry.Widget.Accordion.prototype.getPanels = function()
{
	return this.getElementChildren(this.element);
};

Spry.Widget.Accordion.prototype.getCurrentPanel = function()
{
	return this.currentPanel;
};

Spry.Widget.Accordion.prototype.getPanelIndex = function(panel)
{
	var panels = this.getPanels();
	for( var i = 0 ; i < panels.length; i++ )
	{
		if( panel == panels[i] )
			return i;
	}
	return -1;
};

Spry.Widget.Accordion.prototype.getCurrentPanelIndex = function()
{
	return this.getPanelIndex(this.currentPanel);
};

Spry.Widget.Accordion.prototype.getPanelTab = function(panel)
{
	if (!panel)
		return null;
	return this.getElementChildren(panel)[0];
};

Spry.Widget.Accordion.prototype.getPanelContent = function(panel)
{
	if (!panel)
		return null;
	return this.getElementChildren(panel)[1];
};

Spry.Widget.Accordion.prototype.getElementChildren = function(element)
{
	var children = [];
	var child = element.firstChild;
	while (child)
	{
		if (child.nodeType == 1 /* Node.ELEMENT_NODE */)
			children.push(child);
		child = child.nextSibling;
	}
	return children;
};

Spry.Widget.Accordion.prototype.focus = function()
{
	if (this.element && this.element.focus)
		this.element.focus();
};

Spry.Widget.Accordion.prototype.blur = function()
{
	if (this.element && this.element.blur)
		this.element.blur();
};

/////////////////////////////////////////////////////

Spry.Widget.Accordion.PanelAnimator = function(accordion, panel, opts)
{
	this.timer = null;
	this.interval = 0;

	this.fps = 60;
	this.duration = 500;
	this.startTime = 0;

	this.transition = Spry.Widget.Accordion.PanelAnimator.defaultTransition;

	this.onComplete = null;

	this.panel = panel;
	this.panelToOpen = accordion.getElement(panel);
	this.panelData = [];
	this.useFixedPanelHeights = accordion.useFixedPanelHeights;

	Spry.Widget.Accordion.setOptions(this, opts, true);

	this.interval = Math.floor(1000 / this.fps);

	// Set up the array of panels we want to animate.

	var panels = accordion.getPanels();
	for (var i = 0; i < panels.length; i++)
	{
		var p = panels[i];
		var c = accordion.getPanelContent(p);
		if (c)
		{
			var h = c.offsetHeight;
			if (h == undefined)
				h = 0;

			if (p == panel && h == 0)
				c.style.display = "block";

			if (p == panel || h > 0)
			{
				var obj = new Object;
				obj.panel = p;
				obj.content = c;
				obj.fromHeight = h;
				obj.toHeight = (p == panel) ? (accordion.useFixedPanelHeights ? accordion.fixedPanelHeight : c.scrollHeight) : 0;
				obj.distance = obj.toHeight - obj.fromHeight;
				obj.overflow = c.style.overflow;
				this.panelData.push(obj);

				c.style.overflow = "hidden";
				c.style.height = h + "px";
			}
		}
	}
};

Spry.Widget.Accordion.PanelAnimator.defaultTransition = function(time, begin, finish, duration) { time /= duration; return begin + ((2 - time) * time * finish); };

Spry.Widget.Accordion.PanelAnimator.prototype.start = function()
{
	var self = this;
	this.startTime = (new Date).getTime();
	this.timer = setTimeout(function() { self.stepAnimation(); }, this.interval);
};

Spry.Widget.Accordion.PanelAnimator.prototype.stop = function()
{
	if (this.timer)
	{
		clearTimeout(this.timer);

		// If we're killing the timer, restore the overflow
		// properties on the panels we were animating!

		for (i = 0; i < this.panelData.length; i++)
		{
			obj = this.panelData[i];
			obj.content.style.overflow = obj.overflow;
		}
	}

	this.timer = null;
};

Spry.Widget.Accordion.PanelAnimator.prototype.stepAnimation = function()
{
	var curTime = (new Date).getTime();
	var elapsedTime = curTime - this.startTime;

	var i, obj;

	if (elapsedTime >= this.duration)
	{
		for (i = 0; i < this.panelData.length; i++)
		{
			obj = this.panelData[i];
			if (obj.panel != this.panel)
			{
				obj.content.style.display = "none";
				obj.content.style.height = "0px";
			}
			obj.content.style.overflow = obj.overflow;
			obj.content.style.height = (this.useFixedPanelHeights || obj.toHeight == 0) ? obj.toHeight + "px" : "auto";
		}
		if (this.onComplete)
			this.onComplete();
		return;
	}

	for (i = 0; i < this.panelData.length; i++)
	{
		obj = this.panelData[i];
		var ht = this.transition(elapsedTime, obj.fromHeight, obj.distance, this.duration);
		obj.content.style.height = ((ht < 0) ? 0 : ht) + "px";
	}

	var self = this;
	this.timer = setTimeout(function() { self.stepAnimation(); }, this.interval);
};

})(); // EndSpryComponent
