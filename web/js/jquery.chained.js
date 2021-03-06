/*
 * Chained - jQuery non AJAX(J) chained selects plugin
 *
 * Copyright (c) 2010-2013 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  0.9.3
 *
 */
(function(a){"use strict",a.fn.chained=function(b,c){return this.each(function(){var c=this,d=a(c).clone();a(b).each(function(){a(this).bind("change",function(){a(c).html(d.html());var e="";a(b).each(function(){e+="\\"+a(":selected",this).val()}),e=e.substr(1);var f=a(b).first(),g=a(":selected",f).val();a("option",c).each(function(){!a(this).hasClass(e)&&!a(this).hasClass(g)&&a(this).val()!==""&&a(this).remove()}),1===a("option",c).size()&&a(c).val()===""?a(c).attr("disabled","disabled"):a(c).removeAttr("disabled"),a(c).trigger("change")}),a("option:selected",this).length||a("option",this).first().attr("selected","selected"),a(this).trigger("change")})})},a.fn.chainedTo=a.fn.chained})(jQuery)
